---
title: FIDO2 Hardware-Backed Security Toolkit
draft: false
tags: [security, fido2, gpg, encryption]
aliases:
  - /projects--and--research/projects/fido2_security_toolkit
---

# FIDO2 Security Toolkit

This project provides a suite of tools to leverage FIDO2 security keys for hardware-backed encryption, GPG identity management, and Git commit signing. It integrates seamlessly with Zero-Trust engineering environments.

## Features

- **Hardware-Backed Encryption**: Encrypt and decrypt files using a secret derived from your FIDO2 key's `hmac-secret` extension.
- **FIDO2 GPG Vault**: Securely store and manage your GPG identity (emails/signing) in a RAM-backed session, sealed by your physical hardware.
- **Git Commit Signing**: Native integration with FIDO2 via SSH (`ecdsa-sk`) for verified commit signatures.
- **Custom Assertion Tool**: High-performance C utility for interacting directly with FIDO2 hardware.
- **Secrets CLI**: Terminal-native password manager protected by your hardware key.
- **PAM Integration**: Require a physical touch for `sudo` operations.
- **Cloud Backup**: Automated backup of encrypted vaults to private GitHub Gists.
- **Credential Auditor**: Manage and prune resident credentials on your security key.
- **Hardware Auto-Lock**: Instantly secure GPG and RAM-sessions when the key is unplugged (via `udev`).
- **Secure Clipboard**: Secrets CLI bridge that auto-wipes passwords from the clipboard after 30 seconds.
- **LUKS Integration**: Bind Linux disk encryption to your physical hardware key.
- **Cloud CLI Bridge**: Hardware-protected ephemeral sessions for AWS and GCP.
- **Identity Manager**: Role-based mapping for multiple FIDO2 keys (e.g., personal vs. work).
- **Audit Logging**: Secure, encrypted log of all hardware-backed operations.

## Security Design

- **Root of Trust**: All cryptographic secrets are derived from the physical FIDO2 device.
- **Non-Exportable**: Private key material never leaves the hardware.
- **Ephemeral Storage**: GPG keys are managed in a RAM disk (`/tmp/fido2-gpg-session`) and are wiped upon locking.
