---
title: Software & Git Assets
aliases: [Scripts, Toolchain, Software]
tags:
  - scripting
  - go
  - python
  - automation
---

> [!abstract] Code & Tooling
> Infrastructure is only as resilient as the code that orchestrates it. This domain highlights custom Go binaries, Python metadata engines, PowerShell orchestration scripts, and compiled OpenWrt firmware used to automate my environments.

While I am fundamentally an infrastructure architect, writing code is essential for bridging the gaps between off-the-shelf software and zero-trust engineering.

---

### ◈ Custom Tooling & Scripts

> [!info] DocIngest (MCP Server)
> A custom-built integration utilizing the **Model Context Protocol (MCP)**. This tool exposes internal documentation safely to local, isolated LLM agents, allowing them to search, read, and ingest markdown corpora without requiring direct file-system access or outbound internet connectivity.

> [!success] Telemetry & Metadata Engines
> Developed Python-based metadata engines that interface with APIs to pull threat intelligence, parse local network scans, and normalize the data for ingestion into local vector databases (like Qdrant).

### ◈ Infrastructure as Code & Orchestration

> [!abstract] Automated Disaster Recovery Pipelines
> Authored complex `PowerShell` and `Bash` scripts that programmatically orchestrate VM failovers between disparate hypervisors (VMware to Hyper-V) during disaster recovery scenarios.

> [!warning] Firmware Compilation
> Engineered automated GitHub Actions pipelines to securely compile custom OpenWrt firmware from source. These builds inject explicit `config.buildinfo` targets and pre-configure layer 2 networking out-of-the-box for edge routers.

---

### ◈ Development Environment

My daily toolchain heavily relies on Linux-based environments, Git for version control, and modular, declarative configurations. 
- **Languages:** `Bash`, `PowerShell`, `Python`, `Go`, `C/C++`.
- **Methodology:** Strict adherence to GitOps—every infrastructure change, script modification, or documentation update is committed to a repository to maintain an immutable history of the environment state.
