---
title: "Hardware-Hardened Secret Management: FIDO2 + Age + Chezmoi"
tags:
  - security
  - fido2
  - cryptography
  - age
  - chezmoi
---

# Hardware-Hardened Secret Management: FIDO2 + Age + Chezmoi

> [!abstract] Architectural Goal
> In a multi-machine development and server environment, storing private credentials, SSH keys, and API tokens in unencrypted dotfiles is an unacceptable security risk. This architecture enforces hardware-bound secret encryption using physical FIDO2/U2F security tokens paired with `age-plugin-fido2prf` and Chezmoi orchestration.

---

### ◈ Cryptographic Flow

Every decryption operation physically requires the hardware FIDO2 key to be inserted into the USB port and verified with user physical presence (touch/PIN).

```mermaid
graph LR
    A[Chezmoi Dotfile Manager] -->|Pass Encrypted Payload| B[age-fido2-wrapper]
    B -->|Invokes| C[age + age-plugin-fido2prf]
    C -->|HMAC-SHA256 PRF Challenge| D[Physical FIDO2 Hardware Key]
    D -->|User Touch / Presence Verified| C
    C -->|Decrypted Secret Stream| A
```

---

### ◈ Core Design Principles

1. **Symmetric Identity Binding:**
   * Uses `age-plugin-fido2prf` to derive symmetric encryption keys directly from the hardware token's internal secure element.

2. **Dual-Recipient Master Recovery Scheme:**
   * Every file is encrypted to both the physical FIDO2 hardware identity AND an air-gapped Master Recovery Key (`age-master-recovery.txt`).
   * Prevents total infrastructure lockout in the event of hardware loss while maintaining zero persistent plaintext secrets on disk.

3. **Encrypted Diffing via `textconv`:**
   * Configures `chezmoi.toml` with custom `textconv` filters to inspect secret changes and Git diffs in memory without writing decrypted credentials to persistent disk partitions.
