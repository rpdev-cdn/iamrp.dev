---
title: Blackhole Webserver (OpenWRT Edge Compute)
draft: false
tags: [openwrt, go, networking, edge]
aliases:
  - /projects--and--research/projects/openwrt_blackhole_webserver
---

# Blackhole Webserver (OpenWRT)

**Blackhole Webserver for OpenWRT** is a lightweight, high-performance Go-based utility designed to capture, log, and mirror HTTP requests. It is optimized for deployment on OpenWRT routers (specifically MT6000 and MT3000) for edge tracking, logging, and request mirroring.

## Core Functionality

- **Catch-all Routing**: Responds to all requests regardless of path.
- **Request Mirroring**: Automatically replicates the requested URL path in a local root directory.
    - Paths with extensions (e.g., `.js`, `.html`) create files.
    - Paths without extensions create directories.
- **Logging**: Captures comprehensive request metadata (Method, URL, Headers, IP) in JSON format.
- **Response**: Always serves a 1x1 transparent tracking GIF.

## Technology Stack

- **Language**: Go (Golang)
- **Target OS**: Linux (OpenWRT)
- **Architecture**: ARM64 (MT6000/MT3000)

## Development Conventions & Constraints

- **Surgical Changes**: Always prioritize targeted updates to logic.
- **Security**: Never log sensitive data or credentials.
- **Performance**: Keep the binary footprint small and memory usage minimal for router environments.
- **Testing Strategy**: Local simulation -> Beta deployment via SSH to MT3000 -> Final MT6000 production deployment.

## Packaging & CI/CD Heuristics

The build lifecycle includes specific heuristics for compiling Go on OpenWRT, navigating SDK paths, configuring packages non-interactively, and robust OpenWRT Docker CI caching to preserve states (`dl`, `feeds`, `staging_dir/host`, `.gocache`) across ephemeral CI containers.
