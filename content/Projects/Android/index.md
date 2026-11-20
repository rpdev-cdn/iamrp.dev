---
title: "Android Ecosystem"
description: "Architecture and engineering specification for the RPDev Mobile Ecosystem — AOSP-based 120Hz launcher, AIDL overlay companion, and pluggable zero-telemetry card modules."
tags:
  - android
  - mobile
  - architecture
  - security
  - privacy
  - aosp
---

# 📱 RPDev Mobile Ecosystem: Privacy-First Android 16 Desktop

> **A high-performance, privacy-first mobile operating environment engineered for deterministic 120Hz fluidity, zero telemetry, and hardware-backed credential storage.**

---

## 🏛️ Executive Architectural Summary

Modern mobile launchers frequently bundle telemetry SDKs and cloud profiling services directly into the home screen process, hurting responsiveness and privacy.

**The RPDev Mobile Ecosystem solves these issues through decoupled Android systems architecture:**

1. **Strict Separation of Concerns**: The desktop orchestrator (**[[Projects/Android/RPDev_Launcher|RPDev Launcher]]**) is strictly isolated from network traffic and contextual feeds. The companion service (**[[Projects/Android/RPDev_Feed|RPDev Feed]]**) executes as an independent background service, bridging to the launcher via Android's **AIDL IPC protocol** (`com.android.launcher3.WINDOW_OVERLAY`).
2. **Deterministic 120Hz Rendering**: By keeping network I/O, HTML parsing, and database transactions out of the launcher process, the launcher maintains an idle footprint of **<35MB RAM** and consistent sub-8ms frame times on high-refresh displays.
3. **Hardware-Hardened Cryptography**: Sensitive API credentials (such as GitHub Personal Access Tokens and Home Assistant tokens) are encrypted at rest using Android's hardware Keystore via `AES256_GCM` authenticated encryption.
4. **Signed CDN Distribution**: APK releases, module manifests (`modules.json`), and SHA256 checksums are signed, validated, and distributed via **[cdn.iamrp.dev](https://cdn.iamrp.dev)**.

---

## 🧭 Live Web Portals & Documentation

| Portal | Domain | Purpose |
|---|---|---|
| **RPDev Launcher** | [launcher.iamrp.dev](https://launcher.iamrp.dev) | High-performance home screen showcase & APK distribution |
| **RPDev Feed** | [feed.launcher.iamrp.dev](https://feed.launcher.iamrp.dev) | Privacy-first -1 screen companion & RSS reader engine |
| **Module Repository** | [launcher.repo.iamrp.dev](https://launcher.repo.iamrp.dev) | Interactive catalog of all 9 verified Hub card modules |
| **Knowledge Base** | [wiki.iamrp.dev](https://wiki.iamrp.dev) | Dual-lens user manual, FAQs, and developer AIDL specifications |
| **Asset CDN** | [cdn.iamrp.dev](https://cdn.iamrp.dev) | Signed asset delivery network, schemas, and icons |
| **Source Code** | [github.com/IamRPDev](https://github.com/IamRPDev) | Open-source repositories under GPL v3.0 |

---

## 🏗️ The Three Core Pillars

### 1. [[Projects/Android/RPDev_Launcher|RPDev Launcher]]
- **AOSP Android 16 Parity**: Matches Google Pixel Launcher in predictive back gesture navigation, system taskbar integration, and dynamic Material You theme generation.
- **DataStore Reactive State**: Fully asynchronous configuration flows with zero main-thread blocking.
- **Recursive Nested Folders**: Hierarchical folder structures with cycle-safe depth-first search (DFS) traversal guards.
- **Custom Drawer Folder Icons**: Folder categorization inside the all-apps drawer.

### 2. [[Projects/Android/RPDev_Feed|RPDev Feed]]
- **Zero-Telemetry -1 Screen**: Replaces proprietary news feeds with an open-source, on-device dashboard.
- **On-Device RSS Engine**: Local feed parsing with Jsoup, offline reader mode, and OPML import/export.
- **Hardware Keystore Security**: `AES256_GCM` credential encryption via `EncryptedSharedPreferences`.
- **Thread-Safe IPC Bridge**: Manages overlay window attachment and state changes without race conditions.

### 3. [[Projects/Android/RPDev_Feed_Modules|Hub Modules Ecosystem]]
- **9 Pluggable Modules**: Privacy Weather (Open-Meteo), Hardware Telemetry (sysfs), Calendar Agenda, GitHub Pulse, Webpage Change Monitor, Custom REST JSON Endpoint, Home Assistant State, Docker Fleet Health, and Uptime Kuma Status.
- **Formal Schemas**: Adheres to `card-v1.schema.json` with multi-tier catalog synchronization.
