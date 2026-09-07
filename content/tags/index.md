---
title: "Interconnected Works & Ecosystem Knowledge Graph"
description: "Central interactive graphic view and relational index mapping all 39+ RPDev repositories, multi-pillar architectures, integration interfaces, and semantic tag taxonomies."
tags:
  - root
  - architecture
  - identity
  - portfolio
  - graph
  - ontology
---

# 🕸️ Interconnected Works & Ecosystem Knowledge Graph
## **Interactive Topological Architecture, Protocol Bindings & Semantic Taxonomy**

Welcome to the central architectural nexus of the RPDev ecosystem. Across 39+ open-source repositories and 6 foundational engineering pillars, our systems operate as an integrated, sovereign mesh. Every service—from mobile AIDL bridges to hardware cryptographic roots, custom OpenWrt kernel drivers, and local LLM tool routers—is bound together by deterministic protocols and a unified semantic tag ontology.

<div class="di-neo-card-wrapper" style="margin-top: 1.5rem; margin-bottom: 2rem;">
  <div class="di-neo-shadow"></div>
  <div class="di-neo-card" style="padding: 1.5rem;">
    <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem; border-bottom: 1px solid #00afaf40; padding-bottom: 0.75rem; margin-bottom: 1rem;">
      <div>
        <span style="font-size: 1.1rem; font-weight: 700; color: #fff;">Interactive Ecosystem Graphic View</span>
        <span class="telemetry-badge badge-live">TOPOLOGICAL MESH</span>
      </div>
      <div style="font-size: 0.8rem; color: #8b889c;">
        Drag nodes • Hover to inspect bindings • Click to jump to project specification
      </div>
    </div>

    <!-- Filter Toolbar -->
    <div style="display: flex; gap: 0.5rem; flex-wrap: wrap; margin-bottom: 1rem; align-items: center;">
      <span style="font-size: 0.8rem; font-weight: 700; color: #5fafd7;">FILTER PILLAR:</span>
      <button class="graph-filter-btn active" data-pillar="all" onclick="filterGraph('all')">All Pillars</button>
      <button class="graph-filter-btn" data-pillar="android" onclick="filterGraph('android')">Android Stack</button>
      <button class="graph-filter-btn" data-pillar="security" onclick="filterGraph('security')">Hardware Security</button>
      <button class="graph-filter-btn" data-pillar="networking" onclick="filterGraph('networking')">Edge & RF</button>
      <button class="graph-filter-btn" data-pillar="infrastructure" onclick="filterGraph('infrastructure')">CI/CD & Fleet</button>
      <button class="graph-filter-btn" data-pillar="ai" onclick="filterGraph('ai')">Local AI & MCP</button>
      <button class="graph-filter-btn" data-pillar="governance" onclick="filterGraph('governance')">Governance</button>
      <button class="graph-filter-btn" style="margin-left: auto; background: #1e1b2e; border-color: #8b889c;" onclick="resetGraphView()">⟲ Reset</button>
    </div>

    <!-- SVG Canvas Container -->
    <div id="graph-container" style="width: 100%; height: 560px; background: #07050a; border: 1px solid #1e1b2e; border-radius: 8px; position: relative; overflow: hidden; box-shadow: inset 0 0 30px rgba(0,0,0,0.8);">
      <svg id="ecosystem-svg" width="100%" height="100%" viewBox="0 0 1000 620" preserveAspectRatio="xMidYMid meet" style="cursor: grab;">
        <defs>
          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
          <marker id="arrow" viewBox="0 0 10 10" refX="22" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#00afaf" opacity="0.6"/>
          </marker>
        </defs>
        <!-- Dynamic Links and Nodes will be rendered by JS -->
        <g id="edges-layer"></g>
        <g id="nodes-layer"></g>
      </svg>
      <div id="node-tooltip" style="position: absolute; display: none; background: #120e1c; border: 1px solid #00afaf; padding: 0.5rem 0.75rem; border-radius: 6px; font-size: 0.75rem; color: #fff; pointer-events: none; z-index: 1000; box-shadow: 0 4px 15px rgba(0,0,0,0.6); max-width: 260px;"></div>
    </div>
  </div>
</div>

<style>
.graph-filter-btn {
  background: #0d0914;
  border: 1px solid #1e1b2e;
  color: #8b889c;
  padding: 0.25rem 0.65rem;
  border-radius: 4px;
  font-size: 0.75rem;
  cursor: pointer;
  font-family: inherit;
  transition: all 0.2s ease;
}
.graph-filter-btn:hover {
  border-color: #00afaf;
  color: #fff;
}
.graph-filter-btn.active {
  background: #00afaf26;
  border-color: #00afaf;
  color: #00ff88;
  font-weight: 700;
}
.node-circle {
  transition: r 0.2s, stroke-width 0.2s, opacity 0.3s;
  cursor: pointer;
}
.node-label {
  font-size: 11px;
  fill: #e2e1e8;
  font-family: var(--codeFont, monospace);
  pointer-events: none;
  font-weight: 600;
  text-anchor: middle;
}
.edge-line {
  stroke-opacity: 0.35;
  transition: stroke-opacity 0.2s, stroke 0.2s, stroke-width 0.2s;
}
.edge-line.highlighted {
  stroke-opacity: 1 !important;
  stroke-width: 2.5px !important;
}
.node-dimmed {
  opacity: 0.15 !important;
}
.pillar-card {
  border: 1px solid #1e1b2e;
  background: #0d0914;
  border-radius: 8px;
  padding: 1.25rem;
  margin-bottom: 1.5rem;
  transition: border-color 0.2s;
}
.pillar-card:hover {
  border-color: #00afaf80;
}
.project-subcard {
  border: 1px solid #1e1b2e;
  background: #141021;
  border-radius: 6px;
  padding: 1rem;
  margin-top: 0.75rem;
  transition: border-color 0.2s, transform 0.15s;
}
.project-subcard:hover {
  border-color: #00afaf;
  transform: translateY(-2px);
}
.tag-pill {
  display: inline-flex;
  align-items: center;
  padding: 0.15rem 0.5rem;
  font-size: 0.75rem;
  border-radius: 4px;
  background: #00afaf1f;
  color: #00afaf !important;
  border: 1px solid #00afaf40;
  margin: 0.2rem 0.25rem 0.2rem 0;
  text-decoration: none !important;
  font-family: var(--codeFont, monospace);
  transition: all 0.15s;
}
.tag-pill:hover {
  background: #00afaf40;
  border-color: #00ff88;
  color: #00ff88 !important;
  box-shadow: 0 0 8px rgba(0, 255, 136, 0.3);
}
</style>

