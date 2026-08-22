---
title: "OpenThread Border Router Telemetry Poller"
tags:
  - python
  - iot
  - openthread
  - mqtt
  - docker
  - telemetry
---

# OpenThread Border Router Telemetry Poller

> [!abstract] Architectural Summary
> Low-power IPv6 wireless mesh networks (Thread/Matter) require continuous link-quality and routing topology monitoring. This Python system daemon interfaces directly with an OpenThread Border Router (OTBR) container instance, parses neighbor tables via `ot-ctl`, and streams real-time radio metrics (RSSI, Link Quality, MAC address, Frame Counters) to an MQTT broker for visualization in Grafana.

---

### ◈ Data Pipeline Architecture

```mermaid
graph LR
    subgraph Thread Wireless Mesh
        A[Matter Node 1] <--> B[Matter Node 2]
        B <--> C[OTBR Radio Co-Processor]
    end

    subgraph Host Execution Layer
        C <--> D[Docker Container: otbr-daemon]
        E[otbr_poller.py<br><i>Python Daemon</i>] <-->|docker exec ot-ctl| D
    end

    subgraph Telemetry Core
        E -->|Publish JSON Metrics| F[Eclipse Mosquitto MQTT]
        F --> G[Telegraf / InfluxDB]
        G --> H[Grafana Dashboard]
    end
```

---

### ◈ Engineering Highlights

1. **Deterministic Radio Inspection:**
   * Uses non-blocking subprocess calls to query `ot-ctl neighbor table` and `ot-ctl router table`.
   * Sanitizes ANSI terminal output and parses raw hex MAC addresses, RSSI (dBm), Link Quality In/Out metrics, and age intervals.

2. **Resilient MQTT State Publishing:**
   * Formats telemetry into structured JSON payloads with automatic reconnection backoff.
   * Emits Home Assistant-compliant MQTT discovery payloads allowing auto-provisioning of device sensors.

3. **Production Deployment:**
   * Deployed as a systemd service on the host node (`llmadmin01`) with automatic crash recovery, logging directly to journald.
