# Wei Ru’s Studio

Personal portfolio of **Tan Wei Ru**, a final-year Software Engineering student at Universiti Malaya. The site presents mobile, full-stack, AI, geospatial, and solo game projects alongside work experience, skills, languages, and personal interests.

A responsive static website built with **HTML, CSS, and vanilla JavaScript**. No framework, package installation, build command, or backend is required.

## Features

- Three recent featured projects (Wick, GeoQoE Pulse, and AegisAI) and a complete, filterable collection of eight projects.
- Illustrated project cards and dialogs describing individual contributions and technologies. The collection follows the résumé order: Wick, GeoQoE Pulse, AegisAI, and KeretaSewa AI; then FloodSense, PathSeeker, MeowGotchi, and FitWell based on contribution depth and internship relevance.
- QA and ERP internship experience, technical skills linked to projects, and competition achievements.
- Language proficiency, Sejong University exchange experience, and creative interests.
- Labelled GitHub, LinkedIn, and email links, plus a downloadable résumé.
- Optional original piano-style audio generated with the Web Audio API. Music starts only after a visitor turns it on and pauses when the tab is hidden.
- Interactive studio cat, responsive layouts, visible keyboard focus, and support for reduced-motion preferences.

## Files

| Path | Purpose |
| --- | --- |
| `index.html` | Page content, sections, project cards, and inline SVG project illustrations |
| `styles/main.css` | Colours, typography, layout, responsive rules, and animations |
| `scripts/main.js` | Project details, filters, dialogs, résumé link, music, and cat interaction |
| `assets/images/studio-hero.jpg` | Decorative studio illustration |
| `assets/documents/Tan-Wei-Ru-Resume.pdf` | Downloadable résumé |
| `assets/favicon.svg` | Small cat favicon |
| `.nojekyll` | Tells GitHub Pages to serve the prepared static files without Jekyll processing |

## Preview locally

Open `index.html` in your browser while keeping the folders beside it.

For a local server, run the following command **from the repository folder** if Python is installed:

```bash
python -m http.server 8000
```

Open **http://localhost:8000**. Stop the server with **Ctrl+C**.

Alternatively, use VS Code’s Live Server extension. No npm installation is needed.

## Deploy to GitHub Pages

### Option A — Personal portfolio address

Use a repository named **`weiru917.github.io`** to publish at **https://weiru917.github.io/**.

1. Create the repository on GitHub. Choose **Public** if you use GitHub Free.
2. Upload the **contents of this folder**. `index.html` must be at the repository root, alongside `styles`, `scripts`, and `assets`. Do not upload only the ZIP or put the site inside an extra enclosing folder.
3. Commit the files to the `main` branch.
4. Open **Settings → Pages**.
5. Under **Build and deployment**, select **Deploy from a branch**.
6. Select **main** and **/(root)**, then click **Save**.
7. Wait for deployment and use the **Visit site** link in Pages settings. Publication can take several minutes.

### Option B — Separate project repository

A repository such as **`portfolio`** publishes at **https://weiru917.github.io/portfolio/**. Follow the same setup steps. The site uses relative asset paths, so both address formats work.

### Push with Git

For a new, empty repository, run these commands from this folder after replacing the repository name where appropriate:

```bash
git init
git add .
git commit -m "Add personal portfolio"
git branch -M main
git remote add origin https://github.com/weiru917/weiru917.github.io.git
git push -u origin main
```

If your remote repository already contains files, clone it first and copy these files into that checkout instead of initialising a separate history.

After Pages is configured, later pushes to `main` publish your updates automatically.

Official documentation:

- [Creating a GitHub Pages site](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site)
- [Configuring a publishing source](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)

## Make changes

### Text and sections

Edit `index.html` for the introduction, experience, skills, languages, awards, and contact information.

### Projects

- Update visible cards and their illustrations in `index.html`.
- Update the corresponding entry in the `projects` object at the start of `scripts/main.js` for dialog content and repository links.
- Keep `data-project` values consistent with the object keys.
- Supported categories are `mobile`, `web`, `ai`, and `games`. A card can contain several categories separated by spaces.
- When adding or removing projects, update the initial project count in the HTML. Filters recalculate the displayed count when used.

Project illustrations are decorative introductions rather than screenshots of the actual applications. Real screenshots and recorded demonstrations can be added later.

### Design

Edit the CSS variables at the top of `styles/main.css` for the palette. Responsive rules appear near the end. Project artwork remains inline SVG, so its colours and shapes can be edited in the HTML.

### Hero image

Replace `assets/images/studio-hero.jpg` with your chosen image, or update its path in `index.html`. Update the image’s `alt` text to match. The current hero is an AI-generated decorative studio illustration.

### Résumé

Replace `assets/documents/Tan-Wei-Ru-Resume.pdf` with the latest PDF while keeping the filename. If you rename it, update `resumeUrl` in `scripts/main.js`. Also update the résumé highlights in that script when your experience changes.

### Contact links

The email address is shown on the page and links through `mailto:`. GitHub and LinkedIn links are in the introduction and footer. The phone number is available in the contact section and downloadable résumé.

### Music

Edit the `melody` array and audio settings in `scripts/main.js` to change the original synthesized loop. There is no external music file or streaming dependency.

## Before sharing

Open the site on desktop and mobile. Try each filter, a project dialog, the résumé download, contact links, and music on/off. Verify that your current project descriptions, awards, and availability are accurate.

Preview the page after content changes and verify desktop/mobile layouts, project dialogs and links, filters, and the résumé download before publishing.
