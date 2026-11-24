# GitHub Pages Deployment

UMAN-ECO Enterprise Lab v2.1 is a static academic web application. It requires no build process, hosting secrets or application backend.

## Initial publication / upgrade

1. Upload the **contents** of the release package to the root of the `uman-eco` repository, including `index.html`, `assets/`, `data/`, `downloads/`, `manifest.webmanifest`, `service-worker.js`, `.nojekyll`, and the Markdown documentation. Keep the folder structure unchanged.
2. Replace the previous files with the matching v2.1 files. Remove obsolete instructions or assets only if they are no longer referenced.
3. Commit to the publishing branch (typically `main`).
4. Under **Settings → Pages**, confirm the source is **Deploy from a branch → `main` → `/(root)`**.
5. Open **https://umanmd707.github.io/uman-eco/** and verify the new Carbon Footprint Tracker, Venture & Impact page and existing workspaces.
6. Check on a narrow mobile viewport and, if installed previously as a PWA, reopen the app to load the current release.

The repository's public Pages URL is based on GitHub's project-site path. The PWA manifest, service worker and asset references are relative to that path.

## Smoke checks

- The header displays **v2.1** and the academic disclaimer.
- The Carbon Footprint Tracker shows **12 months** and **24** synthetic observations across two business units.
- Trend, metric selector, target, filtering, add/edit/delete, dataset import/export and sample reset work.
- Quick Simulator, Carbon Intelligence and simulated GreenOps operate as in v2.0.
- The Venture & Impact page and external methodology references are accessible.
- No credentials, API keys or confidential datasets have been committed.

See [TEST-CHECKLIST.md](TEST-CHECKLIST.md) for a concise public-facing validation list.

> **Academic demonstration only.** The application does not provide certified carbon accounting, real workload integrations or any support or maintenance commitment.
