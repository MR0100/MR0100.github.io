# User Test Kit: Honest Games

Everything you need to run 5 sessions with the prototype and fill in the case study's results table. About 35 minutes per person.

## 1. Before the sessions (once)

- [ ] **Capture the real flow first (20 min). This one matters more than usual.** Temu's App Store listing shows no wheels, timers or games, and Mobbin wasn't available, so the "today" pattern currently rests on the 2024 regulator record, press accounts and reviews. On a test device with a fresh account, screen-record: the first open (is there a wheel or game before the feed? can you skip it?), any reward you win and where its conditions appear, any countdown, a product page with a strike-through price or stock claim, the cart with one cheap item (when does a minimum order appear?), and the refund options on an order (which one is preselected?). Save it as `evidence/first-open-<date>.mp4`. Don't buy anything you don't want, and don't invite real contacts.
  - Then compare it with variant A. Temu made commitments in Germany in May 2024 and was asked to make changes EU-wide in November 2024, so the live app may already differ. If it does, update variant A to match what you recorded, and say so in `case-study.md`. A control that no longer matches reality makes the test unfair.
- [ ] **Open the prototype.** Open `prototype/try.html?test=1` in Chrome on a laptop (the `?test=1` shows the facilitator panel; without it, people see only the phone). For remote tests, share your screen and let them tell you where to tap.
- [ ] **Recruit 5 people** (see screener). Friends of friends are fine; colleagues who know the project are not.
- [ ] Copy the results sheet (section 5) into a spreadsheet.

**Screener (ask before booking):**
1. Have you bought something from Temu, Shein or AliExpress in the past 6 months? (must be yes)
2. Have you used Temu? (aim for at least 2 first-time Temu users)
3. Have you ever played a game or spun a wheel in a shopping app for a reward? (aim for at least 2 who have played a free-gift game)
4. Age range and country (aim for a mix)

## 2. Session order

Alternate the order so neither variant always goes first:

| Participant | First | Second |
|---|---|---|
| P1 | A | B |
| P2 | B | A |
| P3 | A | B |
| P4 | B | A |
| P5 | A | B |

Press **Reset** and pick the variant in the panel before each round. Press **Download CSV** after each round; it saves the event log with timings.

## 3. Script

**Intro (2 min).** "Thanks for helping. I'm testing a design idea, not you, so nothing you do is wrong. Please think out loud. It's a pretend shopping app, and all prices, odds and dates are made up. Nothing is really bought. Is it OK if I take notes and record the screen? The recording stays with me."

**Warm-up (4 min).** "Tell me about the last time you got something 'free' from a shopping app, or played a game in one. What did you enjoy about it? Did it turn out the way you expected?" *(Listen for both sides: what's fun, and where it felt like a trick.)*

**Round 1 and 2: same tasks on each variant (10–12 min each).**
1. **First open.** "Open the app and do what you'd normally do." *(Do they spin? In B, do they read the chips under the wheel, tap the odds, or skip?)*
2. **The win.** "What did you win? What do you need to do to use it, and by when?" *(Success = the right condition and deadline without scrolling back. In A, the conditions only appear on the reward page.)*
3. **Gift game.** "Try to get the free mug. Tell me when you'd stop, and why." *(A: count "Collect coins" taps; note the moment they notice the gains shrinking. B: which steps do they take? Do they say anything about the fixed steps or the finish rate?)*
4. **Product page.** Open a lightning deal. "Is this a good deal? How do you know?" *(Do they mention the countdown, the "% claimed" bar, the 30-day price, the "i"? Do they trust them?)*
5. **Cart.** "Check out with only the travel adapter." *(A: is the minimum order a surprise? B: did they notice it, and the credit threshold, before checkout?)*
6. **Refund.** You tab (your orders). "The desk lamp arrived broken. Get your money back." *(Which option, and did they change the preselected one?)*
7. **After the round:** "On 1–7, how **fun** was that?", "On 1–7, how **fair**?" and "Would you open this app again tomorrow? Why?"

**Energy probe (2 min, after B).** "Compared with the other version, did this one feel more exciting, less, or the same? What made the difference?" *(This is the main design risk. Note exact words.)*

**Compare (3 min).** "Which version would you rather shop in? Which game would you keep playing?" Then: "Did anything, in either version, feel like a trick?"

**Close (1 min).** "If you could change one thing about how shopping apps run games and rewards, what would it be?"

## 4. What to watch for

- **Energy:** smiles, "ooh", leaning in at the spin and the confetti, in both variants. Does B's win feel as good as A's?
- In B, did they read the rule chips before spinning? Did anyone tick "don't show the wheel on open"?
- In A's gift game: after how many taps did they notice it slowing? Their words at "99.99%" and "invite new users".
- In B's gift game: did fixed steps make them want to finish, or did seeing the real cost make them stop?
- Did any countdown make them hurry? Did anyone say a timer "isn't real"?
- At the refund, did anyone in A notice that credit was preselected? Words like "trapped", "tricked", "pushy".

## 5. Results sheet

Copy into a spreadsheet, one row per participant per variant.

| P | Variant | Order | Spun / skipped | Stated condition + deadline (Y/N) | Gift game: taps or steps, and why they stopped | Minimum order a surprise (Y/N) | Good deal? Reason given | Refund: card / credit | Fun 1–7 | Fair 1–7 | Come back tomorrow (Y/N) | "Felt like a trick" (what) | Best quote |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| P1 | A | 1st | | | | | | | | | | | |
| P1 | B | 2nd | | | | | | | | | | | |
| … | | | | | | | | | | | | | |

**Summary to paste into `case-study.md`:**
- Stated what the reward takes, and by when: A _/5, B _/5
- Average fun (1–7): A _, B _ · Average fairness (1–7): A _, B _
- Gift game: kept playing / stopped: A _/_, B _/_ (main reasons)
- Would come back tomorrow: A _/5, B _/5
- Surprised by a minimum order: A _/5, B _/5
- Energy probe (B vs A): more _, less _, same _
- 2–3 quotes, verbatim

**Pass signal:** B's average fun is within 1 point of A's, B's fairness is clearly higher, and at least 4 of 5 state the reward's condition and deadline in B.
**Kill signal:** B is clearly less fun (3 or more say "less exciting"), or 3 or more stop the gift game in B as soon as they see the real cost. Either means honest rules alone don't hold attention, and the reward itself needs rethinking.

## 6. After the sessions

1. Fill the results table in `case-study.md` and replace *pending* with the numbers.
2. Add one paragraph: what surprised you, and what you'd change in the design. If the results kill the idea, say so. A case study that shows you changing your mind is stronger than one that confirms itself.
3. If your live recording showed the app has changed since 2024, update Fig. 7's caption and variant A to match.
4. Rebuild the site: `cd ../../portfolio/design-system && python3 build.py`.
5. Turn the results into a LinkedIn post (the hooks are in `report.md`, section 10).
