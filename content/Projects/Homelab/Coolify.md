---
title: "Coolify Self-Hosted PaaS Integration"
tags:
  - homelab
  - coolify
  - paas
  - docker
  - infrastructure
aliases:
  - /projects/lab-experiments/coolify/coolify
  - /projects/coolify
  - /homelab/coolify
  - /homelab/Coolify
---

# Project Charter: Coolify Self-Hosted PaaS Integration
### Architectural Specification for Repository Taxonomy, Network Isolation & Storage Tiering

**Document Control**

| Field | Detail |
|---|---|
| Project Reference | `PRJ-20260831-COOLIFY-01` |
| Target Repository | `github.com/example-org/coolify` |
| Target Node | `core-cluster-01` (Always-on Lightweight Staging / Storage Node) |
| Target Network | `macvlan14` (`198.51.100.0/24`) |
| Governance Classification | Tier 3 / Tier 4 Agile Prototyping and Public Edge Delivery |
| Architectural Scope | Internal container orchestration and automated deployment engine isolated from public delivery namespaces |

---

## 1. Executive Summary and Business Justification

### Objective

To establish a self-hosted Platform as a Service (PaaS) engine using Coolify to orchestrate, deploy, and manage externally reachable web applications, flat-file content, and dynamic services within the lab environment.

### Problem Statement

Manual container provisioning across heterogeneous hosts creates configuration drift, complicates SSL lifecycle management, and increases the administrative overhead of deploying public web experiments and services.

### Proposed Solution

Deploy Coolify under the internal `example-org` build namespace to act as a centralized deployment and lifecycle engine for external-facing workloads. Coolify itself is internal tooling — its UI, API, and Docker socket access are administrative surfaces reached over the internal network only. The applications it deploys may be public; the orchestrator is not. Anchoring the application to the `core-cluster-01` node isolates development and deployment execution from core infrastructure workflows while maintaining unified reverse-proxy and DNS integration for whatever it publishes.

---

## 2. Governance and Namespace Architecture

```
                       ┌─────────────────────────────────────────┐
                       │          GitHub Namespace Plan          │
                       └────────────────────┬────────────────────┘
                                            │
        ┌───────────────────────────────────┼───────────────────────────────────┐
        ▼                                   ▼                                   ▼
┌───────────────┐                   ┌───────────────┐                   ┌───────────────┐
│  example-cdn  │                   │  example-org  │                   │ example-vault │
│ (External Web)│                   │ (CI/CD + PaaS)│                   │ (Core Infra)  │
└───────┬───────┘                   └───────┬───────┘                   └───────────────┘
        │                                   │
        │                                   └─► [coolify fork] ──► Deployment Manifests & Blueprints
        │
        └─► Deployed sites, flat assets, and public projects (deployed BY Coolify, hosted separately from it)
```

- **`example-cdn` (External Delivery):** Houses public-facing codebases, flat assets, and static sites — the *output* of deployments, never the orchestrator itself.
- **`example-org` (Internal CI/CD & Deployment Tooling):** Houses image builds, package mirroring, self-hosted Actions runners, **and the Coolify fork** — internal orchestration and deployment tooling belongs together in one namespace.
- **`example-vault` (Private Infrastructure & Core State):** Reserved for private infrastructure manifests, internal routing definitions, internal databases, and private operational documentation.
- **Separation of Concerns:** External webhook triggers and public deployment credentials remain isolated from private automation registries and internal network manifests — Coolify's administrative credentials sit alongside other internal tooling rather than in the public delivery namespace.
- **Resource Tiering:** Coolify application databases are anchored directly to local NVMe/SSD storage (`/srv/storage/local`), strictly avoiding shared NFS lock contention and protecting edge flash memory from write fatigue.

---

## 3. Infrastructure and System Architecture

