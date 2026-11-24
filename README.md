# UMAN-ECO — Enterprise Carbon Optimization
### Enterprise Lab v2.0 | Part of the UMAN Framework Family

> [!IMPORTANT]
> **ACADEMIC DEMONSTRATION ONLY — NOT A PRODUCTION PRODUCT OR SERVICE**
>
> UMAN-ECO Enterprise Lab v2.0 was prepared as an **individual educational prototype for the SUS-701 Green Entrepreneurship assignment (2026)**. It is published to illustrate a proposed sustainable-computing venture and its technical concepts. **It is not a commercial offering, a managed service, a certified emissions-accounting system, or an operational decision tool.** All supplied workloads, environmental factors, modeled results, recommendations, roles, approvals, and audit examples are **synthetic or assumption-based**. Do not treat any output as measured savings, verified emissions, a compliance assertion, or advice for real infrastructure changes.

## About UMAN and UMAN-ECO

**UMAN (Unified Modernization and Architecture Navigator)** is an independently developed family of architecture frameworks exploring structured assessment, modernization, responsible innovation, and systems thinking. Related areas include AI readiness, sustainable enterprise architecture, and quantum technology exploration.

**UMAN-ECO (Enterprise Carbon Optimization)** applies selected sustainable-architecture concepts to a **hypothetical green-entrepreneurship software venture**. This repository showcases a browser-based simulator and mock enterprise workflows; it does not represent a market-ready UMAN product.

**Academic context:** SUS-701, Assignment 4 — *Become a Green or Blue Entrepreneur* (2026).

## What this demonstration includes

| Workspace | Educational capabilities |
| --- | --- |
| Overview | Sample portfolio KPIs and UMAN framework context |
| Quick Simulator | Assumption-driven electricity, emissions and cost scenarios; CSV export and URL sharing of simulator inputs |
| Carbon Intelligence | Eight illustrative multi-provider workloads; PUE, regional factors, allocated embodied carbon, efficiency and rebound scenarios; CSV/JSON dataset import/export |
| GreenOps Decision Lab | Deterministic mock recommendations, constraint checks, role/persona selection and simulated approval/rejection |
| Evidence & Audit | Browser-local decision history and CSV export — **not** a secure or immutable audit trail |
| Methodology | Equations, assumptions, accounting boundaries and known limitations |

**No real cloud connectors are implemented.** References to AWS, Azure, GCP, VMware, Kubernetes, regions and operational personas are illustrative. The application does not authenticate to cloud accounts, ingest live telemetry, change infrastructure or execute optimization policies.

## View it locally

1. Download or clone this repository.
2. Open the root-level `index.html` in a modern browser.
3. Explore the preloaded sample workloads, or import non-sensitive test data.

The website requires **no build, API keys, dependency installation, backend or database** for its demonstrated functionality. It is a static HTML/CSS/JavaScript application; data and mock audit records are handled in the browser.

## Publish as a GitHub Pages academic demonstration

1. Create a **public** GitHub repository (for example, `uman-eco`).
2. Upload the **contents** of this package so `index.html` is in the repository **root**, alongside `assets/` and `data/`. Do **not** upload only the ZIP archive.
3. Open your repository's **Settings → Pages**.
4. Under **Build and deployment**, select **Deploy from a branch**.
5. Select the `main` branch and `/(root)` directory; select **Save**.
6. Once deployment is complete, use the URL GitHub shows under **Settings → Pages**, typically `https://YOUR-USERNAME.github.io/uman-eco/`.

See [`DEPLOY-GITHUB-PAGES.md`](DEPLOY-GITHUB-PAGES.md) for a short publishing checklist. The included `.nojekyll` file disables unnecessary Jekyll processing. GitHub Pages is intended here for an **academic static showcase**, not to operate a commercial SaaS product.

## Repository structure

```text
index.html                      Static app entry point
assets/styles.css               Visual design and responsive styling
assets/app.js                   Client-side simulation and interactions
data/sample-workloads.csv       Synthetic 8-workload dataset
downloads/*.xlsx                Offline sample-workload workbook
METHODOLOGY.md                  Model assumptions and calculation notes
TEST-CHECKLIST.md               Functional validation checklist
DEPLOY-GITHUB-PAGES.md          Publication instructions
.nojekyll                       GitHub Pages static-site configuration
```

## Dataset import requirements

CSV input requires these exact columns:

`id,name,provider,region,itKwh,pue,factor,embodiedT,price,source,workload,criticality`

