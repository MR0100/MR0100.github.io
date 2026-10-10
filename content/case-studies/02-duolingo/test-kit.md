# User Test Kit: Earn It Back

Everything you need to run 5 sessions with the prototype and fill in the case study's results table. About 35 minutes per person.

## 1. Before the sessions (once)

- [ ] **Capture the real flow (10 min, if you can).** If you or a friend has a Duolingo streak that breaks, screen-record the next app open: the streak screen, any repair or freeze offer, and the price and time window shown. Save it as `evidence/streak-break-<date>.mp4`. This replaces store screenshots as evidence for the "today" pattern. It also checks the two facts I couldn't verify: the Streak Repair price and how long the repair window lasts. Then update the gem numbers in variant A to match.
- [ ] **Open the prototype.** Open `prototype/try.html?test=1` in Chrome on a laptop (the `?test=1` shows the facilitator panel; without it, people see only the phone). The phone is on the left, the facilitator panel on the right. For remote tests, share your screen and let them tell you where to tap.
- [ ] **Recruit 5 people** (see screener). Friends of friends are fine; colleagues who know the project are not.
- [ ] Copy the results sheet (section 5) into a spreadsheet.

**Screener (ask before booking):**
1. Have you used Duolingo (or another streak-based learning app) for 3+ months? (must be yes)
2. Has a streak of 30+ days broken in the last 6 months? (must be yes)
3. After it broke, did you keep using the app? (aim for at least 2 who stopped or nearly stopped)
4. Free or paid? (aim for a mix)
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

Press **Reset** and pick the variant in the panel before each round. Press **Download CSV** after each round; it saves the event log with timings and the pretend day.

## 3. Script

**Intro (2 min).** "Thanks for helping. I'm testing a design idea, not you, so nothing you do is wrong. Please think out loud. It's a pretend language app, and the gem prices are made up. Is it OK if I take notes and record the screen? The recording stays with me."

**Warm-up (5 min).** "Tell me about the last time your streak broke. What happened that day? What did you do the next day? What did the zero mean to you?" *(Listen for self-blame, relief, or "what's the point".)*

**Round 1 and 2: same tasks on each variant (8–10 min each).**
1. "You've opened the app after missing a day. What's happened? What would you do?"
   - **Ask before they tap:** "What do you think happens to your streak now?" *(B: did they understand "paused" without help?)*
2. "Get your streak back, if you can."
   - A: note whether they try to repair, what they say about the gem cost, and what they choose at "Not enough gems".
   - B: "Using the Home screen, tell me how you'd get it back." *(Success: they can say there are 3 steps, one per day, within a week.)*
3. "Do today's practice." *(B: the warm-up. Let them miss one if they do.)*
   - **After B's warm-up:** "Did that feel like punishment or a refresher? 1 = punishment, 5 = refresher."
4. **B only:** press **Next day** twice, doing a step each day. "It's the next day. Carry on." On the restored screen: "What does the dashed ring mean?"
   - At the freeze offer, note whether they equip or decline, and why.
5. **After the round:** "How fair did the way back feel, 1 to 5?" and "Would you open this app again tomorrow? Why?"

**Fairness probe (3 min).** "A friend kept their 218-day streak without ever breaking it. You got yours back with this plan. Is that fair to them? Is the dashed ring enough?"

**Urgency probe (2 min).** "If you knew this safety net existed, would you practise any differently on a busy day?" *(This is the main risk. Note exact words.)*

**Compare and rank (3 min).** "Which version would you rather meet on the day your streak breaks? Why?" Then: "Rank these: free restore, earn it back over 3 days, pay gems to repair, start fresh."

**Close (1 min).** "If you could change one thing about what happens when a streak breaks, what would it be?"

## 4. What to watch for

- In B, did they read "paused" as "still mine" or as "gone"? Did anyone ask "where's my streak?"
- Did they notice the lifetime numbers (days learned, words practised)? Did they mention them unprompted?
- Did the "rusty" label feel kind or patronising?
- Did anyone say a restored streak "doesn't count" or is "cheating"?
- **Urgency risk:** did anyone say they'd skip a day more easily because the plan exists?
- In A, at "Not enough gems": did they reach for "Get more gems" or give up? Any words like "greedy" or "pay to win"?

## 5. Results sheet

Copy into a spreadsheet, one row per participant per variant.

| P | Variant | Order | Understood what happened (Y/N) | Could describe the way back (Y/N) | Choice at break | Warm-up 1–5 (B only) | Fairness 1–5 | Come back tomorrow (Y/N) | Restored "doesn't count" (Y/N, B only) | Would practise less (Y/N, B only) | Freeze: equip/decline (B only) | Best quote |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| P1 | A | 1st | | | | n/a | | | n/a | n/a | n/a | |
| P1 | B | 2nd | | | | | | | | | | |
| … | | | | | | | | | | | | |

**Summary to paste into `case-study.md`:**
- Understood what happened to the streak: A _/5, B _/5
- Could describe the way back: A _/5, B _/5
- Average fairness: A _, B _
- Would come back tomorrow: A _/5, B _/5
- Choices at the break: earn back _, repair _, start fresh _, left _
- Warm-up average (B): _
- Said restored "doesn't count": _/5 · Would practise less: _/5
- Ranking (most common first choice): _
- 2–3 quotes, verbatim

**Pass signal:** at least 4 of 5 understand "paused" and can describe the 3-step plan without help, and the warm-up averages 4 or more.
**Kill signal:** 3 or more say a restored streak doesn't count, or 3 or more say they'd practise less because the safety net exists.

## 6. After the sessions

1. Fill the results table in `case-study.md` and replace *pending* with the numbers.
2. Add one paragraph: what surprised you, and what you'd change in the design. If the results kill the idea, say so. A case study that shows you changing your mind is stronger than one that confirms itself.
3. Rebuild the site: `cd ../../portfolio/design-system && python3 build.py`.
4. Turn the results into a LinkedIn post (the hooks are in `report.md`, section 10).
