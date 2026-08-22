---
title: Software & Git Assets
aliases: [Scripts, Toolchain, Software]
tags:
  - scripting
  - go
  - python
  - automation
  - tools
---

# Software & Git Assets

> [!abstract] Engineering & Tooling Portfolio
> Infrastructure is only as resilient as the code that orchestrates it. This domain highlights custom Go binaries, Python telemetry engines, PowerShell orchestration suites, and compiled OpenWrt firmware used to automate and secure our environments.

---

### ◈ Featured Tools & Repositories

* **[[Software & Github/Tools/DocIngest/corpus|DocIngest Documentation Engine & Interactive Viewer]]**  
  *Explore the live searchable documentation corpus viewer and URL crawler integration.*
  * **[Browse Corpus Viewer](Software-&-Github/Tools/DocIngest/view)** • **[Ingest New URL](Software-&-Github/Tools/DocIngest/add)**
* **[[Software & Github/Tools/Hardware_Hardened_Security_Key|Hardware-Hardened Secret Management (FIDO2 + Age)]]**  
  *Symmetric identity token binding with `age-plugin-fido2prf` and Chezmoi dotfile orchestration.*
* **[[Software & Github/Tools/LLM_Control_Plane|LLM Control Plane & Multi-Agent Workspace]]**  
  *Deploying multi-agent swarms, managing AI workflows, and standardizing LLM operational contexts.*
* **[[Software & Github/Tools/Ventoy_Tech_Super_Tool|Ventoy Incident Response & Tech Super Tool]]**  
  *Custom multi-boot USB configuration for bare-metal recovery, zero-trust provisioning, and offline forensics.*
* **[[Software & Github/Scripts/Firefox_NextDNS_Addon|Firefox NextDNS Routing & Policy Add-on]]**  
  *Browser extension dynamically enforcing encrypted DNS-over-HTTPS (DoH) profiles and tracking prevention.*

---

### ◈ Infrastructure as Code & Orchestration

> [!info] Telemetry & Metadata Engines
> Developed Python-based metadata engines that interface with APIs to pull threat intelligence, parse local network scans, and normalize data for ingestion into local vector databases (Qdrant).

> [!warning] Automated Firmware Compilation
> Engineered automated GitHub Actions pipelines to securely compile custom OpenWrt firmware from source, injecting `config.buildinfo` targets and pre-configuring Layer 2 macvlan networking out-of-the-box.

---

### ◈ Development Environment

* **Languages:** `Python`, `Go`, `Bash`, `PowerShell`, `TypeScript/Preact`, `C/C++`, `SQL`.
* **Methodology:** Strict GitOps — every infrastructure configuration, script modification, or documentation update is committed to a repository maintaining an immutable audit history.
