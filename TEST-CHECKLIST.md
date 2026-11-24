# UMAN-ECO Enterprise Lab v2.0 — Test Checklist

**Project:** UMAN-ECO — Enterprise Carbon Optimization  
**Context:** SUS-701 Assignment 4 (2026) — academic demonstration  
**Hosting:** GitHub Pages (static site)  
**Status:** Manual validation checklist; checking a box records a test performed, not a certification.

> **ACADEMIC DEMONSTRATION ONLY — NOT FOR PRODUCTION USE.** This application uses illustrative assumptions, synthetic workload data, mock recommendations and simulated approvals. It has no live cloud connectors, verified carbon accounting, enterprise access controls, or operational execution. Do not enter confidential or production data or rely on outputs for real-world decisions. The public repository and website do not establish a service, maintenance, support, or delivery commitment.

## 1. Repository and GitHub Pages deployment

- [ ] Confirm `index.html` is at the repository root, alongside `assets/`, `data/`, `downloads/`, and `.nojekyll`.
- [ ] Confirm `README.md`, `METHODOLOGY.md`, `TEST-CHECKLIST.md`, and `DEPLOY-GITHUB-PAGES.md` are present.
- [ ] Confirm outdated Netlify/Cloudflare deployment guides are removed if this repository is intended solely for GitHub Pages.
- [ ] In **Settings → Pages**, confirm **Deploy from a branch → `main` → `/(root)`**.
- [ ] Confirm the Pages deployment completes successfully; open the URL shown in **Settings → Pages**.
- [ ] Open the public URL in an incognito/private browser window without signing into GitHub.
- [ ] Check that `assets/styles.css`, `assets/app.js`, and the website load without 404 errors or blank sections.
- [ ] Confirm navigation and assets work under the repository URL path (for example, `/uman-eco/`), not just when opening `index.html` locally.

## 2. Visual design and navigation

- [ ] Confirm the **U · E** initials are fully centered **inside** the top-left logo box, with no clipping, overflow or wrapping.
- [ ] Verify the six workspaces open correctly: **Overview**, **Quick Simulator**, **Carbon Intelligence**, **GreenOps Decision Lab**, **Evidence & Audit**, and **Methodology**.
- [ ] Test desktop and narrow/mobile viewport widths; navigation, cards, buttons and tables remain usable.
- [ ] Confirm the workload and audit tables can be viewed via horizontal scrolling on narrow screens.
- [ ] Confirm the app is identified as **UMAN-ECO**, part of the **UMAN Framework Family**.

## 3. Overview and Quick Simulator

- [ ] Overview loads **eight sample workloads** when the default dataset is active and shows **zero live connectors**.
- [ ] Changing annual energy or efficiency updates modeled electricity savings and emissions results.
- [ ] Changing electricity price or annual fee updates the displayed net annual benefit.
- [ ] **Reset** restores the default simulator assumptions.
- [ ] **Export CSV** downloads a readable quick-scenario file with modeled values.
- [ ] **Share scenario** copies or displays a URL; opening it in another tab restores the chosen simulator inputs.
- [ ] Confirm all simulator outputs are described as modeled/illustrative, not measured or guaranteed.

## 4. Carbon Intelligence and data handling

- [ ] Switching the provider filter among AWS, Azure, GCP and On-prem changes the workload list and relevant KPIs.
- [ ] Changing optimization efficiency updates the scenario comparison.
- [ ] Setting rebound to **100%** with efficiency **15%** demonstrates that modeled demand can outweigh the efficiency improvement.
- [ ] Toggling **Include allocated embodied carbon** changes the emissions totals, without treating embodied values as validated inventory data.
- [ ] Selecting a workload displays its source/provenance, PUE, assumed grid factor and allocated embodied-carbon details.
- [ ] Import `data/sample-workloads.csv`; confirm all eight rows load.
- [ ] Export the workload CSV; confirm these columns are present: `id,name,provider,region,itKwh,pue,factor,embodiedT,price,source,workload,criticality`.
- [ ] Optionally test a valid JSON array with the same fields; verify the application imports it.
- [ ] Try an invalid provider, duplicate workload ID, and an oversized file (over 2 MB); verify imports are rejected rather than silently accepted.
- [ ] **Restore sample data** reloads the original eight synthetic workloads after confirmation.
- [ ] Refresh the same browser after a valid import; verify the imported data persists locally, where browser storage is enabled.

## 5. GreenOps Decision Lab (simulated only)

- [ ] Click **Generate recommendations**; verify candidates include modeled carbon, cost and latency impacts.
- [ ] Set **Maximum latency change** to `0`, regenerate, and verify all positive-latency candidates are blocked.
- [ ] Restore a less restrictive latency policy, regenerate, and confirm eligible recommendations can display **Pending** status.
- [ ] Select **FinOps Analyst** and attempt to approve an eligible recommendation; confirm approval is prevented.
- [ ] Select **Sustainability Officer** or **SRE Engineer** and approve an eligible recommendation; confirm a local decision is recorded.
- [ ] Reject another eligible recommendation and verify the different decision is recorded.
- [ ] Change a policy threshold after generating recommendations; verify that the app requires regeneration before deciding.
- [ ] Confirm **no cloud configuration, workloads, resources, networking, or permissions are actually changed**.

## 6. Evidence & Audit

- [ ] Verify simulated approvals/rejections appear with a timestamp, workload, action, persona, and note.
- [ ] Export the audit CSV and inspect the downloaded rows.
- [ ] Refresh the same browser and verify decisions persist when local storage is available.
- [ ] Use **Clear local audit**, confirm the prompt, and verify records are removed.
- [ ] Verify the interface identifies this as **browser-local, editable storage**, not a secure, immutable, compliance-ready audit trail.

## 7. Methodology, disclaimers and public-repository hygiene

- [ ] Confirm the GitHub README prominently states **academic demonstration only**, **not production**, and **synthetic/assumption-based data**.
- [ ] Confirm the README states there is **no support, SLA, maintenance, availability, delivery, or continued-hosting commitment**.
- [ ] Confirm website text or the Methodology workspace makes academic status and non-certified results clear to direct visitors who may never read the README.
- [ ] Confirm no representation of SOC 2, ISO, GHG Protocol or other certification/verification is made for this prototype.
- [ ] Check calculation boundaries: facility kWh = IT kWh × PUE; modeled operational tCO₂e = facility kWh × assumed kgCO₂e/kWh ÷ 1,000.
- [ ] Check that embodied values, grid factors, rebound and recommendation impacts are clearly identified as assumptions, not measured inputs.
- [ ] Confirm there are **no real cloud API connections, credential prompts, access-control claims, live infrastructure actions or promises of commercial features**.
- [ ] Review files before publishing to ensure there are no API keys, secrets, personal information, confidential records or real customer datasets.
- [ ] Confirm the intended copyright/reuse notice is present in `README.md`; publication to a public GitHub repository should not be mistaken for an open-source license.
- [ ] Test at least one mainstream desktop browser and one mobile browser; inspect the browser console for relevant errors.

## 8. Release record

| Field | Entry |
| --- | --- |
| Repository URL | _Fill in_ |
| GitHub Pages URL | _Fill in_ |
| Tested revision / commit | _Fill in_ |
| Test date | _Fill in_ |
| Browser(s) / device(s) | _Fill in_ |
| Tester | _Fill in_ |
| Known issues / accepted limitations | _Fill in_ |
| Result | ☐ Pass ☐ Pass with limitations ☐ Needs fixes |

**Release decision:** A completed checklist supports an academic demonstration review only. It does **not** constitute security testing, standards certification, professional verification, production readiness, or an obligation to provide a public service.
