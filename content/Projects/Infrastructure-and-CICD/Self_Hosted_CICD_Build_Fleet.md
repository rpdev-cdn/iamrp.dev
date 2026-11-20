---
title: "Self-Hosted Multi-Node CI/CD Build Fleet"
tags:
  - cicd
  - docker
  - github-actions
  - automation
  - infrastructure
aliases:
  - /projects--and--research/projects/self_hosted_cicd_build_fleet
  - /projects/self_hosted_cicd_build_fleet
  - /projects/self-hosted-cicd-build-fleet
---
# Self-Hosted Multi-Node CI/CD Build Fleet

> [!abstract] Build Pipeline Acceleration & Edge Fleet Orchestration
> Large cross-compiled C++ binaries (OpenWrt, native Linux utilities), custom kernels, and AI container layers require sustained CPU throughput and heavy disk I/O. Standard public GitHub Actions runners frequently encounter memory exhaustion, restrictive CPU quotas, and zero persistent cache between runs. This architecture deploys a containerized, self-hosted GitHub Actions runner fleet across physical cluster nodes (`core-cluster-01`, `ai-compute-01`) with multi-tiered shared cache layers.

---

### ◈ Fleet Architecture

```mermaid
graph TD
    A[GitHub Actions Workflow Trigger] --> B[GitHub Orchestrator API]

    subgraph Bare-Metal Fleet Cluster
        B -->|Assign Job| C[Runner Pool: core-cluster-01<br><i>High-RAM Execution Node</i>]
        B -->|Assign Job| D[Runner Pool: ai-compute-01<br><i>GPU/TPU Inference Node</i>]
    end

    subgraph Persistent Storage & Build Cache Layer
        E[(/srv/storage/cache/ccache<br><i>C/C++ Object Cache</i>)]
        F[(/srv/storage/cache/go-pkg<br><i>Go Module Cache</i>)]
        G[(/srv/storage/cache/npm<br><i>Node Package Cache</i>)]
        H[(/srv/storage/cache/pip-poetry<br><i>Python Wheel Cache</i>)]
    end

    C <--> E
    C <--> F
    C <--> G
    C <--> H
    D <--> E
    D <--> F
```

---

### ◈ Core Design Principles

1. **Custom Hardened Runner Images (`runner-linux-builder`):**
   * Built on top of minimal Ubuntu/Debian bases with pre-installed Node.js LTS, Docker-in-Docker socket integration, CMake, Clang/LLVM, and cross-compilation toolchains (`aarch64-linux-gnu`, `arm-linux-gnueabihf`).
   * Eliminates `sudo apt-get install` overhead during workflow runs, slashing pipeline initialization time from minutes to seconds.

2. **Persistent Shared Volume Mounts:**
   * Runners mount centralized cache directories on fast local and shared storage (`/srv/storage/local` and `/srv/storage/shared`).
   * C/C++ compilation steps achieve **>85% ccache hit rates**, reducing monolithic 45-minute builds down to under 4 minutes.

3. **Organizational Security Boundaries:**
   * Ephemeral runner token registration using scoped GitHub App authentication.
   * Hardened container privileges preventing host kernel escape while retaining full Docker build capabilities.

---

## 🔗 Related Architecture & Knowledge Graph

* **Production Systems:** Validated in [[Builder_Manager_OCI_Pipeline|Builder Manager OCI Pipeline]], [[Unified_Fleet_Observability_Alloy|Unified Fleet Observability Alloy]].
* **Governance & Compliance:** Governed by [[Projects/Governance-and-Policies/Software_Development_Life_Cycle|Software Development Life Cycle]], [[Projects/Governance-and-Policies/Infrastructure_Hardening_Policy|Infrastructure Hardening Policy]].
* **Technical Articles:** Deep dive in [[Articles/Systems_Automation|Systems and Automation Architecture]].
* **Applied Research:** Investigated in [[Codex_Arcana|Engineering Post-Mortems & ADR Vault]].
* **Master Credentials:** Review core competencies on [[Resume/Master_Resume|Curriculum Vitae & Master Resume]].
* **Digital Garden Hub:** Return to the main [[Projects/index|Projects Index]].
