# UMAN-ECO Enterprise Lab v2.0

**Part of the UMAN Framework Family** — UMAN (Unified Modernization and Architecture Navigator).

A standalone static web app for education, exploratory sustainable computing analysis, and simulated policy-based GreenOps decisions.

## Deploy to your EXISTING Netlify site (keeps your URL)

1. Extract `UMAN-ECO-Enterprise-Lab-v2.0.zip` on your computer.
2. Open the **existing** `uman-eco` project at https://app.netlify.com/.
3. Select **Deploys** and find the manual upload / drag-and-drop area for a new production deployment.
4. Drag the **UMAN-ECO-Enterprise-Lab-v2** folder (the folder containing `index.html`) to that area. Do not upload the parent directory, and do not upload only index.html.
5. After Netlify marks the deployment published, visit https://uman-eco.netlify.app/ in a private browser window and refresh.
6. If your site is connected to Git, use the repo deployment flow instead; manual deploys are not the preferred ongoing workflow for a Git-connected site.

Netlify serves `index.html` from the site root; this package requires **no build command**, dependencies, API keys, or server-side functions. Alternatively open `index.html` directly on your computer in a modern browser.

## Package map

- `index.html` — website markup
- `assets/styles.css` — responsive visual design
- `assets/app.js` — all modeling, scenario and interaction logic
- `data/sample-workloads.csv` — importable illustrative portfolio with eight workloads
- `METHODOLOGY.md` — formulas, provenance and major cautions
- `TEST-CHECKLIST.md` — deployment and functional validation
- `netlify.toml` — static deployment configuration and basic browser security headers

## User journey

1. **Overview**: sample portfolio KPI summary and UMAN relationship.
2. **Quick Simulator**: annual baseline, reduction, cost and emissions estimates; export CSV and share inputs by URL.
3. **Carbon Intelligence**: provider filtering; facility-energy/PUE modeling; grid factor; allocated embodied emissions; efficiency/rebound scenarios; CSV/JSON dataset import/export.
4. **GreenOps Lab**: deterministic simulated policy checks, persona-aware approval/rejection, estimated carbon/cost/latency impacts. No real actions.
5. **Evidence & Audit**: local decision history and CSV export. LocalStorage is NOT tamper-evident.
6. **Methodology**: transparent equations, limitations and future standards alignment.

## Supported CSV input

Required columns: `id,name,provider,region,itKwh,pue,factor,embodiedT,price,source,workload,criticality`.

- `provider`: one of `AWS`, `Azure`, `GCP`, `On-prem`
- `itKwh`: nonnegative annual IT electricity (not already facility electricity)
- `pue`: >= 1 and <= 5
- `factor`: nonnegative assumed location-based kg CO2e/kWh (<= 3)
- `embodiedT`: annual allocated embodied tons CO2e (nonnegative)
- `price`: USD/kWh, nonnegative
- `workload`: `Batch`, `Always-on`, or `Flexible`
- `criticality`: `Low`, `Medium`, or `High`
- Maximum 500 rows / 2 MB. CSV imports replace the full sample set (saved only in this browser). JSON imports accept an array of objects with identical field names.

**All demo data is synthetic.** Imported data is not authenticated or validated against metering systems. App code and data are available to users who can open the website.

## Limitations / safety

- **No real AWS, Azure, GCP, Kubernetes or VMware connectors.** No remote network calls or infrastructure modifications.
- No IAM, RBAC, SOC 2 compliance, certified carbon inventory, or regulatory reporting capability. The demo persona selector is an interaction mock, not authentication.
- Grid intensity is an illustrative annual factor. It is not real-time data or marginal grid intensity.
- Operational and embodied emissions are modeled, not verified. PUE applies only to IT electricity.
- LocalStorage is convenient for demos but not durable, secure, shared, append-only or immutable evidence.
- URL sharing only captures the Quick Simulator inputs; imported workload data and audit records are **not** shared.
- No analytics or backend service is intentionally called; the site may still be subject to the hosting provider's normal request logs.

## Recommended next phase

Add a secure backend, validated factor provenance, time-series ingestion, tenant-aware RBAC/SSO, versioned calculation records, consented connectors, independent verification and controlled change execution with rollback.
