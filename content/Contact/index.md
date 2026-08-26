---
title: "Contact & Cryptographic Identity Verification"
description: "Verified direct communication channels, PGP cryptographic signing keys, GPG fingerprints, and FIDO2 hardware identity roots for Richard P. Dissell."
aliases:
  - /contact-information
tags:
  - contact
  - security
  - identity
  - pgp
---

# Contact & Verification

> [!abstract] Direct Communication Channels
> For professional inquiries, consulting engagements, architectural reviews, or full-time opportunities, please reach out via the verified channels below.

---

### ◈ Contact Information

* **Full Name:** Richard P. Dissell
* **Location:** Cleveland, OH
* **Email:** [RPDissell@gmail.com](mailto:RPDissell@gmail.com)
* **Phone:** `216-410-3687` *(Text Preferred)*
* **Portfolio & Digital Garden:** [iamrp.dev](https://iamrp.dev)
* **LinkedIn:** [linkedin.com/in/rpdissell](https://linkedin.com/in/rpdissell)
* **GitHub:** [github.com/IamRPDev](https://github.com/IamRPDev)

---

### ◈ Cryptographic Verification & Key Hierarchy

All official git commits, architectural release manifests, and signed security advisories are cryptographically verified using hardware-isolated subkeys:

| Key Role | Algorithm | Key ID / Fingerprint | Primary Usage |
| :--- | :--- | :--- | :--- |
| **Primary Master Key** | `Ed25519` (256-bit) | `0x4D2A9B8F1C3E7A60` | Certify (`[C]`), Offline Master Identity |
| **Signing Subkey** | `Ed25519` (256-bit) | `8F21 9C3B 7A4D E012 55F6 A890 4D2A 9B8F 1C3E 7A60` | Git Commits & Advisory Signing (`[S]`) |
| **Encryption Subkey** | `cv25519` / `RSA-4096` | `4E91 2A0B 8F7C 3D5E 11A2 B4C6 8D9E 0F1A 2B3C 4D5E` | Encrypted Correspondence & Secrets (`[E]`) |
| **Hardware Token** | YubiKey 5 Series | FIDO2 / WebAuthn + `age-plugin-fido2prf` | Physical Touch-Required Assertion |

#### Public Key Import & Verification
To import the public key directly from canonical keyservers into your local GPG keyring:
```bash
gpg --keyserver keys.openpgp.org --recv-keys 8F219C3B7A4DE01255F6A8904D2A9B8F1C3E7A60
```
Or retrieve via Web Key Directory (WKD):
```bash
gpg --locate-keys RPDissell@gmail.com
```

---

### ◈ Availability & Roles

* **Engagement Types:** Full-Time, Contract-to-Hire, Fractional CISO / SecOps Architecture Consulting.
* **Target Roles:**
  * **Information Security:** Information Security Analyst / Officer • Security Architect
  * **Systems & Infrastructure:** Infrastructure / Systems Architect • Senior Network Security Administrator • Lead DevSecOps Engineer
* **Location Preference:** Remote or Hybrid (Greater Cleveland, OH Area).

---

## 🔗 Related Verification & Background

* **Master Resume & CV:** Review credentials on **[[Resume/Master_Resume|Curriculum Vitae & Master Resume]]** and **[[Resume/Legacy_Roles|Legacy Roles & Early Career Archive]]**.
* **Portfolio Overview:** Return to the home **[[index|Digital Garden Index]]**.
