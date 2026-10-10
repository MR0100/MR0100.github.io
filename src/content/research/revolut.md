---
title: "Revolut stops fraud in seconds. It's the hold that lasts a week that breaks trust."
app: "Revolut"
study: "revolut"
---

> **Independent study.** Not affiliated with or endorsed by Revolut. Public sources only, every number linked. The prototype screens are my re-creations in Revolut's current visual style (from its App Store screenshots of 10 Oct 2026), without its logo or card art; the proposal itself is my own concept. Anything I couldn't verify is labelled **Hypothesis**.

**Summary.** I expected to find that Revolut had added so many products that the basics were getting buried. The reviews said I was wrong: clutter barely comes up. The anger sits in one moment, when money is held. So I read 4,391 recent App Store reviews and Revolut's own explanation of why it restricts accounts. Holds do real work: they stop fraud and meet the law, and when they're quick, customers praise them. What breaks trust is the hold that turns into a case running for days, with no timeline, vague requests and a new agent each time. My first design treated every hold as a slow case, and was slower than Revolut's own promises. Revolut already handles the quick case well: a declined card payment opens an in-app questionnaire, and confirming it unfreezes the card. This version keeps that exactly as it is and adds what's missing for the long tail: exactly what's needed, what still works, and a live clock against Revolut's own 3-hour target.

## The question I started with was the wrong one

