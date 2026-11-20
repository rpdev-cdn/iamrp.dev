---
title: Software Defined Radio & RF Engineering
tags:
  - hardware
  - rf
  - sdr
  - telemetry
aliases:
  - /projects--and--research/projects/rf--and--antennas/sdr_and_rf_exploration
  - /projects/sdr-rf/sdr_and_rf_exploration
  - /projects/sdr_and_rf_exploration
---
> [!abstract] Engineering Scope
> Moving beyond traditional IP networking, this domain covers the passive reception, decoding, and signal analysis of public RF telemetry. These projects bridge low-level hardware diagnostics with enterprise telemetry ingestion and physical-layer security fundamentals.

This section documents my hands-on RF engineering lab utilizing Software Defined Radio (SDR) hardware to passively receive, decode, and analyze FCC-compliant, unencrypted public and aviation radio transmissions.

---

### ◈ Software Defined Radio (SDR) Deployments

Utilizing USB-based RTL-SDR receivers and tuned antenna arrays, I engineered passive monitoring stations to collect and normalize public RF telemetry streams.

#### 1. Public UHF & Trunked Radio Signal Analysis
- **Passive Trunked Telemetry:** Configured receive-only SDR nodes to decode public, unencrypted P25 Phase I and Motorola Type II SmartNet control channels to study radio propagation, antenna tuning, and municipal RF dispatch architecture (building on my prior experience maintaining municipal UHF radio systems for Cuyahoga County).
- **Automated Channel Tracking:** Deployed SDRTrunk and Unitrunker telemetry software to monitor control-channel signal quality and analyze spectrum utilization.

#### 2. ADS-B Aviation Telemetry
- **Flight Telemetry Reception:** Engineered dedicated Linux nodes equipped with 1090MHz antennas and RTL-SDR dongles to passively receive public ADS-B (Automatic Dependent Surveillance–Broadcast) beacons transmitted by commercial and general aviation aircraft.
- **Data Aggregation:** Parsed raw hexadecimal telemetry frames into structured JSON streams, feeding local visualization dashboards independently of commercial cloud aggregators.

---

### ◈ Hardware & Electronics Diagnostics

My background originated in physical electronic component repair and municipal fleet electronics, which directly shapes how I approach enterprise infrastructure engineering today.

- **Component-Level Repair:** Extensive experience diagnosing and replacing capacitors, ICs, and surface-mount components on PCB boards using oscilloscopes and logic analyzers.
- **Physical Access Control Modernization:** Experience auditing and administering enterprise physical access control systems, evaluating migration paths from legacy unencrypted 125kHz proximity badges to encrypted smartcard and biometric access architectures under authorized corporate security assessments.

### ◈ The Hardware-to-Software Bridge

Understanding the physical limitations of hardware (such as thermal throttling, NAND flash endurance, or RF signal-to-noise ratios) informs resilient software and infrastructure architecture—directly guiding my zero-trust network segmentation and hardware-aware storage tiering designs.

---

## 🔗 Related Architecture & Knowledge Graph

* **Production Systems:** Validated in [[ADSB_Aviation_SDR_Telemetry_Pipeline|ADSB Aviation SDR Telemetry Pipeline]], [[OpenThread_Border_Router|OpenThread Border Router]].
* **Governance & Compliance:** Governed by [[Projects/Governance-and-Policies/Building_Security_Policy|Building Security Policy]].
* **Technical Articles:** Deep dive in [[Articles/Component_Repair|Bare Metal Diagnostics Lessons]].
* **Applied Research:** Investigated in [[Security-and-AI-Research/Tools_and_Telemetry|Tools and Telemetry]].
* **Master Credentials:** Review core competencies on [[Resume/Master_Resume|Curriculum Vitae & Master Resume]].
* **Digital Garden Hub:** Return to the main [[Projects/index|Projects Index]].
