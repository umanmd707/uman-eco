# UMAN-ECO Enterprise Lab v2.0 — Cloudflare Pages Deployment

This ZIP is formatted for direct Cloudflare Pages drag-and-drop deployment. `index.html` is at the ZIP ROOT. No build step or backend is required.

1. Go to https://dash.cloudflare.com/ and open **Workers & Pages**.
2. Select **Create application** → **Get started** → **Drag and drop your files** (wording may vary).
3. Name the project `uman-eco` if available.
4. Drop this ZIP directly into the upload box, or unzip and drop the directory containing `index.html`.
5. Select **Deploy site**. Open the provided `*.pages.dev` URL.
6. Test Overview, Quick Simulator, Carbon Intelligence (including importing the example CSV), GreenOps, and local Audit export.

Update later: Go to the same Cloudflare Pages project and create another direct-upload production deployment.

Caution: Cloudflare Pages Direct Upload projects cannot subsequently be converted to Git integration in-place. If you want Git-triggered deployments later, create a new Git-connected Cloudflare Pages project.

This is a static educational simulator. Cloud integrations, identity controls, and immutable evidence are NOT implemented. Do not upload real customer or sensitive datasets to a public demo.
