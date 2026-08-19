const API_URL = 'https://docingest.iamrp.dev/api';

document.addEventListener("nav", () => {
  const form = document.getElementById("docingest-form") as HTMLFormElement;
  if (!form) return;

  const urlInput = document.getElementById("url-input") as HTMLInputElement;
  const includeInput = document.getElementById("include-pattern") as HTMLInputElement;
  const excludeInput = document.getElementById("exclude-pattern") as HTMLInputElement;
  const maxPagesInput = document.getElementById("max-pages") as HTMLInputElement;
  const submitBtn = document.getElementById("crawl-button") as HTMLButtonElement;
  
  const statusContainer = document.getElementById("status-container") as HTMLDivElement;
  const statusText = document.getElementById("status-text") as HTMLHeadingElement;
  const progressBar = document.getElementById("progress-bar") as HTMLDivElement;
  const metricsText = document.getElementById("metrics-text") as HTMLParagraphElement;
  const debugLog = document.getElementById("debug-log") as HTMLDivElement;

  function log(msg: string) {
    if (!debugLog) return;
    const line = document.createElement("div");
    line.textContent = msg;
    debugLog.appendChild(line);
    debugLog.scrollTop = debugLog.scrollHeight;
  }

  function getDomain(urlString: string) {
    try {
      const url = new URL(urlString);
      return url.hostname;
    } catch {
      return 'unknown-domain';
    }
  }

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    
    const url = urlInput.value.trim();
    if (!url) return;

    try {
      new URL(url);
    } catch {
      alert("Please enter a valid URL.");
      return;
    }

    submitBtn.disabled = true;
    statusContainer.classList.remove("hidden");
    debugLog.innerHTML = "";
    progressBar.style.width = "0%";
    statusText.textContent = "Starting...";
    
    const includePattern = includeInput.value.trim();
    const excludePattern = excludeInput.value.trim();
    const maxPages = parseInt(maxPagesInput.value) || 250;
    const domain = getDomain(url);

    log(`Starting documentation download for: ${domain}`);

    try {
      // API call to check domain
      const encodedUrl = encodeURIComponent(url);
      try {
        const checkRes = await fetch(`${API_URL}/docs/check-domain/${encodedUrl}`);
        if (checkRes.ok) {
          const checkData = await checkRes.json();
          if (checkData.found) {
            log(`Existing documentation found. (Last updated: ${new Date(checkData.lastUpdated).toLocaleDateString()})`);
          }
        }
      } catch (err) {
        // Ignore check error
      }

      log(`Sending crawl request...`);
      const requestBody = {
        url,
        limit: maxPages,
        maxDepth: 5,
        allowBackwardLinks: true,
        ignoreQueryParameters: true,
        ...(includePattern && { includePaths: [includePattern] }),
        ...(excludePattern && { excludePaths: [excludePattern] }),
        scrapeOptions: {
          formats: ['markdown', 'html'],
          onlyMainContent: true,
          removeBase64Images: true,
          blockAds: true,
          timeout: 60000,
          waitFor: 2000,
          maxAge: 3600000
        }
      };

      const response = await fetch(`${API_URL}/crawl/start`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(requestBody)
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Failed to start download: ${response.status} - ${errorText}`);
      }

      const data = await response.json();
      if (!data.success || !data.id) {
        throw new Error(data.error || 'No crawl ID received');
      }

      log(`✅ Crawl started. ID: ${data.id}`);
      pollCrawlStatus(data.id, domain, url);

    } catch (err: any) {
      log(`❌ Error: ${err.message}`);
      statusText.textContent = "Error";
      submitBtn.disabled = false;
    }
  });

  async function pollCrawlStatus(id: string, domain: string, url: string, attempts = 0) {
    if (attempts > 300) {
      log(`⏰ TIMEOUT: Crawl exceeded maximum polling time.`);
      statusText.textContent = "Timed out";
      submitBtn.disabled = false;
      return;
    }

    try {
      const res = await fetch(`${API_URL}/crawl/status/${id}`);
      if (!res.ok) {
        if (res.status === 429) {
          log(`⚠️ Rate limited. Waiting 15s...`);
          setTimeout(() => pollCrawlStatus(id, domain, url, attempts), 15000);
          return;
        }
        if (attempts < 3) {
          setTimeout(() => pollCrawlStatus(id, domain, url, attempts + 1), 5000);
          return;
        }
        throw new Error(`HTTP ${res.status}`);
      }

      const data = await res.json();
      
      const percent = (data.completed && data.total) ? Math.round((data.completed / data.total) * 100) : 0;
      progressBar.style.width = `${percent}%`;
      metricsText.textContent = `Progress: ${data.completed || 0} / ${data.total || 0} pages`;
      
      if (data.status === 'scraping') {
        statusText.textContent = "Scraping...";
      }

      if (data.status === 'completed') {
        statusText.textContent = "Completed! Saving...";
        
        const timestamp = new Date().toISOString();
        const pages = (data.data || [])
          .filter((item: any) => Boolean(item.markdown && item.metadata?.sourceURL))
          .map((item: any) => ({
            content: item.markdown || '',
            type: item.metadata?.title || 'Unknown',
            lastUpdated: timestamp,
            url: item.metadata?.sourceURL,
            domain,
          }));

        const requestData = {
          domain,
          timestamp,
          pages,
          crawlId: id,
          crawlOutcomes: data.outcomes || [],
          providerTotals: data.providerTotals,
        };

        log(`💾 Saving ${pages.length} pages...`);
        
        const saveRes = await fetch(`${API_URL}/docs/save`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(requestData),
        });

        if (!saveRes.ok) throw new Error("Failed to save to corpus");
        
        const saveData = await saveRes.json();
        log(`✅ Successfully saved! Saved path: ${saveData.filePath}`);
        statusText.textContent = "Done!";
        submitBtn.disabled = false;
        
      } else if (data.status === 'failed') {
        statusText.textContent = "Failed";
        log(`❌ Crawl failed: ${data.error}`);
        submitBtn.disabled = false;
      } else {
        setTimeout(() => pollCrawlStatus(id, domain, url, attempts + 1), 5000);
      }
    } catch (err: any) {
      log(`❌ Poll error: ${err.message}`);
      if (attempts < 3) {
        setTimeout(() => pollCrawlStatus(id, domain, url, attempts + 1), 5000);
      } else {
        statusText.textContent = "Error";
        submitBtn.disabled = false;
      }
    }
  }
});
