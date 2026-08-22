---
title: Custom Firmware & Embedded Systems
tags:
  - firmware
  - openwrt
  - embedded
  - build-systems
---

# Custom Firmware & Embedded Systems

> [!abstract] Deterministic Edge Firmware Engineering
> Compiling, hardening, and deploying custom embedded Linux images with pre-baked networking, security bouncers, and Zero Trust tunnels.

---

### ◈ Active Firmware Projects

1. **Custom OpenWrt Firmware Build Pipelines (`openwrt-builder`):**
   * Automated GitHub Actions CI/CD workflows pulling upstream OpenWrt master/stable sources.
   * Injects deterministic `.config` buildinfo targets with pre-installed `crowdsec`, `cloudflared`, `dnsmasq-full` (with DoT/DoH support), and `kmod-macvlan`.
   * Strips insecure legacy protocols (telnet, HTTP web management) in favor of SSH key-only and hardware token auth.

2. **Edge Hardware Targets:**
   * x86_64 appliance routers, ARM64 multi-core gateways, and OpenThread Border Router radio bridges.
