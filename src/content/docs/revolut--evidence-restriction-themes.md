---
title: "Revolut App Store reviews: restrictions and holds, coded"
app: "Revolut"
study: "revolut"
kind: "evidence/restriction-themes"
---

**Sample.** `appstore-reviews-12-storefronts-2026-10.json`: 5,872 unique reviews from Apple's public review feed for Revolut (id 932493382), pulled 10 Oct 2026. Most recent and most helpful, from 11 storefronts (GB, IE, US, AU, NZ, CA, SG, AE, ZA, MT, CY). I used the **4,391 dated 1 Jan 2025 – 9 Oct 2026**: 3,708 five-star, 188 four, 49 three, 34 two, 412 one. Most people are happy day to day.

**Method.** A keyword pass (restrict, frozen, blocked, locked, closed, under review, held, source of funds…) found 82 reviews. I read all 82 and removed false positives: people praising the "freeze my card" button, other banks, OTP bugs, product limits. **61 describe the reviewer's own account, card or funds being restricted or closed by Revolut.** One coder (Mitul), so treat counts as indicative. A review can carry several themes.

## Where it works (6 of 61)

| What happened | Ids (last 6 digits) |
|---|---|
| Fraud check stopped a payment and froze the card; replacing it was easy; praised | 503471, 947887 |
| Restricted, then resolved by an agent "in just a few minutes" | 753448 |
| Funds frozen, "released within a few hours" | 335021 |
| Eventually de-restricted after extra proof | 121823 |
| Mixed: "froze one of my cards due to suspicious transactions with is cool, I like that part", then couldn't unfreeze it and the AI didn't help | 767231 |

## Where it breaks (55 of 61)

| Theme | Reviews | Ids |
|---|---|---|
| **No timeline, or a long wait** (days to months) | **23** | 995453, 430480, 124980, 723169, 045162, 705944, 568543, 817734, 739955, 995520, 852290, 787742, 785232, 151473, 303391, 567581, 755108, 071554, 411198, 128602, 877127, 627446, 523515 |
| — a timeline was given, then broken | 5 | 995453 (1 day → 7), 785232 (72 h → 6 months), 071554 (after the promised time frame), 817734 (two "lifted" emails while still restricted), 627446 (repeated "expedited review" promises) |
| Account closed | 13 | 523515, 256657, 321687, 299372, 828075, 348862, 685738, 566432, 787742, 090879, 180918, 997631, 940741 |
| Bots, scripts, or a new agent each time | 12 | 380277, 995453, 852290, 940741, 765389, 071554, 411198, 787742, 010438, 933396, 828075, 767231 |
| No reason given | 11 | 723169, 256657, 348862, 090879, 299372, 394308, 828075, 997631, 571705, 245992, 380277 |
| "I sent everything and it's still restricted" | 9 | 705944, 523515, 566432, 180918, 997631, 571705, 010438, 090879, 394308 |
| Unclear what's needed, or the document step failed | 8 | 197548, 397318, 232311, 549257, 944413, 523515, 452903, 161069 |
| Notification failures (missed request, false "lifted", closed without telling) | 3 | 632311, 817734, 828075 |
| Stranded abroad or a business outage | 3 | 648523, 161069, 732565 |

Note: 995453 is rated 5★ but the text is a complaint; I coded it by its content.

## What this says

The quick fraud check is a strength: when a hold is resolved in minutes or hours, people praise it, even the ones who were inconvenienced. The anger starts when a hold becomes a case that runs for days, with no timeline, unclear requests, promises that slip, and a new person each time. Several reviewers accept the compliance part: "The problem is not the review itself. I understand compliance requirements." (1★, CY, 1 Jun 2026, id 010438).

## Quotes used in the case study (verbatim, checked against the data)
- "I had a suspicious transaction which they stopped and froze my card. It was super simple to terminate that card and order a new one." (5★, AU, 25 Aug 2026, id 503471)
- "resolved the issue in just a few minutes" (5★, US, 8 May 2025, id 753448)
- "They said it would take one day to fix it. It’s now up to seven days." (rated 5★, US, 12 Jun 2026, id 995453)
- "I was promised a review within 72 hours, yet it has dragged on for half a year." (1★, AU, 12 Jul 2026, id 785232)
- "no indication of how or when the issue will be resolved" (1★, IE, 2 Oct 2026, id 705944)
- "The problem is not the review itself. I understand compliance requirements." (1★, CY, 1 Jun 2026, id 010438)