- `provider`: `AWS`, `Azure`, `GCP`, or `On-prem`.
- `itKwh`: nonnegative **annual IT electricity**, before PUE.
- `pue`: between 1 and 5.
- `factor`: assumed grid emissions factor, in kg CO2e/kWh, from 0 to 3.
- `embodiedT`: nonnegative, illustrative annual allocated embodied tCO2e.
- `price`: nonnegative USD/kWh.
- `workload`: `Batch`, `Always-on`, or `Flexible`.
- `criticality`: `Low`, `Medium`, or `High`.
- Imports allow up to 500 rows / 2 MB. Import replaces the sample dataset **in the current browser only**. JSON import accepts an array of objects with the same fields.

## Modeling scope and limitations

- Facility electricity = modeled IT electricity × assumed PUE.
- Operational tCO2e = facility kWh × assumed grid emissions factor ÷ 1,000.
- Optional allocated embodied emissions are **illustrative** and are not independently established from hardware life-cycle inventories.
- Scenario efficiency, rebound, electricity prices and regional factors are user assumptions, not predictions or validated measurements.
- Recommendations and synthetic latency/cost effects are **demonstrations of decision logic**, not engineering assessments or guarantees.
- Persona selection is a UI simulation, **not authentication, authorization or real role-based access control**.
- The local audit log is editable/removable browser storage, **not tamper-evident evidence**.
- The software is **not SOC 2 audited, ISO certified, GHG Protocol verified, or suitable for official ESG, regulatory, financial, compliance or carbon-credit reporting**.
- Third-party methodologies referenced in the documentation inform a possible future design; reference to them is **not an endorsement, conformity assessment or certification**.

See [METHODOLOGY.md](METHODOLOGY.md) for calculation boundaries, assumptions and double-counting cautions.

## Public-use notice, disclaimers and rights

**Educational purpose; no public offering.** Publication of this repository or demonstration site is for academic review and technical illustration only. It is not an invitation to purchase, subscribe, invest, contract, obtain professional advice or rely on any particular functionality or outcome. The presence of mock enterprise features or future-work descriptions does **not** commit the author to deliver a product, service, integration or roadmap item.

**No service or support commitment.** This project is provided voluntarily, without a service-level agreement, uptime commitment, maintenance schedule, security-patch promise, help desk, support response obligation, or promise to continue hosting or updating it. Features, access and content may change or be withdrawn without notice.

**No warranties or reliance.** The materials and software are provided **“AS IS” and “AS AVAILABLE,” without warranties or guarantees of accuracy, availability, fitness for a particular purpose, compliance, security or results, to the extent allowed by applicable law**. Outputs are exploratory estimates only. Visitors remain responsible for independently verifying any information before using it in a real-world context. **Do not use this demonstration to make operational, investment, financial, legal, regulatory, reporting or environmental claims.**

**Limitation of responsibility.** To the extent permitted by applicable law, the author disclaims liability for losses or consequences arising from reliance on, use of, inability to use, or redistribution of this educational prototype. **This notice does not override mandatory legal rights or obligations** and does not itself guarantee immunity from legal claims.

**No affiliation or endorsement.** UMAN-ECO is an independently developed academic concept. It is not presented as an official project, product, representation, or endorsement of the author's employer, the educational institution, cloud providers, standards organizations, or any other third party mentioned for context.

**Privacy and security.** Do **not** upload personal, confidential, proprietary, regulated, production or credential-bearing data. The demonstration intentionally uses browser-local state rather than a project backend; imported datasets and mock decision histories can remain in local browser storage until cleared. Shared scenario URLs can expose encoded inputs to recipients and potentially to browser histories or hosting logs. GitHub or another hosting provider may collect standard request and security logs under its own policies. No security controls suitable for enterprise or regulated data are claimed.

**Copyright and reuse.** Copyright © 2026 **Uman Ahmed Mohammed**. All rights reserved except rights expressly granted under applicable law or platform terms. This repository does **not** include an open-source license or grant general permission to reuse, modify, redistribute or commercialize the code and materials. Publishing it publicly on GitHub nonetheless permits uses inherent to GitHub's platform terms (including viewing and forking on GitHub). Anyone considering broader reuse should obtain appropriate permission and evaluate applicable third-party rights.

## Project status

**Status:** Academic proof of concept / exploratory simulation.  
**Version:** Enterprise Lab v2.0.  
**External integrations:** None.  
**Production readiness:** Not production-ready.  
**Commercial availability:** Not offered.  
**Future enhancements:** Illustrative possibilities only; no delivery or support commitments.
