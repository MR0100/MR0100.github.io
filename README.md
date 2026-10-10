# mr0100.github.io

The portfolio of Mitul Vaghasiya, Senior Mobile Developer & Team Lead: independent product case studies, live prototypes and writing.
Live at **https://mr0100.github.io**.

## How it works

- **Built with Astro** (`src/`): pages, layouts, and content collections. `npm install && npm run dev` to work locally, `npm run build` for `dist/`.
- **Research lives elsewhere.** Reports, raw review data and reference screenshots stay in the private `PersonalResearch` repo.
- **Sync:** `python3 scripts/sync_from_research.py ../PersonalResearch` copies only publishable material: the full analyses, test kits, review coding and source lists (`src/content/research`, `src/content/docs`), the re-created screens and live phones (`public/studies/`), and each study's screen-by-screen flow and before/after guide as data (`src/content/prototypes`), which the site renders at `/studies/<slug>/prototype/` and `/studies/<slug>/try/`, and LinkedIn posts as articles (`src/content/writing`). Posts with unfilled `[placeholders]` are skipped.
- **Written here:** the portfolio-length studies (`src/content/studies/*.md`), the KGK case study, and the profile and work data (`src/data/`).
- **Deploy:** every push to `main`, plus a daily rebuild, publishes through GitHub Actions. The daily run makes scheduled articles appear on their date and keeps the experience count current.

## Structure
| Path | What |
|---|---|
| `src/pages/` | Home, case studies (overview, try it, screen by screen, full analysis, docs), writing, work and one page per project, about |
| `src/components/StudyTabs.astro` | The tab row shared by every page of a study |
| `src/content/studies/` | Portfolio-length studies (edit here) |
| `src/content/research`, `docs`, `writing`, `prototypes` | Synced from the research repo (don't edit by hand) |
| `src/data/` | Profile, work list (store checks dated), project detail (`projects-live.ts`, `projects-past.ts`, with sources in `notes`), publishing helpers |
| `public/images/projects/` | Project screenshots: live apps from their store listings, past apps from archived listings or my own project images |
| `public/studies/` | Re-created screens and prototypes (synced) |
| `notes/` | Research behind the portfolio, previews |

## Publishing rules
- Every number is cited or labelled Hypothesis. No invented results, quotes or user data.
- Third-party screenshots (App Store, press) are never republished. Prototype screens are my re-creations, labelled as such, with sources on each study's Sources page.
- Only apps verifiable in an official store are shown as live, with the check date. Past apps link to independent records (archived listings, client sites), each checked to load and to be about that app.
- Store screenshots that show a real person's name or details are not used.
- No freelancing platforms are mentioned anywhere: this is a personal site, not a hiring profile.
