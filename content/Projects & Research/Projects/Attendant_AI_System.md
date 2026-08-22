---
title: Attendant (J.A.R.V.I.S / E.D.I.T.H)
draft: false
tags: [ai, voice, polyglot, ollama]
---

# Attendant (J.A.R.V.I.S / E.D.I.T.H)

A localized, polyglot personal attendant integrating AI orchestration (Gemini & Ollama) with seamless system management and voice interaction.

## Architecture

The system follows a polyglot microservices architecture designed for localized AI operations:

- **AI & Voice Engine (Python):** Handles Speech-to-Text (STT), Text-to-Speech (TTS), and LLM orchestration (interfacing locally with Ollama or via API with Gemini).
- **System & Cyber Manager (Go):** Handles robust OS-level integrations, hardware status, and efficient background tasks.
- **API Gateway (Node.js):** Acts as the central router and serves as the foundation for the eventual web dashboard interface.

## Prerequisites

- **Python 3.10+** (AI Engine)
- **Go 1.20+** (System Manager)
- **Node.js 18+** (API Gateway)
- **Ollama** (Running locally for privacy-preserving, localized inference)

## Project State

This project employs advanced operational directives, leveraging `GEMINI.md` for shared systemic instructions and `MEMORY.md` for tracking local progress and environment-specific configurations across sessions.
