---
title: Incident Response Plan
tags:
  - policy
  - modernized
  - 2026
aliases:
  - /resume--and--experience/policy--and--governance/policies/incident_response_plan
---

> [!abstract] 2026 Modernized Policy
> This legacy policy has been modernized to align with 2026 enterprise IT and cybersecurity standards, incorporating automated orchestration (SOAR), deep-fake/social engineering response protocols, and advanced ransomware negotiation and containment strategies.

# Incident Response Plan

## 1. Automated Security Orchestration, Automation, and Response (SOAR)
To handle the scale and speed of modern threats, JDC utilizes a centralized SOAR platform.
*   **Automated Triage:** The SOAR platform automatically ingests alerts, contextualizes threat data, and performs initial triage to filter out false positives.
*   **Automated Containment:** For high-confidence threats, automated playbooks execute immediate containment actions, such as isolating compromised hosts, disabling compromised credentials, and blocking malicious IPs, before human intervention.
*   **Orchestrated Workflows:** The Incident Response Team uses SOAR to coordinate investigations, ensuring consistent, documented, and rapid execution of response procedures.

## 2. Deep-Fake and Advanced Social Engineering Protocols
The rise of AI-generated deep-fakes (audio and video) requires specialized verification protocols.
*   **Identity Verification Channels:** Any high-risk request (e.g., urgent wire transfers, massive data exports, or broad access changes) initiated via voice, video, or informal chat must be authenticated using an out-of-band, pre-established secondary channel (e.g., a mandatory push notification to a corporate device or a secure internal messaging ping).
*   **"Safe Word" Protocols:** Executive and high-privilege teams utilize established "safe words" or challenge-response queries to verify identity during suspected deep-fake interactions.
*   **Reporting and Triage:** Suspected deep-fakes are immediately escalated to the Information Security Officer for forensic analysis and broader organizational warnings.

## 3. Advanced Ransomware Containment and Negotiation
Ransomware attacks are treated as critical, multi-stage extortion events.
*   **Rapid Containment via Micro-segmentation:** Upon detection of encryption behavior or mass data exfiltration, automated micro-segmentation rules isolate affected subnets to halt lateral movement instantly.
*   **Zero-Trust Recovery:** Recovery is executed exclusively from immutable, air-gapped backups. Restored systems are rebuilt in quarantined enclaves and subjected to deep malware scanning before rejoining the production network.
*   **Negotiation Strategy:** JDC maintains retainer agreements with specialized third-party incident response and ransomware negotiation firms. Under no circumstances will JDC employees engage directly with threat actors. If negotiation is deemed strategically necessary (e.g., to delay data publication while victims are notified), it will be conducted strictly by authorized legal and specialized third parties.

## 4. Incident Response Team Roles
*   **Information Security Officer (ISO):** Coordinates the overall response, directs SOAR playbooks, and manages external specialists.
*   **IT Director & SysAdmins:** Execute zero-trust recovery protocols and validate immutable backups.
*   **Legal and PR:** Coordinate regulatory disclosures and manage the narrative, particularly during multi-extortion ransomware events.

## 5. Post-Incident Review
Every activated incident response, including fully automated SOAR containments, requires a formal Post-Incident Review (PIR) to update playbooks, refine detection logic, and improve future resilience.