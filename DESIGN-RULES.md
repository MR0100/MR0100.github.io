# Design rules

The rules every page on the site follows, so a study, a project, an essay and an index page all feel like one product. They live in code as tokens and shared parts (`src/styles/global.css`, `src/lib/rehype-sections.mjs`, `src/components/Pager.astro`); this file says what they are and when to use which. If a page needs something these rules don't cover, change the rule here first, then the code.

## 1. One grid, both edges
- Every page sits on one grid: `.wrap`, 1200 px wide with 32 px gutters (20 px on phones). On a 1440 px screen it runs from 150 px to 1286 px.
- The grid has two columns: a **side column** (one third) and a **main column** (two thirds), 32 px apart (`--gap`). On a 1440 px screen the main column starts at 550 px.
- **Every block touches the grid's left edge, its right edge, or both.** Nothing floats in the middle, and no text ends in a ragged strip short of the right edge. This is what keeps a page feeling the same from top to bottom, whether a section has text, screens or a table.
- Centring is only for things inside a frame: phones in a tinted hero panel, an image in its card.
- Why: an asymmetric grid with a label column is the usual editorial answer to "readable lines on a wide screen". Text in the main column is about 70–85 characters a line, inside the 45–90 that [Practical Typography](https://practicaltypography.com/line-length.html) recommends, and it still ends on the same right edge as the images above and below it.

## 2. What goes where
| Where | What |
|---|---|
| **Side column** (left third) | Section labels and headings (eyebrow + h2); under the title, the page's facts and its small graphic |
| **Main column** (right two thirds) | All running text: paragraphs, lists, quotes, notes, ledes, disclaimers, essay figures and covers, the Try-this box |
| **Full width** (both columns) | Page titles, hero panels, tables, screen galleries, phone pairs, card grids, stat rows, the three-part summary |

- A text section is a `.sec`: `.side` (eyebrow and h2) and `.main` (text). In markdown this happens automatically: `rehype-sections` puts each `##` (and the eyebrow just above it) in the side column, the text after it in the main column, and tables and `.figs` / `.wide` blocks across both. Text before the first `##` goes in the main column.
- A single block that should start at the main column (a lede, a note) gets `.in-main`.
- Sections are separated by a hairline across the full grid.
- Side headings stick while their text scrolls past (desktop only).
- Below 900 px the columns stack: heading, then text, both full width.
- No one-off `max-width` values for text. Images may keep their own smaller size (a portrait, a square post cover).

## 3. The top of every page
Every page starts the same way:
1. Breadcrumbs (from `Base`, on every inner page).
2. Tabs, if the page is one part of something bigger (a study, a project with a case study).
3. Eyebrow: `Kind · Subject`, for example `Full analysis · Temu`, `Project · Consumer`, `Essay · Design`.
4. Title (h1), from the left edge, sentence case, at most `--title` (960 px).
5. **The facts row**: the side column holds a small graphic and the page's key facts (`Facts`); the main column holds the opening text. Neither column is ever empty at the top of a page.

| Page | Graphic | Facts | Main column |
|---|---|---|---|
| Every study page | Study progress: one segment per part, the current one filled, each a link (`StudyProgress`) | Overview: type, method, timeline, status. Other parts: study, this page, and reading time, format or screen count | The summary, lede, or the document's own opening (disclaimer, summary, intro) |
| Project | none | Client, role, when, platform, live/status | The one-liner |
| Essay | One dot per minute of reading | By, published, reading time, topic | Dek, cover, then the essay's opening |
| LinkedIn post | none | Published, reading time, first shared | Dek, cover, then the post |
| Case studies | Each study's colour and screen, linking to it | Number of studies, what each has | Lede |
| Work | Live app icons, linking to their pages | Live apps (with check date), projects, building since | Lede |
| Writing | Topic chips | Essays, short posts | Lede |

- Header pages use `PageHead`. Long pages (study documents, essays, posts) use `.lead-grid`: the facts sit beside the markdown's intro (the text before the first `##`), which `rehype-sections` marks `.sec.intro`. On desktop the facts stick while the opening scrolls.
- A page with no opening text gets its facts as one row across the full width.
- Graphics are small and real (they show the page's own data or link somewhere), never decoration. Home and About keep their own heroes.

## 4. Type scale
| Token | Size | Where |
|---|---|---|
| `--display` | 44–78 px | Home and About heroes only |
| `--h1` | 40–64 px | Every other page title |
| `--h2` | 28–36 px | Section headings everywhere |
| h3 in text | 18 px sans, 600 | Sub-headings inside long text |
| Lede | 19 px sans | Under the title |
| Body | 17 px (18 px in essays and posts) | Running text |
| Eyebrow | 12 px caps, tracked | Above titles and sections |

Card titles inside grids may be smaller (21–34 px serif); they are part of the card, not the page outline.

## 5. Moving between pages
- **Back and next are small buttons with the page name**, back on the left, next on the right (`Pager`). No large "Next" cards.
- Study tabs, in order: Overview → Try it → Screen by screen → Full analysis → Test kit → Review coding → Sources. The Overview's back goes to all case studies; the last tab's next goes to the next study.
- Projects: previous project ← → next project.
- Posts: ← All writing. Essays end with "Keep reading" cards instead.

## 6. Which layout for which page
| Page | Layout | Body |
|---|---|---|
| Study overview | `StudyPage` → `CaseStudy` → `PageHead` | Hero panel, summary and numbers full width; text as `.sec`; screens full width |
| Project | `work/[slug]` → `CaseStudy` | Same as the overview |
| Try it, Screen by screen | own pages | Phones and screen rows full width; group headings as `.sec` |
| Full analysis, Test kit, Review coding, Sources | `StudyDoc` (`.lead-grid`) | Markdown as `.sec`; tables and figures full width |
| Essay | `Essay` (`.lead-grid`) | Markdown as `.sec`; cover, figures and Try-this in the main column |
| LinkedIn post | `Doc` (`.lead-grid`) | Markdown as `.sec` |
| Case studies, Writing, Work | index pages | Lists and cards full width |
| About | own page | The same side/main split for every row |
| Home | own page | A composition of full-width blocks; `--display` hero |

Outside these rules: the Postpace landing page (`/linkedin/mitul-builds/posts/`), which is its own product, and the standalone app legal pages (`Legal`).

## 7. Content
- Titles in sentence case ("User test kit: honest games", not "User Test Kit: Honest Games").
- Every study has the same parts. A missing part (for example no Review coding) is a gap to fill in `portfolio-content`, not a layout choice.
- In study and essay markdown, start each section with `##` (optionally with `<p class="eyebrow">…</p>` on the line above); that is what puts it on the grid.
- Screens are re-creations and say so; numbers are cited or labelled **Hypothesis** (see `portfolio-content/CLAUDE.md`).

## 8. Checking a change
After `npm run build`, serve `dist/` and check at 1440, 1024 and 390 px:
- every `.sec` spans the grid edge to edge, and every `.main`, lede and `.in-main` starts at the main column;
- every h1 and every facts column starts on the grid's left edge, and every page except Home and About has a facts row;
- no long paragraph sits outside a `.main`, `.in-main` or a card;
- no horizontal scroll at 390 px, and the pager buttons fit;
- `grep -rn "max-width: [0-9]" src | grep -v @media` lists only image sizes.
- After changing `rehype-sections`, delete `.astro/` before building: Astro caches rendered markdown.
