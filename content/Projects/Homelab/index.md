---
title: "Homelab & Infrastructure"
description: "Sovereign bare-metal homelab infrastructure, self-hosted PaaS engines, DocIngest documentation crawler, spatial storage tiering, and live fleet topology."
aliases:
  - /homelab-projects
  - /homelab-projects/index
  - /homelab
  - /homelab/index
  - /projects/homelab
  - /projects/homelab/index
tags:
  - homelab
  - infrastructure
  - paas
  - storage
  - docingest
---

# 🧪 Homelab & Infrastructure

> **Sovereign, bare-metal homelab infrastructure, containerized microservices, high-speed storage tiering, and live edge applications.**

<nav class="projects-category-bar">
  <a href="#docingest" class="cat-pill"><span class="cat-icon">📚</span> DocIngest Suite</a>
  <a href="#paas-orchestration" class="cat-pill"><span class="cat-icon">🚀</span> PaaS Orchestration (Coolify)</a>
  <a href="#fleet-topology" class="cat-pill"><span class="cat-icon">🖥️</span> Fleet Topology & Hardware</a>
  <a href="#storage-tiering" class="cat-pill"><span class="cat-icon">💾</span> Storage Tiering</a>
</nav>

---

<section id="docingest" class="project-category-section">

## 📚 [[Projects/Homelab/DocIngest|DocIngest Documentation & Knowledge Suite]]

Distributed documentation crawler, semantic vector indexing, and Model Context Protocol (MCP) server running natively on the cluster.

| Tool / Interface | Purpose & Capabilities | Live Portal |
|---|---|---|
| **[[Projects/Homelab/DocIngest|DocIngest Suite Overview]]** | Master architecture, API contracts, Qdrant vector embedding, and background crawler pipelines. | [docingest.iamrp.dev](https://docingest.iamrp.dev) |

</section>

---

<section id="paas-orchestration" class="project-category-section">

## 🚀 [[Projects/Homelab/Coolify|Coolify Self-Hosted PaaS Engine]]

Centralized application deployment engine anchored to bare-metal hardware for internal container orchestration, Git push-to-deploy pipelines, and automated Let's Encrypt SSL management.

| Document | Focus | Scope |
|---|---|---|
| **[[Projects/Homelab/Coolify|Coolify Architecture & Integration]]** | Production deployment guidelines, Traefik proxying, Docker socket security, and network isolation. | Core Architecture |
| **[[Projects/Homelab/Coolify_Project_Plan|Coolify Implementation & Staging Plan]]** | Resource baselines, Netdata vs Beszel benchmarking, staging schedules, and migration checklists. | Rollout Plan |

</section>

---

<section id="fleet-topology" class="project-category-section">

## 🖥️ [[Projects/Homelab/Current_Environment|Fleet Topology & Hardware Environment]]

The single source of truth for bare-metal host specifications, CPU architectures, memory budgets, network routing tables, and interface layouts across all active nodes (`edge`, `llmadmin01`, `t430`).

- **[[Projects/Homelab/Current_Environment|View Full Fleet Topology (`CURRENT_ENV.yml`)]]** <span class="telemetry-badge">LIVE TELEMETRY</span>

</section>

---

<section id="storage-tiering" class="project-category-section">

## 💾 [[Projects/Homelab/Hardware_Storage_Tiering|Spatial Storage Tiering]]

High-throughput storage architecture routing database WALs and high-IO containers to NVMe SSDs, while offloading static binary archives, ISOs, and cold backups to SharedRoot bulk storage.

- **[[Projects/Homelab/Hardware_Storage_Tiering|Read Storage Tiering Architecture]]**

</section>

---

## 🧭 Navigation & Portals
- Explore all engineering systems in **[[Projects/index|Projects]]**
- Read applied research and essays in **[[Research-and-Ramblings/index|Research & Ramblings]]**
- Inspect master resume in **[[Resume/index|Resume]]**
- Browse the external knowledge base at **[wiki.iamrp.dev](https://wiki.iamrp.dev)**
