# Richard P. Dissell — Engineering & Security Portfolio (`iamrp.dev`)

Production source repository for **[iamrp.dev](https://iamrp.dev)**, built with Quartz v5 and deployed to GitHub Pages behind Cloudflare.

## Key Sections

- **Portfolio Home:** [https://iamrp.dev](https://iamrp.dev)
- **Curriculum Vitae & Master Resume:** [https://iamrp.dev/Resume/Master_Resume](https://iamrp.dev/Resume/Master_Resume)
- **Quantitative Career Achievements Matrix:** [https://iamrp.dev/Resume/Achievements_Matrix](https://iamrp.dev/Resume/Achievements_Matrix)
- **Downloadable Official PDF Resume:** [https://cdn.iamrp.dev/pdf/Richard_Dissell_Resume.pdf](https://cdn.iamrp.dev/pdf/Richard_Dissell_Resume.pdf)
- **Enterprise Governance & Security Policies (18 NIST CSF 2.0 / ISO 27001 Policies):** [https://iamrp.dev/Projects/Governance-and-Policies/](https://iamrp.dev/Projects/Governance-and-Policies/)
- **Contact & Cryptographic Verification (PGP / FIDO2):** [https://iamrp.dev/Contact/](https://iamrp.dev/Contact/)

## Build & Deployment Pipelines

- **Site Deployment (`.github/workflows/deploy.yml`):** Compiles Markdown content under `content/` via Quartz v5 (`npx quartz build`), copies RFC 9116 `security.txt` and `pgp.asc`, deploys to GitHub Pages, and purges Cloudflare CDN cache.
- **Automated PDF Resume Pipeline (`.github/workflows/generate-pdf.yml`):** Converts `content/Resume/Master_Resume.md` to a print-calibrated 3-page PDF using `scripts/build_resume_pdf.py` (Markdown + WeasyPrint + pypdf) and publishes to `cdn.iamrp.dev`.
