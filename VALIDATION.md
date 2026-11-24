# UMAN-ECO v2.1 — Development Validation

**Validation scope:** Academic prototype; these checks are not a security, accounting, regulatory or production certification.

## Performed checks

- JavaScript syntax validation for the original simulator, tracker, mobile navigation, and service worker.
- Desktop Chromium interactive checks for tracker rendering (24 synthetic records, 12 months), filtering, target adjustment, add/edit, duplicate-input rejection, local reset, CSV export and CSV import.
- Retained Quick Simulator and GreenOps recommendation UI checks.
- Venture & Impact workspace accessibility from navigation.
- Responsive Chromium check at a 390px mobile viewport: no document-level horizontal overflow; mobile workspace selector operates.
- Spreadsheet formulas inspected for illustrative emissions, electricity consumption and cost totals.
- Data file and application asset paths reviewed for GitHub Pages project subdirectory compatibility.

## Verification limits

The automated UI tests used directly injected application assets because this build environment restricts browser navigation to local HTTP/file URLs. GitHub Pages publication, service-worker installation/offline behavior, actual device/browser compatibility and real production integrations were **not** tested by these checks. Verify them after committing the release to the live repository.

The synthetic records, emissions factors, cost assumptions and recommendations are **not measured or validated**. All outcome metrics are for demonstration only.
