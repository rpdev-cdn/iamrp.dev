#!/usr/bin/env python3
"""
build_resume_pdf.py
Generates a synchronized, professional PDF version of the Master Resume from iamrp.dev.
1. Serves the static Quartz site via a lightweight HTTP server.
2. Renders the Master Resume using headless Chromium with custom print styles.
3. Post-processes the PDF with pypdf to inject metadata and compress streams.
4. Distributes the PDF to the CDN repository directory.
"""

import os
import sys
import subprocess
import threading
import http.server
import socketserver
import pypdf

PORT = 8767
PUBLIC_DIR = os.path.abspath("public")
CDN_PDF_DIR = os.path.abspath("../cdn.iamrp.dev/pdf")
OUTPUT_PDF = os.path.join(CDN_PDF_DIR, "Richard_Dissell_Resume.pdf")
LOCAL_OUTPUT = os.path.join(PUBLIC_DIR, "Richard_Dissell_Resume.pdf")


class CleanUrlHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=PUBLIC_DIR, **kwargs)

    def translate_path(self, path):
        translated = super().translate_path(path)
        if not os.path.exists(translated):
            if os.path.exists(translated + ".html"):
                return translated + ".html"
            dir_name = os.path.dirname(translated)
            base_name = os.path.basename(translated).lower()
            if os.path.exists(dir_name):
                for f in os.listdir(dir_name):
                    if f.lower() == base_name or f.lower() == base_name + ".html":
                        return os.path.join(dir_name, f)
        return translated

    def log_message(self, format, *args):
        pass


def main():
    if not os.path.exists(PUBLIC_DIR):
        print(f"Error: {PUBLIC_DIR} does not exist. Run npx quartz build first.")
        sys.exit(1)

    print(f"[*] Starting local static server on port {PORT}...")
    httpd = socketserver.TCPServer(("127.0.0.1", PORT), CleanUrlHandler)
    server_thread = threading.Thread(target=httpd.serve_forever, daemon=True)
    server_thread.start()

    temp_raw_pdf = os.path.join(PUBLIC_DIR, "raw_resume.pdf")

    node_render_script = f"""
    const puppeteer = require("puppeteer");
    (async () => {{
      const browser = await puppeteer.launch({{
        executablePath: "/usr/bin/chromium",
        headless: "new",
        args: ["--no-sandbox", "--disable-setuid-sandbox", "--disable-gpu"]
      }});
      const page = await browser.newPage();
      await page.setViewport({{ width: 1200, height: 1600 }});
      await page.goto("http://127.0.0.1:{PORT}/resume/master_resume", {{ waitUntil: "networkidle0" }});

      await page.evaluate(() => {{
        const hideSelectors = [".sidebar", ".page-header", "footer", ".toc", ".breadcrumb-container", ".footer-git-info", ".backlinks", ".graph"];
        hideSelectors.forEach(selector => {{
          document.querySelectorAll(selector).forEach(el => el.style.display = "none");
        }});
        const center = document.querySelector(".center");
        if (center) {{
          center.style.maxWidth = "100%";
          center.style.width = "100%";
          center.style.margin = "0";
          center.style.padding = "20px";
        }}
      }});

      await page.pdf({{
        path: "{temp_raw_pdf}",
        format: "Letter",
        printBackground: true,
        margin: {{ top: "0.4in", right: "0.4in", bottom: "0.4in", left: "0.4in" }}
      }});

      await browser.close();
    }})();
    """

    print("[*] Rendering Master Resume via Chromium...")
    proc = subprocess.run(["node", "-e", node_render_script], capture_output=True, text=True)
    httpd.shutdown()

    if proc.returncode != 0:
        print("[!] Render failed:", proc.stderr)
        sys.exit(1)

    print("[*] Post-processing PDF with pypdf (metadata + stream compression)...")
    reader = pypdf.PdfReader(temp_raw_pdf)
    writer = pypdf.PdfWriter()

    for page in reader.pages:
        writer.add_page(page)

    for page in writer.pages:
        page.compress_content_streams()

    writer.add_metadata({
        "/Title": "Richard P. Dissell - Master Resume & Curriculum Vitae",
        "/Author": "Richard P. Dissell",
        "/Subject": "Security Analysis, Systems Architecture & Infrastructure Engineering",
        "/Keywords": "Security, Zero Trust, Infrastructure, Linux, Architecture, CI/CD, DevOps",
        "/Creator": "iamrp.dev Build Engine",
        "/Producer": f"iamrp.dev (pypdf v{pypdf.__version__})"
    })

    if os.path.exists(CDN_PDF_DIR):
        with open(OUTPUT_PDF, "wb") as f:
            writer.write(f)
        print(f"[✓] Saved CDN resume PDF to: {OUTPUT_PDF} ({os.path.getsize(OUTPUT_PDF) // 1024} KB)")

    with open(LOCAL_OUTPUT, "wb") as f:
        writer.write(f)
    print(f"[✓] Saved local resume PDF to: {LOCAL_OUTPUT} ({os.path.getsize(LOCAL_OUTPUT) // 1024} KB)")

    if os.path.exists(temp_raw_pdf):
        os.remove(temp_raw_pdf)

    print("[✓] PDF Generation and optimization complete!")

if __name__ == "__main__":
    main()
