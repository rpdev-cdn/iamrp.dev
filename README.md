# Richard P. Dissell — Engineering & Security Portfolio (`iamrp.dev`)

Production source repository for **[iamrp.dev](https://iamrp.dev)**, built with Quartz v5 and deployed to GitHub Pages behind Cloudflare.

## Key Sections

- **Portfolio Home:** [https://iamrp.dev](https://iamrp.dev)
- **Curriculum Vitae & Master Resume:** [https://iamrp.dev/Resume/Master_Resume](https://iamrp.dev/Resume/Master_Resume)
- **Quantitative Career Achievements Matrix:** [https://iamrp.dev/Resume/Achievements_Matrix](https://iamrp.dev/Resume/Achievements_Matrix)
- **Downloadable Resume PDF (3-Page):** [https://cdn.iamrp.dev/pdf/Richard_Dissell_Resume.pdf](https://cdn.iamrp.dev/pdf/Richard_Dissell_Resume.pdf)
- **Downloadable Master Resume PDF (7-Page):** [https://cdn.iamrp.dev/pdf/Richard_Dissell_Master_Resume.pdf](https://cdn.iamrp.dev/pdf/Richard_Dissell_Master_Resume.pdf)
- **Enterprise Governance & Security Policies (18 NIST CSF 2.0 / ISO 27001 Policies):** [https://iamrp.dev/Projects/Governance-and-Policies/](https://iamrp.dev/Projects/Governance-and-Policies/)
- **Contact & Cryptographic Verification (PGP / FIDO2):** [https://iamrp.dev/Contact/](https://iamrp.dev/Contact/)

## Build & Deployment

- **Site Deployment (`.github/workflows/deploy.yml`):** Compiles Markdown content under `content/` via Quartz v5 (`npx quartz build`), copies RFC 9116 `security.txt` and `pgp.asc`, deploys to GitHub Pages, and purges Cloudflare CDN cache.
- **Official PDF Resumes:** Hosted directly as curated static flat files on `rpdev-cdn/cdn.iamrp.dev` at `pdf/Richard_Dissell_Resume.pdf` (3-page W-2 resume) and `pdf/Richard_Dissell_Master_Resume.pdf` (7-page comprehensive Master Resume).
