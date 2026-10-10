# User Test Kit: Visible Allowance

Everything you need to run 5 sessions with the prototype and fill in the case study's results table. About 30 minutes per person.

## 1. Before the sessions (once)

- [ ] **Capture the real flow (10 min).** On a Free ChatGPT account on your phone, screen-record: opening `+`, uploading photos until you hit the limit, and the screen that appears. Save it as `evidence/limit-flow-<date>.mp4`. This replaces store screenshots as the evidence for the "today" pattern, and lets you check how close variant A is.
- [ ] **Open the prototype.** Open `prototype/try.html?test=1` in Chrome on a laptop (the `?test=1` shows the facilitator panel; without it, people see only the phone). The phone is on the left and the facilitator panel on the right. For remote tests, share your screen and let them tell you where to tap, or send them the file and have them share their screen.
- [ ] **Recruit 5 people** (see screener). Friends of friends are fine; colleagues who know the project are not.
- [ ] Copy the results sheet (section 5) into a spreadsheet.

**Screener (ask before booking):**
1. Do you use an AI assistant app on your phone at least once a week? (must be yes)
2. Do you pay for it? (must be no)
3. Have you used it with photos or images in the last month? (aim for at least 2 yes)
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

**Intro (2 min).** "Thanks for helping. I'm testing a design idea, not you, so nothing you do is wrong. Please think out loud. It's a pretend AI app, so the answers are fake. Is it OK if I take notes and record the screen? The recording stays with me."

**Warm-up (3 min).** "Tell me about the last time you used an AI app on your phone. What was it for? Have you ever been told you'd hit a limit? What happened?"

**Expectation check (1 min).** "On a free plan, what do you think is limited, and what isn't?" *(Note any mention of "unlimited".)*

**Round 1 and 2: same tasks on each variant (8 min each).**
1. "Translate this menu photo." *(+ → Photos → menu)*
2. "Now turn this selfie into a professional headshot." *(+ → Photos → selfie)*
   - **Ask now:** "How many more photo edits could you do today? How sure are you, from 1 to 5?"
3. "Edit one more photo: brighten the room." *(+ → Photos → room)*
4. "Now translate one more menu." *(This one hits the limit.)*
   - **Think aloud:** "What's happening? What would you do now?"
   - In B, note which option they choose and why. Did they notice their message and photo were kept?
5. **After the round:** "How fair did that limit feel, from 1 to 5?" and "Would you come back to this app tomorrow? Why?"

**Fairness probe (2 min).** Press **Simulate failed result**. "If this had counted against your limit, how would you feel? Should it?"

**Compare (3 min).** "You saw two versions. Which one would you rather use when you hit a limit? Which one makes you more likely to pay? Why?"

**Close (1 min).** "If you could change one thing about how limits work in these apps, what would it be?"

## 4. What to watch for

- Did they **see** the chip count before the limit (B)? Did they mention it unprompted?
- Did they **ration**: decline a task because they could see the meter? *(This is the main risk.)*
- Did anyone call the B sheet "pushy", "salesy" or "annoying"? Did anyone call A that?
- In B, which option did they choose: save / text / upgrade / dismiss?
- Did "Save for later" feel trustworthy? ("Would you trust it to actually run?")

## 5. Results sheet

Copy into a spreadsheet, one row per participant per variant.

| P | Variant | Order | Predicted remaining correctly (Y/N) | Confidence 1–5 | Noticed chip (Y/N, B only) | Limit choice | Fairness 1–5 | Come back tomorrow (Y/N) | Rationed (Y/N) | Called it pushy (Y/N) | Best quote |
|---|---|---|---|---|---|---|---|---|---|---|---|
| P1 | A | 1st | | | n/a | | | | | | |
| P1 | B | 2nd | | | | | | | | | |
| … | | | | | | | | | | | |

**Summary to paste into `case-study.md`:**
- Predicted remaining correctly: A _/5, B _/5
- Average fairness: A _, B _
- Would come back tomorrow: A _/5, B _/5
- B limit choices: save _, text _, upgrade _, left _
- Rationing seen: _/5
- Preferred variant: A _, B _
- 2–3 quotes, verbatim

**Pass signal:** at least 4 of 5 predict their remaining uses correctly in B, and nobody calls the B sheet pushy.
**Kill signal:** 3 or more ration because they can see the meter, or 3 or more don't trust "Save for later".

## 6. After the sessions

1. Fill the results table in `case-study.md`, and replace *pending* with the numbers.
2. Add one paragraph: what surprised you, and what you'd change in the design. If the results kill the idea, say so. A case study that shows you changing your mind is stronger than one that confirms itself.
3. Rebuild the site: `cd ../../portfolio/design-system && python3 build.py`.
4. Turn the results into a LinkedIn post (the hooks are in `report.md`, section 10).
