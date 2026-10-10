# mr0100.github.io

The portfolio of Mitul Vaghasiya, Senior Mobile Developer & Team Lead: independent product case studies, live prototypes and writing.
Live at **https://mr0100.github.io**.

## How it works

- **Research lives elsewhere.** Reports, raw review data and reference screenshots stay in the private `PersonalResearch` repo.
- **`content/`** holds only what's publishable: each case study's edit, my re-created screens, the prototypes, the test kit, review-coding notes and source lists. Refresh it with:
  ```
  python3 scripts/sync_from_research.py ../PersonalResearch
  ```
- **`scripts/build.py`** turns `content/` and `design-system/` into `_site/`. Preview locally:
  ```
  pip install markdown
  python3 scripts/build.py && python3 -m http.server -d _site 8000
  ```
- **Deploy:** every push to `main` builds and publishes through GitHub Actions (`.github/workflows/pages.yml`).

## Structure
| Path | What |
|---|---|
| `design-system/` | Tokens, components, specimen (Holstee-based editorial system) |
| `content/case-studies/` | Synced case-study content (don't edit here; edit in the research repo and sync) |
| `notes/` | Facts and research behind the portfolio itself |
| `scripts/` | Sync and build |

## Publishing rules
- Every number is cited or labelled Hypothesis. No invented results, quotes or user data.
- Third-party screenshots (App Store, press) are never republished. Prototype screens are my re-creations, labelled as such, with sources listed on each study's Sources page.
