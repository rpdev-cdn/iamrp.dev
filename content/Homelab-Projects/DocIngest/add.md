---
title: DocIngest
aliases:
- /homelab-projects/docingest/add
- /software--and--github/tools/docingest/add
tags:
- docingest
- crawler
- tooling
---

# DocIngest

Ingest a docs site into your searchable, MCP-accessible corpus

<div style="margin: 1rem 0 1.5rem 0;">
  <a href="https://iamrp.dev/homelab-projects/docingest/view" class="di-btn di-btn-secondary" style="display: inline-flex; padding: 0.6rem 1.25rem; font-weight: 700; text-decoration: none;">
    Browse Indexed Docs
  </a>
</div>

<div class="docingest-app-container">
  <div id="docingest-add-root">
    <div class="docingest-fallback-card" style="padding: 1.5rem; background: var(--lightgray); border-radius: 8px; border: 1px solid var(--gray); margin-bottom: 1.5rem;">
      <h3 style="margin-top:0;">⚡ Live Documentation Ingestion Pipeline</h3>
      <p>Submit documentation URLs, API references, or GitHub repositories for automated scraping, markdown distillation, and semantic embedding generation.</p>
      <p><em>Loading live ingestion console from <code>cdn.iamrp.dev</code>...</em></p>
      <noscript>
        <p><strong>Note:</strong> JavaScript is required to trigger real-time crawl jobs directly from the browser. Ingestion tasks can also be initiated programmatically via the <a href="https://docingest.iamrp.dev/api/docs/ingest" target="_blank">DocIngest REST API</a>.</p>
      </noscript>
    </div>
  </div>
</div>

<script>
  (function loadDocIngestAdd() {
    const root = document.getElementById('docingest-add-root');
    if (root && !root.dataset.loaded) {
      const s = document.createElement('script');
      s.id = 'docingest-add-script';
      s.src = 'https://cdn.iamrp.dev/js/AddPageApp.js?t=' + Date.now();
      document.body.appendChild(s);
      root.dataset.loaded = 'true';
    }
  })();
</script>

---

## 🔗 Related Architecture & Knowledge Graph

* **DocIngest Application:** Explore the companion interface on [[Tools/DocIngest/view|DocIngest View]].
* **LLM & Context Architecture:** Integrated with [[LLM_Control_Plane|LLM Control Plane]] and [[MCP_Gateway_Tool_Router|MCP Gateway Tool Router]].
* **Zero-Trust Ingress:** Read about local agent security in [[Local_LLM_Architecture|Zero-Trust Local LLM Ingress]].
* **Master Resume & CV:** Review architecture credentials on [[Resume/Master_Resume|Curriculum Vitae & Master Resume]].
* **Digital Garden Hub:** Return to [[content/Tools/DocIngest/index|Digital Garden Index]].
