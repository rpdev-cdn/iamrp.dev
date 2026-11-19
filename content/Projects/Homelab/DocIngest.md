---
title: "DocIngest Suite"
aliases:
  - /homelab-projects/tools/docingest
  - /homelab-projects/docingest/index
  - /tools/docingest/index
  - /software--and--github/tools/docingest
  - /projects--and--research/projects/docingest_engine
  - /docingest
  - /tools
  - /tools/index
  - /software--and--github/tools
  - /software--and--github
tags:
  - docingest
  - tools
  - ai
  - mcp
---

# DocIngest Documentation Suite <span class="telemetry-badge">MCP KNOWLEDGE ENGINE</span>

> [!abstract] Documentation Indexing & Corpus Retrieval Architecture
> **DocIngest** is a self-hosted technical documentation indexing, Markdown normalization, and semantic retrieval engine. It ingests authorized open-source and developer documentation libraries and structures them for deterministic querying via Model Context Protocol (MCP) servers and localized AI reasoning workflows.

<div style="margin: 1.25rem 0 1.75rem 0; display: flex; gap: 0.75rem; flex-wrap: wrap;">
  <a href="https://docingest.iamrp.dev/view" target="_blank" rel="noopener" class="di-btn di-btn-primary" style="display: inline-flex; padding: 0.65rem 1.25rem; font-weight: 700; text-decoration: none;">
    Browse Read-Only Documentation Corpus ↗
  </a>
</div>

---

### ◈ Core Functional Modules

* **Authorized Documentation Ingestion Pipeline** *(Access-Controlled)*  
  *Accepts target technical documentation roots with explicit inclusion and exclusion path filters (`/docs/*`, `*/v1/*`) to normalize reference pages into clean Markdown and persist versioned records to PostgreSQL.*

* **[Read-Only Corpus Viewer ↗](https://docingest.iamrp.dev/view)**  
  *Provides full-text search across indexed technical specifications, clean Markdown previews, and deterministic context export for engineering workflows.*

---

### ◈ Architecture & Technical Stack

The DocIngest engine operates as a decoupled microservices architecture designed for zero-trust resilience and high-throughput document normalization:

- **Ingestion & Normalization**: Headless rendering pipeline stripping navigation boilerplate and converting technical reference documentation into clean, structured Markdown.
- **Queue & Event Bus**: Redis message queue for asynchronous job scheduling, status polling, and concurrency control.
- **Storage Tier**: PostgreSQL database with JSONB schema for indexing document hierarchies and fast metadata retrieval.
- **MCP Integration**: Exposes indexed documentation corpora to localized AI tooling through the Model Context Protocol (`find-docs`, `read-docs`, `query-docs`).
