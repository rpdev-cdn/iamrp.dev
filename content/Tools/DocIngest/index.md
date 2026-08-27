---
title: DocIngest Suite
aliases:
- /software--and--github/tools/docingest
- /projects--and--research/projects/docingest_engine
- /docingest
tags:
- docingest
- tools
- ai
- mcp
---

# DocIngest Documentation Suite <span class="badge-status badge-live">● LIVE EDGE SUITE</span>

> [!abstract] Documentation Crawler & Corpus Viewer
> **DocIngest** is a high-performance, self-hosted documentation crawler, markdown converter, and semantic search engine. It crawls canonical developer documentation libraries and structures them for immediate ingestion into Model Context Protocol (MCP) servers and AI reasoning loops.

<div style="margin: 1.25rem 0 1.75rem 0; display: flex; gap: 0.75rem; flex-wrap: wrap;">
  <a href="/tools/docingest/add" class="di-btn di-btn-primary" style="display: inline-flex; padding: 0.65rem 1.25rem; font-weight: 700; text-decoration: none;">
    Index New Docs (Add) 🚀
  </a>
  <a href="/tools/docingest/view" class="di-btn di-btn-secondary" style="display: inline-flex; padding: 0.65rem 1.25rem; font-weight: 700; text-decoration: none;">
    Browse Searchable Corpus (View) 📚
  </a>
</div>

---

### ◈ Interactive Modules

* **[[Tools/DocIngest/add|DocIngest URL Ingestion]]** (`/tools/docingest/add` or `/add`)  
  *Submit target documentation URLs with inclusion and exclusion path filters (`/docs/*`, `*/v1/*`) to crawl, convert to clean Markdown, and persist to the PostgreSQL database.*

* **[[Tools/DocIngest/view|DocIngest Corpus Viewer]]** (`/tools/docingest/view` or `/view`)  
  *Full-text search indexed documentation, preview full Markdown in an elevated modal, copy context directly to clipboard, or download Markdown files.*

---

### ◈ Architecture & Technical Stack

The DocIngest engine operates as a decoupled microservices architecture designed for zero-trust resilience and high-throughput document extraction:

- **Ingestion & Crawling**: Firecrawl microservice orchestrating headless Playwright instances to render dynamic SPAs, strip navigation boilerplate, and extract pure markdown.
- **Queue & Event Bus**: Redis message queue for job scheduling, status polling, and concurrency control.
- **Storage Tier**: PostgreSQL database with JSONB schema for indexing document hierarchies and fast metadata retrieval.
- **MCP Integration**: Exposes indexed corpora directly to local agent swarms through the Model Context Protocol (`find-docs`, `read-docs`, `query-docs`).
