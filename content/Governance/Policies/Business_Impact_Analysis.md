---
title: Business Impact Analysis
tags:
  - policy
  - archive
  - modernized-2026
aliases:
  - /resume--and--experience/policy--and--governance/policies/business_impact_analysis
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