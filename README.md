# mr0100.github.io

The personal site of Mitul Vaghasiya, product designer and researcher who also ships mobile apps: case studies, live prototypes, writing and shipped work.
Live at **https://mr0100.github.io**.

This repo holds **design and code only**. All content comes from two private repos that sit next to it in `profile-growth/`:

| Source | What the site takes from it |
|---|---|
| `portfolio-content` | Case studies (overview, full analysis, test kit, review coding, sources, screens, prototypes), essays and their graphics, profile and work data with images |
| `linkedin-growth` | LinkedIn posts (`linkedin-posts/`), shown under Writing from their publish date |

## How it works
- **Sync:** `scripts/sync_content.py` copies only the publishable parts into `src/content/` and `public/` (see the list at the top of the script). Raw review data, full reports, third-party screenshots and private notes never come across.
- **Sync and deploy** (`.github/workflows/pages.yml`): on every push to `main`, daily at 06:00 IST and on demand, GitHub fetches both content repos (with the `CONTENT_TOKEN` secret, a read-only token), syncs, builds and publishes. Without the secret it builds the content already committed here.
- **Locally:** `python3 scripts/sync_content.py`, then `npm run dev` (or `npm run build` and `npx astro preview`).

## Structure
| Path | What |
|---|---|
| `src/pages/` | Home, case studies (overview, try it, screen by screen, full analysis, test kit, review coding, sources), writing, work and one page per project, about, app legal pages |
| `src/layouts/`, `src/components/` | Page templates; `StudyPage`, `StudyTabs`, `StudyPager`, `EssayCard` |
| `src/content/` | **Synced, don't edit here:** `studies`, `research`, `docs`, `prototypes`, `writing`, `work` |
| `src/data/` | Code that reads the synced data (`profile.ts`, `work.ts`, `published.ts`, `studyNav.ts`) |
| `public/studies/`, `public/writing/`, `public/images/` | Synced screens, prototypes, graphics and images |

## Publishing rules
- Every number is cited or labelled Hypothesis. No invented results, quotes or user data.
- Third-party screenshots are never published. Prototype screens are re-creations, labelled as such, with sources on each study's Sources page.
- Only apps verifiable in an official store are shown as live, with the check date. Past apps link to independent records.
- No freelancing platforms are mentioned anywhere: this is a personal site, not a hiring profile.
