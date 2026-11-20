---
title: "Coolify PaaS Deployment Plan"
tags:
  - homelab
  - coolify
  - paas
  - docker
  - infrastructure
aliases:
  - /projects/lab-experiments/coolify/project-plan
  - /homelab/coolify_project_plan
  - /homelab/Coolify_Project_Plan
---

# Coolify PaaS Deployment Plan

| **Specification** | **Target Configuration** | **Context & Constraints** |
| :--- | :--- | :--- |
| **Host Node** | `core-cluster-01` (Management IP: `192.0.2.10`) | Primary staging and core infrastructure node |
| **Network & IP** | `macvlan14` (`198.51.100.45/24`) | Direct Layer 2 physical subnet binding |
| **Internal Discovery** | `coolify.lab.internal` | Dynamically auto-registered via Mageddo DPS (`198.51.100.3`) |
| **Ingress / Domain** | `coolify.corp.example.internal` / `coolify.iamrp.dev` | Reverse proxied via Nginx Proxy Manager (`198.51.100.5`) and Cloudflare Tunnel |
| **Persistence Path** | `/srv/compose/core-cluster-01/coolify/` | High-IOPS local SSD path to prevent NFS SQLite locking |
| **Database Tier** | Central PostgreSQL (`postgres.lab.internal`) | Centralized database cluster on `core-cluster-01` |
| **Cache Tier** | Central Redis (`redis.lab.internal`) | Centralized caching instance on `core-cluster-01` |

### Phase 1: Environment & Dependency Preparation

- **Directory Structure:** Provision directories on the `core-cluster-01` local SSD array with standard ownership:

```bash
mkdir -p /srv/compose/core-cluster-01/coolify/config
chmod 750 /srv/compose/core-cluster-01/coolify/config
```

- **Database & Cache Initialization:** Provision the user role and database schema inside the PostgreSQL cluster (`postgres.lab.internal`):

```sql
CREATE ROLE coolify WITH LOGIN PASSWORD 'YOUR_STRONG_PASSWORD';
CREATE DATABASE coolify OWNER coolify;
```

- **Host Engine Access:** Ensure `/var/run/docker.sock` permissions allow Coolify to manage container lifecycles on the host.

### Phase 2: Deployment & Compose Configuration

Create `/srv/compose/core-cluster-01/coolify/compose.yml` configured strictly for `macvlan14` and Mageddo DPS resolution:

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
      - DB_PORT=5432
      - DB_USER=coolify
      - DB_PASSWORD=${COOLIFY_DB_PASSWORD}
      - DB_DATABASE=coolify
      - REDIS_HOST=redis.lab.internal
      - REDIS_PORT=6379
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

- **Network Execution:** Deploy the stack from `/srv/compose/core-cluster-01/coolify` using `docker compose up -d`.
- **Admin Setup:** Access `http://198.51.100.45:8000` or `http://coolify.lab.internal:8000` immediately to complete initial setup and register root admin credentials before exposing public routes.

### Phase 3: Routing, DNS, and TLS Termination

- **DPS Dynamic Resolution:** Mageddo DPS captures the container initialization event from `/var/run/docker.sock` and binds `coolify.lab.internal` to `198.51.100.45`.
- **Nginx Proxy Manager Route:**
  - **Domain Names:** `coolify.corp.example.internal`
  - **Scheme:** `https`
  - **Forward Hostname / IP:** `coolify.lab.internal`
  - **Forward Port:** `8000`
  - **WebSockets Support:** Enabled (required for real-time live terminal and build log streaming)
  - **SSL:** Select `*.corp.example.internal` Wildcard Certificate and enable Force SSL + HTTP/2 Support

### Phase 4: Git Integrations & Buildpacks

- **Source Provider:** Register your GitHub App or Deploy Keys in the Coolify dashboard under **Sources** for repository access.
- **Buildpack Strategy:** Default to **Nixpacks** for standard zero-configuration runtimes, and utilize explicit **Dockerfile** or **Docker Compose** configurations for complex multi-container repositories.
- **Automation Webhooks:** Add generated Coolify deployment webhook URLs into repository settings for automated CI/CD builds on push.

### Phase 5: Architectural Validation Criteria

- **Gate 1 (Dynamic DNS Resolution):** Dynamic lookup succeeds across the subnet (`nslookup coolify.lab.internal 198.51.100.3` returns `198.51.100.45`).
- **Gate 2 (TLS Control Plane Ingress):** Control plane loads cleanly with valid TLS at `https://coolify.corp.example.internal`.
- **Gate 3 (WebSocket Telemetry Streaming):** Terminal WebSockets and deployment event logs stream without dropping connections.
- **Gate 4 (Database Connectivity):** Database connections establish successfully against `postgres.lab.internal`.
- **Gate 5 (Automated Backup Persistence):** Automated database dumps and volume backups are configured to write to `/srv/storage/backups/coolify`.
