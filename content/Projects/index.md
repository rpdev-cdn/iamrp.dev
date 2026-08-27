---
title: "Systems & Infrastructure Engineering Projects"
description: "Production architectures, bare-metal telemetry systems, and distributed container environments engineered for zero-trust resilience by Richard P. Dissell."
aliases:
  - /projects--and--research/projects
  - /projects--and--research
tags:
  - projects
  - engineering
  - infrastructure
---

# Systems & Infrastructure Engineering Projects

Production architectures, bare-metal telemetry systems, and distributed container environments engineered for zero-trust resilience.

---

### ⭐ Featured Architectural Flagships

> [!tip] Quick-Scan Portfolio Highlights
> High-impact production systems showcasing cross-disciplinary engineering across AI control planes, kernel bootloaders, hardware security tokens, and multi-node fleet observability:

1. **[[Projects/LLM_Control_Plane|Consolidated Gemini CLI Workspace: Control & Data Plane]]**  
   *Decoupled Control Plane (`llm-project`) and Data Plane (`llmdata-core`) orchestrating multi-agent swarms with session-aware tool routing and sub-15ms SSE streaming.*
2. **[[Projects/Infra_Audit_Engine|Infra Audit Engine: Continuous Multi-Node Drift Orchestrator]]**  
   *Automated multi-node hardware and config drift orchestrator compiling `CURRENT_ENV.yml` across OpenWrt routers, GPU compute nodes, and distributed Docker clusters.*
3. **[[Projects/Hardware_Security_Key|Hardware-Hardened Secret Management (FIDO2 + Age + Chezmoi)]]**  
   *Physical FIDO2 key derivation (`age-plugin-fido2prf`) binding symmetric encryption to hardware tokens with dual-recipient master recovery and zero plaintext exposure.*
4. **[[Projects/Kexecboot_Wireless_Bootloader|kexecboot.xyz: Wireless Network Bootloader]]**  
   *Pre-OS WPA2/WPA3 Wi-Fi authentication, automated `netboot.xyz` parsing, and direct in-memory Linux kernel kexec pivot.*
5. **[[Projects/Unified_Fleet_Observability_Alloy|Unified Fleet Observability: Grafana Alloy & eBPF Telemetry]]**  
   *Consolidating multi-node container metrics, cgroup v2 PSI memory traces, and OpenTelemetry collector pipelines across edge and bare-metal nodes.*

---

### ◈ AI, Swarms & Model Context Protocol (MCP)

- **[[Projects/LLM_Control_Plane|Consolidated Gemini CLI Workspace: Control Plane & Data Plane]]** — *Decoupled Control Plane (`llm-project`) and Data Plane (`llmdata-core`) managing multi-agent swarms.*
- **[[Projects/MCP_Gateway_Tool_Router|MCP Gateway: Enterprise Model Context Protocol Tool Router]]** — *Session-aware stateful routing, schema aggregation, and Kubernetes-native tool lifecycle management.*
- **[[Projects/Serverless_Cloudflare_MCP|Serverless Remote MCP on Cloudflare Workers]]** — *Global edge-native Model Context Protocol runtime delivering sub-15ms SSE tool execution.*
- **[[Projects/Coral_Edge_TPU_Computer_Vision_NVR|Coral Edge TPU Computer Vision & Low-Latency NVR]]** — *Google Coral Edge TPU coprocessor (100+ FPS real-time detection), `go2rtc` WebRTC broker, and tmpfs RAM buffers.*
- **[[Projects/Embedded_Linux_Camera_Firmware|Embedded Linux Camera Firmware & Edge AI Vision]]** — *Custom Ingenic SoC Linux kernel, low-latency RTSP pipelines, and real-time Qdrant vector scene intelligence.*

---

### ◈ Bare-Metal Systems, Bootloaders & Hardware Security

- **[[Projects/Kexecboot_Wireless_Bootloader|kexecboot.xyz: Wireless Network Bootloader]]** — *Pre-OS WPA2/WPA3 Wi-Fi authentication, netboot.xyz parsing, and direct in-memory kernel kexec pivot.*
- **[[Projects/Hardware_Security_Key|Hardware-Hardened Secret Management (FIDO2 + Age + Chezmoi)]]** — *Physical FIDO2 key derivation and zero plaintext secret orchestration.*
- **[[Projects/FIDO2_Security_Toolkit|FIDO2 Security Toolkit & Hardware Assertion Tools]]** — *Hardware-hardened key management binding age encryption to physical FIDO2 tokens.*
- **[[Projects/Perimeter_Deception_and_Tarpits|Perimeter Deception, Honeypots & SSH Tarpits]]** — *Trapping automated botnets with Endlessh-Go tarpits, Cowrie honeypots, and real-time CrowdSec bouncers.*
- **[[Projects/Ventoy_Tech_Super_Tool|Ventoy Tech Super Tool: Multi-Boot USB Configuration]]** — *Multi-boot zero-trust USB configuration for bare-metal diagnostics and rapid OS provisioning.*
- **[[Projects/Samsung_DeX_Linux_Bridge|Samsung DeX Linux Bridge]]** — *Low-latency edge bridge connecting mobile hardware with Linux workstations.*

