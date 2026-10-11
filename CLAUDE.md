# CLAUDE.md

Guidance for Claude Code in this repo: Mitul Vaghasiya's public portfolio site (https://mr0100.github.io). Read `README.md` first.

## Rules
- **Public repo, design and code only.** Content is edited in `../portfolio-content` (studies, essays, work data) or `../linkedin-growth` (posts), then synced with `scripts/sync_content.py`. Never edit `src/content/` by hand, and never add third-party screenshots, raw review data or private notes.
- **Honesty:** every number cited or labelled Hypothesis; prototype screens are labelled re-creations.
- **Design rules:** every page follows `DESIGN-RULES.md` (one grid with a side and a main column, every block touching an edge, one header, one type scale, small back/next buttons; markdown is laid out by `src/lib/rehype-sections.mjs`). Use the tokens and shared parts; change the rules file before breaking a rule.
- Before pushing: `npm run build`, serve `dist/` (`npx astro preview`), and crawl for broken links, missing images or JS errors.
- Identity: product designer & researcher who also ships mobile apps. Case studies, analysis and writing lead; shipped work supports. Never mention Upwork or freelancing.


## Knowledge
Shared notes and skills live in `~/Desktop/Projects/Mitul/knowledge` (start with its README, "Find by task"). For this repo:
- Skill **`portfolio-publish`** for every publish; skill **`essay`** for new writing (content goes in `../portfolio-content`).
- Voice and identity: `~/Desktop/Projects/Mitul/knowledge/writing-and-attention/voice-and-style.md`, `~/Desktop/Projects/Mitul/knowledge/about-mitul/positioning.md`, `~/Desktop/Projects/Mitul/knowledge/about-mitul/preferences.md` (what Mitul likes and rejects in design).

## Git rules
- **Authorship:** every commit by **Mitul Vaghasiya <mr.vaghasiya197@gmail.com>** only.
- **No AI attribution** anywhere: no `Co-Authored-By: Claude`, "Generated with Claude Code" or similar in commits, PRs or comments.
- **Branch names:** `<type>/<short-topic>` (`feature/`, `fix/`, `docs/`, `design/`, `chore/`).
- **Main is the source of truth:** merge finished branches into `main` and push (that deploys). Claude may delete branches it created once they're merged (local and remote); never others' or unmerged ones.
