# Portfolio Design System (v1)

Built on the design language of Holstee's *Mindful Matter* journal ([reference article](https://www.holstee.com/blogs/mindful-matter/best-journaling-apps)), then extended for product case studies.

**Files**
| File | What it is |
|---|---|
| [`tokens.css`](tokens.css) | Colours, type scale, spacing, radii, motion |
| [`components.css`](components.css) | Header, article card, sidebar, TOC, callouts, tags, facts row, stats, figures, tables, severity dots, buttons, pager, FAQ, footer, home work list |
| [`specimen.html`](specimen.html) | Every token and component on one page |
| [`build.py`](build.py) | Turns `case-studies/*/report.md` into pages in [`../site/`](../site/index.html) (`pip install markdown`, then `python3 build.py`) |
| [`render.js`](render.js) | Screenshots into [`previews/`](previews/) |

## 1. What Holstee does (audit, 10 Oct 2026)

Measured from the live page with a headless browser (computed styles + Shopify theme variables).

| Element | Holstee value |
|---|---|
| Page background | `#F7F6F2` warm paper |
| Article container | White card, 10px radius, 780px text column, sidebar on the right |
| Footer / promo card | Sand `#ECE8DB` |
| Text | Pure black, with 75% / 60% / 20% alpha for secondary text and borders |
| Accent | Teal `#3E7B73` (buttons, announcement bar, "Next post"), deep green `#0C5132` |
| Headings | **Figtree Light (300)**, letter-spacing −0.02em, title 48px, H2 32px, H3 28px, H4 22px |
| Body | **Inter Light (300)**, 15px / 1.6 |
| Meta / eyebrow | Figtree 400, ~13px, UPPERCASE, +0.1em tracking ("UPDATED JUL 15, 2026 · 10 MIN READ · BY …") |
| Buttons | Figtree 500, uppercase, +0.1em, 48px high, 10px radius, teal fill |
| Inputs | 48px, 1px `rgba(180,187,195,.5)` border, 5px radius |
| Disclosure note | `#FAF6F0` fill, thin brick left rule, italic |
| Table of contents | Bordered box, small bold uppercase label, plain link list |
| Tables | 1px `rgba(0,0,0,.2)` grid, 14px, bold header, rating dots `●●○` with a legend |
| Images | App screens on soft gradient panels, 10px radius |
| Motion | `cubic-bezier(.3,1,.3,1)` 200ms; image fades 1s |
| Feel | Quiet, editorial, generous white space, one accent colour, no decoration |

## 2. What we kept, changed and added

**Kept as is:** the paper / white card / sand palette, teal accent, Figtree Light headings with tight tracking, Inter body, uppercase meta line, 10px corners, button and input specs, TOC box, disclosure note, hairline tables, dot ratings, footer, motion curves.

**Changed (and why):**
- **Body 15px → 16px**, line-height 1.6 → 1.65. Case studies are 15–20 minute reads; Inter Light at 15px is thin on low-DPI screens.
- **Bold = Inter 500**, not 600, so emphasis stays calm next to Light text.
- **Wordmark** is text (Figtree 500, wide tracking) in place of Holstee's logo.

**Added for case studies (our layer):**
| Token / component | Purpose |
|---|---|
| Evidence (teal), Hypothesis (amber `#8A6416`), Problem (brick `#8E1F0B`, Holstee's own), Outcome (deep green) | Every claim in a report is a fact or a labelled guess, and the reader sees which at a glance |
| `.tag` | Inline label: HYPOTHESIS, EVIDENCE, PROBLEM, OUTCOME |
| `.facts` | Role · Team · Timeline · Platform · Methods row under the summary |
| `.stats` | Big Figtree Light numbers for the 2–3 numbers that matter |
| `.dots` (severity 1–4) | Holstee's `●●○` rating idea, used for friction severity; 3–4 turn brick |
| `.frame` + `figcaption` | Screens on Holstee-style soft panels with numbered captions |
| `.insight` | Hairline rule above each numbered insight |
| `.work` list | Home page lists case studies as rows (title + question + app), like top designer portfolios |
| Sidebar | "Get the next teardown" (newsletter, your blog goal) + "The question" the study answers |

## 3. Rules
1. **One accent.** Teal only for actions and active states. Semantic colours only inside reports, never as decoration.
2. **Light weights.** Headings 300, body 300, emphasis 500. Never bold headings.
3. **One reading column** (780px). Figures and tables stay inside it.
4. **Numbers inside the story.** Use `.stats` at most once per case study.
5. **Every screen has a caption** with figure number and source.
6. **Light theme only.** The paper look is the brand; no dark mode.
7. Minimum text size 13px (meta), 14px for captions and tables.

## 4. Relationship to the LinkedIn visuals
The LinkedIn post system (`../../08-visual-design-system.md`, colour families on dark slides) stays as is: it is built to stop the scroll. The portfolio is built for reading. They share the voice and the tagline, not the palette. The earlier "Ink & Lime" web draft in `../../brand/system/` is superseded by this system.

## 5. Fonts
Both are free Google Fonts: [Figtree](https://fonts.google.com/specimen/Figtree) and [Inter](https://fonts.google.com/specimen/Inter). Loaded in `tokens.css`.
