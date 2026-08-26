---
title: 'Infra Audit Engine: Continuous Hardware & Config Drift Orchestrator'
tags:
  - python
  - audit
  - openwrt
  - docker
  - telemetry
  - infrastructure
aliases:
  - /tools/infra_audit_engine
  - /projects--and--research/projects/infra_audit_engine
  - /software--and--github/tools/infra_audit_engine
  - /projects/infra-audit-engine
---

# Infra Audit Engine: Continuous Hardware & Config Drift Orchestrator
## **Automated Multi-Node Telemetry, OpenWrt UCI State Normalization & Authoritative Environment Tracking**

> [!abstract] Architectural Goal
> In a heterogeneous hybrid environment spanning bare-metal Linux servers, OpenWrt edge gateways, and container fleets, configuration drift and undocumented hardware state represent critical failure vectors. **Infra Audit Engine** is an automated Python orchestrator that queries all nodes, verifies SSH identities, extracts hardware telemetry, and compiles an authoritative single-source-of-truth registry (`CURRENT_ENV.yml`).

```mermaid
graph TD
    A[Cron / Audit Trigger] --> B[orchestrator.py<br><i>Python 3.12 Engine</i>]
    
    subgraph Fleet Telemetry Collection
        B -->|SSH Audit| C[edge: OpenWrt Router<br><i>Firewall, UCI, Interfaces</i>]
        B -->|SSH Audit| D[t430: Linux Node<br><i>Docker, ZRAM, Storage</i>]
        B -->|SSH Audit| E[llmadmin01: AI Node<br><i>GPU, TPU, NVMe, RAM</i>]
    end

    subgraph State Synthesis & Validation
        C --> F[Data Normalizer & Schema Validator]
        D --> F
        E --> F
        F --> G[Diff Analyzer<br><i>Detects Drift vs Baseline</i>]
    end

    subgraph Authoritative Outputs
        G --> H[(CURRENT_ENV.yml<br><i>Master Environment Truth</i>)]
        G --> I[Telemetry Alerts / Logs]
    end
```

---

## 1. Key Telemetry Capabilities

1. **Hardware Accelerator Discovery:**
   * Automatically catalogs PCI/USB accelerators (e.g. Intel UHD 630, NVIDIA Quadro P600 Mobile, Google Coral Edge TPU).
   * Monitors real-time PCIe link status and driver health.

2. **Memory & Compressed Swap Telemetry:**
   * Tracks active physical RAM consumption alongside transparent `zram` compressed memory utilization across nodes.

3. **OpenWrt UCI Configuration Parsing:**
   * Scans and validates firewall zones, DNS interception redirect rules (`Hijack-DNS-UDP`, `Hijack-DoT`), ACME certificate issuance, and CrowdSec bouncer metrics directly from edge router NVRAM.

4. **Storage Partition & Flash Health Monitoring:**
   * Monitors disk utilization across root partitions, high-I/O NVMe arrays, and `/mnt/data/docker` mount points to preemptively prevent storage exhaustion.

---

## 🔗 Related Architecture & Knowledge Graph

* **Production Systems:** Validated in [[Projects/Current_Environment|Current Environment]], [[Projects/Unified_Fleet_Observability_Alloy|Unified Fleet Observability Alloy]], [[Projects/Hardware_Security_Key|Hardware Security Key]].
* **Governance & Compliance:** Governed by [[Governance/Policies/Information_Security_Policy|Information Security Policy]], [[Governance/Policies/Infrastructure_Hardening_Policy|Infrastructure Hardening Policy]].
* **Technical Articles:** Deep dive in [[Articles/Systems_and_Automation_Architecture|Systems and Automation Architecture]].
* **Applied Research:** Investigated in [[Research/Security_Analysis_and_Research_Agent/Tools_and_Telemetry|Tools and Telemetry]].
* **Master Credentials:** Review core competencies on [[Resume/Master_Resume|Curriculum Vitae & Master Resume]].
* **Digital Garden Hub:** Return to the main [[index|Digital Garden Index]].
