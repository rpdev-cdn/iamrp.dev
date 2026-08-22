---
title: Building Security Policy
tags:
  - policy
  - modernized
  - 2026
---

> [!abstract] Modernized Policy
> This legacy policy has been modernized to align with 2026 enterprise IT and cybersecurity standards, incorporating biometric/mobile-credential access and IoT physical security sensor integration.

# Building Security Policy

**Approval Date**: 10/4/2011 (Modernized: 2026)  
**Purpose**: To maintain a safe and secure working environment, prevent theft, and assure authorized access for the organization through advanced digital and physical security integrations.

## Security Overview
Maintaining the security of the building is extremely important. Each entrance is equipped with AI-driven IoT environmental and security sensors which monitor for unauthorized access, tailgating, door propping, and locking mechanism malfunctions in real-time. Should the door propping or anomaly detection alarm trigger during normal business hours, the physical security team and the IT Director shall immediately investigate the cause and report it to management. After-hours alerts are automatically routed to the global Security Operations Center (SOC) and the Executive Vice President, who are responsible for responding appropriately as circumstances warrant.

## Technical Controls
The primary floors and exterior doors are secured by a unified mobile-credential and biometric access control system, integrated with high-definition IP cameras, IoT glass-break sensors, and thermal motion detectors. The server room and other high-security zones are controlled by a dedicated, multi-factor biometric system (e.g., facial recognition combined with mobile credential presence). Access to the server room is strictly limited to authorized infrastructure management and domain administrators, enforced by Zero Trust physical access policies. Access privileges are continuously audited and dynamically adjusted based on role requirements.

## Log Review and Continuous Monitoring
Access logs and IoT sensor telemetry are continuously ingested into the centralized SIEM (Security Information and Event Management) system. The Compliance Officer and automated anomaly detection algorithms review these logs for unusual and/or suspicious activity across all interior and exterior doors. If anomalous activity is detected, automated alerts notify Management and the SOC for immediate remediation. Detailed access logs are retained in immutable storage for a minimum of one year to ensure compliance and support forensic investigations.