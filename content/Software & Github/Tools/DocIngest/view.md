---
title: "DocIngest Crawler Status"
docingest: "view"
aliases:
  - "/tools/docingest/view"
  - "/view"
tags:
  - docingest
  - crawler
  - tooling
---

# DocIngest Crawler Status

> [!abstract] Documentation Crawler Status
> View the live status of the DocIngest queue and indexed URL database.

*(The interactive DocIngest application is mounted below.)*

<div class="docingest-view-wrapper" style="margin-top: 2rem;">
  <div id="docingest-view-root"></div>
</div>

<img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" onload="
  const root = document.getElementById('docingest-view-root');
  if (root && !root.dataset.loaded) {
    const s = document.createElement('script');
    s.src = 'https://cdn.iamrp.dev/js/ViewPageApp.js?t=' + Date.now();
    document.body.appendChild(s);
    root.dataset.loaded = 'true';
  }
" style="display:none;" />