---

## 🏛️ Index of Interconnected Works Across Projects

The RPDev ecosystem is organized into 6 functional engineering pillars. Each work connects across platforms through explicit protocols, schema validation, and synchronized version lifecycles.

### 📱 Pillar 1: Android Sovereign Client Stack
*Native Android 14/15/16 desktop orchestrator, private swipe-left feed overlay, and pluggable hub card architecture operating with zero tracking SDKs and zero telemetry.*

<div class="project-subcard" id="project-launcher">
  <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap;">
    <h4 style="margin: 0; color: #fff;">🚀 RPDev Launcher (Lean AOSP Desktop Orchestrator)</h4>
    <span class="telemetry-badge badge-live">GA v1.2.0</span>
  </div>
  <p style="margin: 0.5rem 0; font-size: 0.88rem; color: #e2e1e8;">
    Minimalist, blazingly fast Android launcher featuring infinite nested desktop folders, custom drawer category icons, fluid gesture physics, and decoupled AIDL feed integration.
  </p>
  <div style="font-size: 0.78rem; color: #8b889c; margin-bottom: 0.5rem;">
    <strong>Bindings & Interfaces:</strong> Bound to <code>RPDev Feed</code> via <code>iamrp.dev.feed.aidl.ILauncherOverlay</code>. Consumes <code>EncryptedSharedPreferences</code> for secure local configuration.
  </div>
  <div>
    <a class="tag-pill" href="../tags/android">#android</a>
    <a class="tag-pill" href="../tags/launcher">#launcher</a>
    <a class="tag-pill" href="../tags/aosp">#aosp</a>
    <a class="tag-pill" href="../tags/kotlin">#kotlin</a>
    <a class="tag-pill" href="../tags/datastore">#datastore</a>
  </div>
  <div style="margin-top: 0.65rem; font-size: 0.82rem;">
    <strong>Documentation & Specs:</strong> 
    <a href="../projects/android/rpdev_launcher">Architecture Spec</a> • 
    <a href="https://wiki.iamrp.dev/launcher/" target="_blank" rel="noopener">Wiki Manual ↗</a> • 
    <a href="https://github.com/RPDevs-Builds/RPDev-Launcher" target="_blank" rel="noopener">Source Code ↗</a>
  </div>
</div>

<div class="project-subcard" id="project-feed">
  <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap;">
    <h4 style="margin: 0; color: #fff;">📰 RPDev Feed (Sovereign Minus-One Screen Companion)</h4>
    <span class="telemetry-badge badge-live">GA v1.2.1</span>
  </div>
  <p style="margin: 0.5rem 0; font-size: 0.88rem; color: #e2e1e8;">
    Private, telemetry-free Google Discover replacement companion providing sovereign RSS/Atom syndication, weather tracking, and extensible smart home cards.
  </p>
  <div style="font-size: 0.78rem; color: #8b889c; margin-bottom: 0.5rem;">
    <strong>Bindings & Interfaces:</strong> Implements <code>ILauncherOverlayCallback</code> for gestures. Mounts <code>RPDev Feed Modules</code> cards via validated <code>card-v1.schema.json</code>.
  </div>
  <div>
    <a class="tag-pill" href="../tags/android">#android</a>
    <a class="tag-pill" href="../tags/compose">#compose</a>
    <a class="tag-pill" href="../tags/keystore">#keystore</a>
    <a class="tag-pill" href="../tags/aidl">#aidl</a>
    <a class="tag-pill" href="../tags/security">#security</a>
  </div>
  <div style="margin-top: 0.65rem; font-size: 0.82rem;">
    <strong>Documentation & Specs:</strong> 
    <a href="../projects/android/rpdev_feed">Architecture Spec</a> • 
    <a href="https://wiki.iamrp.dev/feed/" target="_blank" rel="noopener">Wiki Manual ↗</a> • 
    <a href="https://github.com/RPDevs-Builds/RPDev-Feed" target="_blank" rel="noopener">Source Code ↗</a>
  </div>
</div>

<div class="project-subcard" id="project-modules">
  <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap;">
    <h4 style="margin: 0; color: #fff;">🧩 RPDev Feed Modules Hub (Pluggable Micro-Cards)</h4>
    <span class="telemetry-badge badge-live">GA v1.2.1</span>
  </div>
  <p style="margin: 0.5rem 0; font-size: 0.88rem; color: #e2e1e8;">
    Library of 9 modular cards providing weather radar, battery telemetry, GitHub activity, web scrapers, Home Assistant controls, Docker node health, and custom REST cards.
  </p>
  <div style="font-size: 0.78rem; color: #8b889c; margin-bottom: 0.5rem;">
    <strong>Bindings & Interfaces:</strong> Pulls dynamic manifests from <code>cdn.iamrp.dev/schemas/card-v1.schema.json</code>. Connects to <code>DocIngest</code> for offline MCP knowledge summaries.
  </div>
  <div>
    <a class="tag-pill" href="../tags/modules">#modules</a>
    <a class="tag-pill" href="../tags/plugins">#plugins</a>
    <a class="tag-pill" href="../tags/cdn">#cdn</a>
    <a class="tag-pill" href="../tags/android">#android</a>
  </div>
  <div style="margin-top: 0.65rem; font-size: 0.82rem;">
    <strong>Documentation & Specs:</strong> 
    <a href="../projects/android/rpdev_feed_modules">Architecture Spec</a> • 
    <a href="https://wiki.iamrp.dev/modules/" target="_blank" rel="noopener">Wiki Manual ↗</a> • 
    <a href="https://github.com/RPDevs-Builds/RPDev-Feed-Modules" target="_blank" rel="noopener">Source Code ↗</a>
  </div>
</div>

---

### 🛡️ Pillar 2: Zero-Trust Hardware Security & Cryptography
*Hardware security tokens, bootloader firmware, encrypted secrets pipelines, and bare-metal recovery toolkits.*

