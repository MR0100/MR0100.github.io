---
title: "User Test Kit: Log It Again"
app: "MyFitnessPal"
study: "myfitnesspal"
kind: "test-kit"
---

Everything you need to run 5 sessions with the prototype and fill in the case study's results table. About 35 minutes per person.

## 1. Before the sessions (once)

- [ ] **Capture the real flow first (15 min).** On a free MyFitnessPal account, screen-record logging a usual breakfast of three foods, changing one portion, copying a past day's lunch, and tapping the barcode scanner. Save it as `evidence/free-logging-flow-<date>.mp4`. This replaces store screenshots as evidence for the "today" pattern. It also checks what I couldn't verify: whether saving really returns to the top of Today, whether the history list allows adding several foods at once, where copy-from-date lives, and where ads appear. Then update variant A to match what you recorded. If the real app is faster than variant A, say so in the case study.
- [ ] **Open the prototype.** Open `prototype/try.html?test=1` in Chrome on a laptop (the `?test=1` shows the facilitator panel; without it, people see two phones side by side). The phone is on the left, the facilitator panel on the right. For remote tests, share your screen and let them tell you where to tap.
- [ ] **Recruit 5 people** (see screener). Friends of friends are fine; colleagues who know the project are not.
- [ ] Copy the results sheet (section 5) into a spreadsheet.

**Screener (ask before booking):**
1. Have you tracked calories or food in an app in the last 12 months? (must be yes)
2. Did you stop, or nearly stop? Why? (aim for at least 3 who stopped; note the reason in their words)
3. Did you use a free or paid plan? (aim for at least 2 former free users)
4. Do you eat the same breakfast or lunch on most days? (aim for a mix of yes and no)
5. iPhone or Android, age range and country (aim for a mix)

Don't recruit anyone who is currently in treatment for an eating disorder, and stop a session if calorie talk causes visible distress.

## 2. Session order

Alternate the order so neither variant always goes first:

| Participant | First | Second |
|---|---|---|
| P1 | A | B |
| P2 | B | A |
| P3 | A | B |
| P4 | B | A |
| P5 | A | B |

Before each round, press **Reset** and pick the variant in the panel. For each task, press **Start** when you finish reading it and **End** when the participant says they're done. The panel records seconds and taps. Press **Download CSV** after each round; it saves the event log with timings, tap counts and the pretend time.

## 3. Script

**Intro (2 min).** "Thanks for helping. I'm testing a design idea, not you, so nothing you do is wrong. Please think out loud. It's a pretend food diary styled like MyFitnessPal, not the real app, and the foods and calories are made up. Is it OK if I take notes and record the screen? The recording stays with me."

**Warm-up (5 min).** "Walk me through the last time you logged a meal. What made it annoying, if anything? Why did you stop?" *(Listen for time, repetition, ads, the paywall, or guilt.)*

**Round 1 and 2: same tasks on each variant (8–10 min each).** The pretend time starts at 8:05.
1. "It's 8 am. Log your usual breakfast: oats with milk, a banana and a coffee."
   - **Ask before they tap:** "Where would you start?"
   - A: did they use Log on the Today meal card, View all, or the blue + button? Did they open each food and tap Add, or use + on a history row?
   - B: did they read the card before tapping Log? Ask afterwards: "How sure are you that what got logged is right?" (1–5)
2. "You only had half the banana. Fix that, then add a Greek yogurt as a snack."
   - Watch for lost context: after saving, do they know where they are? In A, note their reaction when the app returns to the top.
3. Press **Later** in the panel. "It's lunchtime. Make today's lunch the same as Monday's."
   - B: did they find Copy, or use the lunch card instead? Either is fine; note which.
4. "You've bought a new snack bar and want to scan its barcode. What would you do?"
   - Note what they say at the Premium screen. In B: "How does this way of showing Premium feel?"
5. **After each task:** "How easy was that, from 1 (very hard) to 7 (very easy)?" (Single Ease Question)

**Trust probe (3 min).** "If logging your usual breakfast took one tap, would you still check what was logged? What would make you stop checking?" *(This is the accuracy risk. Note exact words.)*

**Upgrade probe (2 min).** "If you could log your repeat meals for free like this, would you ever pay for the scanner or photo logging? When?" *(This is the business risk.)*

**Compare and rank (3 min).** "Which version would you rather log in, three times a day, for a month? Why?" Then: "Rank these: one-tap usual meal, free barcode scan, photo logging, no ads."

**Close (1 min).** "If you could change one thing about logging food, what would it be? Would this change how often you log?"

## 4. What to watch for

- In B, did they understand where the usual-meal suggestion came from? Did "9 of the last 14 mornings" help or feel creepy?
- Did anyone tap Log without reading the items? That is fast, and also the undercounting risk.
- Did anyone use Change to adjust before logging, or log first and fix afterwards?
- In A, count the times they had to scroll to find the diary or the meal again.
- Did anyone go looking for a Today/summary screen in B, and miss it?
- At the barcode task: words like "greedy", "used to be free" or "fair enough". Did B's quiet line feel more or less pushy than A's lock?
- **Upgrade risk:** did anyone say they'd never need Premium because of B?

## 5. Results sheet

Copy into a spreadsheet, one row per participant per variant.

| P | Variant | Order | T1 done unaided (Y/N) | T1 taps | T1 seconds | T1 ease 1–7 | Trust in logged items 1–5 (B only) | T2 lost context (Y/N) | T2 ease 1–7 | T3 method (copy/card/manual) | T3 ease 1–7 | T4 reaction to Premium | Would stop checking (Y/N, B only) | Would never upgrade (Y/N, B only) | Best quote |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| P1 | A | 1st | | | | | n/a | | | | | | n/a | n/a | |
| P1 | B | 2nd | | | | | | | | | | | | | |
| … | | | | | | | | | | | | | | | |

**Summary to paste into `case-study.md`:**
- Logged usual breakfast without help: A _/5, B _/5
- Median taps for breakfast: A _, B _
- Median seconds for breakfast: A _, B _
- Average ease across tasks: A _, B _
- Trust in logged items (B): average _; said they'd stop checking: _/5
- Lost context after an edit: A _/5, B _/5
- Said they'd never need Premium: _/5
- Preferred variant: A _, B _; most common first choice in the ranking: _
- 2–3 quotes, verbatim

**Pass signal:** at least 4 of 5 log the usual breakfast in B in under 10 seconds without help, and none say they distrust the suggested items.
**Kill signal:** 3 or more say they'd stop checking what gets logged, or 3 or more say they'd never need Premium because of B. The first is a health and accuracy problem; the second is a business problem. Either one means a redesign of the idea, not a tweak.

## 6. After the sessions

1. Fill the results table in `case-study.md` and replace *pending* with the numbers.
2. Add one paragraph: what surprised you, and what you'd change in the design. If the results kill the idea, say so. A case study that shows you changing your mind is stronger than one that confirms itself.
3. If your screen recording showed variant A was unfair to the real app, correct variant A, re-run `node prototype/render.js`, and say what changed.
