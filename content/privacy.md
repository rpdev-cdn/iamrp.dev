---
date: 2026-09-12
title: "Privacy Policy & Sovereign Web Commitment"
description: "Authoritative Privacy Policy and Sovereign Web Commitment for Richard P. Dissell's executive digital garden, technical resume, and sovereign platform (iamrp.dev)."
aliases:
  - /privacypolicy
  - /privacy-policy
  - /policies/privacy
tags:
  - privacy
  - legal
  - data-sovereignty
  - zero-tracking
  - zero-sale
---

# Privacy Policy & Sovereign Web Commitment for IamRP.Dev

**Effective Date:** September 12, 2026  
**Operator:** Richard P. Dissell — RPDev Autonomous Fleet & Infrastructure  
**Service:** `iamrp.dev` (Executive Portfolio, Applied Research, Engineering Knowledge Base & Digital Garden)  
**Authoritative Central Policy URL:** [`https://policy.iamrp.dev/privacypolicies/iamrp/index.html`](https://policy.iamrp.dev/privacypolicies/iamrp/index.html)  

---

## 1. Our Sovereign Privacy Commitment

At **IamRP.Dev**, privacy is treated as a fundamental human right and a core engineering constraint. The digital garden and portfolio at `https://iamrp.dev` are architected from the ground up on principles of **data sovereignty**, **radical transparency**, and **zero commercial surveillance**:

1. **We will NEVER sell your data.**
2. **We will NEVER track, profile, or monetize your visit.**
3. **We will NEVER embed third-party surveillance scripts, advertising pixels, or telemetry beacons.**
4. **We will NEVER feed your browsing telemetry into public commercial AI models.**

This policy outlines how the `iamrp.dev` web platform operates, what minimal technical telemetry is handled, and how your privacy is protected under sovereign engineering principles.

---

## 2. Zero Commercial Surveillance & Anti-Tracking Architecture

Unlike standard corporate websites that operate extensive surveillance stacks, `iamrp.dev` adheres to strict technical non-tracking rules:

- **Zero Third-Party Analytics**: We run **no** Google Analytics, no Adobe Analytics, no Mixpanel, and no Segment trackers. The site's static site generator (`quartz.config.yaml`) explicitly has `analytics: null` hardcoded.
- **Zero Social & Advertising Pixels**: We do **not** embed the Meta Pixel, LinkedIn Insight Tag, X/Twitter conversion pixels, or TikTok trackers.
- **Air-Gapped Typography & Sovereign Assets**: All fonts (such as *JetBrains Mono*) and stylesheets are served strictly from our sovereign content network (`cdn.iamrp.dev`) or local bundles. We do **not** leak your IP address or browser fingerprints to external font services (such as Google Fonts or Adobe Typekit).
- **No Third-Party Cookies**: We set **zero** persistent tracking cookies, third-party advertising cookies, or fingerprinting beacons.

---

## 3. What Information Is Handled & Why

When accessing `iamrp.dev`, only the minimal technical data necessary to route and serve static content securely over the public Internet is processed:

### A. Ephemeral Edge Delivery & Network Defense
`iamrp.dev` is distributed through Cloudflare Anycast CDN edge proxies and GitHub Actions workflow artifacts:
- **Volatile Edge Logs**: When you load a page, Cloudflare edge servers process standard HTTP/HTTPS request headers (client IP address, User-Agent, requested URI path, and timestamp) in volatile memory.
- **Functional Purpose**: This ephemeral processing exists exclusively to negotiate **TLS 1.3 Strict encryption**, enforce DDoS protection, mitigate brute-force/hostile bot swarms, and cache static assets for sub-millisecond global delivery.
- **No Long-Term Profile Storage**: These transient logs are never correlated with your personal identity or used to build commercial marketing profiles.

### B. Client-Side Browser Storage (Preferences Only)
`iamrp.dev` utilizes standard HTML5 `localStorage` exclusively for your explicit client-side reading preferences:
- **Theme Selection**: Remembering whether you prefer ANSI Dark Mode or Sovereign Space mode.
- **Search Index Caching**: Downloading the client-side Quartz search index (`contentIndex.json`) to execute instant, full-text in-browser searches without transmitting your search queries to any server.

### C. Direct Correspondence (Email & Inquiries)
If you choose to reach out to Richard P. Dissell directly via email (`support@iamrp.dev` or `RPDissell@gmail.com`):
- We process your email address, sender name, message content, and any attached technical specifications solely to respond to your inquiry, review technical advisory engagements, or evaluate professional career opportunities.
- We do not subscribe your email address to automated marketing lists, newsletters, or third-party CRM aggregators.

---

## 4. OpenPGP Cryptographic Attestation & RFC 9116 Disclosure

To provide cryptographic authenticity and secure vulnerability disclosure channels, `iamrp.dev` maintains public hardware-attested security infrastructure:

- **RFC 9116 Security Vulnerability Policy**: [`https://iamrp.dev/.well-known/security.txt`](https://iamrp.dev/.well-known/security.txt)
- **Security Contact**: `mailto:support@iamrp.dev`
- **Hardware-Attested OpenPGP Public Key**: [`https://iamrp.dev/pgp.asc`](https://iamrp.dev/pgp.asc)
  - **Key ID**: `6DB16A1D6D68F2AB20C89F0396DCEA6C34429505`
  - **Algorithms**: Ed25519 (Signing) / Cv25519 (Encryption)
  - **UIDs**: `Richard P <rpdissell@gmail.com>`, `RPDev <RPDev@IamRP.Dev>`, `RPDev <rpdisselldev@gmail.com>`

Security researchers and correspondents are actively encouraged to encrypt sensitive vulnerability reports or inquiries using this key.

---

## 5. Your Rights & Data Sovereignty

Regardless of your geographic location (including under **GDPR**, **CCPA/CPRA**, and international privacy standards), you maintain complete sovereignty over any interactions with `iamrp.dev`:

- **Right to Access & Know**: You may request confirmation of any correspondence or data retained from direct email exchanges.
- **Right to Erasure ("Right to be Forgotten")**: You may request the unconditional deletion of any past email correspondence or contact records by emailing `support@iamrp.dev`. Deletion requests are executed within 24 hours with zero friction.
- **Right to Non-Discrimination**: `iamrp.dev` is completely open access. There are no paywalls, registration forms, or tracking consent walls required to access Richard P. Dissell's resume, engineering wiki, or research monographs.

---

## 6. Contact Information & Data Controller

For any questions, concerns, or data privacy requests regarding `iamrp.dev` or the RPDev Sovereign Infrastructure fleet:

- **Data Controller**: Richard P. Dissell
- **Primary Support & Privacy Contact**: `support@iamrp.dev`
- **RFC 9116 Security Reporting**: `security@iamrp.dev`
- **Main Portfolio & Digital Garden**: [https://iamrp.dev](https://iamrp.dev)
- **Central Policy Portal**: [https://policy.iamrp.dev](https://policy.iamrp.dev)
- **Live Fleet Telemetry**: [https://status.iamrp.dev](https://status.iamrp.dev)

---
*Last Updated: September 12, 2026 — RPDev Sovereign Systems*
