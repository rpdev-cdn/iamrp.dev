---
title: Substrate - The Digital Nervous System
draft: false
tags: [ai, temporal, workflows, architecture]
---

# Substrate: The Digital Nervous System

**Substrate** is the core orchestration layer of the workspace, designed to facilitate distributed AI agent communication, complex workflow management, and autonomous skill generation.

## 🚀 Goal

To provide a robust, scalable backbone for "Digital Intelligence" within the workspace. Substrate connects high-level LLM reasoning with low-level execution through a network of specialized agents and durable Temporal workflows.

## 🏗️ Architecture

- **Distributed Agents:** Lead Agents (orchestration) and Sub-Agents (specialized tasks).
- **Temporal Core:** Durable execution of complex workflows (Chat, Research, File Consumption).
- **Federated Memory:** Shared state across Postgres, Qdrant (vector databases), and local agent caches.
- **Skill Engine:** Automated generation and validation of modular agent capabilities.

## 🛠️ Key Components

- `agents/`: Python-based agent definitions and workers.
- `generated_skills/`: Repository of dynamically synthesized agent skills.
- `substrate-node/`: TypeScript-based Temporal worker and activity implementation.
- `scripts/`: Deployment and maintenance utilities (PM2, Docker).
- `PROJECT_WIKI.md`: Auto-generated technical mapping of the Substrate network.

## 📈 Active Workflows

- **File Consumption:** Automated ingestion and vectorization of new workspace data.
- **Nexus Orchestration:** Multi-agent coordination for deep research and complex problem solving.
- **Heuristic Review:** Automated evaluation of code, skills, and system health.
- **Self-Improvement:** Continuous optimization of agent prompts and logic paths.
