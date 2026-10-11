# Handover: the site

Read this first, then `README.md` and `CLAUDE.md`. Last updated 11 Oct 2026.

## Where things stand
- **Live** at https://mr0100.github.io: home, case studies (6, each with 7 tabs and a back/next bar), writing (essays + LinkedIn posts from their publish date, India time), work (7 live apps, 10 past projects, a page each), about.
- **Design and code only.** Content syncs from `../portfolio-content` and `../linkedin-growth/linkedin-posts` (`scripts/sync_content.py`). The **Sync and deploy** workflow fetches both repos daily at 06:00 IST, on every push and on demand, with the `CONTENT_TOKEN` secret (read-only, created 11 Oct 2026; GitHub emails before it expires: create a new one and replace the secret).
- **Search:** Google Search Console verified (meta tag in `Base.astro`), sitemap submitted (`/sitemap-index.xml`, 67 pages). Every page has a share image and canonical URL.
- `/linkedin/mitul-builds/...` pages belong to Postpace (the autopost tool's product pages); owned by the LinkedIn Growth Automation Tool session.

## Next
1. Around **19 Oct**: check Search Console (Pages indexed, any errors) and, after a few weeks, the Performance tab.
2. Optional: a custom domain (add it in Settings → Pages, then a CNAME record at the registrar; update `site` in `astro.config.mjs` and the share-image URLs follow).
3. Optional: a privacy-friendly visitor counter (GoatCounter or Plausible), an RSS feed for Writing.

## How to start a session here
"Read HANDOVER.md." Always publish with the `portfolio-publish` skill.
