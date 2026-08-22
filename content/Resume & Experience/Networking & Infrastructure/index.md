---
title: Networking & Infrastructure
aliases: [Infrastructure]
tags:
  - networking
  - infrastructure
  - vmware
  - hyperv
  - storage
---

# Networking & Systems Infrastructure

> [!abstract] Enterprise Datacenter & Hybrid Network Engineering
> Designing and managing resilient Layer 2/3 enterprise networks, hypervisor clusters, multi-tier storage area networks (SAN), and Zero Trust perimeters across corporate, federal, and manufacturing environments.

---

### ◈ Core Competencies & Architectures

1. **Virtualization & Hypervisors:**
   * Enterprise deployment and administration of **VMware vSphere/ESXi**, **Microsoft Hyper-V Cluster Shared Volumes (CSV)**, and **Proxmox VE**.
   * Orchestrating live cross-hypervisor migration, automated failover drills, and virtual switch trunking (802.1Q).

2. **Network Engineering & Perimeter Security:**
   * Multi-site firewall administration (**SonicWall NSA/TZ**, **Cisco ASA**, **pfSense/OPNsense**, **OpenWrt**).
   * Site-to-site IPsec VPNs, WireGuard mesh networks (NetBird), BGP/OSPF dynamic routing, and strict 802.1Q VLAN segmentation.
   * Eliminating container NAT bottlenecks with native `macvlan` and `ipvlan` Layer 2 architectures.

3. **Storage Area Networks (SAN / NAS):**
   * High-availability iSCSI and Fibre Channel storage arrays (**Dell EMC**, **Synology**, **QNAP**, **TrueNAS ZFS**).
   * Hardware-aware storage tiering: NVMe write-ahead logs, SSD caching tiers, and compressed memory (`zram`).

---

### ◈ Related Field Guides & Case Studies

* **[[Resume & Experience/Networking & Infrastructure/Infrastructure|Enterprise Infrastructure Profile]]** — Detailed chronological infrastructure engineering history.
* **[[Projects & Research/Current Environment/Layer2_Containerization|Layer 2 Virtualization & IPAM]]** — macvlan routing and dynamic DNS.
* **[[Projects & Research/Current Environment/Hardware_Storage_Tiering|Hardware-Aware Storage Tiering]]** — Spatial storage topology.
* **[[Articles & Wiki/Zero_Trust_Edge_Routing|Zero Trust at the Edge]]** — Hardening OpenWrt with Cloudflare Tunnels & CrowdSec.
