#!/usr/bin/env python3
"""
build_resume_pdf.py
Pure Python PDF generation pipeline for iamrp.dev resume.
- Converts Master_Resume.md directly to print-optimized HTML (markdown).
- Restores direct recruiter callback phone number (216-410-3687) exclusively inside the PDF contact header.
- Renders high-fidelity vector PDF with professional typography and page numbers (weasyprint).
- Post-processes and compresses content streams + injects metadata (pypdf).
- Produces a balanced, executive 3-page resume document.
"""

import os
import sys
import re
import time
import markdown
import weasyprint
import pypdf


def main():
    start_time = time.time()

    script_dir = os.path.dirname(os.path.abspath(__file__))
    project_root = (
        os.path.abspath(os.path.join(script_dir, ".."))
        if os.path.basename(script_dir) == "scripts"
        else os.getcwd()
    )

    md_path = os.path.join(project_root, "content/Resume/Master_Resume.md")
    if not os.path.exists(md_path):
        print(f"[!] Error: Could not find Master_Resume.md at {md_path}")
        sys.exit(1)

    print(f"[*] Reading source resume from: {md_path}")
    with open(md_path, "r", encoding="utf-8") as f:
        raw_md = f.read()

    # 1. Strip YAML frontmatter
    if raw_md.startswith("---"):
        parts = raw_md.split("---", 2)
        if len(parts) >= 3:
            raw_md = parts[2]

    # 2. Restore direct phone number in PDF header for recruiter callbacks
    raw_md = raw_md.replace(
        "Available on Official PDF Resume or upon request",
        "216-410-3687 (Text Preferred)",
    )

    # 3. Strip Web-Only interactive elements (buttons, sync alerts)
    raw_md = re.sub(r"<div[\s\S]*?</div>", "", raw_md)
    raw_md = re.sub(
        r">\s*\[!note\]\s*Artifact Synchronization[\s\S]*?(?=\n\n|\n#|$)",
        "",
        raw_md,
    )

    # 4. Format Obsidian callouts as clean blockquotes
    raw_md = re.sub(r">\s*\[!(\w+)\]\s*(.*)", r"> **\2**", raw_md)

    # 5. Clean wikilinks [[Target|Label]] -> Label, [[Target]] -> Target
    raw_md = re.sub(r"\[\[(?:[^|\]]*\|)?([^\]]+)\]\]", r"\1", raw_md)

    # 6. Convert Markdown to HTML
    html_body = markdown.markdown(raw_md, extensions=["tables", "fenced_code"])

    # 7. Executive Print Stylesheet (Letter, calibrated 3-page layout)
    css = """
    @page {
        size: letter;
        margin: 0.30in 0.38in 0.32in 0.38in;
        @bottom-right {
            content: 'Page ' counter(page) ' of ' counter(pages);
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            font-size: 7pt;
            color: #64748b;
        }
        @bottom-left {
            content: 'Richard P. Dissell — Master Resume & CV (https://iamrp.dev)';
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            font-size: 7pt;
            color: #64748b;
        }
    }
    body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
        font-size: 7.75pt;
        line-height: 1.24;
        color: #1e293b;
    }
    h1 {
        font-size: 13.5pt;
        font-weight: 800;
        margin: 0 0 1px 0;
        color: #0f172a;
        border-bottom: 1.5px solid #0284c7;
        padding-bottom: 1px;
        letter-spacing: -0.02em;
    }
    h2 {
        font-size: 9.25pt;
        font-weight: 700;
        margin: 5px 0 2px 0;
        color: #0369a1;
        border-bottom: 1px solid #e2e8f0;
        padding-bottom: 1px;
        text-transform: uppercase;
        letter-spacing: 0.03em;
    }
    h3 {
        font-size: 8.15pt;
        font-weight: 700;
        margin: 3.5px 0 1px 0;
        color: #1e293b;
    }
    p, ul, ol {
        margin: 0 0 2px 0;
    }
    ul, ol {
        padding-left: 12px;
    }
    li {
        margin-bottom: 1px;
    }
    a {
        color: #0284c7;
        text-decoration: none;
    }
    table {
        width: 100%;
        border-collapse: collapse;
        margin: 3px 0;
        font-size: 7pt;
        line-height: 1.22;
    }
    th, td {
        border: 1px solid #cbd5e1;
        padding: 3px 5px;
        vertical-align: top;
        text-align: left;
    }
    th {
        background-color: #f1f5f9;
        font-weight: bold;
        color: #0369a1;
        font-size: 7.4pt;
    }
    td {
        width: 50%;
        background-color: #f8fafc;
    }
    blockquote {
        margin: 2px 0;
        padding: 2px 5px;
        background: #f8fafc;
        border-left: 2px solid #0284c7;
        font-size: 7.25pt;
        color: #334155;
    }
    code {
        font-family: 'JetBrains Mono', 'Courier New', monospace;
        font-size: 7pt;
        background: #f1f5f9;
        padding: 0.5px 2px;
        border-radius: 2px;
    }
    hr {
        border: none;
        border-top: 1px solid #e2e8f0;
        margin: 3.5px 0;
    }
    """

    full_html = f"""<!DOCTYPE html>
    <html>
    <head>
    <meta charset='utf-8'>
    <style>{css}</style>
    </head>
    <body>
    {html_body}
    </body>
    </html>"""

    temp_pdf = os.path.join(project_root, "temp_generated_resume.pdf")
    print("[*] Rendering PDF with WeasyPrint...")
    weasyprint.HTML(string=full_html).write_pdf(temp_pdf)

    # 8. Post-process with pypdf
    print("[*] Optimizing content streams and injecting metadata with pypdf...")
    reader = pypdf.PdfReader(temp_pdf)
    writer = pypdf.PdfWriter()

    for page in reader.pages:
        writer.add_page(page)

    for page in writer.pages:
        page.compress_content_streams()

    writer.add_metadata(
        {
            "/Title": "Richard P. Dissell - Master Resume & Curriculum Vitae",
            "/Author": "Richard P. Dissell",
            "/Subject": "Security Analysis, Systems Architecture, ITSM/CMDB & Infrastructure Engineering",
            "/Keywords": "Security, Zero Trust, ITSM, CMDB, ServiceNow, KACE, VMware, Linux, Architecture, CI/CD, DevSecOps",
            "/Creator": "iamrp.dev Pure-Python WeasyPrint + pypdf Build Engine",
            "/Producer": f"pypdf v{pypdf.__version__}",
        }
    )

    # Targets (supports both local sibling cdn.iamrp.dev/pdf and cdn.iamrp.dev CI checkout cwd/pdf)
    candidate_cdn_dirs = [
        os.path.abspath(os.path.join(os.getcwd(), "pdf")),
        os.path.abspath(os.path.join(project_root, "../pdf")),
        os.path.abspath(os.path.join(project_root, "../cdn.iamrp.dev/pdf")),
    ]
    written_dirs = set()
    for cdn_pdf_dir in candidate_cdn_dirs:
        real_dir = os.path.realpath(cdn_pdf_dir)
        if os.path.exists(cdn_pdf_dir) and real_dir not in written_dirs:
            cdn_out = os.path.join(cdn_pdf_dir, "Richard_Dissell_Resume.pdf")
            with open(cdn_out, "wb") as f:
                writer.write(f)
            written_dirs.add(real_dir)
            print(f"[✓] Saved CDN PDF: {cdn_out} ({os.path.getsize(cdn_out) // 1024} KB)")

    local_public_dir = os.path.join(project_root, "public")
    os.makedirs(local_public_dir, exist_ok=True)
    local_out = os.path.join(local_public_dir, "Richard_Dissell_Resume.pdf")
    with open(local_out, "wb") as f:
        writer.write(f)
    print(
        f"[✓] Saved Local Public PDF: {local_out} ({os.path.getsize(local_out) // 1024} KB)"
    )

    if os.path.exists(temp_pdf):
        os.remove(temp_pdf)

    elapsed = time.time() - start_time
    print(
        f"[✓] Pure-Python PDF Build completed in {elapsed:.2f}s! ({len(writer.pages)} pages)"
    )


if __name__ == "__main__":
    main()