<div class="project-subcard" id="project-fido2">
  <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap;">
    <h4 style="margin: 0; color: #fff;">🔑 FIDO2 + Age + Chezmoi Hardware Secret Management</h4>
    <span class="telemetry-badge airgapped">HARDWARE BOUND</span>
  </div>
  <p style="margin: 0.5rem 0; font-size: 0.88rem; color: #e2e1e8;">
    Hardware-hardened secrets orchestration binding physical FIDO2 cryptographic tokens with Age asymmetric encryption and Chezmoi dotfile management.
  </p>
  <div style="font-size: 0.78rem; color: #8b889c; margin-bottom: 0.5rem;">
    <strong>Bindings & Interfaces:</strong> Uses <code>age-plugin-fido2prf</code> for physical touch-required decryption. Supplies encrypted keys for router SSH, OpenWrt, and CI/CD pipelines.
  </div>
  <div>
    <a class="tag-pill" href="../tags/fido2">#fido2</a>
    <a class="tag-pill" href="../tags/age">#age</a>
    <a class="tag-pill" href="../tags/chezmoi">#chezmoi</a>
    <a class="tag-pill" href="../tags/cryptography">#cryptography</a>
    <a class="tag-pill" href="../tags/security">#security</a>
  </div>
  <div style="margin-top: 0.65rem; font-size: 0.82rem;">
    <strong>Documentation & Specs:</strong> 
    <a href="../projects/hardware-security/hardware_security_key">Architecture Spec</a> • 
    <a href="https://wiki.iamrp.dev/projects/security/fido2-security-toolkit" target="_blank" rel="noopener">Wiki Manual ↗</a>
  </div>
</div>

<div class="project-subcard" id="project-kexecboot">
  <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap;">
    <h4 style="margin: 0; color: #fff;">⚡ kexecboot.xyz Wireless Wi-Fi Network Bootloader</h4>
    <span class="telemetry-badge badge-lab">TIER 2 PILOT</span>
  </div>
  <p style="margin: 0.5rem 0; font-size: 0.88rem; color: #e2e1e8;">
    Standalone Buildroot Linux minimal initramfs kernel that initializes Wi-Fi hardware, queries authenticated HTTPS endpoints, and uses <code>kexec</code> to pivot bootloaders.
  </p>
  <div style="font-size: 0.78rem; color: #8b889c; margin-bottom: 0.5rem;">
    <strong>Bindings & Interfaces:</strong> Pulls signed boot kernels from <code>repo.iamrp.dev</code>. Verified by SHA-256 manifests hosted on <code>cdn.iamrp.dev</code>.
  </div>
  <div>
    <a class="tag-pill" href="../tags/baremetal">#baremetal</a>
    <a class="tag-pill" href="../tags/bootloaders">#bootloaders</a>
    <a class="tag-pill" href="../tags/kernel">#kernel</a>
    <a class="tag-pill" href="../tags/golang">#golang</a>
    <a class="tag-pill" href="../tags/netboot">#netboot</a>
  </div>
  <div style="margin-top: 0.65rem; font-size: 0.82rem;">
    <strong>Documentation & Specs:</strong> 
    <a href="../projects/hardware-security/kexecboot_wireless_bootloader">Architecture Spec</a> • 
    <a href="https://wiki.iamrp.dev/projects/TheoryandEarlyDev/kexecboot/" target="_blank" rel="noopener">Wiki Manual ↗</a>
  </div>
</div>

---

### 🌐 Pillar 3: Edge Networking & RF Telemetry
*High-availability OpenWrt edge routing, software-defined radio pipelines, and mesh border routers.*

<div class="project-subcard" id="project-openwrt">
  <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap;">
    <h4 style="margin: 0; color: #fff;">📡 OpenWrt ASU Image Builder & Kernel NFS Edge</h4>
    <span class="telemetry-badge badge-live">PRODUCTION FLEET</span>
  </div>
  <p style="margin: 0.5rem 0; font-size: 0.88rem; color: #e2e1e8;">
    Automated Attended Sysupgrade custom image builder and hardened kernel NFS edge platform serving isolated VLANs, NextDNS sinkholes, and Layer 2 non-NAT container networks.
  </p>
  <div style="font-size: 0.78rem; color: #8b889c; margin-bottom: 0.5rem;">
    <strong>Bindings & Interfaces:</strong> Distributes packages via <code>openwrt.repo.iamrp.dev</code>. Integrates with <code>Infra Audit Engine</code> for automated configuration drift detection.
  </div>
  <div>
    <a class="tag-pill" href="../tags/openwrt">#openwrt</a>
    <a class="tag-pill" href="../tags/networking">#networking</a>
    <a class="tag-pill" href="../tags/buildroot">#buildroot</a>
    <a class="tag-pill" href="../tags/nextdns">#nextdns</a>
    <a class="tag-pill" href="../tags/nfs">#nfs</a>
  </div>
  <div style="margin-top: 0.65rem; font-size: 0.82rem;">
    <strong>Documentation & Specs:</strong> 
    <a href="../projects/networking-and-iot/openwrt_asu_image_builder">Architecture Spec</a> • 
    <a href="https://wiki.iamrp.dev/projects/networking/openwrt-asu-builder" target="_blank" rel="noopener">Wiki Manual ↗</a> • 
    <a href="https://openwrt.repo.iamrp.dev" target="_blank" rel="noopener">Package Repository ↗</a>
  </div>
</div>

