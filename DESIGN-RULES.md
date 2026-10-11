# Design rules

The rules every page on the site follows, so a study, a project, an essay and an index page all feel like one product. They live in code as tokens and shared parts (`src/styles/global.css`, `src/components/Pager.astro`); this file says what they are and when to use which. If a page needs something these rules don't cover, change the rule here first, then the code.

## 1. One grid, one left edge
- Every page sits on one grid: `.wrap`, 1200 px wide with 32 px gutters (20 px on phones), so content starts **150 px from the left on a 1440 px screen** and 20 px on a phone.
- **Everything starts on that line:** breadcrumbs, tabs, eyebrow, title, text, tables, images, buttons. Nothing is centred on the page.
- Centring is only for things inside a frame: phones in a tinted hero panel, an image in its card.
- Why: a single left edge is what makes moving between pages feel calm. A centred column on one tab and a left-aligned one on the next makes the page jump.

## 2. Three widths, no others
| Token | Width | Use it for |
|---|---|---|
| `--text` | 760 px | Running text, ledes, lists, quotes, notes, disclaimers, essay figures and covers |
| `--title` | 960 px | Page titles (h1) |
| `--wrap` | the full grid | Hero panels, tables, screen galleries, card grids, stat rows, the three-part summary |

Text is never wider than `--text` and never narrower without a reason (a card, a column in a grid). No one-off `max-width` values for text: use the tokens, or `.measure` for a text-width block. Images may keep their own smaller size (a portrait, a square post cover), up to the width of the column they sit in.

## 3. The page header
Every page starts the same way, with `.page-head` on the grid:
1. Breadcrumbs (from `Base`, on every inner page).
2. Tabs, if the page is one part of something bigger (a study, a project with a case study).
3. Eyebrow: `Kind · Subject`, for example `Full analysis · Temu`, `Project · Consumer`, `Essay · Research · 11 Oct 2026 · 5 min read`.
4. Title (h1), sentence case.
5. Lede: one or two sentences, `--text` wide. Writing pages use the serif dek instead.

Study overviews and project pages add the facts table on the right of the header (`CaseStudy` layout). That's the only header variant.

## 4. Type scale
| Token | Size | Where |
|---|---|---|
| `--display` | 44–78 px | Home and About heroes only |
| `--h1` | 40–64 px | Every other page title |
| `--h2` | 30–40 px | Section headings everywhere, including index pages and the "Keep reading" block |
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
| Study overview | `StudyPage` → `CaseStudy` | Hero panel, summary and numbers at grid width; text sections at `--text`; screens at grid width |
| Project | `work/[slug]` → `CaseStudy` | Same as the overview |
| Try it, Screen by screen | own pages, `.page-head` | Phones and screen rows at grid width |
| Full analysis, Test kit, Review coding, Sources | `StudyDoc` | Text at `--text`; tables and figures at grid width |
| Essay | `Essay` | Text, cover, figures and the Try-this box at `--text` |
| LinkedIn post | `Doc` | `.prose` at `--text` |
| Case studies, Writing, Work | index pages, `.page-head` | Lists and cards at grid width |
| Home, About | own pages | `--display` hero; About uses a label column and a `--text` content column |

Outside these rules: the Postpace landing page (`/linkedin/mitul-builds/posts/`), which is its own product, and the standalone app legal pages (`Legal`), which follow the left edge but have no site header.

## 7. Content
- Titles in sentence case ("User test kit: honest games", not "User Test Kit: Honest Games").
- Every study has the same parts. A missing part (for example no Review coding) is a gap to fill in `portfolio-content`, not a layout choice.
- Screens are re-creations and say so; numbers are cited or labelled **Hypothesis** (see `portfolio-content/CLAUDE.md`).

## 8. Checking a change
After `npm run build`, serve `dist/` and check at 1440 px and 390 px:
- every eyebrow and h1 starts on the grid line (150 px at 1440, 20 px at 390);
- running text is at most 760 px wide;
- no horizontal scroll at 390 px, and the pager buttons fit;
- no new text `max-width` or title size outside the tokens (`grep -rn "max-width: [0-9]" src | grep -v @media` should list only image sizes).
