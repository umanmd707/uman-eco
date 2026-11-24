# UMAN-ECO — Enterprise Carbon Optimization

**Enterprise Lab v2.1 · Carbon Footprint Tracking App · Part of the UMAN Framework Family**

> [!IMPORTANT]
> **ACADEMIC DEMONSTRATION ONLY — NOT A PRODUCTION PRODUCT OR SERVICE**
>
> This project was prepared for **SUS-701 Assignment 4: Become a Green or Blue Entrepreneur (2026)**, under the chosen topic **“Carbon Footprint Tracking App — Design a mobile platform helping individuals or businesses reduce emissions.”** The prototype focuses on **businesses** and uses illustrative or unverified data. It is not a certified carbon-accounting tool, commercial offering, or managed service. It does not measure or verify real emissions reductions or implement real infrastructure changes.

## Overview

**UMAN (Unified Modernization and Architecture Navigator)** is an independently developed family of enterprise architecture approaches. **UMAN-ECO (Enterprise Carbon Optimization)** explores a proposed green entrepreneurship application of sustainable computing concepts informed by UMAN-GREEN.

UMAN-ECO is a **mobile-friendly Progressive Web App (PWA)** that demonstrates how a business could record electricity usage by reporting month and business unit, estimate associated operational emissions, follow trends, set illustrative reduction targets, compare optimization scenarios, and explore rule-based, simulated GreenOps decisions.