<div class="project-subcard" id="project-adsb">
  <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap;">
    <h4 style="margin: 0; color: #fff;">✈️ Dual-Band ADS-B & UAT Aviation SDR Telemetry Pipeline</h4>
    <span class="telemetry-badge badge-live">ACTIVE TELEMETRY</span>
  </div>
  <p style="margin: 0.5rem 0; font-size: 0.88rem; color: #e2e1e8;">
    Containerized radio frequency ingestion pipeline utilizing RTL-SDR hardware to capture 1090MHz ADS-B and 978MHz UAT flight telemetry, feeding OpenTelemetry and Alloy.
  </p>
  <div style="font-size: 0.78rem; color: #8b889c; margin-bottom: 0.5rem;">
    <strong>Bindings & Interfaces:</strong> Feeds real-time RF frames to Prometheus/Alloy collectors and outputs live JSON tracking streams to <code>RPDev Feed Modules</code>.
  </div>
  <div>
    <a class="tag-pill" href="../tags/sdr">#sdr</a>
    <a class="tag-pill" href="../tags/rf">#rf</a>
    <a class="tag-pill" href="../tags/telemetry">#telemetry</a>
    <a class="tag-pill" href="../tags/aviation">#aviation</a>
    <a class="tag-pill" href="../tags/docker">#docker</a>
  </div>
  <div style="margin-top: 0.65rem; font-size: 0.82rem;">
    <strong>Documentation & Specs:</strong> 
    <a href="../projects/networking-and-iot/adsb_aviation_sdr_telemetry_pipeline">Architecture Spec</a> • 
    <a href="https://wiki.iamrp.dev/projects/networking/adsb-aviation-sdr" target="_blank" rel="noopener">Wiki Manual ↗</a>
  </div>
</div>

---

### 🏗️ Pillar 4: Self-Hosted Infrastructure & CI/CD Fleet
*Multi-arch OCI image build engines, self-hosted GitHub Actions runners, observability stacks, and storage tiering.*

<div class="project-subcard" id="project-fleet">
  <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap;">
    <h4 style="margin: 0; color: #fff;">🏭 Self-Hosted Multi-Node CI/CD Build Fleet</h4>
    <span class="telemetry-badge badge-live">BUILD BACKBONE</span>
  </div>
  <p style="margin: 0.5rem 0; font-size: 0.88rem; color: #e2e1e8;">
    Distributed compilation fleet orchestrating arm64, x86_64, and Android builds across bare-metal nodes with hardware caching, ccache volumes, and ephemeral runner workers.
  </p>
  <div style="font-size: 0.78rem; color: #8b889c; margin-bottom: 0.5rem;">
    <strong>Bindings & Interfaces:</strong> Powers build dispatch for all 39+ repos. Deploys release packages directly to <code>repo.iamrp.dev</code> and <code>cdn.iamrp.dev</code>.
  </div>
  <div>
    <a class="tag-pill" href="../tags/infrastructure">#infrastructure</a>
    <a class="tag-pill" href="../tags/cicd">#cicd</a>
    <a class="tag-pill" href="../tags/docker">#docker</a>
    <a class="tag-pill" href="../tags/githubactions">#githubactions</a>
    <a class="tag-pill" href="../tags/automation">#automation</a>
  </div>
  <div style="margin-top: 0.65rem; font-size: 0.82rem;">
    <strong>Documentation & Specs:</strong> 
    <a href="../projects/infrastructure-and-cicd/self_hosted_cicd_build_fleet">Architecture Spec</a> • 
    <a href="https://wiki.iamrp.dev/projects/infrastructure/self-hosted-build-fleet" target="_blank" rel="noopener">Wiki Manual ↗</a>
  </div>
</div>

<div class="project-subcard" id="project-storage">
  <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap;">
    <h4 style="margin: 0; color: #fff;">💾 Hardware-Aware Storage Tiering Architecture</h4>
    <span class="telemetry-badge badge-live">TIERED ZFS/EXT4</span>
  </div>
  <p style="margin: 0.5rem 0; font-size: 0.88rem; color: #e2e1e8;">
    Dual-tier storage protocol separating high-IOPS transactional workloads (PostgreSQL WAL, Docker overlay, Qdrant vectors) on NVMe SSDs from cold bulk storage on redundant NFS arrays.
  </p>
  <div style="font-size: 0.78rem; color: #8b889c; margin-bottom: 0.5rem;">
    <strong>Bindings & Interfaces:</strong> Mounts <code>/mnt/sharedroot</code> across fleet nodes via Linux Kernel NFS with POSIX ACLs. Backs Qdrant and Docker volume storage.
  </div>
  <div>
    <a class="tag-pill" href="../tags/storage">#storage</a>
    <a class="tag-pill" href="../tags/infrastructure">#infrastructure</a>
    <a class="tag-pill" href="../tags/architecture">#architecture</a>
    <a class="tag-pill" href="../tags/nfs">#nfs</a>
  </div>
  <div style="margin-top: 0.65rem; font-size: 0.82rem;">
    <strong>Documentation & Specs:</strong> 
    <a href="../projects/homelab/hardware_storage_tiering">Architecture Spec</a> • 
    <a href="https://wiki.iamrp.dev/projects/infrastructure/hardware-storage-tiering" target="_blank" rel="noopener">Wiki Manual ↗</a>
  </div>
</div>

---

### 🧠 Pillar 5: Local AI Control Plane & Knowledge Systems
*Model Context Protocol (MCP) gateways, offline semantic vector embeddings, and localized LLM inference engines.*

<div class="project-subcard" id="project-docingest">
  <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap;">
    <h4 style="margin: 0; color: #fff;">📚 DocIngest Suite & MCP Knowledge Corpus</h4>
    <span class="telemetry-badge badge-live">MCP ACTIVE</span>
  </div>
  <p style="margin: 0.5rem 0; font-size: 0.88rem; color: #e2e1e8;">
    High-speed documentation crawler, semantic vector embedder, and Model Context Protocol knowledge corpus allowing AI agents to query all ecosystem manuals with zero cloud leakage.
  </p>
  <div style="font-size: 0.78rem; color: #8b889c; margin-bottom: 0.5rem;">
    <strong>Bindings & Interfaces:</strong> Exposes tools (<code>find-docs</code>, <code>read-docs</code>, <code>query-docs</code>) via MCP stdio/SSE. Indexes Qdrant vectors using <code>fastembed</code>.
  </div>
  <div>
    <a class="tag-pill" href="../tags/docingest">#docingest</a>
    <a class="tag-pill" href="../tags/mcp">#mcp</a>
    <a class="tag-pill" href="../tags/qdrant">#qdrant</a>
    <a class="tag-pill" href="../tags/ai">#ai</a>
    <a class="tag-pill" href="../tags/telemetry">#telemetry</a>
  </div>
  <div style="margin-top: 0.65rem; font-size: 0.82rem;">
    <strong>Documentation & Specs:</strong> 
    <a href="../projects/homelab/docingest">Architecture Spec</a> • 
    <a href="https://docingest.iamrp.dev" target="_blank" rel="noopener">Live Engine ↗</a> • 
    <a href="https://blog.iamrp.dev/articles/MCP_Enterprise" target="_blank" rel="noopener">Enterprise MCP Monograph ↗</a>
  </div>
