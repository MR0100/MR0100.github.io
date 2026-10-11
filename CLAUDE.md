# CLAUDE.md

Guidance for Claude Code in this repo: Mitul Vaghasiya's public portfolio site (https://mr0100.github.io). Read `README.md` first.

## Rules
- **Public repo, design and code only.** Content is edited in `../portfolio-content` (studies, essays, work data) or `../linkedin-growth` (posts), then synced with `scripts/sync_content.py`. Never edit `src/content/` by hand, and never add third-party screenshots, raw review data or private notes.
- **Honesty:** every number cited or labelled Hypothesis; prototype screens are labelled re-creations.
- Before pushing: `npm run build`, serve `dist/` (`npx astro preview`), and crawl for broken links, missing images or JS errors.
- Identity: product designer & researcher who also ships mobile apps. Case studies, analysis and writing lead; shipped work supports. Never mention Upwork or freelancing.

## Git rules
- **Authorship:** every commit by **Mitul Vaghasiya <mr.vaghasiya197@gmail.com>** only.
- **No AI attribution** anywhere: no `Co-Authored-By: Claude`, "Generated with Claude Code" or similar in commits, PRs or comments.
- **Branch names:** `<type>/<short-topic>` (`feature/`, `fix/`, `docs/`, `design/`, `chore/`).
- **Main is the source of truth:** merge finished branches into `main` and push (that deploys). Claude may delete branches it created once they're merged (local and remote); never others' or unmerged ones.
