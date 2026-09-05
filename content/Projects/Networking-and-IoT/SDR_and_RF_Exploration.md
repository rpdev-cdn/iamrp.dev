---
title: Software Defined Radio & RF Engineering
tags:
  - hardware
  - rf
  - sdr
  - telemetry
aliases:
  - /projects--and--research/projects/rf--and--antennas/sdr_and_rf_exploration
  - /projects/sdr---rf/sdr_and_rf_exploration
  - /projects/sdr_and_rf_exploration
---
> [!abstract] Engineering Scope
> Moving beyond traditional IP networking, this domain covers the interception, decoding, and analysis of physical RF signals. The projects here bridge the gap between low-level hardware diagnostics and enterprise telemetry gathering.

This section documents my hands-on exploration of the RF spectrum, utilizing Software Defined Radio (SDR) hardware to audit, decode, and map municipal and commercial radio frequency transmissions.

---

### ◈ Software Defined Radio (SDR) Deployments

Utilizing USB-based RTL-SDR adapters and specialized antenna arrays, I engineered listening stations capable of monitoring vast swaths of the RF spectrum.

#### 1. Municipal UHF Radio Network Auditing
- **Trunked Radio Systems:** Configured SDR nodes to track and decode unencrypted P25 Phase I and Motorola Type II SmartNet trunked radio systems used by local municipal services.
- **SDRTrunk & Unitrunker:** Deployed Java and Windows-based telemetry software to automatically follow control channels, seamlessly stitching together voice traffic across dynamically assigned frequencies.

#### 2. ADS-B Aircraft Telemetry
- **Flight Tracking:** Engineered dedicated Raspberry Pi nodes equipped with 1090MHz antennas and RTL-SDR dongles to capture ADS-B (Automatic Dependent Surveillance–Broadcast) beacons from commercial aircraft.
- **Data Aggregation:** Parsed the raw hexadecimal telemetry into usable JSON data, feeding it into local databases to map real-time overhead flight paths independently of internet-based tracking services.

---

### ◈ Hardware & Electronics Diagnostics

My background originated in physical electronic component repair, which fundamentally shapes how I approach high-level systems architecture today.

- **Component-Level Repair:** Extensive experience diagnosing and replacing capacitors, ICs, and surface-mount components on PCB boards.
- **Physical Access Control:** Auditing and configuring legacy RFID and physical badge access systems, identifying vulnerabilities in unencrypted low-frequency (125kHz) card protocols.

### ◈ The Hardware-to-Software Bridge

Understanding the physical limitations of hardware (such as heat dissipation on a CPU, read/write limits on NAND flash, or signal-to-noise ratios on an antenna) allows for the creation of far more resilient software and infrastructure. This hands-on RF and hardware experience directly informs my zero-trust architectures and storage tiering protocols.

---

## 🔗 Related Architecture & Knowledge Graph

* **Production Systems:** Validated in [[ADSB_Aviation_SDR_Telemetry_Pipeline|ADSB Aviation SDR Telemetry Pipeline]], [[OpenThread_Border_Router|OpenThread Border Router]].
* **Governance & Compliance:** Governed by [[Projects/Governance-and-Policies/Building_Security_Policy|Building Security Policy]].
* **Technical Articles:** Deep dive in [[Articles/Hardware/Component_Repair|Bare Metal Diagnostics Lessons]].
* **Applied Research:** Investigated in [[Research/Security_Analysis_and_Research_Agent/Tools_and_Telemetry|Tools and Telemetry]].
* **Master Credentials:** Review core competencies on [[Resume/Master_Resume|Curriculum Vitae & Master Resume]].
* **Digital Garden Hub:** Return to the main [[content/Projects/index|Digital Garden Index]].
