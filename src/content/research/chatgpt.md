---
title: "ChatGPT shows free users its best features, then keeps the meter two screens away"
app: "ChatGPT"
study: "chatgpt"
---

> **Independent study.** Not affiliated with or endorsed by OpenAI. Public sources only, every number linked. The proposal screens are my own concept, built as a prototype that re-creates ChatGPT's visual style (no logos) from its App Store screenshots of 10 Oct 2026. Anything I couldn't verify is labelled **Hypothesis**.

**Summary.** I set out to fix ChatGPT's blank-box problem: a single text field hiding voice, camera and image tools. The evidence said I was wrong. In 147 recent negative App Store reviews with a usable complaint, 1 was about finding a feature. 54 were about usage limits, and 21 of those were about the photo and image features the App Store page leads with. People find the features. They leave when a limit they didn't see coming stops them mid-task. (Since August the remaining allowance is in Settings › Usage, but not on the tools themselves.) So I designed a visible allowance and a softer landing at the limit, built it as a clickable prototype, and wrote the test that would prove or kill it.

## The question I started with was the wrong one

ChatGPT was the fastest app ever to reach a billion downloads ([Sensor Tower](https://sensortower.com/blog/state-of-ai-apps-report-2025)) and has 900 million weekly users and 50 million paying subscribers ([TechCrunch, Feb 2026](https://techcrunch.com/2026/02/27/chatgpt-reaches-900m-weekly-active-users/)). Its own head of product has said the app lacks "affordances", like "an appliance that nobody quite knew everything you could do with it" ([TechCrunch, Oct 2025](https://techcrunch.com/2025/10/08/openais-nick-turley-on-transforming-chatgpt-into-an-operating-system/)). So my starting hypothesis was discoverability: new users don't know about voice, camera or image creation.

Before designing anything, I read what users actually complain about. I pulled the 1,000 most recent App Store reviews from five English-language storefronts (19 Sep – 8 Oct 2026) and coded the 147 negative ones that had a usable complaint.

| What negative reviews are about (n = 147) | Reviews |
|---|---|
| Wrong answers, ignored instructions | 64 |
| **Usage limits and upgrade prompts** | **54** |
| — about photos, images or the camera | 21 |
| Bugs, speed, UI changes | 21 |
| Content refusals | 12 |
| **Can't find a feature** | **1** |

Wrong answers are the biggest theme, but that's a model problem, not something a mobile client fixes. Limits are a product and design decision. And discoverability, my starting point, barely appears.

## What changed in August

On 6 August 2026 OpenAI made text chat unlimited on the Free plan, while file uploads, images and other tools stayed metered ([Yahoo Tech](https://tech.yahoo.com/ai/chatgpt/article/chatgpt-free-users-now-get-unlimited-text-chats-200114299.html)). Ads arrived on Free in February ([MacRumors](https://www.macrumors.com/2026/02/09/chatgpt-now-has-ads/)). Two things follow:

1. **The tools are now the upgrade case.** The moment a free user hits a tool limit is where OpenAI wins or loses the subscription.
2. **A free user who leaves annoyed costs money even if they never pay**, because they also stop seeing ads.

But the app still looks like one chat box. Users hear "unlimited" and then hit a wall:

> "Why the hell does my free plan say I get 'unlimited chats' but I got limited until 1:42AM at midnight?" (2★, Australia, 28 Sep 2026)

> "I only uploaded one photo and asked a few questions, but I was quickly restricted and prompted to upgrade to Plus." (1★, UK, 5 Oct 2026)

<div class="note-box">Fig. 1: a third-party image (App Store or press) that I don’t republish here. The source is linked in the caption below.</div>
*Fig. 1. The App Store page sells photo and image features ("Edit your look"). Three of its eight screenshots are features a Free user is most likely to run out of. Source: [App Store](https://apps.apple.com/us/app/chatgpt/id6448311069).*

## Three insights

**1. The leak comes after discovery, not before.** An onboarding tour would push more people into the same wall, faster.

**2. The wall arrives at peak intent.** 20 of the 54 limit reviews mention a reset time hours away, and 22 mention being pushed to upgrade. By the peak-end rule, people remember a session by its worst moment and its end. Here, both are the wall, so the upgrade offer reads as punishment.

**3. The meter exists, but it's two screens away.** Since August 2026 a Free user can "check what's left of your limit from the Settings menu, under the Usage section", and limits now run on a single weekly allowance ([Engadget, 12 Aug 2026](https://www.engadget.com/2234173/chatgpt-free-features-2026/)). That's a real improvement, and my first draft missed it. But the count lives in Settings, not on the tool you're about to use, and the September–October reviews above still describe the limit as a surprise. The gap is placement, not existence. <span class="tag hypothesis">Hypothesis</span> One reviewer says failed generations still count. I couldn't verify it.

## Options I considered

| Option | For | Against | Decision |
|---|---|---|---|
| A. Feature tour on first open | Easy to build | Solves a problem reviews don't report; sends people to the wall faster | Rejected |
| B. Visible allowance + soft landing at the limit | Fixes the moment reviews describe; keeps pricing intact | Showing a meter might make people ration use | **Chosen, and test the rationing risk** |
| C. Raise free limits | Users love it | Compute cost; weakens the upgrade; not a design lever | Out of scope |

**What I'd deliberately not build:** a full-screen paywall or a countdown at the limit. It turns peak intent into pressure, and pressure is exactly what the "upgrade, upgrade, upgrade" reviews complain about.

## The design

I built the proposal as a working prototype so it can be tested with real people. Both variants re-create ChatGPT's real visual style (layout, composer, bubbles, colours, type, icon style) from the eight App Store screenshots of version 1.2026.272, pulled on 10 Oct 2026. Every screen carries a small "Re-creation for an independent study" tag. It has two variants: **A** copies today's pattern (a hard stop with an upgrade button), **B** is the proposal, drawn as if it shipped inside the same app.

![Fig. 2](/studies/chatgpt/design/b2-chip-3-left.png)
*Fig. 2. **Allowance on the tool chip.** Picking a photo tool adds a chip to the composer: "Photos · 3 left today". The count lives where the decision happens, not in settings. Chat, photo and composer re-created in ChatGPT's style from its App Store screenshots (10 Oct 2026); the chip is the proposal.*

![Fig. 3](/studies/chatgpt/design/b4-last-one-warning.png)
*Fig. 3. **Warning before the last use.** One line above the composer, no modal: "Last photo use for today. Resets at 3:40 pm." The chip turns amber.*

![Fig. 4](/studies/chatgpt/design/b5-limit-sheet.png)
*Fig. 4. **A soft landing with three equal choices.** The message and photo are kept. Save it for later (runs at reset, with a notification), do it in text (unlimited), or upgrade. Upgrade is one of three options, not the only exit. The sheet is the proposal, drawn in ChatGPT's style; no public screenshot of the real limit state exists to compare it with.*

![Fig. 5](/studies/chatgpt/design/b6-saved-for-later.png)
*Fig. 5. **Save for later.** The request is queued, and the notification permission is asked here, where the reason is obvious, not at first launch.*

![Fig. 6](/studies/chatgpt/design/b7-plan-today.png)
*Fig. 6. **The usage page, one tap away.** The real app already has a Usage section in Settings. Here the same information is one tap from the "Free · plan" pill: text unlimited, tools "0 of 3 left", the reset time, and that failed results don't count.*

![Fig. 7](/studies/chatgpt/design/a1-limit-wall.png)
*Fig. 7. **Variant A, for comparison.** The chat, photos and composer are re-created in ChatGPT's real style from its App Store screenshots (10 Oct 2026). The limit message itself is not: I found no public screenshot of it, so its wording and layout are my reconstruction from what reviewers and the OpenAI help centre describe (a notice after sending, with a reset time and a "Get Plus" button). The + menu is reconstructed the same way. Like the real app since August 2026, A also has Settings › Usage behind the ☰ menu (no public screenshot either). This is a test control, not a screenshot of ChatGPT.*

### How I'd build it (developer's view)

- **The server owns the numbers.** Limits change with load, so the client never hard-codes them. It renders an `allowance` object (`tool`, `remaining` or a band like "a few left", `resetsAt`, `countsFailures`), and all copy comes from the server so it can be A/B tested without an app release.
- **Save for later runs on the server**, with an idempotency key so a retry can't spend the allowance twice.
- **Ship order:** warning line and limit sheet first (almost no backend), then chips with counts, then save-for-later. My estimate: 2–3 sprints for the mobile client; the allowance API is the real dependency.

## How I'll know if it works

**User test (next step).** Five people who use a free AI app on their phone weekly, at least two of them for photos. Each does the same three photo tasks on variant A and variant B, in alternating order. I log taps and timing in the prototype and ask three things after each limit: what happens now, how fair it felt (1–5), and whether they'd come back tomorrow. The full script and results sheet are in [the test kit](/studies/chatgpt/test-kit/).

**Pass signal:** at least 4 of 5 predict their remaining uses correctly before the limit, and nobody calls the B sheet "pushy". **What would change my mind:** people ration their use because they can see the meter, or they skip "Save for later" because they don't trust it to run.

| Result | Variant A | Variant B |
|---|---|---|
| Predicted remaining uses correctly | *pending* | *pending* |
| Fairness at the limit (avg, 1–5) | *pending* | *pending* |
| "Would come back tomorrow" | *pending* | *pending* |
| Chose upgrade / save / text / left | *pending* | *pending* |

**In production**, the primary metric would be the 7-day return rate of free users after their first tool limit, with guardrails on free-to-paid conversion, tool use per user (to catch rationing) and ad impressions per session. I'd run it as an A/B test in one market for 2–4 weeks, then a staged rollout with a holdout.

## What I'd do differently, and what only OpenAI knows

- I started with a solution (a feature tour) before reading the reviews. Reading 1,000 reviews first took a day and saved me from building the wrong thing. I'll start there next time.
- My review sample is a recent snapshot coded by one person, and store screenshots never show the limit state. The next pass needs a real capture of the limit flow on a fresh account.
- Open questions only the team can answer: how limits are computed (rolling window? load-based?), whether an exact count is even promisable, and how limit events trade off against ads and upgrades in their own funnel.

The full research report, with every source, is available on request.
