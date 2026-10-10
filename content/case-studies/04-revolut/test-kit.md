# User Test Kit: Live Status for Long Holds

Everything you need to run 5 sessions with the prototype and fill in the case study's results table. About 35 minutes per person.

A held account is stressful, and some participants will have lived through one. Everyone **role-plays** with the made-up details in the prototype. Never ask for real account details, bank names, balances, documents or screenshots, and never ask why their own account was restricted.

## 1. Before the sessions (once)

- [ ] **Capture the real flow (if you can, and only with consent).** I couldn't see Revolut's retail restricted-account screens. If someone you know is going through a restriction and is happy to help, ask them to screen-record what the app shows: Home, any banner, the help or chat entry, and any document request. They should blur names, amounts and case numbers before sharing. Save it as `evidence/restricted-flow-<date>.mp4`. This checks what I couldn't verify: whether the retail app already shows a status or target for longer holds, and how its in-app payment check looks today. If it already does more, update variant A to match and reframe the study. Don't create or provoke a restriction to get this.
- [ ] **Open the prototype.** Open `prototype/try.html?test=1` in Chrome on a laptop (the `?test=1` shows the facilitator panel; without it, people see a before/after view). The phone is on the left, the facilitator panel on the right. For remote tests, share your screen and let them tell you where to tap.
- [ ] **Recruit 5 people** (see screener). Friends of friends are fine; colleagues who know the project are not.
- [ ] Copy the results sheet (section 5) into a spreadsheet.

**Screener (ask before booking):**
1. In the last two years, has a bank, card or fintech app held a payment, paused features, or asked you for documents before letting money through? Any provider counts. (must be yes)
2. Is that situation fully resolved now? (prefer yes; if it's still open, offer to reschedule, as the session may be upsetting)
3. Do you use a banking app weekly? (must be yes)
4. Is English your first language? (aim for at least 2 who say no)
5. Age range and country (aim for a mix)

## 2. Session order

Alternate the order so neither variant always goes first:

| Participant | First | Second |
|---|---|---|
| P1 | A | B |
| P2 | B | A |
| P3 | A | B |
| P4 | B | A |
| P5 | A | B |

Press **Reset** and pick the variant in the panel before each round. Press **Download CSV** after each round; it saves the event log with timings and the pretend time.

## 3. Script

**Intro (2 min).** "Thanks for helping. I'm testing a design idea, not you, so nothing you do is wrong. Please think out loud. It's a pretend banking app: the name, the money and the dates are all made up, so please don't use any real details. You can skip any question or stop at any time. Is it OK if I take notes and record the screen? The recording stays with me."

**Warm-up (5 min).** "Without any details you'd rather keep private, tell me about a time a payment or account was held. What did you do first? What did you most want to know?" *(Listen for why vs. when vs. what next vs. who. If they get upset, move on.)*

**Round 1 and 2: same story on each variant (10–12 min each).**
1. **The card check.** "You're in Lisbon and your taxi payment fails. Sort it out." *(Both variants use the real app's payment questionnaire, so this is a warm-up, not a comparison. Note whether they find it from the push or the Home tile.)*
2. **The held transfer.** "Your £1,200 from your other bank hasn't arrived to spend. Find out what's happening and what they need from you." *(A: do they find the upload? Do they know what to upload? B: do they find the exact items and send them?)*
3. **Status check.** Without scrolling back: "What can you still do right now? What's paused? When will you next hear from them?" *(Success = correct on all three.)*
4. **Time passes.** Press **3 hours later**. "It's later. Check on it." Then press it once more. *(B: how do they react to the "taking a little longer" message and the new estimate? A: what do they do when the next agent asks what the issue is?)*
5. **After the round:** "On 1–7, how **safe** did you feel?", "On 1–7, how **in control**?" and "Would you contact support anyway? Why?"

**Clock probe (2 min, after B).** "How did the 3-hour clock make you feel: calmer, more anxious, or no different? And when the estimate moved?" *(This is the main design risk. Note exact words.)*

**Compare (3 min).** "Which version would you rather have on a bad day? Which one felt more like it was protecting you?"

**Close (1 min).** "If you could change one thing about how banks handle a held payment, what would it be?"

## 4. What to watch for

- Did they read "we paused it to protect you" as protection or as an accusation?
- In A, did they know what "supporting documents" meant? What would they have uploaded?
- In B, did they notice the "still works" chips? Did the clock calm or pressure them?
- Their reaction to the moved estimate in B, and to the new agent in A.
- Any words like "trapped", "ignored", "safe", "looked after".

## 5. Results sheet

Copy into a spreadsheet, one row per participant per variant.

| P | Variant | Order | Found the payment check (push / tile / chat) | Knew what to send (Y/N) | Status check: still works / paused / when (0–3) | Safe 1–7 | In control 1–7 | Contact support anyway (Y/N) | Reaction to delay or new agent | Best quote |
|---|---|---|---|---|---|---|---|---|---|---|---|
| P1 | A | 1st | | | | | | | | | |
| P1 | B | 2nd | | | | | | | | | |
| … | | | | | | | | | | | |

**Summary to paste into `case-study.md`:**
- Found when they'll hear back: A _/5, B _/5 · Said what still works: A _/5, B _/5
- Sent the right item first time: A _/5, B _/5
- Average safe (1–7): A _, B _ · Average in control (1–7): A _, B _
- Would contact support anyway: A _/5, B _/5
- Clock probe (B): calmer _, more anxious _, no different _
- 2–3 quotes, verbatim

**Pass signal:** at least 4 of 5 answer "when will I hear back" correctly in B, and B's safe score is no lower than A's.
**Kill signal:** 3 or more say the clock makes them more anxious, or the moved estimate makes them trust it less than no estimate at all.

## 6. After the sessions

1. Fill the results table in `case-study.md` and replace *pending* with the numbers.
2. Add one paragraph: what surprised you, and what you'd change in the design. If the results kill the idea, say so. A case study that shows you changing your mind is stronger than one that confirms itself.
3. Delete the screen recordings once the notes are written, unless the participant agreed to keep them.
4. Rebuild the site: `cd ../../portfolio/design-system && python3 build.py`.
5. Turn the results into a LinkedIn post (the hooks are in `report.md`, section 11).