</div>

<div class="project-subcard" id="project-llm">
  <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap;">
    <h4 style="margin: 0; color: #fff;">⚡ Local LLM Control Plane & Multi-Agent Swarm Orchestrator</h4>
    <span class="telemetry-badge badge-live">SECURE AGENTS</span>
  </div>
  <p style="margin: 0.5rem 0; font-size: 0.88rem; color: #e2e1e8;">
    Localized inference backbone hosting quantized models (Llama 3.3, DeepSeek, Qwen) with strict guardrails, token budget quotas, and deterministic tool execution routers.
  </p>
  <div style="font-size: 0.78rem; color: #8b889c; margin-bottom: 0.5rem;">
    <strong>Bindings & Interfaces:</strong> Connects to Ollama on <code>llmadmin01</code>. Enforces least-privilege token routing through <code>mcp-gateway</code>.
  </div>
  <div>
    <a class="tag-pill" href="../tags/ai">#ai</a>
    <a class="tag-pill" href="../tags/llms">#llms</a>
    <a class="tag-pill" href="../tags/mcp">#mcp</a>
    <a class="tag-pill" href="../tags/workflow-automation">#workflow-automation</a>
  </div>
  <div style="margin-top: 0.65rem; font-size: 0.82rem;">
    <strong>Documentation & Specs:</strong> 
    <a href="https://blog.iamrp.dev/research/LLM_Control_Plane" target="_blank" rel="noopener">Research Monograph ↗</a> • 
    <a href="https://wiki.iamrp.dev/research/llm-control-plane" target="_blank" rel="noopener">Wiki Runbook ↗</a>
  </div>
</div>

---

### 📋 Pillar 6: Enterprise Governance, Policies & Compliance
*Modernized cybersecurity policy suite aligning with NIST CSF 2.0, ISO 27001, and SOC 2 Trust Principles.*

<div class="project-subcard" id="project-governance">
  <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap;">
    <h4 style="margin: 0; color: #fff;">📋 Authoritative Suite of 18 Enterprise Security Policies</h4>
    <span class="telemetry-badge badge-corp">AUDITED 2026</span>
  </div>
  <p style="margin: 0.5rem 0; font-size: 0.88rem; color: #e2e1e8;">
    Production-tested institutional governance playbooks authored by Richard P. Dissell covering Zero-Trust access, incident response drills, change management, and AI augmentation.
  </p>
  <div style="font-size: 0.78rem; color: #8b889c; margin-bottom: 0.5rem;">
    <strong>Bindings & Interfaces:</strong> Forms the compliance baseline enforced across all code commits, CI/CD runners, and edge network configurations.
  </div>
  <div>
    <a class="tag-pill" href="../tags/governance">#governance</a>
    <a class="tag-pill" href="../tags/policy">#policy</a>
    <a class="tag-pill" href="../tags/nist">#nist</a>
    <a class="tag-pill" href="../tags/iso27001">#iso27001</a>
    <a class="tag-pill" href="../tags/soc2">#soc2</a>
    <a class="tag-pill" href="../tags/modernized-2026">#modernized-2026</a>
  </div>
  <div style="margin-top: 0.65rem; font-size: 0.82rem;">
    <strong>Documentation & Specs:</strong> 
    <a href="../projects/governance-and-policies/">Policy Suite</a> • 
    <a href="https://wiki.iamrp.dev/projects/governance/" target="_blank" rel="noopener">Wiki Governance Hub ↗</a>
  </div>
</div>

---

## 🏷️ Complete Semantic Tag Taxonomy Matrix

Every topic and technology across the RPDev ecosystem is cataloged under the following standardized semantic taxonomy. Click any tag to view all associated notes, articles, and architectures.

