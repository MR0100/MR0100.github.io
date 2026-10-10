# mr0100.github.io

The portfolio of Mitul Vaghasiya, Senior Mobile Developer & Team Lead: independent product case studies, live prototypes and writing.
Live at **https://mr0100.github.io**.

## How it works

- **Built with Astro** (`src/`): pages, layouts, and content collections. `npm install && npm run dev` to work locally, `npm run build` for `dist/`.
- **Research lives elsewhere.** Reports, raw review data and reference screenshots stay in the private `PersonalResearch` repo.
- **Sync:** `python3 scripts/sync_from_research.py ../PersonalResearch` copies only publishable material: the full analyses, test kits, review coding and source lists (`src/content/research`, `src/content/docs`), the re-created screens and live prototypes (`public/studies/`), and LinkedIn posts as articles (`src/content/writing`). Posts with unfilled `[placeholders]` are skipped.
- **Written here:** the portfolio-length studies (`src/content/studies/*.md`), the KGK case study, and the profile and work data (`src/data/`).
- **Deploy:** every push to `main`, plus a daily rebuild, publishes through GitHub Actions. The daily run makes scheduled articles appear on their date and keeps the experience count current.

## Structure
| Path | What |
|---|---|
| `src/pages/` | Home, case studies, writing, work, about |
| `src/content/studies/` | Portfolio-length studies (edit here) |
| `src/content/research`, `docs`, `writing` | Synced from the research repo (don't edit by hand) |
| `src/data/` | Profile, work list (store checks dated), publishing helpers |
| `public/studies/` | Re-created screens and prototypes (synced) |
| `notes/` | Research behind the portfolio, previews |

## Publishing rules
- Every number is cited or labelled Hypothesis. No invented results, quotes or user data.
- Third-party screenshots (App Store, press) are never republished. Prototype screens are my re-creations, labelled as such, with sources on each study's Sources page.
- Only apps verifiable in an official store are shown as live, with the check date.
- No freelancing platforms are mentioned anywhere: this is a personal site, not a hiring profile.