---

### ◈ Embedded Networking, Edge Routing & IoT

- **[[Projects/ADSB_Aviation_SDR_Telemetry_Pipeline|Dual-Band ADS-B & UAT SDR Aviation Telemetry Pipeline]]** — *Demodulating 1090MHz Mode S & 978MHz UAT with RTL-SDR, WebGL radar, and feeder multiplexing.*
- **[[Projects/OpenWrt_Kernel_NFS_Manager|OpenWrt Kernel NFS Server Manager]]** — *LuCI web interface and UCI configuration bridge for wire-speed Linux kernel nfsd storage shares.*
- **[[Projects/OpenWrt_ASU_Image_Builder|OpenWrt Attended Sysupgrade (ASU) Custom Image Builder]]** — *Automated on-demand kernel & SquashFS firmware compilation via FastAPI, RQ workers, and ImageBuilders.*
- **[[Projects/DNS_Forge_Firefox_Addon|DNS Forge: NextDNS Firefox Add-on]]** — *Manifest V3 privacy extension with real-time SSE stream log parsing and blocklist correlation.*
- **[[Projects/OpenWRT_Blackhole_Webserver|OpenWRT Blackhole Webserver & Honeypot]]** — *Edge compute routing and high-performance honeypot trapping.*
- **[[Projects/OpenThread_Border_Router|OpenThread Border Router Telemetry Poller]]** — *802.15.4 Thread mesh network polling daemon streaming metrics to MQTT/Grafana.*
- **[[Projects/SDR_and_RF_Exploration|SDR & RF Telemetry]]** — *Software Defined Radio and UHF municipal frequency spectrum monitoring.*

---

### ◈ Distributed Infrastructure, CI/CD & SIEM

- **[[Projects/Unified_Fleet_Observability_Alloy|Unified Fleet Observability: Grafana Alloy, cAdvisor & eBPF Telemetry]]** — *Consolidating multi-node metrics, cgroup v2 PSI traces, and OpenTelemetry collector pipelines.*
- **[[Projects/Infra_Audit_Engine|Infra Audit Engine: Continuous Drift Orchestrator]]** — *Automated multi-node hardware and config drift orchestrator compiling `CURRENT_ENV.yml`.*
- **[[Projects/Substrate_Digital_Nervous_System|Substrate — Digital Nervous System]]** — *Distributed microservices backbone orchestrating multi-node telemetry and automation.*
- **[[Projects/Builder_Manager_OCI_Pipeline|Builder Manager: Multi-Arch OCI & Cache Engine]]** — *Declarative multi-platform Docker compilation, automated GHCR registry pruning, and distributed NFS cache warmups.*
- **[[Projects/Self_Hosted_CICD_Build_Fleet|Self-Hosted CI/CD Build Fleet]]** — *Multi-host GitHub Actions runner fleet with pre-baked dependencies and matrix fan-out.*
- **[[Projects/Wazuh_CrowdSec_SIEM|Wazuh + CrowdSec Collaborative SIEM]]** — *Real-time XDR threat intelligence, eBPF telemetry, and automated IP blocking.*
- **[[Projects/Layer2_Containerization|Layer 2 Virtualization & Non-NAT IPAM]]** — *Macvlan/IPvlan Docker architecture eliminating NAT port collisions.*
- **[[Projects/Hardware_Storage_Tiering|Spatial Hardware-Aware Storage Tiering]]** — *Tiered storage architecture routing DB WALs to NVMe and logs to tmpfs.*
- **[[Projects/Current_Environment|Current Fleet Environment]]** — *Live hardware specs and networking topology across all active nodes.*

---

## 🔗 Related Architecture & Knowledge Graph

* **Master Resume & Experience:** Review production systems experience on **[[Resume/Master_Resume|Curriculum Vitae & Master Resume]]** and **[[Resume/Legacy_Roles|Legacy Roles & Early Career Archive]]**.
* **Security & AI Research:** Explore autonomous research swarms on **[[Research/index|Security & AI Systems Research]]** and **[[Research/Security_Analysis_and_Research_Agent/index|Multi-Agent Security Swarm]]**.
* **Enterprise Governance:** Review policy and compliance frameworks on **[[Governance/index|Enterprise Policy & Governance]]** and **[[Governance/Policies/index|Enterprise Policies Directory]]**.
* **Technical Field Guides:** Read deep architectural articles on **[[Articles/index|Technical Articles & Field Guides]]**, **[[Zero_Trust_Edge_Routing|Zero-Trust Edge Routing]]**, and **[[Articles/Systems_and_Automation_Architecture|Systems & Automation Architecture]]**.
* **Interactive Tools:** Explore live applications on **[[Tools/index|Tools & Live Applications]]** and **[[Tools/DocIngest/index|DocIngest Suite]]**.
* **Digital Garden Hub:** Return to the home **[[index|Digital Garden Index]]**.