<div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 1rem; margin-top: 1.5rem;">

  <div style="border: 1px solid #1e1b2e; background: #0e0a17; border-radius: 6px; padding: 1rem;">
    <div style="font-weight: 700; color: #00afaf; font-size: 0.9rem; margin-bottom: 0.5rem;">🛡️ Zero-Trust Security & Identity</div>
    <div>
      <a class="tag-pill" href="../tags/security">#security (12)</a>
      <a class="tag-pill" href="../tags/zerotrust">#zerotrust (2)</a>
      <a class="tag-pill" href="../tags/zero-trust">#zero-trust (1)</a>
      <a class="tag-pill" href="../tags/fido2">#fido2 (3)</a>
      <a class="tag-pill" href="../tags/age">#age (1)</a>
      <a class="tag-pill" href="../tags/cryptography">#cryptography (2)</a>
      <a class="tag-pill" href="../tags/pgp">#pgp (1)</a>
      <a class="tag-pill" href="../tags/identity">#identity (2)</a>
      <a class="tag-pill" href="../tags/keystore">#keystore (1)</a>
      <a class="tag-pill" href="../tags/crowdsec">#crowdsec (3)</a>
      <a class="tag-pill" href="../tags/wazuh">#wazuh (1)</a>
      <a class="tag-pill" href="../tags/siem">#siem (1)</a>
      <a class="tag-pill" href="../tags/threatintel">#threatintel (1)</a>
    </div>
  </div>

  <div style="border: 1px solid #1e1b2e; background: #0e0a17; border-radius: 6px; padding: 1rem;">
    <div style="font-weight: 700; color: #00ff88; font-size: 0.9rem; margin-bottom: 0.5rem;">📱 Android & Mobile Architecture</div>
    <div>
      <a class="tag-pill" href="../tags/android">#android (5)</a>
      <a class="tag-pill" href="../tags/launcher">#launcher (1)</a>
      <a class="tag-pill" href="../tags/aosp">#aosp (2)</a>
      <a class="tag-pill" href="../tags/compose">#compose (1)</a>
      <a class="tag-pill" href="../tags/kotlin">#kotlin (1)</a>
      <a class="tag-pill" href="../tags/aidl">#aidl (1)</a>
      <a class="tag-pill" href="../tags/modules">#modules (1)</a>
      <a class="tag-pill" href="../tags/plugins">#plugins (1)</a>
      <a class="tag-pill" href="../tags/mobile">#mobile (1)</a>
      <a class="tag-pill" href="../tags/scrcpy">#scrcpy (1)</a>
      <a class="tag-pill" href="../tags/datastore">#datastore (1)</a>
    </div>
  </div>

  <div style="border: 1px solid #1e1b2e; background: #0e0a17; border-radius: 6px; padding: 1rem;">
    <div style="font-weight: 700; color: #5fafd7; font-size: 0.9rem; margin-bottom: 0.5rem;">🌐 Edge Networking & RF Telemetry</div>
    <div>
      <a class="tag-pill" href="../tags/networking">#networking (5)</a>
      <a class="tag-pill" href="../tags/openwrt">#openwrt (7)</a>
      <a class="tag-pill" href="../tags/sdr">#sdr (3)</a>
      <a class="tag-pill" href="../tags/rf">#rf (2)</a>
      <a class="tag-pill" href="../tags/aviation">#aviation (1)</a>
      <a class="tag-pill" href="../tags/telemetry">#telemetry (4)</a>
      <a class="tag-pill" href="../tags/openthread">#openthread (2)</a>
      <a class="tag-pill" href="../tags/nextdns">#nextdns (2)</a>
      <a class="tag-pill" href="../tags/nfs">#nfs (2)</a>
      <a class="tag-pill" href="../tags/macvlan">#macvlan (1)</a>
      <a class="tag-pill" href="../tags/rtsp">#rtsp (1)</a>
    </div>
  </div>

  <div style="border: 1px solid #1e1b2e; background: #0e0a17; border-radius: 6px; padding: 1rem;">
    <div style="font-weight: 700; color: #ffbb00; font-size: 0.9rem; margin-bottom: 0.5rem;">🏗️ Infrastructure, CI/CD & Storage</div>
    <div>
      <a class="tag-pill" href="../tags/infrastructure">#infrastructure (8)</a>
      <a class="tag-pill" href="../tags/cicd">#cicd (3)</a>
      <a class="tag-pill" href="../tags/docker">#docker (10)</a>
      <a class="tag-pill" href="../tags/githubactions">#githubactions (2)</a>
      <a class="tag-pill" href="../tags/automation">#automation (3)</a>
      <a class="tag-pill" href="../tags/alloy">#alloy (1)</a>
      <a class="tag-pill" href="../tags/coolify">#coolify (1)</a>
      <a class="tag-pill" href="../tags/paas">#paas (1)</a>
      <a class="tag-pill" href="../tags/storage">#storage (3)</a>
      <a class="tag-pill" href="../tags/observability">#observability (2)</a>
      <a class="tag-pill" href="../tags/opentelemetry">#opentelemetry (1)</a>
    </div>
  </div>

  <div style="border: 1px solid #1e1b2e; background: #0e0a17; border-radius: 6px; padding: 1rem;">
    <div style="font-weight: 700; color: #b026ff; font-size: 0.9rem; margin-bottom: 0.5rem;">🧠 Local AI, Knowledge & MCP</div>
    <div>
      <a class="tag-pill" href="../tags/ai">#ai (3)</a>
      <a class="tag-pill" href="../tags/llms">#llms (1)</a>
      <a class="tag-pill" href="../tags/mcp">#mcp (2)</a>
      <a class="tag-pill" href="../tags/docingest">#docingest (1)</a>
      <a class="tag-pill" href="../tags/qdrant">#qdrant (2)</a>
      <a class="tag-pill" href="../tags/python">#python (4)</a>
      <a class="tag-pill" href="../tags/workflow-automation">#workflow-automation (1)</a>
      <a class="tag-pill" href="../tags/computervision">#computervision (1)</a>
    </div>
  </div>

  <div style="border: 1px solid #1e1b2e; background: #0e0a17; border-radius: 6px; padding: 1rem;">
    <div style="font-weight: 700; color: #ff8800; font-size: 0.9rem; margin-bottom: 0.5rem;">📋 Governance, Compliance & Policy</div>
    <div>
      <a class="tag-pill" href="../tags/governance">#governance (5)</a>
      <a class="tag-pill" href="../tags/policy">#policy (14)</a>
      <a class="tag-pill" href="../tags/nist">#nist (1)</a>
      <a class="tag-pill" href="../tags/iso27001">#iso27001 (1)</a>
      <a class="tag-pill" href="../tags/soc2">#soc2 (1)</a>
      <a class="tag-pill" href="../tags/risk-management">#risk-management (1)</a>
      <a class="tag-pill" href="../tags/vendor-management">#vendor-management (1)</a>
      <a class="tag-pill" href="../tags/training">#training (1)</a>
      <a class="tag-pill" href="../tags/modernized">#modernized (7)</a>
      <a class="tag-pill" href="../tags/modernized-2026">#modernized-2026 (3)</a>
    </div>
  </div>

</div>