Revolut ended 2025 with 68.3 million retail customers and £4.5bn of revenue ([Annual Report 2025](https://assets.revolut.com/pdf/annualreport2025.pdf), pp. 4 and 12). Most of that revenue depends on one behaviour: people keeping their salary and savings in the app. Revolut says it's chasing the "primary account" role ([Revolut, Oct 2023](https://www.revolut.com/news/revolut_launches_revolut_10_as_it_targets_primary_accounts_and_passes_35m_customers_worldwide)). For a primary account, the metric that matters is trust.

My starting angle was super-app overload: stocks, crypto, travel and eSIMs crowding out the basics. In a first pass of 280 "most helpful" UK, Irish and US reviews from 2025–26, only 1 complained about finding things, and none of the 65 negative ones did. I dropped the angle. What those negative reviews did describe, again and again, was money being held.

## What holds are for

Before redesigning, I wanted to know what job a restriction does. Revolut explains it in its own words ([Revolut blog, 28 Feb 2024](https://www.revolut.com/blog/post/why-does-revolut-restrict-accounts/)):

- **Fraud protection.** Its systems pause payments that look unusual and may ask you to "perform an authentication check" or "verify certain payments in-app". Revolut says this saved customers an estimated £632 million in potentially fraudulent transactions in 2024.
- **The law.** Anti-money-laundering and know-your-customer rules, and requests from courts or agencies. In those cases "we may not be able to share all the details". Revolut was fined €3.5m in Lithuania in 2025 for weak AML monitoring ([LRT](https://www.lrt.lt/en/news-in-english/19/2531818/revolut-bank-fined-eur3-5m-for-breaching-anti-money-laundering-rules)), so holds will happen more, not less.

The same post makes three promises: you "always" keep chat and document upload during a restriction; Revolut aims "to unblock restricted accounts within 3 hours of confirming all the information we need"; and chat replies usually come "within 2 minutes". Support is also improving overall: the AI assistant resolves over 75% of queries and resolution time fell by over 40% in 2025 ([Annual Report](https://assets.revolut.com/pdf/annualreport2025.pdf), pp. 9, 14, 28).

What the retail help pages tell a customer today is polite but thin: "we aim to do this as quickly as possible", and "if we need additional information, we'll let you know" ([account review](https://help.revolut.com/en-US/help/security-logging-in/fiu-account-review-process/), [restricted account](https://help.revolut.com/en-US/help/profile-and-plan/security-and-personal-data/my-account-is-locked/why-is-my-account-locked/), read 10 Oct 2026). No step, no time, no date.

**This study critiques how a hold is communicated, not the decision to hold.**

## What 4,391 reviews say

I pulled Apple's public review feeds for 11 countries and kept the 4,391 reviews from Jan 2025 to Oct 2026. 84% are five-star. I read every review that mentioned a restriction, hold, freeze or closure: 61 describe the reviewer's own money or card being held. The coding, with review ids, is in [the review coding](/studies/revolut/evidence/restriction-themes/).

**When it's quick, people like it (6 of 61):**

> "I had a suspicious transaction which they stopped and froze my card. It was super simple to terminate that card and order a new one." (5★, Australia, Aug 2026)

Others describe a restriction "resolved the issue in just a few minutes" by a patient agent, or funds released "within a few hours".

**When it becomes a case, it breaks (55 of 61):**

| What goes wrong (n = 55, one review can have several themes) | Reviews |
|---|---|
| **No timeline, or a long wait** (days to months) | **23** |
| — a timeline was given, then broken | 5 |
| Account closed | 13 |
| Bots, scripts, or a new agent each time | 12 |
| No reason given | 11 |
| "I sent everything and it's still restricted" | 9 |
| Unclear what's needed, or the document step failed | 8 |

> "They said it would take one day to fix it. It’s now up to seven days." (US, Jun 2026)

> "no indication of how or when the issue will be resolved" (1★, Ireland, Oct 2026)

And the line that shapes the whole design:

> "The problem is not the review itself. I understand compliance requirements." (1★, Cyprus, Jun 2026)

## Three insights

**1. The fast path already works. Don't touch it.** When a card payment is declined by the security system, Revolut asks you to review it in an in-app questionnaire, reached from a Home tile, the push or an email. "If you mark that the payment was made by you, your card will be unfrozen" ([Revolut help](https://help.revolut.com/help/card-payments-withdrawals/paying-by-card-issues/declined-card-payments/payment-declined-by-security-system/), read 10 Oct 2026). That matches the 6 happy reviews. My earlier draft proposed this as new; it isn't. The design problem is only the hold that becomes a case.

**2. Customers can live without the "why". They can't live without the "when".** The 23 timeline complaints far outnumber the 11 about missing reasons, and tipping-off rules only limit the why. Uncertain, unexplained waits feel longer ([Maister, 1985](https://davidmaister.com/articles/the-psychology-of-waiting-lines/)), and showing the work being done raises patience ([Buell & Norton, 2011](https://pubsonline.informs.org/doi/10.1287/mnsc.1110.1376)). Revolut already has a target, 3 hours from getting everything. It just isn't on the screen.

**3. Vague requests make cases longer.** "Supporting documents" leads to wrong uploads, resubmissions and "I sent everything". 16 of the 55 complaints are about unclear requests or documents that didn't seem to count. Asking for the exact item, and confirming it on arrival, shortens the case for both sides.

## Options I considered

| Option | For | Against | Decision |
|---|---|---|---|
| A. Smarter AI that explains restrictions | Cheap per case | More bot loops in the most emotional moment; risk of tipping off | Rejected |
| B. Case Tracker for every hold: 4 steps, a "next update by" date days away | Clear status | My first prototype. On review it was slower than Revolut's own promises (3 hours, 2-minute replies), and it treated a quick fraud check like a long case. It fixed the long tail by slowing down the fast path | Replaced |
| C. **Keep the existing quick check; add live status for longer holds**: the exact items, what still works, a live clock against the 3-hour target, and a delay announced before it happens | Keeps the speed and the protection; fixes the 23 "when?" and 16 "what do you need?" complaints | Needs reliable targets from back-office tools and legal-approved copy | **Chosen** |

**What I'd deliberately not build:** anything that explains *why* a hold happened (a legal decision, not a design one), or a timer that keeps counting after a target is missed. If the target slips, the app says so before it passes and gives a new estimate.

## The design

I built it as a working prototype so it can be tested with real people. Both variants are re-created in Revolut's real visual style (dark theme, photo-style balance header, round action buttons, grouped cards, white pill buttons) from the App Store screenshots dated 10 Oct 2026 (iOS 10.151, GB), with no Revolut logo or card art; each screen carries a small "Re-creation for an independent study" tag. Home, the chat and the Security hub look are matched to those screenshots. The restricted-account banner and info page, the document request, the in-app payment check and the support chat with an agent had no public screenshot I could find, so I re-created them from the nearest real screens plus Revolut's help pages and reviews ([sources](/studies/revolut/sources/)). **A** is a simplified version of today's pattern, including its real strengths: chat is fast and an agent fixes the card. **B** is the proposal. Both phones run side by side in [the live prototype](/studies/revolut/try/), with a "3 hours later" control. Names, amounts and times are placeholders.

<div class="figs"><figure class="fig"><div class="frame"><img src="/studies/revolut/design/a2-card-questionnaire.png" alt="" loading="lazy" /></div><figcaption>Fig. 1. <strong>Kept from today's app: the payment check.</strong> Both variants use Revolut's existing flow: the push or a Home tile opens a questionnaire about the declined payment, and "Yes, it was me" unfreezes the card; "No" terminates it and you can order a replacement (<a href="https://help.revolut.com/help/card-payments-withdrawals/paying-by-card-issues/declined-card-payments/payment-declined-by-security-system/">Revolut help</a>). Re-created in Revolut's style; I found no public screenshot of the questionnaire, so its layout follows the Security screens.</figcaption></figure><figure class="fig"><div class="frame"><img src="/studies/revolut/design/b4-home-hold-status.png" alt="" loading="lazy" /></div><figcaption>Fig. 2. <strong>A longer hold shows on Home, calmly.</strong> The £1,200 is "on a short hold", only Move (where sending lives) carries a pause mark, and the card says the card and everything else still work. It names the 3-hour target.</figcaption></figure><figure class="fig"><div class="frame"><img src="/studies/revolut/design/b7-items-accepted.png" alt="" loading="lazy" /></div><figcaption>Fig. 3. <strong>Exactly what's needed, confirmed on arrival.</strong> A Northbank statement showing this £1,200 on 9 Oct (a screenshot is fine), and what the money is for. A camera check catches glare on the amount before upload, and each item turns "Accepted" straight away.</figcaption></figure><figure class="fig"><div class="frame"><img src="/studies/revolut/design/b8-live-3h-clock.png" alt="" loading="lazy" /></div><figcaption>Fig. 4. <strong>A live clock against Revolut's own promise.</strong> "2h 20m left of our 3-hour target", starting when everything arrived. What still works and what's paused are listed as chips. Chat is one tap, "replies in ~2 min".</figcaption></figure><figure class="fig"><div class="frame"><img src="/studies/revolut/design/b9-delay-told-early.png" alt="" loading="lazy" /></div><figcaption>Fig. 5. <strong>A delay is announced before the target passes.</strong> "Taking a little longer: we're waiting for Northbank to confirm. New estimate: today 17:00. Nothing needed from you." This answers the 5 reviews where a promised time quietly slipped.</figcaption></figure><figure class="fig"><div class="frame"><img src="/studies/revolut/design/a5-new-agent-next.png" alt="" loading="lazy" /></div><figcaption>Fig. 6. <strong>Variant A, for comparison.</strong> Today's strengths are kept: the payment questionnaire fixes the card, and chat replies fast. Then the hold: "supporting documents" with no specifics, "I don't have a timeframe", and a new agent later who asks what the issue is. This is a test control re-created in Revolut's visual style from reviews and help pages, not a screenshot of Revolut; no public image of the restricted-account screens exists that I could find.</figcaption></figure></div>

### How I'd build it (developer's view)

- **One hold model for both lanes.** Each hold has a `type` (card check, transfer review, KYC refresh), `pausedCapabilities[]`, `stillWorks[]`, `requestedItems[]` with a status each, `receivedAllAt` and `targetAt`. A card check keeps using the existing in-app questionnaire. Anything else gets the case page. Server-driven UI, so compliance can change copy and steps without a release.
- **The clock is server time, and it can't lie.** `targetAt` comes from the back office (receivedAllAt + SLA by type). A job checks open cases an hour before target, and if they won't make it, sends the "taking longer" message with a new `estimateAt`. A missed target with no message is an alert for the ops team, not something the customer discovers.
- **Help never locks.** Capabilities are flags, not one `restricted` boolean, so login, chat, the case page and uploads always work, as Revolut promises.
- **Documents:** on-device glare and blur checks (Apple Vision, ML Kit), resumable uploads, and an automatic first-pass check so "Accepted" or "We need a better copy" arrives in seconds.
- **One case, one thread.** The AI assistant answers from case data, and "Talk to a person" opens with the case attached, so nobody has to repeat themselves.
- **Ship order:** the read-only case page with paused/still-works chips and the target clock, then exact item requests, then the early-delay job.

## How I'll know if it works

**User test (next step).** Five people who've had a card payment or transfer held by any bank or fintech in the last two years. Each role-plays the same story on A and B, in alternating order, with made-up details only. I log taps and timing and ask: what can you still do, what do they need, when will you hear back? How safe did you feel (1–7)? How in control (1–7)? The script and results sheet are in [the test kit](/studies/revolut/test-kit/).

**Pass signal:** at least 4 of 5 find "when will I hear back" within 30 seconds in B; and B's "safe" score is no lower than A's. **What would change my mind:** 3 or more say the live clock adds pressure rather than calm, or a moved estimate makes them trust it less than no estimate.

| Result | Variant A | Variant B |
|---|---|---|
| Found when they'll hear back | *pending* | *pending* |
| Said what still works | *pending* | *pending* |
| Sent the right item first time | *pending* | *pending* |
| Felt safe (avg, 1–7) | *pending* | *pending* |
| Felt in control (avg, 1–7) | *pending* | *pending* |
| Would contact support anyway | *pending* | *pending* |

**In production**, the primary metric would be support contacts per hold. Then: share of card checks resolved in-app without chat, time from "everything received" to lift, document resubmission rate, and the share of cases that pass their target without an early message (which should be zero). Guardrails: fraud losses and AML detection unchanged, no tipping-off incidents in copy, complaints not rising. I'd randomise a share of new holds or roll out by market.

## What I'd do differently, and what only Revolut knows

- My first design solved the long-case problem and accidentally slowed down the fast case. Reading the positive reviews, and Revolut's own promises, would have caught that sooner.
- I still haven't seen a real restricted-account screen. The flow is rebuilt from help pages and reviews, and the next step is a real capture, ideally from someone going through it.
- The Revolut Business "time remaining" tile I mentioned in the report came from a search snippet and still needs checking. I've also left out Which? complaint figures until I can verify them.
- Open questions only the team can answer: how many holds are quick checks versus long cases; whether back-office tools can produce a reliable target for every hold type; which types legally allow a step view at all; and whether the retail app already shows more than its help pages suggest.

The full research report, with every source, is available on request.
