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

---

### ◈ Core Functional Modules

* **Authorized Documentation Ingestion Pipeline** *(Internal Lab Service)*  
  *Accepts target technical documentation roots with explicit inclusion and exclusion path filters (`/docs/*`, `*/v1/*`) to normalize reference pages into clean Markdown and persist versioned records to PostgreSQL.*

* **Read-Only Corpus Viewer & MCP Query Interface** *(Internal Lab Service)*  
  *Provides full-text search across indexed technical specifications, clean Markdown previews, and deterministic context export for engineering workflows.*

---

### ◈ Architecture & Technical Stack

The DocIngest engine operates as a decoupled microservices architecture designed for zero-trust resilience and high-throughput document normalization:

- **Ingestion & Normalization**: Headless rendering pipeline stripping navigation boilerplate and converting technical reference documentation into clean, structured Markdown.
- **Queue & Event Bus**: Redis message queue for asynchronous job scheduling, status polling, and concurrency control.
- **Storage Tier**: PostgreSQL database with JSONB schema for indexing document hierarchies and fast metadata retrieval.
- **MCP Integration**: Exposes indexed documentation corpora to localized AI tooling through the Model Context Protocol (`find-docs`, `read-docs`, `query-docs`).
