# GitHub Pages Deployment

This guide describes how to publish the **UMAN-ECO Enterprise Lab v2.0** static academic demonstration using GitHub Pages.

## Requirements

- A public GitHub repository for GitHub Free Pages hosting.
- `index.html` in the repository root alongside the `assets/` and `data/` folders.

## Publish

1. Open the repository's **Settings → Pages**.
2. Under **Build and deployment**, select **Deploy from a branch**.
3. Choose `main` as the branch and `/(root)` as the folder, then select **Save**.
4. After publication, check the URL displayed under **Settings → Pages** (typically `https://umanmd707.github.io/uman-eco/`).

## Updates and validation

Changes committed to the published branch trigger a new deployment. Confirm that the homepage loads; styles, scripts and datasets are available; and the simulator and simulated GreenOps workflows operate as expected. See [TEST-CHECKLIST.md](TEST-CHECKLIST.md) for functional checks.

## Academic-use notice

UMAN-ECO Enterprise Lab v2.0 is an **academic demonstration, not a production service**. Datasets, estimates, recommendations and workflows are illustrative. They are not suitable for operational or regulatory reliance, and publication does not imply support, maintenance, availability, or future development commitments. See [README.md](README.md) for the full project limitations and notice.
