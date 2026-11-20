---
title: "RPDev Feed: Privacy-First Minus-One Screen Companion"
description: "Technical architecture of RPDev Feed: AIDL overlay server, WindowManager attachment, Room database offline caching, and hardware Keystore encryption."
tags:
  - android
  - compose
  - keystore
  - aidl
  - security
---

# 📰 RPDev Feed: Privacy-First Minus-One Screen Companion

> **A zero-telemetry -1 screen companion replacing proprietary tracking feeds with an open-source, hardware-encrypted on-device dashboard.**

- **Live Showcase**: [feed.launcher.iamrp.dev](https://feed.launcher.iamrp.dev)
- **User Documentation**: [wiki.iamrp.dev/feed/](https://wiki.iamrp.dev/feed/)
- **GitHub Profile**: [github.com/IamRPDev](https://github.com/IamRPDev)

---

## 🛡️ Security & Encryption Architecture

RPDev Feed provides an on-device hub for external API telemetry (GitHub, Home Assistant, Docker APIs, RSS). To protect user tokens without third-party key storage:

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
   Dynamic REST and page-monitoring modules strictly enforce `http` and `https` URI schemes with bounded 2MB payload limits to prevent memory exhaustion.
3. **Offline Room Database**:
   Articles, bookmarked stories, and feed metadata are persisted in a local SQLite Room database with automatic pagination and vacuuming.
