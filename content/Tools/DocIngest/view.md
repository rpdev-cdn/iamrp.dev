---
title: Indexed Documentation
aliases:
- /software--and--github/tools/docingest/view
- /view
tags:
- docingest
- crawler
- tooling
---

# Indexed Documentation

Browse the searchable docs corpus indexed by DocIngest

<div class="docingest-app-container">
  <div id="docingest-view-root"></div>
</div>

<img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" onload="
  const root = document.getElementById('docingest-view-root');
  if (root && !root.dataset.loaded) {
    const existing = document.getElementById('docingest-view-script');
    if (existing) existing.remove();
    const s = document.createElement('script');
    s.id = 'docingest-view-script';
    s.src = 'https://cdn.iamrp.dev/js/ViewPageApp.js?t=' + Date.now();
    document.body.appendChild(s);
    root.dataset.loaded = 'true';
  }
" style="display:none;" />
