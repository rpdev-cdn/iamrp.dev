---
title: "DocIngest URL Ingestion"
docingest: "add"
aliases:
  - "/tools/docingest/add"
  - "/add"
tags:
  - docingest
  - crawler
  - tooling
---

# DocIngest URL Ingestion

> [!abstract] Documentation Crawler Dispatch
> Submit documentation URLs below to crawl and index into your searchable Markdown corpus.

*(The interactive DocIngest application is mounted below.)*

<div class="docingest-add-wrapper" style="margin-top: 2rem;">
  <div id="docingest-add-root"></div>
</div>

<img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" onload="
  const root = document.getElementById('docingest-add-root');
  if (root && !root.dataset.loaded) {
    const s = document.createElement('script');
    s.src = 'https://cdn.iamrp.dev/js/AddPageApp.js?t=' + Date.now();
    document.body.appendChild(s);
    root.dataset.loaded = 'true';
  }
" style="display:none;" />
