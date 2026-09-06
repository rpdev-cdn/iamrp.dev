---
aliases:
  - /projects/lab-experiments/coolify/project-plan
  - /projects/homelab/coolify_project_plan
  - /projects/homelab/Coolify_Project_Plan
  - /homelab/coolify_project_plan
  - /homelab/Coolify_Project_Plan
---

### Coolify Deployment Project Plan

|**Specification**|**Target Configuration**|**Context & Constraints**|
|---|---|---|
|**Host Node**|T430 (Host Management IP: 10.13.0.10)|Primary staging and core infrastructure node|
|**Network & IP**|`macvlan14` (10.14.0.45 / 24)|Direct Layer 2 physical subnet binding|
|**Internal Discovery**|`coolify.docker.local`|Dynamically auto-registered via Mageddo DPS (10.14.0.3)|
|**Ingress / Domain**|`coolify.local.iamrp.dev` / `coolify.iamrp.dev`|Reverse proxied via Nginx Proxy Manager (10.14.0.5) and Cloudflare Tunnel|
|**Persistence Path**|`/mnt/data/compose/coolify/`|High-IOPS local SSD path to prevent NFS SQLite locking|
|**Database Tier**|Central PostgreSQL (`postgres.docker.local`)|Centralized database cluster on T430|
|**Cache Tier**|Central Redis (`redis.docker.local`)|Centralized caching instance on T430|

### Phase 1: Environment & Dependency Preparation

- **Directory Structure:** Provision directories on the T430 local SSD array with standard ownership:
    
      
    

Bash

```
mkdir -p /mnt/data/compose/coolify/config
chmod 750 /mnt/data/compose/coolify/config
```

- **Database & Cache Initialization:** Provision the user role and database schema inside your PostgreSQL cluster (`postgres.docker.local`):
    
      
    

SQL

```
CREATE ROLE coolify WITH LOGIN PASSWORD 'YOUR_STRONG_PASSWORD';
CREATE DATABASE coolify OWNER coolify;
```

- **Host Engine Access:** Ensure `/var/run/docker.sock` permissions allow Coolify to manage container lifecycles on the host.
    
      
    

### Phase 2: Deployment & Compose Configuration

Create `/mnt/data/compose/coolify/compose.yml` configured strictly for `macvlan14` and Mageddo DPS resolution:

  

YAML

```
services:
  coolify:
    image: ghcr.io/coollabsio/coolify:latest
    container_name: t430-coolify
    hostname: coolify.docker.local
    restart: unless-stopped
    environment:
      - APP_ENV=production
      - DB_HOST=postgres.docker.local
      - DB_PORT=5432
      - DB_USER=coolify
      - DB_PASSWORD=${COOLIFY_DB_PASSWORD}
      - DB_DATABASE=coolify
      - REDIS_HOST=redis.docker.local
      - REDIS_PORT=6379
      - REDIS_PASSWORD=${COOLIFY_REDIS_PASSWORD}
    volumes:
      - ./config:/data/coolify
      - /var/run/docker.sock:/var/run/docker.sock
    networks:
      macvlan14:
        ipv4_address: 10.14.0.45

networks:
  macvlan14:
    external: true
```

- **Network Execution:** Deploy the stack from `/mnt/data/compose/coolify` using `docker compose up -d`.
    
      
    
- **Admin Setup:** Access `[http://10.14.0.45:8000](http://10.14.0.45:8000)` or `[http://coolify.docker.local:8000](http://coolify.docker.local:8000)` immediately to complete initial setup and register root admin credentials before exposing public routes.
    
      
    

### Phase 3: Routing, DNS, and TLS Termination

- **DPS Dynamic Resolution:** Mageddo DPS captures the container initialization event from `/var/run/docker.sock` and binds `coolify.docker.local` to `10.14.0.45`.
    
      
    
- **Nginx Proxy Manager Route:**
    
      
    - **Domain Names:** `coolify.local.iamrp.dev`
        
          
        
          
        
    - **Scheme:** `https
        
          
        
          
        
    - **Forward Hostname / IP:** `coolify.docker.local`
        
          
        
          
        
    - **Forward Port:** `8000`
        
          
        
          
        
    - **WebSockets Support:** Enabled (required for real-time live terminal and build log streaming)
        
          
        
    - **SSL:** Select `*.local.iamrp.dev` Wildcard Certificate and enable Force SSL + HTTP/2 Support
        
          
        

### Phase 4: Git Integrations & Buildpacks

- **Source Provider:** Register your GitHub App or Deploy Keys in the Coolify dashboard under **Sources** for repository access.
    
      
    
- **Buildpack Strategy:** Default to **Nixpacks** for standard zero-configuration runtimes, and utilize explicit **Dockerfile** or **Docker Compose** configurations for complex multi-container repositories.
    
      
    
- **Automation Webhooks:** Add generated Coolify deployment webhook URLs into repository settings for automated CI/CD builds on push.
    
      
    

### Phase 5: Verification Gates & Handover

- [ ] **Gate 1:** Dynamic lookup succeeds across the subnet: `nslookup coolify.docker.local 10.14.0.3` returns `10.14.0.45`.
    
      
    
- [ ] **Gate 2:** Control plane loads cleanly with valid TLS at `[https://coolify.local.iamrp.dev](https://coolify.local.iamrp.dev)`.
    
      
    
- [ ] **Gate 3:** Terminal WebSockets and deployment event logs stream without dropping connections.
    
      
    
- [ ] **Gate 4:** Database connections establish successfully against `postgres.docker.local`.
    
      
    
- [ ] **Gate 5:** Automated database dumps and volume backups are configured to write to `/mnt/sharedroot/backups/coolify`.