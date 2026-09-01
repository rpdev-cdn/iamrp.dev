---
title: Rebuilding the Lab - Coolify, Observability, and a Real Namespace
date: 2026-08-31
tags: [homelab, coolify, self-hosted, infrastructure]
---

# Rebuilding the Lab

I run my homelab as more than a place to park media servers — it's where I evaluate the same kind of tooling I end up recommending to clients. So this rebuild isn't just "get things working," it's paying attention to setup friction, resource footprint, and where things break along the way.

The trigger was outgrowing my old approach: hand-rolled containers across a few hosts, inconsistent SSL, no real memory of which compose file went with which service. This rebuild starts by fixing that — a proper PaaS layer, a clean namespace, and a stack of tools evaluated on top of it.

## Coolify, first

I picked Coolify as my deployment layer after looking at the usual alternatives — Dokku, CapRover, Kamal. It's going in first because everything else in this rebuild deploys *through* it, so I want real operational data on Coolify itself before I'm relying on it for six other services.

I forked it to `github.com/RPDevs-Builds/coolify`. Coolify itself has no public web component — its UI and API are internal, reached over my own network to manage deployments. The *apps* it deploys can be public; the orchestrator doesn't need to be, so it lives with the rest of my internal build tooling rather than out in the public-facing namespace.

## The stack going on top

Once Coolify's live, I'm layering in a set of tools I'm actually evaluating, not just installing:

- **Netdata** and **Beszel**, deliberately run side by side, so I have a firsthand comparison between "enterprise-grade and heavy" and "lightweight and simple."
- **Homepage** as the dashboard, replacing Homarr in this environment.
- **Directus**, pointed at my existing Postgres and MariaDB instances.
- **Ntfy**, which I already use across other environments, plus **Apprise** in front of it for routing.
- **Kestra** last, once there's enough running infrastructure to give it something real to orchestrate — a pipeline pulling from Postgres/MariaDB, transforming, loading, alerting on failure.

## How it's sequenced

1. **Environment prep** — confirm resources, DNS/reverse proxy plan, snapshot current state.
2. **Coolify** — the deployment layer everything else rides on.
3. **Netdata + Beszel** — now there's infrastructure worth watching.
4. **Homepage** — organize the growing service list.
5. **Directus, Ntfy, Apprise** — mostly parallel.
6. **Kestra** — benefits most from having real services and data to orchestrate against.
7. **Consolidation** — pull every phase's findings into one write-up.
