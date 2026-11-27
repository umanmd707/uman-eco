# Professional Portfolio — Version 1

## Publish to GitHub Pages
1. Extract the ZIP locally. Open https://github.com/umanmd707/umanmd707.github.io.
2. On the Code tab, select the main branch. Click Add file > Upload files.
3. Drag the extracted files and the assets folder into the upload area (not the enclosing portfolio-v1 folder). Do not delete the existing README.md. Make sure index.html is at the repository root; the assets directory must retain its internal structure.
4. Commit the files to main, or create a branch and merge a pull request if you prefer a review first. The site becomes public once deployed.
5. Under Settings > Pages, confirm the source is Deploy from a branch, main, / (root). The existing site may already be configured.
6. Check the Pages deployment under Actions, then visit https://umanmd707.github.io/.

## Preview locally
Open index.html in a browser, or from the extracted directory run `python -m http.server 8000`, then open http://localhost:8000/.

## Maintain content
Version 1 is a single-page, dependency-free static site. Edit the clearly marked sections in index.html. Publication entries are semantic HTML cards with a data-category attribute; use technical, research or industry. This keeps the content visible even without JavaScript and crawlable by search engines. CSS is in assets/css/site.css. JavaScript in assets/js/site.js handles theme, mobile navigation and publication filters. There is no tracking, external font dependency or form collecting personal data.

## Review before publishing
- Verify title, affiliation, career dates, award wording and speaking status. Public references are linked on the relevant cards.
- Replace the architectural monogram only with a photo approved for public use. No headshot was provided for this build.
- Add the confirmed LinkedIn, Google Scholar, ORCID, Credly and newsletter URLs when available; no placeholder links are shown.
- Add remaining publications, credential verification links, awards, service activities and public framework artifacts after reviewing their evidence and publication status. Research interests and projects are distinguished from production delivery.
- Update the Data Bash entry after the event; do not mark completed until confirmed.
- Do not publish client names, private materials or internal documentation without authorization.
- The website is a selected portfolio, not an exhaustive CV. The static content is authoritative only after the owner reviews it.
