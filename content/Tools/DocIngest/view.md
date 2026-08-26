---
title: Indexed Documentation
aliases:
- /software--and--github/tools/docingest/view
tags:
- docingest
- crawler
- tooling
---

# Indexed Documentation

Browse the searchable docs corpus indexed by DocIngest

<div class="docingest-app-container">
  <div id="docingest-view-root">
    <div class="docingest-fallback-card" style="padding: 1.5rem; background: var(--lightgray); border-radius: 8px; border: 1px solid var(--gray); margin-bottom: 1.5rem;">
      <h3 style="margin-top:0;">📚 DocIngest Vector Corpus Explorer</h3>
      <p>DocIngest is an automated documentation crawler and semantic indexing pipeline that ingests technical specifications, GitHub repositories, and architectural RFCs into a high-density, searchable vector index.</p>
      <p><em>Loading live corpus explorer from <code>cdn.iamrp.dev</code>...</em></p>
      <noscript>
        <p><strong>Note:</strong> JavaScript is required to search and browse the interactive vector corpus directly in your browser. You can also query the corpus via the <a href="https://docingest.iamrp.dev/api/docs/list" target="_blank">DocIngest REST API</a>.</p>
      </noscript>
    </div>
  </div>
</div>

<script>
  (function loadDocIngest() {
    const root = document.getElementById('docingest-view-root');
    if (root && !root.dataset.loaded) {
      const s = document.createElement('script');
      s.id = 'docingest-view-script';
      s.src = 'https://cdn.iamrp.dev/js/ViewPageApp.js?t=' + Date.now();
      document.body.appendChild(s);
      root.dataset.loaded = 'true';
    }
  })();
</script>

---

## 🔗 Related Architecture & Knowledge Graph

* **DocIngest Application:** Explore the companion interface on [[Tools/DocIngest/add|DocIngest Add]].
* **LLM & Context Architecture:** Integrated with [[Projects/LLM_Control_Plane|LLM Control Plane]] and [[Projects/MCP_Gateway_Tool_Router|MCP Gateway Tool Router]].
* **Zero-Trust Ingress:** Read about local agent security in [[Research/Local_LLM_Architecture|Zero-Trust Local LLM Ingress]].
* **Master Resume & CV:** Review architecture credentials on [[Resume/Master_Resume|Curriculum Vitae & Master Resume]].
* **Digital Garden Hub:** Return to [[index|Digital Garden Index]].