<!-- Client-side Interactive Graph Engine Script -->
<script>
(function() {
  const nodes = [
    // Pillars (Central Anchors)
    { id: "pillar-android", name: "Android Sovereign", pillar: "android", r: 24, x: 260, y: 160, color: "#00afaf", icon: "📱", target: "project-launcher" },
    { id: "pillar-security", name: "Hardware Security", pillar: "security", r: 24, x: 480, y: 130, color: "#5fafd7", icon: "🛡️", target: "project-fido2" },
    { id: "pillar-networking", name: "Edge & RF", pillar: "networking", r: 24, x: 740, y: 160, color: "#00ff88", icon: "🌐", target: "project-openwrt" },
    { id: "pillar-infrastructure", name: "CI/CD & Fleet", pillar: "infrastructure", r: 24, x: 760, y: 440, color: "#ffbb00", icon: "🏗️", target: "project-fleet" },
    { id: "pillar-ai", name: "Local AI & MCP", pillar: "ai", r: 24, x: 480, y: 470, color: "#b026ff", icon: "🧠", target: "project-docingest" },
    { id: "pillar-governance", name: "Governance", pillar: "governance", r: 24, x: 240, y: 440, color: "#ff8800", icon: "📋", target: "project-governance" },

    // Android Projects
    { id: "launcher", name: "RPDev Launcher", pillar: "android", r: 16, x: 140, y: 110, color: "#00afaf", icon: "🚀", target: "project-launcher" },
    { id: "feed", name: "RPDev Feed", pillar: "android", r: 16, x: 200, y: 260, color: "#00afaf", icon: "📰", target: "project-feed" },
    { id: "modules", name: "Feed Modules Hub", pillar: "android", r: 16, x: 330, y: 260, color: "#00afaf", icon: "🧩", target: "project-modules" },

    // Hardware Security Projects
    { id: "fido2", name: "FIDO2 + Age Key", pillar: "security", r: 16, x: 420, y: 50, color: "#5fafd7", icon: "🔑", target: "project-fido2" },
    { id: "kexecboot", name: "kexecboot.xyz", pillar: "security", r: 16, x: 560, y: 50, color: "#5fafd7", icon: "⚡", target: "project-kexecboot" },

    // Edge & Networking Projects
    { id: "openwrt", name: "OpenWrt ASU Builder", pillar: "networking", r: 16, x: 860, y: 110, color: "#00ff88", icon: "📡", target: "project-openwrt" },
    { id: "adsb", name: "ADS-B SDR Pipeline", pillar: "networking", r: 16, x: 860, y: 240, color: "#00ff88", icon: "✈️", target: "project-adsb" },

    // Infrastructure Projects
    { id: "fleet", name: "Build Fleet", pillar: "infrastructure", r: 16, x: 890, y: 430, color: "#ffbb00", icon: "🏭", target: "project-fleet" },
    { id: "storage", name: "Tiered Storage", pillar: "infrastructure", r: 16, x: 740, y: 560, color: "#ffbb00", icon: "💾", target: "project-storage" },

    // Local AI & MCP Projects
    { id: "docingest", name: "DocIngest Suite", pillar: "ai", r: 16, x: 400, y: 560, color: "#b026ff", icon: "📚", target: "project-docingest" },
    { id: "llm", name: "LLM Control Plane", pillar: "ai", r: 16, x: 570, y: 560, color: "#b026ff", icon: "⚡", target: "project-llm" },

    // Governance
    { id: "policies", name: "18 Security Policies", pillar: "governance", r: 16, x: 120, y: 470, color: "#ff8800", icon: "📋", target: "project-governance" }
  ];

  const links = [
    // Intra-Pillar
    { source: "launcher", target: "feed", label: "AIDL Overlay IPC", color: "#00afaf" },
    { source: "feed", target: "modules", label: "Dynamic Card Schemas", color: "#00afaf" },
    { source: "pillar-android", target: "launcher", label: "", color: "#00afaf" },
    { source: "pillar-android", target: "feed", label: "", color: "#00afaf" },
    { source: "pillar-android", target: "modules", label: "", color: "#00afaf" },

    { source: "pillar-security", target: "fido2", label: "", color: "#5fafd7" },
    { source: "pillar-security", target: "kexecboot", label: "", color: "#5fafd7" },

    { source: "pillar-networking", target: "openwrt", label: "", color: "#00ff88" },
    { source: "pillar-networking", target: "adsb", label: "", color: "#00ff88" },

    { source: "pillar-infrastructure", target: "fleet", label: "", color: "#ffbb00" },
    { source: "pillar-infrastructure", target: "storage", label: "", color: "#ffbb00" },

    { source: "pillar-ai", target: "docingest", label: "", color: "#b026ff" },
    { source: "pillar-ai", target: "llm", label: "", color: "#b026ff" },

    { source: "pillar-governance", target: "policies", label: "", color: "#ff8800" },

    // Inter-Pillar Cross-Bindings
    { source: "modules", target: "docingest", label: "MCP Knowledge Queries", color: "#b026ff" },
    { source: "modules", target: "adsb", label: "Live Telemetry Feed", color: "#00ff88" },
    { source: "fleet", target: "openwrt", label: "Automated ASU Compilation", color: "#ffbb00" },
    { source: "fido2", target: "fleet", label: "Hardware Signed Commits", color: "#5fafd7" },
    { source: "fido2", target: "openwrt", label: "Hardware Root SSH", color: "#5fafd7" },
    { source: "kexecboot", target: "openwrt", label: "Network Bootloader Pivot", color: "#00ff88" },
    { source: "storage", target: "docingest", label: "Qdrant Vector Mounts", color: "#ffbb00" },
    { source: "docingest", target: "llm", label: "RAG Context Feeds", color: "#b026ff" },
    { source: "policies", target: "pillar-android", label: "Zero-Telemetry Compliance", color: "#ff8800" },
    { source: "policies", target: "fleet", label: "SDLC & Change Control", color: "#ff8800" },
    { source: "pillar-governance", target: "pillar-security", label: "NIST CSF Controls", color: "#ff8800" }
  ];

  const svg = document.getElementById("ecosystem-svg");
  const edgesLayer = document.getElementById("edges-layer");
  const nodesLayer = document.getElementById("nodes-layer");
  const tooltip = document.getElementById("node-tooltip");

  if (!svg || !edgesLayer || !nodesLayer) return;

  function renderGraph() {
    edgesLayer.innerHTML = "";
    nodesLayer.innerHTML = "";

    // Render Edges
    links.forEach(link => {
      const srcNode = nodes.find(n => n.id === link.source);
      const tgtNode = nodes.find(n => n.id === link.target);
      if (!srcNode || !tgtNode) return;

      const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
      line.setAttribute("x1", srcNode.x);
      line.setAttribute("y1", srcNode.y);
      line.setAttribute("x2", tgtNode.x);
      line.setAttribute("y2", tgtNode.y);
      line.setAttribute("stroke", link.color || "#00afaf");
      line.setAttribute("stroke-width", "1.5");
      line.setAttribute("class", `edge-line edge-${srcNode.pillar} edge-${tgtNode.pillar}`);
      line.setAttribute("data-src", srcNode.id);
      line.setAttribute("data-tgt", tgtNode.id);
      line.setAttribute("data-label", link.label || "");

      line.addEventListener("mouseenter", (e) => {
        if (link.label) {
          tooltip.style.display = "block";
          tooltip.innerHTML = `<strong>Protocol Binding:</strong><br/>${link.label}`;
          tooltip.style.left = (e.offsetX + 10) + "px";
          tooltip.style.top = (e.offsetY - 30) + "px";
        }
      });
      line.addEventListener("mouseleave", () => {
        tooltip.style.display = "none";
      });

      edgesLayer.appendChild(line);
    });

    // Render Nodes
    nodes.forEach(node => {
      const g = document.createElementNS("http://www.w3.org/2000/svg", "g");
      g.setAttribute("class", `node-group node-pillar-${node.pillar}`);
      g.setAttribute("data-id", node.id);
      g.setAttribute("transform", `translate(${node.x}, ${node.y})`);
      g.style.cursor = "pointer";

      // Glow halo
      const halo = document.createElementNS("http://www.w3.org/2000/svg", "circle");
      halo.setAttribute("r", node.r + 3);
      halo.setAttribute("fill", "none");
      halo.setAttribute("stroke", node.color);
      halo.setAttribute("stroke-width", "1.5");
      halo.setAttribute("stroke-opacity", "0.4");
      halo.setAttribute("class", "node-halo");

      // Core circle
      const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
      circle.setAttribute("r", node.r);
      circle.setAttribute("fill", "#0e0917");
      circle.setAttribute("stroke", node.color);
      circle.setAttribute("stroke-width", "2");
      circle.setAttribute("class", "node-circle");

      // Icon text
      const icon = document.createElementNS("http://www.w3.org/2000/svg", "text");
      icon.setAttribute("text-anchor", "middle");
      icon.setAttribute("dominant-baseline", "central");
      icon.setAttribute("font-size", node.r > 20 ? "15" : "11");
      icon.textContent = node.icon || "●";

      // Label below
      const label = document.createElementNS("http://www.w3.org/2000/svg", "text");
      label.setAttribute("y", node.r + 14);
      label.setAttribute("class", "node-label");
      label.textContent = node.name;

      g.appendChild(halo);
      g.appendChild(circle);
      g.appendChild(icon);
      g.appendChild(label);

      // Node Interactions
      g.addEventListener("mouseenter", (e) => {
        highlightConnections(node.id);
        tooltip.style.display = "block";
        tooltip.innerHTML = `<strong style="color:${node.color}">${node.name}</strong><br/><span style="color:#8b889c">Pillar: ${node.pillar.toUpperCase()}</span><br/>Click to view architectural specification ↓`;
        tooltip.style.left = (e.offsetX + 15) + "px";
        tooltip.style.top = (e.offsetY - 30) + "px";
      });

      g.addEventListener("mousemove", (e) => {
        tooltip.style.left = (e.offsetX + 15) + "px";
        tooltip.style.top = (e.offsetY - 30) + "px";
      });

      g.addEventListener("mouseleave", () => {
        resetHighlights();
        tooltip.style.display = "none";
      });

      g.addEventListener("click", () => {
        if (node.target) {
          const el = document.getElementById(node.target);
          if (el) {
            el.scrollIntoView({ behavior: "smooth", block: "center" });
            el.style.borderColor = "#00ff88";
            el.style.boxShadow = "0 0 20px rgba(0, 255, 136, 0.4)";
            setTimeout(() => {
              el.style.borderColor = "";
              el.style.boxShadow = "";
            }, 2500);
          }
        }
      });

      // Node Dragging
      let isDragging = false;
      let startX, startY;

      g.addEventListener("mousedown", (e) => {
        isDragging = true;
        startX = e.clientX;
        startY = e.clientY;
        e.stopPropagation();
      });

      window.addEventListener("mousemove", (e) => {
        if (!isDragging) return;
        const ctm = svg.getScreenCTM();
        if (!ctm) return;
        node.x += (e.movementX) / ctm.a;
        node.y += (e.movementY) / ctm.d;
        g.setAttribute("transform", `translate(${node.x}, ${node.y})`);

        // Update lines
        document.querySelectorAll(`line[data-src="${node.id}"]`).forEach(l => {
          l.setAttribute("x1", node.x);
          l.setAttribute("y1", node.y);
        });
        document.querySelectorAll(`line[data-tgt="${node.id}"]`).forEach(l => {
          l.setAttribute("x2", node.x);
          l.setAttribute("y2", node.y);
        });
      });

      window.addEventListener("mouseup", () => {
        isDragging = false;
      });

      nodesLayer.appendChild(g);
    });
  }

  function highlightConnections(nodeId) {
    const connectedNodeIds = new Set([nodeId]);

    document.querySelectorAll(".edge-line").forEach(l => {
      const src = l.getAttribute("data-src");
      const tgt = l.getAttribute("data-tgt");
      if (src === nodeId || tgt === nodeId) {
        l.classList.add("highlighted");
        connectedNodeIds.add(src);
        connectedNodeIds.add(tgt);
      } else {
        l.style.opacity = "0.08";
      }
    });

    document.querySelectorAll(".node-group").forEach(ng => {
      const id = ng.getAttribute("data-id");
      if (!connectedNodeIds.has(id)) {
        ng.classList.add("node-dimmed");
      }
    });
  }

  function resetHighlights() {
    document.querySelectorAll(".edge-line").forEach(l => {
      l.classList.remove("highlighted");
      l.style.opacity = "";
    });
    document.querySelectorAll(".node-group").forEach(ng => {
      ng.classList.remove("node-dimmed");
    });
  }

  window.filterGraph = function(pillar) {
    document.querySelectorAll(".graph-filter-btn").forEach(b => {
      b.classList.toggle("active", b.getAttribute("data-pillar") === pillar);
    });

    if (pillar === "all") {
      document.querySelectorAll(".node-group").forEach(ng => ng.style.display = "");
      document.querySelectorAll(".edge-line").forEach(l => l.style.display = "");
    } else {
      document.querySelectorAll(".node-group").forEach(ng => {
        const matches = ng.classList.contains(`node-pillar-${pillar}`);
        ng.style.display = matches ? "" : "none";
      });
      document.querySelectorAll(".edge-line").forEach(l => {
        const matches = l.classList.contains(`edge-${pillar}`);
        l.style.display = matches ? "" : "none";
      });
    }
  };

  window.resetGraphView = function() {
    filterGraph("all");
    renderGraph();
  };

  renderGraph();
})();
</script>
