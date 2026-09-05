---
title: "RPDev Launcher: Lean AOSP Desktop Orchestrator"
description: "Technical architecture of RPDev Launcher: DataStore state synchronization, AIDL overlay binding, nested folder cycle detection, and ProGuard minification safety."
tags:
  - android
  - launcher
  - kotlin
  - datastore
  - aosp
---

# 🚀 RPDev Launcher: Lean AOSP Desktop Orchestrator

> **High-performance, privacy-first Android home screen experience built on modern AOSP foundations with Android 16 parity.**

- **Live Showcase**: [launcher.iamrp.dev](https://launcher.iamrp.dev)
- **User Documentation**: [wiki.iamrp.dev/launcher/](https://wiki.iamrp.dev/launcher/)
- **Source Repository**: [github.com/RPDevs-Builds/RPDev-Launcher](https://github.com/RPDevs-Builds/RPDev-Launcher)

---

## ⚡ Architectural Innovations

### 1. DataStore Reactive State Synchronization
RPDev Launcher utilizes Jetpack DataStore for all user preferences, desktop grid configurations, and gesture mappings:
- Pure asynchronous Kotlin `StateFlow` streams replace legacy blocking SharedPreferences.
- Main-thread operations are strictly guarded via IO dispatchers, ensuring zero frame drops during orientation changes or app launches.

### 2. Recursive Nested Folders & Cycle Detection
To support complex organization while preventing infinite loops in hierarchical desktop configurations, the folder manager implements a cycle-safe Depth-First Search (DFS) traversal algorithm:
```kotlin
fun hasCycle(folderId: String, visited: MutableSet<String>): Boolean {
    if (visited.contains(folderId)) return true
    visited.add(folderId)
    val children = getSubFolderIds(folderId)
    for (child in children) {
        if (hasCycle(child, visited)) return true
    }
    visited.remove(folderId)
    return false
}
```

### 3. AIDL Overlay Client (`WINDOW_OVERLAY`)
The launcher implements Google's standard `ILauncherOverlay` client interface, binding dynamically to **[[Projects/Android/RPDev_Feed|RPDev Feed]]**:
- Detects horizontal drag gestures on page 0.
- Transmits normalized horizontal scroll progress (`0.0f` to `1.0f`) over IPC.
- Delegates overlay rendering to the companion service without sharing process memory.
