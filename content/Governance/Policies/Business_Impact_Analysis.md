---
title: Business Impact Analysis
tags:
  - policy
  - archive
  - modernized-2026
aliases:
  - /resume--and--experience/policy--and--governance/policies/business_impact_analysis
last_audited: 2026-08-26
review_cycle: Annual (Continuous Audit)
compliance_alignment:
  - NIST CSF 2.0
  - ISO/IEC 27001:2022
  - SOC 2 Type II
---
> [!abstract] Legacy Policy Archive
> This legacy policy has been modernized to align with 2026 enterprise IT and cybersecurity standards. This document outlines business process dependencies, incorporating modern SaaS complexities and supply chain risks.

# Business Impact Analysis
**Analysis Date:** August 2026

## Purpose
The Business Impact Analysis (BIA) identifies critical business processes, determines the impact of their disruption, and establishes RTO and RPO requirements. This 2026 revision explicitly addresses the integration of supply chain dependencies and third-party SaaS platforms.

## Core Business Processes

### 1. IT Infrastructure & Zero-Trust Network
- **Description:** Cloud environments, identity providers (IdP), and zero-trust network access (ZTNA).
- **Supply Chain / SaaS Dependencies:** Cloud Service Providers (AWS/Azure), Cloudflare/Zscaler for edge routing, Okta/Entra ID for identity.
- **Outage Impact:** If SaaS IdP fails, all internal and external access is halted. Fallback break-glass accounts must be maintained.
- **RTO:** 15 minutes | **RPO:** Near-Zero
- **Impact Rating:** Critical

### 2. Regulatory Compliance & Governance
- **Description:** E-Discovery, regulatory compliance filings, immutable compliance archiving.
- **Supply Chain / SaaS Dependencies:** Third-party regulatory SaaS platforms, compliance API gateways.
- **Outage Impact:** Missed regulatory deadlines leading to compliance penalties. Third-party SaaS outages must trigger automated SLA breach notifications and fallback to asynchronous secure file transfer.
- **RTO:** 4 hours | **RPO:** 1 hour
- **Impact Rating:** High

### 3. Financial Processing & Payroll
- **Description:** Accounts payable/receivable, payroll execution, blockchain-based ledger syncing.
- **Supply Chain / SaaS Dependencies:** Payment gateways (Stripe), ERP SaaS (Workday/NetSuite).
- **Outage Impact:** Failure to pay employees or vendors. Prolonged SaaS outages require manual ledger tracking and delayed batch processing.
- **RTO:** 12 hours | **RPO:** 1 hour
- **Impact Rating:** High

## Supply Chain Dependency Management
All Tier 1 processes reliant on third-party SaaS must have documented contingency plans, including:
- Escrowed data models.
- Multi-cloud redundancy where feasible.
- Vendor risk assessments updated quarterly to track supplier cybersecurity posture.

---

## 🔗 Related Architecture & Knowledge Graph

* **Production Systems:** Validated in [[Hardware_Storage_Tiering|Hardware Storage Tiering]], [[Infra_Audit_Engine|Infra Audit Engine]].
* **Governance & Compliance:** Governed by [[Governance/Policies/Disaster_Recovery_Plan|Disaster Recovery Plan]], [[Governance/Policies/Global_Disruption_Policy|Global Disruption Policy]].
* **Technical Articles:** Deep dive in [[Articles/Architecture/Systems_Automation|Systems and Automation Architecture]].
* **Applied Research:** Investigated in [[Research/Security_Analysis_and_Research_Agent/Compliance_and_Governance|Compliance and Governance]].
* **Master Credentials:** Review core competencies on [[Resume/Master_Resume|Curriculum Vitae & Master Resume]].
* **Digital Garden Hub:** Return to the main [[content/Governance/Policies/index|Digital Garden Index]].
