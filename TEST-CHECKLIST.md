# UMAN-ECO v2.1 — Functional Validation Checklist

This checklist summarizes expected behavior for the **academic demonstration** hosted on GitHub Pages. It does not imply production-grade testing or certification.

## Website and mobile behavior

- [ ] GitHub Pages loads `index.html` and all application assets without errors.
- [ ] The UMAN-ECO logo, title and academic notice render correctly.
- [ ] Navigation (including the mobile workspace selector) and controls remain usable on desktop and narrow mobile screens.
- [ ] The installed PWA, where supported, opens within the project-site path.

## Carbon Footprint Tracker

- [ ] The initial synthetic dataset shows 12 months and 24 observations.
- [ ] Business-unit filtering, metric selection and reduction-target controls update the displays.
- [ ] Trend and progress figures reflect the selected data and reference-period method.
- [ ] Add, edit and delete actions update local records.
- [ ] Valid CSV/JSON import, CSV export and sample reset operate as described.
- [ ] Invalid inputs, duplicate month/unit pairs and oversized datasets are rejected.

## Existing simulation workspaces

- [ ] Quick Simulator updates estimated energy, emissions and cost outputs.
- [ ] Carbon Intelligence loads the sample workloads and scenario comparisons.
- [ ] GreenOps generates simulated recommendations and applies demonstration policy thresholds.
- [ ] Approval/rejection decisions remain browser-local and are not executed against infrastructure.
- [ ] Methodology and Venture & Impact pages describe assumptions, limitations and academic context.

## Public repository review

- [ ] No access keys, credentials, proprietary data or production telemetry are included.
- [ ] Data sources, emissions calculations, non-production limitations and relevant references are documented.
- [ ] The README contains the academic-use notice and no commitments to operate or support a service.
- [ ] Relative asset paths work when hosted under `/uman-eco/`.

**Scope:** A non-production teaching prototype using illustrative and user-provided, unverified inputs. The checklist does not attest to verified emissions or compliance with any standard.
