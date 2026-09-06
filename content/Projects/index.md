---
title: "Engineering & Systems Projects Master Catalog"
description: "Comprehensive portfolio of systems architecture, mobile ecosystems, hardware security, edge networking, infrastructure, and defensive tools by Richard P. Dissell."
aliases:
  - /projects--and--research/projects
  - /projects--and--research
  - /projects
tags:
  - projects
  - engineering
  - portfolio
  - architecture
---

# 🚀 Engineering & Systems Projects Master Catalog

> **Production architectures, bare-metal telemetry systems, mobile platforms, and distributed container environments engineered for zero-trust resilience and complete operational sovereignty.**

<nav class="projects-category-bar">
  <a href="#android" class="cat-pill"><span class="cat-icon">📱</span> Android</a>
  <a href="#homelab" class="cat-pill"><span class="cat-icon">🧪</span> Homelab</a>
  <a href="#ai-swarms" class="cat-pill"><span class="cat-icon">🧠</span> AI & Swarms</a>
  <a href="#hardware-security" class="cat-pill"><span class="cat-icon">🔒</span> Hardware Security</a>
  <a href="#networking-iot" class="cat-pill"><span class="cat-icon">🌐</span> Networking & IoT</a>
  <a href="#infra-cicd" class="cat-pill"><span class="cat-icon">📊</span> Infra & CI/CD</a>
  <a href="#defensive-security" class="cat-pill"><span class="cat-icon">🛡️</span> Defensive Security</a>
  <a href="#governance-policies" class="cat-pill"><span class="cat-icon">📋</span> Governance & Policies</a>
</nav>

---

## ⭐ Featured Architectural Flagships

> [!tip] Quick-Scan Portfolio Highlights
> High-impact production systems showcasing cross-disciplinary engineering across mobile operating environments, AI control planes, hardware security tokens, and multi-node fleet telemetry:

1. **[[Projects/Android/index|RPDev Mobile Ecosystem: Sovereign Android 16 Desktop]]**  
   *High-performance, privacy-first mobile operating environment. Decouples the 120Hz launcher desktop from contextual intelligence via Android's high-speed AIDL IPC bridge (`WINDOW_OVERLAY`). Features zero telemetry, hardware Keystore AES256_GCM encryption, on-device SQLite caching, nested folders with cycle-safe graph traversal, and 9 extensible Hub modules.*  
   *Portals: [Launcher](https://launcher.iamrp.dev) • [Feed](https://feed.launcher.iamrp.dev) • [Repository](https://repo.launcher.iamrp.dev) • [Wiki](https://wiki.iamrp.dev) • [CDN](https://cdn.iamrp.dev)*

2. **[[Projects/Infrastructure-and-CICD/Infra_Audit_Engine|Infra Audit Engine: Continuous Multi-Node Drift Orchestrator]]**  
   *Automated multi-node hardware and config drift orchestrator compiling `CURRENT_ENV.yml` across OpenWrt routers, GPU compute nodes, and distributed Docker clusters.*

3. **[[Projects/Hardware-Security/Hardware_Security_Key|Hardware-Hardened Secret Management (FIDO2 + Age + Chezmoi)]]**  
   *Physical FIDO2 key derivation (`age-plugin-fido2prf`) binding symmetric encryption to hardware tokens with dual-recipient master recovery and zero plaintext exposure.*

4. **[[Projects/Hardware-Security/Kexecboot_Wireless_Bootloader|kexecboot.xyz: Wireless Network Bootloader]]**  
   *Pre-OS WPA2/WPA3 Wi-Fi authentication, automated `netboot.xyz` parsing, and direct in-memory Linux kernel kexec pivot.*

5. **[[Projects/Infrastructure-and-CICD/Unified_Fleet_Observability_Alloy|Unified Fleet Observability: Grafana Alloy & eBPF Telemetry]]**  
   *Consolidating multi-node container metrics, cgroup v2 PSI memory traces, and OpenTelemetry collector pipelines across edge and bare-metal nodes.*

---

<section id="android" class="project-category-section">

## 📱 [[Projects/Android/index|Android Ecosystem & Mobile Systems]]

AOSP-based operating environment engineered for deterministic 120Hz rendering, zero telemetry, and contextual intelligence.

| Project | Description | Live Portals & Docs |
|---|---|---|
| **[[Projects/Android/index|RPDev Mobile Ecosystem]]** | Master architectural overview of the decoupled Android 16 home desktop environment. | [Wiki Overview](https://wiki.iamrp.dev) |
| **[[Projects/Android/RPDev_Launcher|RPDev Launcher]]** | Modern AOSP launcher with <35MB idle footprint, DataStore reactive flows, and cycle-safe nested folders. | [launcher.iamrp.dev](https://launcher.iamrp.dev) |
| **[[Projects/Android/RPDev_Feed|RPDev Feed]]** | Sovereign -1 screen companion replacing commercial tracking feeds with on-device RSS parsing and Keystore crypto. | [feed.launcher.iamrp.dev](https://feed.launcher.iamrp.dev) |
| **[[Projects/Android/RPDev_Feed_Modules|Hub Modules Ecosystem]]** | 9 pluggable card plugins distributed via Edge CDN for weather, telemetry, calendar, GitHub, Home Assistant, and Docker. | [repo.launcher.iamrp.dev](https://repo.launcher.iamrp.dev) |
| **[[Projects/Android/Samsung_DeX_Linux_Bridge|Samsung DeX Linux Bridge]]** | Low-latency edge bridge connecting mobile hardware to Linux workstations. | [DeX Architecture](https://wiki.iamrp.dev) |

</section>

---

<section id="homelab" class="project-category-section">

## 🧪 [[Projects/Homelab/index|Homelab Infrastructure & Hybrid Compute]]

Bare-metal virtualization, self-hosted PaaS engines, spatial storage tiering, and hardware inventory normalization.

| Project | Description | Primary Role |
|---|---|---|
| **[[Projects/Homelab/Coolify|Coolify Self-Hosted PaaS Integration]]** | Centralized application deployment engine anchored to T430 for internal orchestration and SSL management. | PaaS Orchestration |
| **[[Projects/Homelab/Coolify_Project_Plan|Coolify Implementation & Staging Plan]]** | Detailed rollout plan, resource baselines, Netdata vs Beszel benchmarking, and service migration. | Deployment Plan |
| **[[Projects/Homelab/Current_Environment|Current Fleet Environment]]** | Authoritative hardware inventory, CPU architectures, memory limits, and network routing tables. | Single Source of Truth |
| **[[Projects/Homelab/Hardware_Storage_Tiering|Spatial Hardware-Aware Storage Tiering]]** | ZFS/NVMe/NFS hierarchy routing database WALs to NVMe and static archives to SharedRoot. | Storage Optimization |

</section>

---

<section id="ai-swarms" class="project-category-section">

## 🧠 [[Projects/AI-and-Swarms/index|AI Systems, Swarms & Computer Vision]]

Autonomous multi-agent swarms, Model Context Protocol (MCP) gateways, real-time edge computer vision, and embedded firmware.

| Project | Description | Technology Stack |
|---|---|---|
| **[[Projects/AI-and-Swarms/Embedded_Linux_Camera_Firmware|Embedded Linux Camera Firmware & Edge AI Vision]]** | Custom Ingenic SoC Linux kernel, RTSP pipelines, and Qdrant vector scene intelligence. | Ingenic, Linux, Qdrant |
| **[[Research-and-Ramblings/LLM-and-Agent-Systems/LLM_Control_Plane|Gemini CLI Workspace: Control & Data Plane]]** | Decoupled swarm architecture with sub-15ms SSE streaming and session-scoped tool routing. | Python, SSE, Swarms |
| **[[Research-and-Ramblings/LLM-and-Agent-Systems/MCP_Gateway_Tool_Router|MCP Gateway: Enterprise Tool Router]]** | Stateful proxy and aggregator bridging diverse agent runtimes via Model Context Protocol. | TypeScript, MCP, Node |
| **[[Research-and-Ramblings/LLM-and-Agent-Systems/Serverless_Cloudflare_MCP|Serverless Cloudflare MCP]]** | Edge-native Model Context Protocol server executing tools on Cloudflare Workers. | Workers, Edge, SSE |
| **[[Research-and-Ramblings/LLM-and-Agent-Systems/Coral_Edge_TPU_Computer_Vision_NVR|Coral Edge TPU Computer Vision & NVR]]** | 100+ FPS real-time object detection with Coral Edge TPU and go2rtc WebRTC brokering. | Edge TPU, WebRTC, Go |
| **[[Research-and-Ramblings/LLM-and-Agent-Systems/Substrate_Digital_Nervous_System|Substrate — Digital Nervous System]]** | Distributed microservices backbone orchestrating multi-node telemetry and proactive loops. | Microservices, EventBus |

</section>

---

<section id="hardware-security" class="project-category-section">

## 🔒 [[Projects/Hardware-Security/index|Hardware Security, Cryptography & Bootloaders]]

Physical security token derivation, age encryption, pre-OS wireless network bootloaders, and zero-trust bare-metal recovery.

| Project | Description | Security Primitives |
|---|---|---|
| **[[Projects/Hardware-Security/Hardware_Security_Key|Hardware-Hardened Secret Management (FIDO2 + Age)]]** | Physical FIDO2 key derivation binding symmetric encryption to hardware tokens with dual-recipient recovery. | FIDO2, Age, Chezmoi |
| **[[Projects/Hardware-Security/FIDO2_Security_Toolkit|FIDO2 Security Toolkit & Linux PAM MFA]]** | Hardware assertion toolkit implementing physical touch verification for sudo authorization and SSH residency. | PAM, libfido2, C |
| **[[Projects/Hardware-Security/Kexecboot_Wireless_Bootloader|kexecboot.xyz: Wireless Network Bootloader]]** | Pre-OS WPA2/WPA3 Wi-Fi authentication, netboot.xyz parsing, and direct in-memory kernel kexec pivot. | kexec, C, Linux Kernel |
| **[[Projects/Hardware-Security/Ventoy_Tech_Super_Tool|Ventoy Tech Super Tool: Multi-Boot USB Configuration]]** | Multi-boot zero-trust USB environment for live digital forensics, incident triage, and bare-metal provisioning. | Ventoy, UEFI, Zero-Trust |

</section>

---

<section id="networking-iot" class="project-category-section">

## 🌐 [[Projects/Networking-and-IoT/index|Embedded Networking, Edge Routing & IoT]]

Custom OpenWrt kernel compilation, high-speed NFS storage shares, SDR radio frequency demodulation, and zero-NAT L2 container fabrics.

| Project | Description | Network Protocols |
|---|---|---|
| **[[Projects/Networking-and-IoT/OpenWrt_Kernel_NFS_Manager|OpenWrt Kernel NFS Server Manager]]** | LuCI web interface and UCI bridge for wire-speed Linux kernel `nfsd` daemons on OpenWrt routers. | NFSv4, LuCI, UCI |
| **[[Projects/Networking-and-IoT/OpenWrt_ASU_Image_Builder|OpenWrt ASU Custom Image Builder]]** | Automated on-demand firmware compilation via FastAPI, RQ workers, and isolated ImageBuilders. | FastAPI, RQ, OpenWrt |
| **[[Projects/Networking-and-IoT/OpenWRT_Blackhole_Webserver|OpenWRT Blackhole Webserver & Honeypot]]** | Ultra-lightweight edge service serving zero-byte HTTP 200 responses to hostile scans. | HTTP/S, C, Edge |
| **[[Projects/Networking-and-IoT/OpenThread_Border_Router|OpenThread Border Router Telemetry Poller]]** | 802.15.4 Thread mesh network polling daemon streaming metrics to MQTT and Grafana. | Thread, 802.15.4, MQTT |
| **[[Projects/Networking-and-IoT/ADSB_Aviation_SDR_Telemetry_Pipeline|Dual-Band ADS-B & UAT Aviation SDR Pipeline]]** | Demodulating 1090MHz Mode S and 978MHz UAT flight telemetry with RTL-SDR and WebGL radar. | 1090MHz, 978MHz, SDR |
| **[[Projects/Networking-and-IoT/SDR_and_RF_Exploration|SDR & RF Telemetry Exploration]]** | Software-Defined Radio research capturing municipal, weather satellite, and ISM band radio frequencies. | GNU Radio, RTL-SDR |
| **[[Projects/Networking-and-IoT/Layer2_Containerization|Layer 2 Virtualization & Non-NAT IPAM]]** | Macvlan/IPvlan Docker network fabric eliminating NAT port mapping bottlenecks. | Macvlan, IPvlan, L2 |

</section>

---

<section id="infra-cicd" class="project-category-section">

## 📊 [[Projects/Infrastructure-and-CICD/index|Distributed Infrastructure, Telemetry & CI/CD]]

Automated configuration drift detection, Grafana Alloy eBPF fleet telemetry, self-hosted runner fleets, and multi-arch OCI build engines.

| Project | Description | Tooling & Pipeline |
|---|---|---|
| **[[Projects/Infrastructure-and-CICD/Infra_Audit_Engine|Infra Audit Engine: Continuous Drift Orchestrator]]** | Automated Python orchestrator querying bare-metal hosts and OpenWrt to compile `CURRENT_ENV.yml`. | Python 3.12, Paramiko |
| **[[Projects/Infrastructure-and-CICD/Unified_Fleet_Observability_Alloy|Unified Fleet Observability: Grafana Alloy & eBPF]]** | Multi-node container metrics, cgroup v2 PSI memory traces, and OpenTelemetry collector pipelines. | Alloy, Prometheus, Loki |
| **[[Projects/Infrastructure-and-CICD/Self_Hosted_CICD_Build_Fleet|Self-Hosted CI/CD Build Fleet]]** | Scalable GitHub Actions runner fleet with pre-baked dependencies and isolated runner containers. | Actions, OCI, Systemd |
| **[[Projects/Infrastructure-and-CICD/Builder_Manager_OCI_Pipeline|Builder Manager: Multi-Arch OCI & Cache Engine]]** | Automated Docker build engine for `linux/amd64` and `linux/arm64` with distributed cache warmups. | Buildx, GHCR, OCI |

</section>

---

<section id="defensive-security" class="project-category-section">

## 🛡️ [[Projects/Defensive-Security/index|Defensive Security, SIEM & Threat Deception]]

Collaborative threat intelligence, Wazuh and CrowdSec SIEM, perimeter tarpits and honeypots, and privacy browser extensions.

| Project | Description | Security Controls |
|---|---|---|
| **[[Projects/Defensive-Security/Wazuh_CrowdSec_SIEM|Wazuh + CrowdSec Collaborative SIEM]]** | Unified SIEM combining Wazuh file integrity monitoring with CrowdSec community IP blocklists. | Wazuh, CrowdSec, eBPF |
| **[[Projects/Defensive-Security/Perimeter_Deception_and_Tarpits|Perimeter Deception, Honeypots & SSH Tarpits]]** | Endlessh-Go tarpits and Cowrie honeypots trapping automated botnets and extracting IOCs. | Endlessh, Cowrie, nftables |
| **[[Projects/Defensive-Security/DNS_Forge_Firefox_Addon|DNS Forge: NextDNS Firefox Add-on]]** | Manifest V3 browser privacy extension with real-time SSE stream log parsing and blocklist correlation. | WebExtensions, SSE |

</section>

---


---

<section id="governance-policies" class="project-category-section">

## 📋 [[Projects/Governance-and-Policies/index|Governance & Policies: Enterprise Standards]]

> [!caution] Legal Notice & Non-Liability Disclaimer
> **Reference Models & Educational Examples Only**: All policies, standards, frameworks, procedures, and architectural artifacts provided within this section are shared strictly as informational, educational, and reference examples demonstrating enterprise documentation engineering. **Under no circumstances does Richard P. Dissell, RPDev, or affiliated contributors assume legal liability, fiduciary responsibility, regulatory accountability, or duty of care for their governance, implementation, omission, or operational impact.** These examples do not constitute formal legal counsel, statutory advice, or certified regulatory compliance determinations. Any organization or individual adapting or referencing these materials must perform their own due diligence and consult licensed legal and cybersecurity compliance counsel.

A comprehensive suite of 18 modernized enterprise IT and cybersecurity policies, leadership charters, and operational frameworks aligned to NIST CSF 2.0, ISO/IEC 27001:2022, and SOC 2 Type II.

| Category / Tier | Highlights & Core Frameworks | Primary Focus |
|---|---|---|
| **🔒 Tier 1: Zero Trust & Security Baseline** | [[Projects/Governance-and-Policies/Information_Security_Policy|Information Security Policy]], [[Projects/Governance-and-Policies/Infrastructure_Hardening_Policy|Infrastructure Hardening]], [[Projects/Governance-and-Policies/Encryption_Policy|Encryption & PQC]], [[Projects/Governance-and-Policies/Data_Classification_Policy|Data Classification]] | Identity, Zero Trust & Cryptography |
| **⚙️ Tier 2: Engineering & Change Lifecycle** | [[Projects/Governance-and-Policies/Software_Development_Life_Cycle|SDLC Policy]], [[Projects/Governance-and-Policies/IT_Change_Management_Policy|IT Change Management]], [[Projects/Governance-and-Policies/Mobile_Device_Security_Policy|Mobile Device Security]] | GitOps, CI/CD Integrity & Mobile BYOAI |
| **🚨 Tier 3: Resilience & Incident Response** | [[Projects/Governance-and-Policies/Incident_Response_Plan|Incident Response Plan]], [[Projects/Governance-and-Policies/Disaster_Recovery_Plan|Disaster Recovery Plan]], [[Projects/Governance-and-Policies/Business_Impact_Analysis|Business Impact Analysis]], [[Projects/Governance-and-Policies/Global_Disruption_Policy|Global Disruption]] | SOAR Automation & Immutable Air-Gaps |
| **🤖 Tier 4: Frontier AI Safety & Culture** | [[Projects/Governance-and-Policies/AI_Augmentation_for_Users|AI Augmentation Guidelines]], [[Projects/Governance-and-Policies/Security_Awareness_Training|Security Awareness Curriculum]], [[Research-and-Ramblings/Articles/Philosophy|Leadership Philosophy]] | AI Guardrails & Behavioral Defense |
| **🌐 Tier 5: Supply Chain & Physical Security** | [[Projects/Governance-and-Policies/Vendor_Management_Policy|Vendor Management]], [[Projects/Governance-and-Policies/Vendor_and_Resource_Management|Technology Resource Governance]], [[Projects/Governance-and-Policies/Building_Security_Policy|Building Security]], [[Projects/Governance-and-Policies/Policy_Archive|Policy Archive]] | 4th-Party Audits & Facility Controls |

</section>


## 🔗 Related Architecture & Knowledge Graph

* **Master Resume & Experience:** Review production systems experience on **[[Resume/Master_Resume|Curriculum Vitae & Master Resume]]** and **[[Resume/Legacy_Roles|Legacy Roles & Early Career Archive]]**.
* **Security & AI Research:** Explore autonomous research swarms on **[[Research-and-Ramblings/index|Security & AI Systems Research]]** and **[[Research-and-Ramblings/Security-and-AI-Research-and-Ramblings/index|Multi-Agent Security Swarm]]**.
* **Enterprise Governance:** Review policy and compliance frameworks on **[[Governance/index|Enterprise Policy & Governance]]** and **[[Projects/Governance-and-Policies/index|Enterprise Policies Directory]]**.
* **Technical Field Guides:** Read deep architectural articles on **[[Research-and-Ramblings/Research-and-Ramblings/Articles/index|Technical Articles & Field Guides]]**, **[[Research-and-Ramblings/Articles/Zero_Trust_Edge|Zero-Trust Edge Routing]]**, and **[[Research-and-Ramblings/Articles/Systems_Automation|Systems & Automation Architecture]]**.
* **Interactive Tools:** Explore live applications on **[[Tools/index|Tools & Live Applications]]** and **[[Tools/DocIngest/index|DocIngest Suite]]**.