| Parameter | Configuration Specification | Rationale |
|---|---|---|
| Host Node | `core-cluster-01` (`192.0.2.10` Host Management IP) | Dedicated always-on service host |
| Network Mode | Layer 2 `macvlan14` | Eliminates port collisions and provides physical subnet isolation |
| Assigned IP | `198.51.100.45` | Static IP allocation within VLAN 14 IPAM |
| Internal DNS | `coolify.lab.internal` | Dynamic service discovery registered via Mageddo DPS |
| External/Public URL | `coolify.iamrp.dev` / `coolify.corp.example.internal` | Terminated at Cloudflare Edge and proxied through Nginx Proxy Manager. *(Note: this is the admin UI's remote-access URL, not a public application — access is restricted via proxy authentication; see Section 5.)* |
| Data Persistence | `/srv/compose/core-cluster-01/coolify/` | Local SSD critical path allocation |
| Relational Database | PostgreSQL Cluster (`postgres.lab.internal`) | Centralized, persistent database tier on local SSD |

---

## 4. Implementation and Deployment Plan

### Phase 1: Repository Provisioning and Scaffolding

- Fork upstream `coollabsio/coolify` into `github.com/example-org/coolify`.
- Initialize directory layout on `core-cluster-01` host at `/srv/compose/core-cluster-01/coolify/` with strict POSIX permissions (`0750`).
- Confirm fork remains clean against upstream (no foreign content, no divergence) before proceeding.

### Phase 2: Database Initialization and Role Isolation

Provision dedicated database and user role inside the centralized PostgreSQL instance to maintain zero-trust boundaries:

```sql
CREATE ROLE coolify WITH LOGIN PASSWORD 'CHANGE_ME_SECURE_PASS';
CREATE DATABASE coolify OWNER coolify;
```

### Phase 3: Manifest Deployment (`docker-compose.yml`)

Deploy the production manifest configured for decoupled environment loading:

```yaml
services:
  coolify:
    image: ghcr.io/coollabsio/coolify:latest
    container_name: core-cluster-01-coolify
    hostname: coolify.lab.internal
    restart: unless-stopped
    environment:
      - APP_ENV=production
      - DB_HOST=postgres.lab.internal
      - DB_USER=coolify
      - DB_PASSWORD=${COOLIFY_DB_PASSWORD}
      - DB_DATABASE=coolify
      - REDIS_HOST=redis.lab.internal
      - REDIS_PASSWORD=${COOLIFY_REDIS_PASSWORD}
    volumes:
      - ./config:/data/coolify
      - /var/run/docker.sock:/var/run/docker.sock
    networks:
      macvlan14:
        ipv4_address: 198.51.100.45

networks:
  macvlan14:
    external: true
```

### Phase 4: Ingress and Proxy Integration

- Configure upstream route in Nginx Proxy Manager pointing `coolify.corp.example.internal` to `coolify.lab.internal:8000` with WebSocket support enabled.
- Bind wildcard TLS certificates issued via Cloudflare DNS-01 challenge.
- Restrict access to the admin UI route (allowlist / auth in front of Nginx Proxy Manager) — TLS termination alone does not make an internal admin tool safe to leave open on a public hostname.

---

## 5. Risk Assessment and Mitigation Register

| Risk Factor | Impact | Likelihood | Mitigation Strategy |
|---|---|---|---|
| Docker Socket Exposure | High | Medium | Run Coolify in a dedicated Docker network; restrict socket permissions to internal administrative workloads. |
| Host Resource Exhaustion | High | Low | Apply explicit CPU and RAM limits in Compose overrides for child containers deployed by Coolify. |
| Database Schema Corruption | High | Low | Store active database tables on local SSD storage (`/srv/storage/local`); schedule daily automated `pg_dump` backups to `/srv/storage/backups/`. |
| DNS Resolution Failure | Medium | Low | Enforce dual upstream resolvers (`198.51.100.3` Mageddo DPS and router gateway) to preserve fallback resolution paths. |
| Admin UI Exposure via Public Hostname | Medium | Medium | Even though Coolify is internal tooling, its admin URL is reachable via a proxied hostname (Section 3). Restrict with allowlisting/auth in front of the proxy, per Phase 4. |
| Upstream Drift / Delayed Security Patches | Medium | Medium | Track `coollabsio/coolify` releases and establish a periodic monthly upstream merge cadence into `example-org/coolify`, keeping local workflow configurations isolated from upstream repository files. |

---

## 6. Architectural Validation Criteria

```
[ Gate 1: Repo Ready ] ──► [ Gate 2: Stack Booted ] ──► [ Gate 3: Ingress / TLS Live ] ──► [ Sign-off ]
```

- **Deliverable 1 (Repository Baseline):** Repository fork maintained at `example-org/coolify`, verified clean against upstream, with standardized CI workflow templates.
- **Deliverable 2 (Layer 2 Network Isolation):** Container running healthy on `core-cluster-01` `macvlan14` with zero host-port collisions.
- **Deliverable 3 (Dynamic Service Discovery):** Dynamic name resolution validated through Mageddo DPS (`ping coolify.lab.internal`).
- **Deliverable 4 (Authenticated Reverse Proxy):** HTTPS proxy verification completed via Nginx Proxy Manager with WebSockets functional, and admin UI access restricted per Section 5.
- **Deliverable 5 (Automated Webhook Pipeline):** End-to-end application deployment verified from a GitHub webhook trigger deploying to the external delivery namespace (`example-cdn`).