**Live academic demonstration:** [UMAN-ECO on GitHub Pages](https://umanmd707.github.io/uman-eco/)

## Workspaces

| Workspace | Academic demonstration |
| --- | --- |
| **Overview** | Business-focused introduction, illustrative portfolio summary and access to carbon tracking |
| **Carbon Footprint Tracker** | Monthly records by business unit; estimated operational emissions; trends; target progress; add/edit/delete records; CSV/JSON import and CSV export |
| **Quick Simulator** | Assumption-driven annual energy, emissions and cost scenarios; CSV output and shareable inputs |
| **Carbon Intelligence** | Eight sample AWS, Azure, GCP and on-prem workloads; PUE, illustrative grid factors, embodied allocations and rebound scenarios |
| **GreenOps Lab** | Deterministic *hypothetical* recommendations, constraint evaluation and simulated human decisions |
| **Evidence & Audit** | Browser-local simulation decision history, **not** a secure, immutable or independently verified audit trail |
| **Venture & Impact** | Customers, value proposition, proposed revenue and cost structure, environmental/social/economic value, SDGs, governance, stakeholders and scaling considerations |
| **Methodology** | Equations, limitations, accounting boundaries and references |

### Mobile access

The application adapts to phone and desktop widths, including a dedicated mobile workspace selector. On supported browsers it can be **installed as a PWA** from the browser's installation menu. GitHub Pages hosts the static files; no server or application account is required. The optional service worker caches application assets for offline access after an initial successful visit; users may need to reload to receive a newly published version. Browser installation support varies by device and browser.

## Repository structure and file purposes

The following inventory reflects the **v2.1 repository layout**. Application source files are separate from the synthetic sample data, optional downloads and project documentation.

```text
uman-eco/
├── index.html
├── assets/
│   ├── app.js
│   ├── tracker.js
│   ├── mobile-nav.js
│   ├── pwa.js
│   ├── styles.css
│   ├── icon-192.png
│   └── icon-512.png
├── data/
│   ├── sample-workloads.csv
│   └── sample-monthly-tracker.csv
├── downloads/
│   ├── UMAN-ECO-v2-Sample-Workloads.xlsx
│   └── UMAN-ECO-v2.1-Monthly-Tracker.xlsx
├── manifest.webmanifest
├── service-worker.js
├── README.md
├── METHODOLOGY.md
├── TEST-CHECKLIST.md
├── VALIDATION.md
├── DEPLOY-GITHUB-PAGES.md
└── _headers
```

| Path | Purpose |
| --- | --- |
| `index.html` | Main application layout, workspace markup and entry point. |
| `assets/styles.css` | Theme, components and responsive desktop/mobile styling. |
| `assets/app.js` | Original simulator, portfolio carbon intelligence, simulated GreenOps decisions and browser-local audit functionality. |
| `assets/tracker.js` | Monthly carbon records, charts, targets, filters, validation and data import/export. |
| `assets/mobile-nav.js` | Workspace selection on smaller screens. |
| `assets/pwa.js` | Service-worker registration in compatible browsers. |
| `assets/icon-192.png`, `assets/icon-512.png` | Application icons used by the PWA manifest. |
| `data/sample-workloads.csv` | Eight synthetic enterprise workload records used to illustrate portfolio emissions and optimization. |
| `data/sample-monthly-tracker.csv` | Synthetic monthly carbon-tracking observations across reporting periods and business units. |
| `downloads/UMAN-ECO-v2-Sample-Workloads.xlsx` | Offline sample-workload workbook. |
| `downloads/UMAN-ECO-v2.1-Monthly-Tracker.xlsx` | Offline monthly tracker workbook with illustrative calculations. |
| `manifest.webmanifest` | PWA identity, display preferences, launch path and icon declarations. |
| `service-worker.js` | Static-asset caching to support limited offline use; not a backup or synchronization system. |
| `README.md` | Overview, use instructions, file inventory, limitations and public-use notices. |
| `METHODOLOGY.md` | Formulas, data boundaries, assumptions and accounting caveats. |
| `TEST-CHECKLIST.md` | General functional and publication checks for this prototype. |
| `VALIDATION.md` | Scope and limits of the tests performed during development. |
| `DEPLOY-GITHUB-PAGES.md` | GitHub Pages publishing and verification instructions. |
| `_headers` | A leftover hosting-specific header configuration file. **GitHub Pages does not apply it as HTTP response headers**; it is not needed for the application and can be removed. |

The `assets/`, `data/`, and PWA files are part of the functioning website. The Markdown files are reference documentation, not required for browser execution. The Excel workbooks are optional offline resources. The application does **not** require `ASSIGNMENT-ALIGNMENT.md`; faculty assessment mapping can be maintained separately from the public repository.

## GitHub Pages deployment

1. Place the **contents** of the release package in the repository root, so that `index.html`, `assets/`, `data/` and `manifest.webmanifest` are directly accessible. Do **not** upload only the ZIP archive.
2. In **Settings → Pages**, choose **Deploy from a branch** and select `main` / `/(root)`.
3. Open the published site: **https://umanmd707.github.io/uman-eco/**.
4. Confirm the tracker and simulator load on desktop and mobile. A hard refresh and app restart can help clear a previous installed PWA release.

See [DEPLOY-GITHUB-PAGES.md](DEPLOY-GITHUB-PAGES.md) and [TEST-CHECKLIST.md](TEST-CHECKLIST.md).

## Monthly tracking: dataset and calculations

The initial **24 synthetic observations** cover two fictitious business units across **12 reporting months** (November 2025 through October 2026). They are scenario examples, not claims about any organization.

**Required CSV columns:**

`period,businessUnit,facilityKwh,factorKg,priceUsd,source`

- `period`: `YYYY-MM` (2000–2100)
- `businessUnit`: fictional/test business-unit label, up to 60 characters
- `facilityKwh`: monthly **facility** electricity consumption, kWh
- `factorKg`: illustrative location-based emissions factor, kg CO₂e/kWh
- `priceUsd`: illustrative electricity price, USD/kWh
- `source`: source classification (sample = `Synthetic / demonstration`; manual records are unverified)

**Monthly estimated operational emissions (tCO₂e)** = `facilityKwh × factorKg ÷ 1,000`.

**Monthly estimated electricity cost** = `facilityKwh × priceUsd`.

Target comparison uses the **first three reporting months' average emissions** as baseline and the **latest three months' average** as recent performance. At least six distinct monthly periods and a nonzero baseline are required. It is not seasonally adjusted, does not establish causation and is not an inventory methodology. Embodied emissions are excluded from the history tracker; facility kWh must not be multiplied by PUE again.

CSV and JSON imports are validated client-side (up to 1,000 observations / 1 MiB); each `(period, businessUnit)` combination must be unique. Imports **replace existing locally stored observations** after confirmation. Data remains in the browser's local storage unless cleared or exported. No cloud account is connected.

## Other demonstration datasets

- `data/sample-monthly-tracker.csv` — 24 **synthetic** monthly historical rows; valid import template.
- `downloads/UMAN-ECO-v2.1-Monthly-Tracker.xlsx` — editable workbook with sample monthly data and calculation formulas (export the input sheet as CSV before importing).
- `data/sample-workloads.csv` — eight **synthetic** workloads for the Carbon Intelligence and GreenOps workspaces.
- `downloads/UMAN-ECO-v2-Sample-Workloads.xlsx` — retained workbook for the sample workload dataset.

Workload CSV columns are: `id,name,provider,region,itKwh,pue,factor,embodiedT,price,source,workload,criticality`.

## Academic assignment context

The application illustrates the chosen **business-focused carbon footprint tracking** concept with a mobile-friendly interface and proposed approaches for tracking and reducing emissions. The project report and presentation should address the assignment's business model, sustainability benefits, stakeholders, costs, applicable policies, impact assessment and scaling strategy; this public repository does not separately maintain the faculty-question mapping.

The website is **not a substitute** for the faculty-required separate written project report, professional **20–25 minute presentation** and **5-minute discussion**.

## Known limitations

- **No live provider APIs, sensors, electricity meters or carbon-intensity feeds.** All initial data is synthetic; manually entered data is unverified.
- **No certified GHG inventory, validated Scope 2/3 reporting or formal standards certification.** Simplified electricity-based emissions estimates may omit material sources, boundaries, contractual instruments and uncertainty.
- **No proof of actual energy savings.** GreenOps recommendations, approval roles, modeled latency changes and optimization outcomes are deterministic simulations; no infrastructure action is performed.
- **No enterprise identity, tenant isolation, server-side storage, tamper-evident logs or service-level assurance.** UI personas do not implement real RBAC.
- **PWA offline cache is a convenience**, not backup, synchronization or availability assurance. Browser-local data can be lost when storage is cleared or the browser is changed.

See [METHODOLOGY.md](METHODOLOGY.md) for accounting boundaries, interpretation and reference standards.

## Public-use notice, rights and disclaimers

**Educational context and no offering.** Public access is for academic review and general technical illustration. The repository is not an invitation to purchase, invest, contract or rely on a real service. Conceptual roadmap features do not create an obligation to implement, maintain, host or support anything.

**As-is; no reliance.** The materials and application are supplied **“AS IS” and “AS AVAILABLE,” without warranties or guarantees of accuracy, completeness, availability, security, legal compliance, suitability or environmental performance, to the extent permitted by law**. Outputs must not be used for operational, financial, investment, regulatory, ESG, carbon-credit or legal decisions without independent validation. Liability is disclaimed to the extent permitted by applicable law; mandatory legal rights and obligations are not overridden by this notice.

**No service commitments.** No maintenance, security patch, uptime, data retention, support response or continuation of hosting is promised. The demonstration may be changed or withdrawn.

**Independence.** The project is an independent academic concept, not an official product or endorsement of an employer, institution, standard-setting body, or cloud provider.

**Privacy.** Do **not** enter or upload personal, confidential, proprietary, credential-bearing, regulated or production data. Input and mock decision histories may remain in the browser's local storage. Shareable URLs can expose their embedded simulator assumptions to recipients and URL logs. GitHub Pages and browser vendors may independently process ordinary website request or diagnostic information according to their policies.

**Copyright.** Copyright © 2026 Uman Ahmed Mohammed. All rights reserved, subject to applicable law and GitHub's platform terms. **No open-source license is granted.** Public availability does not authorize general reproduction, redistribution or commercial exploitation beyond applicable rights and platform terms.

## Status

**Release:** Enterprise Lab v2.1 · **Purpose:** academic proof of concept · **Hosting:** GitHub Pages · **Production readiness:** not production-ready · **External integrations:** none.
