---
title: DocIngest
aliases:
- /software--and--github/tools/docingest/add
tags:
- docingest
- crawler
- tooling
---

# DocIngest

Ingest a docs site into your searchable, MCP-accessible corpus

<div style="margin: 1rem 0 1.5rem 0;">
  <a href="https://iamrp.dev/tools/docingest/view" class="di-btn di-btn-secondary" style="display: inline-flex; padding: 0.6rem 1.25rem; font-weight: 700; text-decoration: none;">
    Browse Indexed Docs
  </a>
</div>

<div class="docingest-app-container">
  <div id="docingest-add-root"></div>
</div>

<img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" onload="
  const root = document.getElementById('docingest-add-root');
  if (root && !root.dataset.loaded) {
    const existing = document.getElementById('docingest-add-script');
    if (existing) existing.remove();
    const s = document.createElement('script');
    s.id = 'docingest-add-script';
    s.src = 'https://cdn.iamrp.dev/js/AddPageApp.js?t=' + Date.now();
    document.body.appendChild(s);
    root.dataset.loaded = 'true';
  }
" style="display:none;" />

---

## 🔗 Related Architecture & Knowledge Graph

* **DocIngest Application:** Explore the companion interface on [[Tools/DocIngest/view|DocIngest View]].
* **LLM & Context Architecture:** Integrated with [[Projects/LLM_Control_Plane|LLM Control Plane]] and [[Projects/MCP_Gateway_Tool_Router|MCP Gateway Tool Router]].
* **Zero-Trust Ingress:** Read about local agent security in [[Research/Local_LLM_Architecture|Zero-Trust Local LLM Ingress]].
* **Master Resume & CV:** Review architecture credentials on [[Resume/Master_Resume|Curriculum Vitae & Master Resume]].
* **Digital Garden Hub:** Return to [[index|Digital Garden Index]].
