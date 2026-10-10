# CLAUDE.md

Guidance for Claude Code in this repo: Mitul Vaghasiya's public portfolio site (https://mr0100.github.io). Read `README.md` first.

## Rules
- **Public repo.** Never add third-party screenshots, raw review data, private notes or anything from `PersonalResearch` that isn't in the sync script's publishable list.
- **Content edits happen in the research repo**, then `scripts/sync_from_research.py`. Site templates, pages and styles are edited here.
- **Honesty:** every number cited or labelled Hypothesis; prototype screens are labelled re-creations.
- Before pushing: run `scripts/build.py`, serve `_site/`, and check there are no broken links, missing images or JS errors.

## Git rules
- **Authorship:** every commit by **Mitul Vaghasiya <mr.vaghasiya197@gmail.com>** only.
- **No AI attribution** anywhere: no `Co-Authored-By: Claude`, "Generated with Claude Code" or similar in commits, PRs or comments.
- **Branch names:** `<type>/<short-topic>` (`feature/`, `fix/`, `docs/`, `design/`, `chore/`).
- **Main is the source of truth:** merge finished branches into `main` and push (that deploys). Claude may delete branches it created once they're merged (local and remote); never others' or unmerged ones.
