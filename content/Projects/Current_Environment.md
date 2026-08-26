---
title: "Infrastructure & Lab Environment"
tags:
  - infrastructure
  - homelab
  - openwrt
  - docker
  - hardware
aliases:
  - /projects--and--research/current-environment
  - /projects/current-environment
---

# Current Environment Overview

> [!abstract] Live Infrastructure Status
> This section details the live, physical infrastructure supporting the RPDevs architecture. The environment is composed of specialized hardware nodes connected via advanced Layer 2 networking and orchestrated using decoupled storage tiering.

The network leverages a mix of standard Linux compute nodes for heavy workloads and specialized OpenWrt edge hardware for secure routing and IoT isolation. The current topology consists of three primary nodes:

## 🖥️ Node: llmadmin01 (Primary Compute & AI)
The powerhouse of the lab, heavily accelerated for AI inference, telemetry processing, and centralized container management.

* **Role**: Linux Compute Node
* **Hardware Accelerators**:
  * NVIDIA Corporation GP107GLM [Quadro P600 Mobile]
  * Global Unichip Corp. Coral Edge TPU
  * Intel Corporation CoffeeLake-H GT2 [UHD Graphics 630]
* **Storage Backbone**: Samsung NVMe SSD Controller PM9C1a
* **Memory Management**: 32GB total with 16GB ZRAM block device (transparent compression)
* **Container Engine**: Docker via `overlayfs` (`/var/lib/docker`)

## 🖥️ Node: t430 (General Compute)
A secondary compute node handling distributed workloads and infrastructure redundancy.

* **Role**: Linux Compute Node
* **Hardware Accelerators**: Intel Corporation 3rd Gen Core processor Graphics Controller
* **Memory Management**: 8GB total with 4GB ZRAM block device
* **Container Engine**: Docker via `overlayfs` (`/mnt/data/docker`)

## 🌐 Node: edge (Perimeter Routing & Security)
The OpenWrt-powered border gateway. It strictly manages complex firewall zoning, VLANs, and edge telemetry.

* **Role**: OpenWrt Edge Router
* **Core Capabilities**:
  * **Network Zoning**: Strict firewall separation across `lan`, `wan`, `iot`, `guest`, `secure`, `clients`, `servers`, and `docker` zones.
  * **DNS & Adblocking**: Handled via `dnsmasq` intercepting all DNS traffic (DoT/UDP/TCP) and enforcing custom blocklists at the edge.
  * **Edge Telemetry**: Intrusion detection and automated banning via `crowdsec` (with a local bouncer) and `collectd` performance tracking.
  * **Remote Access**: Secure tunneling via `cloudflared` (Zero Trust) and Dropbear SSH.
  * **Dynamic DNS & Certificates**: Managed via local `acme` routines pushing wildcards across `.internal.iamrp.dev` and `.iot.iamrp.dev`.

---

### 📂 Explore the Architecture
Delve deeper into the specific design patterns running on top of this hardware:

* **[[Projects/Hardware_Storage_Tiering|Hardware-Aware Storage Tiering]]**: How IOPS-heavy workloads and volatile Honeypot logs are dynamically mapped to NVMe arrays or RAM disks to prevent flash-wear.
* **[[Projects/Layer2_Containerization|Layer 2 Containerization & Networking]]**: Deep dive into the `macvlan`/`ipvlan` topology that allows containers to act as first-class citizens on the physical network.

---

## 🔗 Related Architecture & Knowledge Graph

* **Projects Directory:** Return to the complete portfolio on **[[Projects/index|Systems & Infrastructure Engineering Projects]]**.
* **Fleet Telemetry & Observability:** Live monitoring in **[[Projects/Unified_Fleet_Observability_Alloy|Unified Fleet Observability (Alloy)]]** and **[[Projects/Infra_Audit_Engine|Infra Audit Engine]]**.
* **Edge Routing & Storage:** Explored in **[[Projects/OpenWrt_Kernel_NFS_Manager|OpenWrt Kernel NFS Server]]** and **[[Projects/OpenWRT_Blackhole_Webserver|OpenWRT Blackhole Webserver]]**.
* **Governance Enforcement:** Governed by **[[Governance/Policies/Infrastructure_Hardening_Policy|Infrastructure Hardening Policy]]** and **[[Governance/Policies/Information_Security_Policy|Information Security Policy]]**.
* **Field Guides:** Read practical edge routing patterns in **[[Articles/Zero_Trust_Edge_Routing|Zero-Trust Edge Routing]]** and **[[Articles/Bare_Metal_Diagnostics_Lessons|Lessons from Bare-Metal Diagnostics]]**.
* **Master Credentials:** Review systems engineering background on **[[Resume/Master_Resume|Curriculum Vitae & Master Resume]]**.
* **Digital Garden Hub:** Return to the home **[[index|Digital Garden Index]]**.
