---
title: "Duolingo proved 15 million lapsed learners want back in. The door was open for one month."
app: "Duolingo"
study: "duolingo"
---

> **Independent study.** Not affiliated with or endorsed by Duolingo. Public sources only, every number linked. The proposal screens are my own concept, built as a prototype that re-creates Duolingo's visual style (no Duolingo characters or logos). Anything I couldn't verify is labelled **Hypothesis**.

**Summary.** I expected to find that Duolingo's streak puts too much pressure on learners. The evidence said I was wrong. In 127 recent one- and two-star App Store reviews, only 1 said the streak itself was too much pressure. 8 came from people trying to keep a streak, some of them 900 or 1,000 days long, and losing it to bugs, used-up freezes or a lack of gems. The real gap is what happens after a streak breaks. In June 2026 Duolingo let lapsed learners revive their streaks for one month: 15.4 million did, and they retained better than a typical returning group. Then the offer ended. So I designed a permanent "Earn it back" path, built it as a clickable prototype, and wrote the test that would prove or kill it.

## The question I started with was the wrong one

Duolingo has 58.7 million daily and 140.6 million monthly active users ([Q2 2026 shareholder letter](https://www.sec.gov/Archives/edgar/data/1562088/000162828026053299/q2fy26duolingo6-30x26share.htm)). Its engine is retention. The share of current users who come back the next day (Duolingo calls it CURR) hit an all-time high of 84%, and the company calls it "one of our most important leading indicators" (same source). The streak is the most visible part of that engine.

Streaks are often criticised for creating anxiety, so my starting hypothesis was that the streak pushes people away. Before designing anything, I read what users actually complain about. I took the 500 most recent App Store reviews from seven English-language storefronts (7 Sep – 8 Oct 2026) and coded all 127 one- and two-star reviews by hand.

| What negative reviews are about (n = 127, one review can have several themes) | Reviews |
|---|---|
| Too much gamification or interruption | 23 |
| **Energy (the daily learning limit)** | **22** |
| Pressure to pay, pricing, billing | 21 |
| Bugs, crashes, no support | 18 |
| Teaching quality, strict marking | 16 |
| Ads | 14 |
| **Streak loss, freezes or miscounts** | **9** |
| — saying the streak itself is too much pressure | 1 |

Streak complaints are a small share, but they're not the complaint I expected. They come from the most loyal users, and they want the streak, not less of it:

> "I have an almost 1000 day streak and you have completely stopped giving out gems… How are we expected to buy streak freezes??" (1★, India, 7 Oct 2026)

> "I'm at 220 days and am going to lose my streak because it won't let me finish a daily task." (2★, New Zealand, 16 Sep 2026)

So the question changed from "is the streak too much?" to "what happens to someone the moment it breaks?"

## What Duolingo already proved

Duolingo's own blog says losing a streak can feel "quite demotivating" ([Duolingo blog](https://blog.duolingo.com/how-duolingo-streak-builds-habit)), and restoring lost streaks had been requested "tens of thousands" of times from 80+ countries ([Pocketgamer.biz](https://www.pocketgamer.biz/duolingo-is-restoring-lost-streaks-for-a-limited-time-aiming-to-recover-lapsed-users/)). Peer-reviewed work agrees. Across seven studies, people were less likely to continue after a logged streak broke, and the effect was weaker when they could repair it ([Silverman & Barasch, *JCR*, 2023](https://academic.oup.com/jcr/article/49/6/1095/6623414)).

In June 2026 Duolingo ran "Streak Revival": learners with a lost streak of 30+ days could bring back their longest one by finishing three lessons in one sitting. **15.4 million learners did it, nearly 8 million of them with no active streak**, and Duolingo named it one of three drivers of Q2 user growth ([Q2 2026 letter](https://www.sec.gov/Archives/edgar/data/1562088/000162828026053299/q2fy26duolingo6-30x26share.htm)). The CEO said these users "are also showing better retention than a typical reengaged cohort" ([Q2 2026 call](https://www.webull.com/news/15392596720296960)).

<div class="note-box">Fig. 1: a third-party image (App Store or press) that I don’t republish here. The source is linked in the caption below.</div>
*Fig. 1. Streak Revival, June 2026: "Revive my 72 day streak", three lessons, then "Your longest streak is back!" It worked, and it was built as a one-month campaign. Source: Duolingo press image via [Pocketgamer.biz](https://www.pocketgamer.biz/duolingo-is-restoring-lost-streaks-for-a-limited-time-aiming-to-recover-lapsed-users/).*

## Three insights

**1. A broken streak is a cliff, not a stumble.** The product is designed around keeping the streak, and losing it is designed as a reset to zero. Once a goal feels broken, people tend to give up on it completely (the "what-the-hell" effect). Showing "0" confirms that the effort is gone.

**2. The way back costs the things a lapsed free learner is least likely to have.** Streak Freeze and Streak Repair cost gems, "and hence money, if you run out of free gems" ([Android Authority](https://www.androidauthority.com/duolingo-revive-broken-streak-event-3673004/)). Freezes only protect you if you equipped one in advance. Energy is the single most-cited mechanic in the negative reviews (22 of 127), and Duolingo itself told investors that "adding small amounts of friction" was "part of the reason our DAU growth has slowed" ([Q4 2025 letter](https://www.sec.gov/Archives/edgar/data/1562088/000162828026012246/q4fy25duolingo12-31x25shar.htm)). A returning learner has high intent and little currency. That's the worst place for friction.

**3. Restoring the number isn't the same as restoring the skill.** <span class="tag hypothesis">Hypothesis</span> Revival gave back a 72-day streak after three lessons with no check on what the learner still remembered, and 4 reviews describe coming back to a course that had changed. If the streak stops reflecting learning, it slowly loses meaning. The comeback is the cheapest moment to reconnect the number to real progress.

## How others handle a lapse

From public store screens (I didn't test each app after a real lapse): **Speak** restarts the streak at 1 but keeps "1123 sentences lifetime" next to it, and offers a nine-question "Quick Catch-up". **Busuu** uses a weekly goal, so a missed day doesn't reset anything. **Babbel** lets you choose your study days, so a rest day is planned, not a failure.

None of them has Duolingo's level of streak attachment, so copying a weekly goal outright could weaken what works. The lifetime counter and the catch-up review are worth borrowing.

## Options I considered

| Option | For | Against | Decision |
|---|---|---|---|
| A. Repeat Streak Revival every year | Proven; cheap to run again | Teaches people to wait for the event; no help the other 11 months | Rejected |
| B. Permanent "Earn it back" path | Recovers lapsed learners all year; ties the number back to learning | Might weaken the urgency of daily practice; might cut gem revenue from repairs | **Chosen, and test the urgency risk** |
| C. Replace the daily streak with a weekly goal | Kinder to busy weeks | Touches the engine behind 84% CURR; very high risk | Rejected |

**What I'd deliberately not build:** a one-tap "pay to restore" button with no learning attached. It would make money in the short term, but it would turn the streak into a purchase, and pressure to pay is already in 21 of the 127 negative reviews.

## The design

I built the proposal as a working prototype, so it can be tested with real people. Both variants are re-created in Duolingo's real visual style (type, colours, 3D buttons, energy badge, streak calendar, learning path) from the App Store screenshots dated 10 Oct 2026 (iOS 7.143.1) and Duolingo's own press and blog images; the sources are in [`references/`](/studies/duolingo/sources/). Every screen carries a small "Re-creation for an independent study" tag. It has two variants: **A** is a simplified version of today's pattern (streak back to zero, repair with gems), **B** is the proposal.

![Fig. 2](/studies/duolingo/design/b1-paused-not-gone.png)
*Fig. 2. **Paused, not gone.** On the next open: "Your 214-day streak is paused." Lifetime effort sits underneath (days learned, words practised), as Speak does. Two choices: earn it back in 3 days, or start fresh. Styled after Duolingo's own Streak Revival screens (Fig. 1).*

![Fig. 3](/studies/duolingo/design/b2-home-plan.png)
*Fig. 3. **The plan lives on Home.** The flame in the top bar shows "214 paused", not 0. Three checkpoints in the style of Duolingo's quest cards, to finish within 7 days. Nothing is hidden in a menu. Home layout re-created from Duolingo's learning-path images; the energy badge from the App Store screenshots.*

![Fig. 4](/studies/duolingo/design/b3-warmup-rusty.png)
*Fig. 4. **Day 1 is an energy-free warm-up** built from words the learner was weakest on before the break. A miss is labelled "rusty", not "wrong", and shows the answer. Duolingo already switches energy off during free trials ([Q2 2026 call](https://www.webull.com/news/15392596720296960)), so the mechanism exists. The lesson screen (close button, progress bar, energy badge, answer cards) is re-created from the App Store screenshots.*

![Fig. 5](/studies/duolingo/design/b5-plan-day3.png)
*Fig. 5. **Days 2 and 3 are normal lessons** with normal energy rules, which protects the business model. The plan card tracks progress and the deadline.*

![Fig. 6](/studies/duolingo/design/b6-restored.png)
*Fig. 6. **Restored, and honest about it.** "218 days, back on track": 214 days before the break, the missed day, and 3 comeback days. The paused days show as a distinct mark in the calendar, so a restored streak is never passed off as an unbroken one. Then, and only then, the app offers a Streak Freeze, at the moment the learner is most motivated to protect it. The number and week card follow Duolingo's real streak screen; the freeze offer follows the Streak Freeze sheet on Duolingo's blog.*

![Fig. 7](/studies/duolingo/design/a1-streak-zero.png)
*Fig. 7. **Variant A, for comparison.** My simplified version of today's pattern: the streak shows 0 and the way back costs gems the learner doesn't have. The gem numbers are placeholders (I couldn't verify Duolingo's real repair price or window). This is a test control, not a screenshot of Duolingo: I found no public image of today's lost-streak screen or Streak Repair offer, so both are re-created from the real streak screen in the App Store screenshots (10 Oct 2026).*

### How I'd build it (developer's view)

- **The streak becomes a server-side state machine:** `active → at_risk → paused_recoverable → restored | expired`. Day boundaries are computed on the server in the learner's time zone, and the calculation is idempotent. Reviewers already doubt the counter ("using up streak freezes without need"), so consistency gets fixed first, before any new state is added.
- **Offline lessons count.** Completions are queued with timestamps and the server decides which day they belong to. Widgets and reminders read the paused state from the same source.
- **The energy exemption is a server flag** on the session (`energy_exempt: comeback_warmup`), so it can be tuned remotely and can't be unlocked by editing the client.
- **Ship order:** eligibility, break screen, Home card and warm-up first, behind a remote-config flag. A "What's changed since you left" screen for 30+ day lapses comes second, because it needs course-change data I can't see from outside. My estimate: 2–3 sprints for phase 1, most of it backend state and analytics.

## How I'll know if it works

**User test (next step).** Five people who've used Duolingo for 3+ months and had a 30+ day streak break in the last 6 months, at least two of whom didn't come back. Each goes through the break on variant A and variant B, in alternating order. I log taps and timing in the prototype and ask: what does the screen mean, how fair it felt (1–5), and is a restored streak fair to a friend who never broke theirs? The full script and results sheet are in [the test kit](/studies/duolingo/test-kit/).

**Pass signal:** at least 4 of 5 understand "paused" and can describe the 3-day plan without help, and the warm-up feels like a refresher, not a punishment. **What would change my mind:** 3 or more say a restored streak "doesn't count", or say they'd practise less because a safety net exists.

| Result | Variant A | Variant B |
|---|---|---|
| Understood what happened to the streak | *pending* | *pending* |
| Fairness of the way back (avg, 1–5) | *pending* | *pending* |
| "Would come back tomorrow" | *pending* | *pending* |
| Chose earn back / repair / start fresh / left | *pending* | *pending* |

**In production**, the primary metric would be the share of learners active on day 28 after a 7+ day streak breaks. The guardrail matters as much: streak-keeping and CURR among learners who **never** broke their streak, so the safety net doesn't reduce daily practice. Plus Streak Freeze use, gem spend and subscription conversion. I'd randomise at the moment of the break, roll out 1% → 5% → 25%, and keep a long-running holdout so any loss of urgency shows up over 8+ weeks.

## What I'd do differently, and what only Duolingo knows

- I started with a popular opinion ("streaks cause anxiety") instead of the reviews. Counting 127 complaints took an afternoon and turned the project around. Reading the evidence comes first next time.
- My sample is a one-month snapshot coded by one person, and store screenshots never show a broken streak. The next pass needs a real capture of the break flow on a device.
- Open questions only the team can answer: what share of lost daily users follow a streak break; whether the Revival group's better retention lasts past 60–90 days; how much revenue comes from Streak Repair and how much "Earn it back" would cannibalise; and how Revival handled people who already had an active streak (public reports disagree).

The full research report, with every source, is available on request.
