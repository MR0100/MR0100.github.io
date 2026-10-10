---
title: "User Test Kit: Stone-First Results"
app: "KGK Diamonds"
study: "kgk-diamonds"
kind: "test-kit"
---

Everything you need to run 5 sessions with the prototype and fill in the case study's results table. About 35 minutes per person.

## 1. Before the sessions (once)

- [ ] **Capture the real flow first (15 min).** On a test account with demo stock, screen-record: a search, the result list, one stone page (where do the photo and video appear?), selecting two stones, and what happens after "Confirm Stone" (cancel the order straight away, or use a stone you're allowed to confirm). Save it as `evidence/live-flow-<date>.mp4`. Use public builds only, and nothing that shows a real buyer's name or price.
  - Compare it with variant A. If the live stone page or the confirmation differs from the simplified versions in the prototype, update variant A to match and say so in `case-study.md`. A control that doesn't match reality makes the test unfair.
- [ ] **Open the prototype.** Open `prototype/try.html?test=1` in Chrome on a laptop (`?test=1` shows the facilitator panel; without it, people see only the phone). For remote tests, share your screen and let them tell you where to tap.
- [ ] **Recruit 5 people** (see screener). KGK colleagues and anyone who has seen this study are out.
- [ ] Copy the results sheet (section 5) into a spreadsheet.

**Screener (ask before booking):**
1. Do you buy loose diamonds for your business, or for a jewellery business you work in? (must be yes)
2. Have you used a diamond-trading app (RapNet, VDB, Nivoda, a supplier's own app) in the past 6 months? (aim for at least 3 yes)
3. Do you usually buy for a specific customer's brief, for stock, or both? (aim for a mix)
4. Country and size of business (aim for a mix; at least one retailer and one dealer)

## 2. Session order

Alternate the order so neither variant always goes first:

| Participant | First | Second |
|---|---|---|
| P1 | A | B |
| P2 | B | A |
| P3 | A | B |
| P4 | B | A |
| P5 | A | B |

Press **Reset** and pick the variant in the panel before each round. The panel counts taps. Press **Download CSV** after each round; it saves the event log with timings, including every stone opened.

## 3. Script

**Intro (2 min).** "Thanks for helping. I'm testing a design idea, not you, so nothing you do is wrong. Please think out loud. It's a pretend version of a diamond app, and every stone, price and term is made up. Nothing is really ordered. Is it OK if I take notes and record the screen? The recording stays with me."

**Warm-up (4 min).** "Tell me about the last stone you bought for a customer. How did you choose it? What did you check before you said yes, and where did you check it?" *(Listen for video, photos, calls, WhatsApp, the certificate, tint, eye-clean.)*

**Round 1 and 2: same tasks on each variant (10–12 min each).**
1. **Search.** "A customer wants a round, about one carat, G or H, VS, white with no tint and eye-clean, for about $6,000. Find it." *(The filters are pre-set; they just tap Search.)*
2. **Choose.** "Which stone would you show your customer? Why that one?" *(Count stones opened. In A, do they open each one to see it? Do they notice the 1.02 ct H's tint, in either variant? Do they ask for video or say they'd call?)*
3. **Price.** "What would you pay in total for it? How do you know?" *(Success = the right total, without guessing which figure it is. In A, note which number they read as the total.)*
4. **Confirm.** "Confirm it." Then: "What just happened? What happens next?" *(In A, are they surprised the order is placed at once? In B, do they read the review sheet?)*
5. **After the round:** "On 1–7, how sure were you, before you confirmed, that this was the right stone?" and "Would you have called or messaged anyone before confirming? Who, and why?"

**Density probe (2 min, after B).** "Compared with the other version, could you see enough stones at once? Was anything slower?" *(The main design risk. Note exact words.)*

**Trust probe (2 min, after B).** "The card said 'KGK checked: faint brown tint'. Would you trust that? What would make you trust it more?"

**Compare (3 min).** "Which version would you rather buy from? Why?"

**Close (1 min).** "If you could change one thing about how diamond apps show a stone, what would it be?"

## 4. What to watch for

- **Density:** scrolling speed, and any comment about fewer stones, bigger cards or "too much" on a card.
- How many stones they open before deciding, in each variant.
- Whether they spot the tinted stone, and how: the card, the video or the stone page.
- Which number they call the price in A ("Rap", "/Cts", the total, the discount).
- In A, the moment after "Confirm Stone": words like "wait", "already?", "did I just buy it?".
- In B, whether they read the review sheet or tap straight through.
- Any mention of calling, WhatsApp or "I'd ask for a video" before confirming.

## 5. Results sheet

Copy into a spreadsheet, one row per participant per variant.

| P | Variant | Order | Stone picked (fits brief Y/N) | Avoided the tinted stone (Y/N) | Stones opened | Total stated correctly (Y/N) | Said what Confirm does (Y/N) | Taps to confirm | Sure 1–7 | Would call first (Y/N, why) | Density comment | Best quote |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| P1 | A | 1st | | | | | | | | | | |
| P1 | B | 2nd | | | | | | | | | | |
| … | | | | | | | | | | | | |

**Summary to paste into `case-study.md`:**
- Picked a stone that fits the brief: A _/5, B _/5
- Avoided the tinted stone: A _/5, B _/5 · Stones opened (avg): A _, B _
- Stated the total correctly: A _/5, B _/5
- Said what Confirm does: A _/5, B _/5
- Sure it was the right stone (avg, 1–7): A _, B _
- Would call or message first: A _/5, B _/5
- Density probe: enough stones _, too few _
- 2–3 quotes, verbatim

**Pass signal:** in B, at least 4 of 5 avoid the tinted stone without opening every stone and state the correct total before confirming; nobody says B shows too few stones.
**Kill signal:** 3 or more say B is slower or shows too few stones, or 3 or more say they wouldn't trust KGK's own tint check. The first means the card is too heavy; the second means the check needs proof (a video is shown first, or a named grader), not a label.

## 6. After the sessions

1. Fill the results table in `case-study.md` and replace *pending* with the numbers.
2. Add one paragraph: what surprised you, and what you'd change. If the results kill the idea, say so.
3. If the live recording showed the app differs from variant A, update variant A and Fig. 1's caption.
