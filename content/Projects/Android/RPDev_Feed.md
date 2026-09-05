---
title: "RPDev Feed: Sovereign Minus-One Screen Companion"
description: "Technical architecture of RPDev Feed: AIDL overlay server, WindowManager attachment, Room database offline caching, and hardware Keystore encryption."
tags:
  - android
  - compose
  - keystore
  - aidl
  - security
---

# 📰 RPDev Feed: Sovereign Minus-One Screen Companion

> **A smart, sovereign -1 screen. Replaces proprietary tracking feeds with an open, zero-telemetry dashboard that respects user privacy.**

- **Live Showcase**: [feed.launcher.iamrp.dev](https://feed.launcher.iamrp.dev)
- **User Documentation**: [wiki.iamrp.dev/feed/](https://wiki.iamrp.dev/feed/)
- **Source Repository**: [github.com/RPDevs-Builds/RPDev-Feed](https://github.com/RPDevs-Builds/RPDev-Feed)

---

## 🛡️ Security & Encryption Architecture

RPDev Feed provides a sovereign hub for external data (GitHub, Home Assistant, Docker APIs, RSS). To protect user tokens without third-party key storage:

1. **Hardware Keystore Binding**:
   ```kotlin
   EncryptedSharedPreferences.create(
       context,
       "rpdev_hub_plugins_secure",
       MasterKey.Builder(context).setKeyScheme(MasterKey.KeyScheme.AES256_GCM).build(),
       EncryptedSharedPreferences.PrefKeyEncryptionScheme.AES256_SIV,
       EncryptedSharedPreferences.PrefValueEncryptionScheme.AES256_GCM
   )
   ```
2. **Network Scheme Validation**:
   Dynamic REST and Web Scraper modules enforce strictly `http` and `https` URI schemes with bounded 2MB payload sizes to prevent Denial-of-Service memory exhaustion.
3. **Offline Room Database**:
   Articles, bookmarked stories, and feed metadata are persisted in a local SQLite Room database with automatic pagination and vacuuming.
