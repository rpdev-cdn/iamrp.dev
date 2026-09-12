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
  - zero-collection
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

At **IamRP.Dev**, privacy is treated as a fundamental human right and a core engineering constraint. The digital garden and portfolio at `https://iamrp.dev` are architected from the ground up on principles of **data sovereignty**, **radical transparency**, and **zero data collection**:

1. **We collect NO visitor data.**
2. **We store NO personal records, tracking IDs, or browsing histories.**
3. **Because we collect no data, there is nothing stored, held, or retained to request or delete.**
4. **We will NEVER track, profile, or monetize your visit.**
5. **We will NEVER embed third-party surveillance scripts, advertising pixels, or telemetry beacons.**
6. **We will NEVER feed your browsing activity into commercial AI models.**

---

## 2. Zero Data Collection Architecture

Unlike standard corporate websites that operate extensive surveillance and tracking stacks, `iamrp.dev` is built as a pure, static, read-only digital garden:

- **Zero Visitor Data Collection**: We do not collect names, email addresses, IP addresses, device fingerprints, or user identifiers when you browse `iamrp.dev`.
- **Zero User Accounts or Databases**: There are no user accounts, no login portals, no marketing sign-up popups, and no visitor databases.
- **Zero Third-Party Analytics**: We run **no** Google Analytics, no Adobe Analytics, no Mixpanel, and no Segment trackers. The site's static generator configuration (`quartz.config.yaml`) explicitly has `analytics: null` hardcoded.
- **Zero Social & Advertising Pixels**: We do **not** embed the Meta Pixel, LinkedIn Insight Tag, X/Twitter conversion pixels, or TikTok trackers.
- **Air-Gapped Typography & Sovereign Assets**: All fonts (*JetBrains Mono*) and stylesheets are served directly from our sovereign content network (`cdn.iamrp.dev`) or local bundles. We do **not** leak your IP address or browser fingerprints to external font services (such as Google Fonts or Adobe Typekit).
- **No Tracking Cookies**: We set **zero** persistent tracking cookies, third-party advertising cookies, or cross-site tracking beacons.

---

## 3. How the Site Technically Operates

When accessing `iamrp.dev`, your browser interacts solely with static files distributed globally:

### A. Stateless Edge Delivery
`iamrp.dev` is distributed through Cloudflare Anycast CDN edge proxies and GitHub Actions workflow artifacts:
- When you load a page, Cloudflare edge servers receive your HTTP request solely to deliver the compiled static HTML, CSS, and JS files from cache to your browser over **TLS 1.3 Strict encryption**.
- This edge routing is stateless and volatile. We do not extract, store, or aggregate personal browsing logs.

### B. Client-Side Browser Storage (Preferences Only)
`iamrp.dev` utilizes standard browser `localStorage` exclusively on your local device for your personal reading preferences:
- **Theme Selection**: Remembering whether you prefer ANSI Dark Mode or Sovereign Space mode.
- **Search Index Caching**: Downloading the client-side Quartz search index (`contentIndex.json`) so search queries execute 100% locally in your browser with zero network transmission.

### C. Direct Correspondence (Email Only)
If you independently choose to initiate an email to Richard P. Dissell (`support@iamrp.dev` or `RPDissell@gmail.com`):
- Your email address and message content are used solely to reply to your inquiry.
- Emails are never added to automated marketing funnels, sold to brokers, or syndicated to third parties.

---

## 4. No Retained Data, Nothing to Delete

Under privacy frameworks such as **GDPR**, **CCPA/CPRA**, and global data protection standards, users are granted rights to access, inspect, and delete personal data held by web operators.

> [!IMPORTANT]
> **Zero Data Retention Disclosure**  
> Because **`iamrp.dev` collects, logs, and retains zero personal data from visitors**, there is **literally nothing stored to inspect, export, or delete**.  
> You cannot be deleted from a database that was never created in the first place. You browse `iamrp.dev` anonymously, privately, and without leaving a trail on our systems.

If you have engaged in direct email correspondence and wish to have past email messages deleted from our private inbox, you may notify `support@iamrp.dev` and any correspondence will be purged immediately.

---

## 5. OpenPGP Cryptographic Attestation & RFC 9116 Disclosure

To provide cryptographic authenticity and secure vulnerability disclosure channels, `iamrp.dev` maintains public hardware-attested security infrastructure:

- **RFC 9116 Security Vulnerability Policy**: [`https://iamrp.dev/.well-known/security.txt`](https://iamrp.dev/.well-known/security.txt)
- **Security Contact**: `mailto:support@iamrp.dev`
- **Hardware-Attested OpenPGP Public Key**: [`https://iamrp.dev/pgp.asc`](https://iamrp.dev/pgp.asc)
  - **Key ID**: `6DB16A1D6D68F2AB20C89F0396DCEA6C34429505`
  - **Algorithms**: Ed25519 (Signing) / Cv25519 (Encryption)
  - **UIDs**: `Richard P <rpdissell@gmail.com>`, `RPDev <RPDev@IamRP.Dev>`, `RPDev <rpdisselldev@gmail.com>`

Security researchers and correspondents are actively encouraged to encrypt sensitive vulnerability reports or inquiries using this key.

---

## 6. Contact Information & Data Controller

For questions or security disclosures regarding `iamrp.dev` or the RPDev Sovereign Infrastructure fleet:

- **Data Controller & Operator**: Richard P. Dissell
- **Primary Support & Privacy Contact**: `support@iamrp.dev`
- **RFC 9116 Security Reporting**: `security@iamrp.dev`
- **Main Portfolio & Digital Garden**: [https://iamrp.dev](https://iamrp.dev)
- **Central Policy Portal**: [https://policy.iamrp.dev](https://policy.iamrp.dev)
- **Live Fleet Telemetry**: [https://status.iamrp.dev](https://status.iamrp.dev)

---
*Last Updated: September 12, 2026 — RPDev Sovereign Systems*
