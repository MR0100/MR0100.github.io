---
title: "KGK's app shows traders the certificate, not the stone"
app: "KGK Diamonds"
study: "kgk-diamonds"
---

> **A study of an app I work on.** I lead the mobile team that builds KGK Diamonds, so I am not a neutral observer. This study uses public evidence only: the App Store and Google Play listings, public reviews of KGK and nine competitor apps, KGK's public websites and trade sources. It uses no internal data, analytics or sales figures, and it is not an official KGK document. The prototype screens are my re-creations in KGK Diamonds' visual style (from its store screenshots of 11 Oct 2026), with placeholder stones and prices; the proposal is my own concept. Anything I couldn't verify is labelled **Hypothesis**.

**Summary.** I expected this study to be about speed, because that's what my team has spent the last year fixing. The reviews of the category said speed and stability are the floor, and KGK's latest releases already work on them. The gap is one step later, at the moment a trader chooses between stones. KGK's result card reads like a grading report: a line of codes, a measurements table and three prices with no labels, and no picture of the stone. In the live app, the list shows no photo or video; media lives on the stone page, one stone at a time. Yet what a buyer can't get from a certificate (how the stone looks, any brown, green or milky tint, whether it's eye-clean) is exactly what they chase over chat and WhatsApp. The competitors buyers call "intuitive" put it on the card. So I kept KGK's search, its dense list and its prices, and changed the card: the stone first, labelled prices, KGK's own tint and eye-clean check, and a review step before "Confirm" places an order.

## The question I started with was the wrong one

KGK Group has traded gemstones since 1905, has been a De Beers Sightholder since 1997 and cuts its diamonds near the mines in southern Africa ([KGK Group](https://www.kgkgroup.com/about-us), [KGK Diamonds](https://www.kgkdiamonds.com/our-story), read 11 Oct 2026). Its app, launched in April 2024, puts "50,000+ certified diamonds" from five sales offices in front of retailers, wholesalers and brokers ([App Store](https://apps.apple.com/in/app/kgk-diamonds-buy-diamonds/id6479595403)). It is small and early: 1,000+ Android downloads and 20 ratings across both stores, against 100K+ for Rapaport Trade (RapNet) and 10K+ for VDB and Nivoda (11 Oct 2026). For a manufacturer selling its own goods, the number that matters is **stones confirmed in the app per buyer, and how often they come back to confirm again**. I can't publish it; this study works from public evidence.

My starting angle was performance. My team rebuilt the inventory grid this year, and I assumed the next fix was more of the same. The category agreed that it matters: of 253 coded reviews of competitor apps, **101 are about crashes, freezes and slowness** and 59 about not being able to get in. But KGK's own v1.19.5 release notes (8 Oct 2026) are already almost all reliability work. Speed is the floor, not the gap. The gap showed up when I looked at what a buyer needs at the moment of choice, and what the card gives them.

## How a trade buyer decides

A jeweller or dealer searching for a stone, often for their own customer, decides on four things (the full report (available on request)):

1. **The specs**, from the lab certificate: shape, carat, colour, clarity, cut, polish, symmetry, fluorescence.
2. **The price**, read as a discount to the Rapaport list ("25% off Rap") and as dollars per carat.
3. **How the stone actually looks.** "No BGM" (no brown, green or milky tint) and "eye-clean" are "based on the seller's representation" and are not on the grading report ([Rapaport help centre, 31 Aug 2026](https://help.rapaport.com/en/articles/2982568-rapaport-trade-formerly-rapnet-diamond-search-parameters)). On RapNet, buyers are told to ask suppliers about BGM "via the messaging center".
4. **What happens when they commit**: buy, hold or memo, delivery, returns.

KGK's card answers the first two in codes and leaves the third and fourth off the screen.

## What the evidence says

**KGK's own reviews can't show friction.** It has 8 written public reviews, all five-star, five of them within two weeks of a release in September 2024. They praise comparing stones, downloads, bids and appointments. The coding is in [the review coding](/studies/kgk-diamonds/evidence/buyer-themes/).

**The category can.** I pulled 955 reviews of nine B2B diamond apps (RapNet 651, VDB 104, SRKONE 54, hk.co 38, Nivoda 36 and four more) and coded the 253 that described a problem:

| Theme (n = 253, one review can have several) | Reviews |
|---|---|
| Crashes, freezes, slow | 101 |
| Can't get in (login, approval, device limits) | 59 |
| Search and filters wrong or missing | 39 |
| **"The old version was better"** after a redesign | **35** |
| Talking to the seller (chat, enquiries) | 14 |
| Shortlisting and acting on many stones | 11 |
| What the result card shows | 9 |
| Media and certificate (see, share, download) | 7 |

The workflow complaints are fewer but precise. Buyers leave the app to see the stone:

> "If client ask for video, you can't share on the chat. And sharing photos are in very law resolution. You need to go to Whatsapp." (4★, RapNet, Google Play India, Jul 2021)

And they punish any redesign that costs them density:

> "New look for viewing diamonds very bad. Only 3 stones we can see." (1★, RapNet, Google Play India, Nov 2022)

**Limits.** RapNet is 68% of the sample, Indian Google Play reviews dominate, and 74% of coded reviews are from before 2023. Holds, memo and bids appear in only 2–3 of 955 reviews. **Hypothesis:** trade buyers settle those with their sales contact, not in a store review, so the journey audit and the benchmark carry that part of the argument.

## What the card shows today

From KGK's store screenshots (v1.19.5), each result is a stock id, a gradient price box with "$2,300.00 Rap", "$1,150.00/Cts", a discount pill and a fourth figure, a line of codes ("ROUND D VVS2 EX VG EX VSL 36.66 Carat") and a Lab / Measurements / Table / Depth / Ratio table. On the Match Pair screen, the arithmetic shows the first figure is the stone's value at the Rap list price and the last is the total (0.42 ct × $2,415.01 = $1,014.30), but neither is labelled. The bottom bar offers "Add to Cart" and "Confirm Stone", and in the live app, Confirm places the order. The worst friction points:

| Step | Issue | Principle | Severity (1–4) |
|---|---|---|---|
| Result list | No photo or video on the card; the look of a stone is one tap away, one stone at a time | Information scent | 3 |
| Price | Three money figures and a discount, none labelled | Match with the real world | 3 |
| Commit | "Confirm Stone" places the order with no review of total, delivery or terms | Error prevention, system status | 3 |
| Result list | Grades as a code string; tint and eye-clean not shown | Recognition over recall | 2 |

## Three insights

**1. The certificate is not the decision; the stone is.** Everything a buyer can't get from the lab report is about the look. When the screen can't answer it, the buyer leaves for a call or a chat, and the app loses the moment it was built for. Nivoda sells this gap as a feature: "request eye clean, bgm data, images and videos" ([App Store](https://apps.apple.com/us/app/nivoda/id1492499222)). **Hypothesis:** each "send me a video" request delays a confirmation by hours and adds work for KGK's sales team.

**2. Trade users read density as speed.** The 35 "old version was better" reviews are the clearest design constraint in the sample. Experts scan; layouts that help a newcomer slow them down (the expertise-reversal effect). A stone-first card has to add the picture as a thumbnail beside the specs, not a hero image that pushes stones off the screen.

**3. A manufacturer can say what a marketplace can't.** Marketplaces relay each supplier's claim about tint and eye-clean. KGK cut these stones and holds them, so it can state its own check as a fact about its own goods. That turns the card's biggest gap into KGK's clearest advantage over RapNet, VDB and Nivoda.

## Options I considered

| Option | For | Against | Decision |
|---|---|---|---|
| A. Photo-grid results, like VDB | Familiar from consumer apps; very visual | Two stones per screen. Exactly the redesign the 35 reviews punish | Rejected |
| B. Keep the card, add a "Media" filter, like RapNet | Tiny change | Still one stone at a time to see it; tint still off the card | Rejected |
| C. **Stone-first card at the same density**: thumbnail with video, a labelled one-line spec, KGK's tint and eye-clean check, a labelled price (total, $/ct, % off Rap); and a review step before an order is placed | Answers the look, the price and the commit on one screen; keeps four stones visible | Needs media for every stone and a consistent internal check for tint and eye-clean | **Chosen** |

**What I'd deliberately not build:** a separate "hold" or "memo" flow inside this change. Hold and memo are real trade commitments, but the public evidence for KGK's buyers wanting them in the app is thin (2–3 mentions in 955 reviews), and Confirm already means "buy". The review step makes buying clear first; hold can follow if the user test asks for it.

## The design

I built it as a working prototype so it can be tested with real buyers. Both variants are re-created in KGK Diamonds' own visual style (dark green header, gradient price boxes, green discount pills, the Search and Search Result layouts) from its App Store and Google Play screenshots of 11 Oct 2026; each screen carries a small "Re-creation for a case study" tag. The stones are drawn, not photographed, and all stock ids, grades, prices, offices and terms are placeholders. **A** follows the public screens; its stone page and order confirmation are simplified, because no public image of them exists. **B** is the proposal. Both phones run side by side in [the live prototype](/studies/kgk-diamonds/try/).

![Fig. 1](/studies/kgk-diamonds/design/a1-results-codes.png)
*Fig. 1. **Today: codes and unlabelled prices.** Four stones match a jeweller's brief on paper. Each card shows "Rap", "/Cts", a total and a discount, none labelled, and a line of grade codes. Nothing shows what the stones look like, or that one of them has a faint brown tint. Re-created from KGK's Search Result screenshot.*

![Fig. 2](/studies/kgk-diamonds/design/b1-results-stone-first.png)
*Fig. 2. **The stone first, at the same density.** Still four stones on screen. Each card leads with a thumbnail and a video badge, a readable spec line ("1.02 ct Round · H · VS1"), KGK's own check ("Faint brown tint", "Eye-clean"), and a labelled price: the total, $ per carat and % off Rap. A legend says what each number is.*

![Fig. 3](/studies/kgk-diamonds/design/b2-detail-tint-shown.png)
*Fig. 3. **The cheapest stone, seen.** The 1.02 ct H is the lowest total, and the card warns about its tint before the buyer taps. The stone page opens on a 360° video, then KGK's check in words ("visible face-up against white; fine in yellow gold"), then the certificate.*

![Fig. 4](/studies/kgk-diamonds/design/b4-review-order.png)
*Fig. 4. **Confirm says what it does.** "Review your order" names the stone and total, and states delivery, payment and returns before the buyer taps "Place order". Terms here are placeholders for KGK's real ones.*

![Fig. 5](/studies/kgk-diamonds/design/b5-order-what-next.png)
*Fig. 5. **What happens next.** The order goes to KGK with a number, and three steps say when the stone is reserved, when the invoice arrives and when it ships.*

![Fig. 6](/studies/kgk-diamonds/design/a4-order-placed-at-once.png)
*Fig. 6. **Variant A, for comparison.** "Confirm Stone" places the order straight away. The confirmation screen is simplified, because no public image of it exists.*

### How I'd build it (developer's view)

- **Media first, from what already exists.** The listing says images and videos are already downloadable, so the media exists for at least part of the stock. The list needs a small thumbnail URL per stone and a "has video" flag in the search response, with thumbnails cached and loaded lazily so the grid keeps the 60 FPS we worked for.
- **KGK's check as data, not copy.** `tint` (none / faint brown / faint green / milky) and `eyeClean` (yes / no) as graded fields per stone, set by KGK's grading team, with "KGK checked" shown only when they exist. Never inferred.
- **Price labels are free.** The numbers are already on the card. Labelling total, $/ct and % off Rap is a layout change, and sorting by total is one query parameter.
- **A review sheet before the order.** The order call stays the same; the sheet reads delivery office, payment and return terms from the buyer's account, so the copy is never a promise the back office can't keep.
- **Ship order:** labelled prices first (no new data needed), then the thumbnail and video badge, then KGK's tint and eye-clean fields, then the review sheet.

## How I'll know if it works

**User test (next step).** Five trade buyers: jewellers, dealers or people who buy diamonds for a living. Each does the same brief on A and B, in alternating order: a round, about one carat, G or H, VS, white and eye-clean, for about $6,000. I log taps and time and ask which stone they'd show their customer and why, what they'd pay in total, and what happened when they confirmed. The script and results sheet are in [the test kit](/studies/kgk-diamonds/test-kit/).

**Pass signal:** in B, at least 4 of 5 avoid the tinted stone without opening every stone, and state the correct total before confirming; and nobody says B shows fewer stones than they need. **What would change my mind:** 3 or more trust their own eye on the video over KGK's check, or say the thumbnails slow them down.

| Result | Variant A | Variant B |
|---|---|---|
| Picked a stone that fits the brief | *pending* | *pending* |
| Avoided the tinted stone | *pending* | *pending* |
| Stated the total correctly before confirming | *pending* | *pending* |
| Stones opened before deciding | *pending* | *pending* |
| Said what Confirm does | *pending* | *pending* |
| Sure it was the right stone (avg, 1–7) | *pending* | *pending* |

**In production**, the primary metric would be stones confirmed in the app per active buyer. Then: time from search to confirm, stones opened per confirmation, "send me a video" requests to sales, and orders cancelled within a day. Guardrails: scroll performance and crash-free sessions unchanged, stones per screen unchanged, returns not rising. I'd roll it out to a share of approved buyers first.

## What I'd do differently, and what only KGK knows

- I started from what my team already does well. The category reviews moved me one step along the journey, to the moment of choice.
- I haven't used live screens in this study. A is rebuilt from the public screenshots and what I could confirm; the next step is a capture on a test account with demo stock.
- KGK's own sample data in the store listing has an impossible stone (36.66 ct measuring 4.25 mm, $391 total), and the listing still advertises Bid to Buy after it was removed on 8 Oct 2026. Neither needs a study; both should be fixed in the next store update.
- Open questions only the team can answer: what share of stock already has video; whether the grading team records tint and eye-clean consistently; how many confirmations are cancelled or followed by a call; and whether buyers want hold or memo in the app, or prefer to arrange them with their sales contact.

The full research report, with every source, is available on request.
