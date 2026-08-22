---
title: Information Security Policy
tags:
  - policy
  - modernized
  - 2026
---

> [!abstract] 2026 Modernized Policy
> This legacy policy has been modernized to align with 2026 enterprise IT and cybersecurity standards, including Zero Trust Architecture (ZTA), Continuous Threat Exposure Management (CTEM), and AI/LLM acceptable use governance.

# Information Security Policy

## 1. Zero Trust Architecture (ZTA) & Access Control
JDC adopts a strict Zero Trust Architecture (ZTA) framework. Trust is never granted implicitly, and all access requests—regardless of location or origin—must be continuously verified.
*   **Continuous Verification:** Multi-factor authentication (MFA), context-aware access policies, and continuous posture assessments are mandatory for all user, device, and service-level access.
*   **Micro-Segmentation:** Network and application environments are heavily segmented to limit lateral movement and enforce granular, least-privilege access.
*   **Dynamic Privileges:** Privileges are dynamically granted via Just-In-Time (JIT) access tools and revoked immediately upon task completion.

## 2. Continuous Threat Exposure Management (CTEM)
To proactively defend against evolving threats, JDC implements a Continuous Threat Exposure Management (CTEM) program.
*   **Automated Discovery:** Routine, automated asset discovery and vulnerability scanning across on-premises, cloud, and edge environments.
*   **Prioritized Remediation:** Vulnerabilities are prioritized based on exploitability, business context, and threat intelligence.
*   **Validation:** Continuous attack surface validation, including automated penetration testing and red-teaming exercises, ensures the efficacy of existing security controls.

## 3. AI and Large Language Model (LLM) Acceptable Use
As generative AI and LLMs become integral to daily operations, strict governance is required to protect proprietary data and ensure ethical use.
*   **Approved AI Tools:** Employees must only use corporate-approved, enterprise-grade AI platforms that guarantee data privacy (e.g., zero-retention policies).
*   **Data Classification and Input Limits:** No non-public information (NPI), personally identifiable information (PII), or trade secrets may be inputted into public or unapproved AI models.
*   **Output Validation:** All AI-generated outputs (including code, communications, and analysis) must be treated as drafts and verified by a human expert prior to use in production or client-facing scenarios.

## 4. Physical and Environmental Security
1.  **Zero-Trust Facilities:** Physical access is governed by the same zero-trust principles. Tailgating is strictly prohibited, and biometric verification is required for sensitive zones (e.g., datacenters).
2.  **Surveillance and Monitoring:** High-definition, AI-enhanced CCTV monitors all entrances and secure areas 24/7, with automated anomaly detection.

## 5. Network Access and Account Management
1.  **Identity-First Security:** Identity is the new perimeter. Passwordless authentication (e.g., FIDO2 hardware keys) is preferred and strongly encouraged for all employees.
2.  **Account Lifecycles:** Automated identity lifecycle management ensures accounts are provisioned, audited, and de-provisioned automatically based on HR systems.
3.  **Third-Party Access:** Vendor and contractor access is strictly governed, heavily audited, and automatically disabled after 30 days of inactivity.

## 6. Exceptions and Policy Violations
Violations of this policy, particularly those involving unauthorized AI data exposure or bypassing zero-trust controls, will result in immediate disciplinary action up to and including termination. Exceptions must be documented, risk-assessed, and approved by the Information Security Officer.