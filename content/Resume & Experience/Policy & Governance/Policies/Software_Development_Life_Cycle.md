---
title: Software Development Life Cycle
tags:
  - policy
  - modernized
  - 2026
---

> [!abstract] 2026 Modernized Policy
> This legacy policy has been modernized to align with 2026 enterprise IT and cybersecurity standards, integrating AI-assisted coding guardrails, Software Bill of Materials (SBOM) requirements, and CI/CD pipeline integrity checks.

# Software Development Life Cycle (SDLC)

## 1. AI-Assisted Coding Guardrails
The use of AI coding assistants (e.g., Copilot, AI agents) greatly accelerates development but requires strict governance to ensure code quality, security, and intellectual property protection.
*   **Approved AI Assistants:** Developers may only use enterprise-approved AI coding tools that guarantee code privacy and do not use proprietary code for public model training.
*   **Human-in-the-Loop Validation:** All AI-generated code must be explicitly reviewed and understood by a human developer. The developer remains entirely responsible for the security and functionality of the committed code.
*   **Automated Security Scanning:** AI-generated code is often subject to "hallucinated" vulnerabilities. All code must pass automated Static Application Security Testing (SAST) and Dynamic Application Security Testing (DAST) before merge.

## 2. Software Bill of Materials (SBOM) Requirements
To secure the software supply chain against upstream compromises, JDC enforces rigorous dependency tracking.
*   **SBOM Generation:** Every build must automatically generate a comprehensive Software Bill of Materials (SBOM) in a standardized format (e.g., CycloneDX or SPDX).
*   **Vulnerability Mapping:** The SBOM is continuously ingested into our vulnerability management platforms to instantly map newly discovered zero-days to our specific application versions.
*   **Dependency Pinning:** All third-party libraries and container images must be explicitly pinned by version or cryptographic hash.

## 3. CI/CD Pipeline Integrity Checks
The CI/CD pipeline is a critical attack vector and is treated as a highly privileged production environment.
*   **Immutable Builds:** Build pipelines are automated and immutable. Manual interference during the build and deploy process is strictly prohibited.
*   **Code Signing and Provenance:** All compiled artifacts and container images must be cryptographically signed by the CI/CD pipeline. Deployment environments enforce signature verification to ensure only untampered, provenance-verified artifacts are run.
*   **Pipeline Access and Audit:** Access to CI/CD configuration files (e.g., GitHub Actions workflows, GitLab CI YAML) requires multi-party approval and peer review.

## 4. Agile and Secure Development (DevSecOps)
JDC follows Agile methodologies heavily augmented by DevSecOps principles.
*   Security is "shifted left," embedding security checks natively into the developer's IDE and pre-commit hooks.
*   Threat modeling is a mandatory, continuous exercise for all major architectural changes, ensuring secure-by-design principles are applied before a single line of code is written.