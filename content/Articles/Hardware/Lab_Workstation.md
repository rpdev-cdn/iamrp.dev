---
title: "Lab & Workstation Spec"
description: "A comprehensive breakdown of the hardware, operating systems, security tokens, and software toolchains powering my engineering workflows and homelab infrastructure."
aliases:
  - /uses
  - /spec
  - /tools/uses
  - /articles/lab_and_workstation_spec
  - /lab_and_workstation_spec
  - /articles/hardware/lab-workstation
  - /articles/hardware/lab_workstation
tags:
  - uses
  - workstation
  - hardware
  - homelab
  - tooling
---

# Uses: Workstation, Homelab & Security Toolchain
## **/uses — Workstation, Lab & Toolchain Specification**

> [!abstract] Engineering Environment & Hardware Stack
> A transparent inventory of the physical workstations, edge compute nodes, hardware security keys, and daily driver software tools utilized across my systems architecture, security research, and container operations.

---

## 🖥️ Workstation & Daily Drivers

### Primary Compute Workstation
* **Operating System:** Linux (Debian 12 / Fedora Workstation) running lightweight tiling window managers (`i3` / `sway`) for predictable, keyboard-driven productivity.
* **Terminal & Shell:** `Alacritty` / `Ghostty` paired with `zsh`, `tmux` persistent sessions, and `starship` prompt.
* **Editor & IDE:** `Neovim` (Lua-configured, LSP-native, Tree-sitter AST syntax highlighting) and `VS Code` / `Cursor` for multi-agent LLM workflows.
* **Dotfiles Orchestration:** Declarative dotfile management managed via **[[Projects/Hardware_Security_Key|Chezmoi]]**, with automated umask stripping and hardware-encrypted templates.

---

## 🔒 Hardware Security & Cryptographic Root of Trust

* **Hardware Security Keys:** Dual YubiKey 5 Series (USB-A & USB-C NFC) implementing:
  * **FIDO2 / WebAuthn:** Passwordless biometric assertion for enterprise IdPs and critical services.
  * **Age Encryption:** Symmetric file and secret encryption bound to hardware tokens via `age-plugin-fido2prf`.
  * **GPG / PGP Signing:** Hardware-isolated subkeys for git commit verification and security advisories.
* **Recovery Master Keys:** Air-gapped, offline master recovery keys (`age` x25519) stored strictly on offline physical media.

---

## 🌐 Homelab Fleet & Edge Compute

Detailed topology and live specifications available on **[[Current_Environment|Current Fleet Topology]]**:

### 1. `llmadmin01` — AI Inference & Telemetry Engine
* **Role:** High-throughput Linux compute host.
* **Accelerators:** NVIDIA Quadro P600 (CUDA inference), Google Coral Edge TPU (real-time computer vision coprocessor).
* **Storage:** Samsung PM9C1a NVMe SSD (PCIe Gen4) for high-IOPS database operations.
* **Memory Optimization:** 32GB RAM with transparent `ZRAM` (LZ4 compressed RAM block device) enabling high-concurrency container density.

### 2. `edge` — Perimeter Gateway & Telemetry Router
* **Role:** OpenWrt Bare-Metal Router & Border Controller.
* **Security Layer:** Strict 8-zone firewall isolation (`lan`, `wan`, `iot`, `guest`, `secure`, `servers`, `clients`, `docker`).
* **Intrusion Prevention:** `CrowdSec` edge daemon with real-time local iptables bouncer.
* **DNS & Privacy:** Encrypted DNS-over-HTTPS (DoH) with automated edge adblocking via `dnsmasq`.

### 3. `t430` — Distributed Systems & Automation Node
* **Role:** Resilient bare-metal staging node and secondary runner host for self-hosted GitHub Actions fleets.

---

## 🛠️ CLI, DevOps & Observability Toolchain

| Category | Tools & Technologies |
| :--- | :--- |
| **Containers & Orchestration** | Docker, containerd, `docker-compose`, multi-arch Buildx, `macvlan`/`ipvlan` non-NAT networking |
| **Infrastructure as Code** | Terraform, Ansible, Custom Python Orchestrators (`Infra_Audit_Engine`) |
| **Observability & Telemetry** | Grafana Alloy, Prometheus, cAdvisor, eBPF telemetry, Loki log aggregators |
| **Security Auditing & DFIR** | Nessus, Wazuh XDR, CrowdSec, Wireshark, Volatility 3, YARA, Semgrep |
| **Languages & Scripting** | Python 3.12, POSIX Bash / Zsh, Rust, Go, PowerShell 7, C/C++ |
| **AI & MCP Protocols** | Model Context Protocol (MCP), FastMCP, Qdrant Vector DB, Ollama, Google Gemini CLI |

---

## 🔗 Related Architecture & Knowledge Graph

* **Fleet Infrastructure:** Deep dive into the live hardware setup on **[[Current_Environment|Current Fleet Topology]]** and **[[Hardware_Storage_Tiering|Hardware Storage Tiering]]**.
* **Secret Management:** Review cryptographic implementation in **[[Projects/Hardware_Security_Key|Hardware Security Key Secrets]]**.
* **Observability:** Explore metrics ingestion in **[[Unified_Fleet_Observability_Alloy|Unified Fleet Observability (Alloy)]]**.
* **Master Resume:** Return to the complete **[[Resume/Master_Resume|Curriculum Vitae & Master Resume]]**.
* **Digital Garden Hub:** Return to the home **[[docs/index|Digital Garden Index]]**.
