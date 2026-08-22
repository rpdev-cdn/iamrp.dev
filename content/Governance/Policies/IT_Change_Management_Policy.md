---
title: IT Change Management Policy
tags:
  - policy
  - modernized
  - 2026
aliases:
  - /resume--and--experience/policy--and--governance/policies/it_change_management_policy
---

> [!abstract] 2026 Modernized Policy
> This legacy policy has been modernized to align with 2026 enterprise IT and cybersecurity standards, focusing heavily on Infrastructure as Code (IaC) peer-review requirements and automated drift detection.

# IT Change Management Policy

## 1. Infrastructure as Code (IaC) and Peer-Review
Modern infrastructure is defined in code. Manual, "click-ops" changes in production environments are strictly prohibited outside of declared emergency scenarios.
*   **GitOps Workflow:** All infrastructure changes (e.g., Terraform, Kubernetes manifests, cloud configurations) must be proposed via pull requests in version control.
*   **Mandatory Peer Review:** No single engineer can alter production infrastructure. All IaC pull requests require at least one approving review from a designated peer or senior engineer.
*   **Automated Validation:** Before merge, IaC changes undergo automated linting, security scanning (e.g., checking for overly permissive IAM roles), and pre-flight planning (e.g., `terraform plan`) to visualize impact.

## 2. Automated Drift Detection
To ensure the single source of truth remains in version control, JDC heavily relies on automated drift detection.
*   **Continuous Monitoring:** Automated systems continuously monitor the live production environment against the desired state declared in the IaC repositories.
*   **Alerting on Drift:** Any unauthorized deviation (drift) from the declared state immediately triggers a high-priority alert to the operations and security teams.
*   **Automated Reconciliation:** Where configured, systems will automatically revert unauthorized manual changes, forcing all infrastructure modifications back through the formal GitOps change management pipeline.

## 3. Standard Change Control Procedures
*   **Change Advisory Board (CAB):** While standard, automated IaC changes are pre-approved via peer review and automated testing, major architectural shifts still require CAB review for business impact and risk assessment.
*   **Rollback Procedures:** All deployments, whether application or infrastructure, must have a clear, tested, and ideally automated rollback procedure.

## 4. Emergency Changes
Emergency changes ("break-glass" scenarios) are permitted when immediate action is required to resolve a critical outage or active security incident.
*   If a manual change is made during an emergency, it must be documented immediately via an emergency change ticket.
*   Within 24 hours of the incident's resolution, the manual change must be retroactively codified into the IaC repositories to resolve drift and restore the GitOps source of truth.