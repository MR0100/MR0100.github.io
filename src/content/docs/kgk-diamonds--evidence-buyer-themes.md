---
title: "B2B diamond-buying apps: public reviews, coded"
app: "KGK Diamonds"
study: "kgk-diamonds"
kind: "evidence/buyer-themes"
---

## KGK Diamonds itself: 8 written reviews

**Sample.** `appstore-reviews-kgk.json`: every public written review I could find for KGK Diamonds, pulled 11 Oct 2026. App Store (id 6479595403): **9 ratings in total** across 41 storefronts (IN 7, US 2; none in GB, BE, AE, HK or any other storefront checked), of which **3 have text** (all IN). Google Play (com.kgk.diamonds): **11 ratings**, of which **5 have text** (gl = IN, US, GB, BE, AE, HK returned the same five). So **n = 8 written reviews, all 5★**, dated 10 Sep 2024 – 11 Nov 2025. Five of the eight were posted between 10 and 23 Sep 2024.

**What they can and can't tell us.** Eight 5★ reviews, mostly clustered in the weeks after a release, do not show where buyers struggle. They do show what early users chose to praise: comparing stones, downloading details, placing bids, booking appointments ("allowing me to quickly compare stones, download necessary details, and even place bids or book appointments effortlessly", 5★, IN, 20 Sep 2024, id 11744346938) and the monthly bid: "bid to buy every month has great inventory at discounted prices" (5★, Google Play IN, 20 Sep 2024, id …a87804). Bid to Buy was removed in v1.19.5 on 8 Oct 2026 (release notes). I have no way to tell who wrote these reviews, and I make no assumption about it. Note also that the author of this study leads the team that builds the app.

**Therefore** the problem evidence below comes from the category: competitor B2B diamond apps whose buyers do the same job (search, compare, check the certificate, read the price, confirm or hold, share with their own customer).

## Competitor apps: 955 reviews

**Sample.** Raw files `appstore-reviews-<app>.json` (one per app, App Store and Google Play in separate arrays), pulled 11 Oct 2026:

| App | App Store reviews | Google Play reviews | Total | 1★ | 2★ | 3★ | 4★ | 5★ | Dates |
|---|---|---|---|---|---|---|---|---|---|
| Rapaport Trade (RapNet) | 66 | 585 | 651 | 142 | 28 | 34 | 55 | 392 | Jun 2012 – Sep 2026 |
| VDB | 25 | 79 | 104 | 8 | 5 | 5 | 6 | 80 | Jan 2016 – Jun 2026 |
| SRKONE | 6 | 48 | 54 | 5 | 1 | 2 | 6 | 40 | May 2012 – Jul 2023 |
| hk.co | 11 | 27 | 38 | 13 | 0 | 0 | 0 | 25 | Jul 2015 – Jun 2024 |
| Nivoda | 12 | 24 | 36 | 14 | 1 | 1 | 0 | 20 | Jul 2020 – Aug 2026 |
| Kiran Gems | 6 | 23 | 29 | 6 | 0 | 0 | 1 | 22 | Dec 2015 – Jun 2026 |
| DDPL | 2 | 16 | 18 | 1 | 0 | 1 | 1 | 15 | Oct 2012 – Sep 2023 |
| VENUS JEWEL | 2 | 16 | 18 | 3 | 1 | 0 | 0 | 14 | Jun 2017 – Feb 2026 |
| UNI Diamonds | 3 | 4 | 7 | 2 | 0 | 0 | 0 | 5 | Sep 2019 – Jul 2025 |
| **Total** | **133** | **822** | **955** | 194 | 36 | 43 | 69 | 613 | |

**Honest limits.**
- **How the App Store reviews were collected.** Apple's RSS review feed returned HTTP 403 for most of 11 Oct 2026 after the first requests, so the App Store reviews come from each storefront's public "Ratings & Reviews" page on apps.apple.com, which shows the **10 most recent written reviews per storefront**. I read every storefront where the app has ratings (39 for RapNet). Google Play reviews come from the store's public review feed, newest first, up to 600 per app. Sheetal Group has 12 App Store ratings but no written reviews, so it is not in the table.
- **RapNet dominates** (651 of 955, 68%), and most of its reviews are Indian Google Play reviews. Read the themes as "what B2B diamond app users complain about", weighted towards RapNet and India.
- **Old reviews.** 74% of the coded reviews (187 of 253) are from before 2023. Recent-only counts are given where they matter.
- **Bursts.** 15 one-star RapNet reviews between 20 Mar and 4 Apr 2020 protest the company or its policies ("Fraud company", "Not Reliable Platform") rather than the app; I left them uncoded except where they named an app feature (one, …c2e12e, names search). Some 5★ clusters look solicited: VDB has five long 5★ reviews between 16 and 21 Jul 2025 praising the team in similar language, and one RapNet reviewer asks "How can you pressure us to rate 5 Star???" (1★, Google Play IN, 27 Nov 2025, id …d5d06f).
- **One coder** (Mitul). Counts are indicative.

**Method.** I read every review rated 1–4★ (342) and every 5★ review that contained a request or complaint (11). I coded each into one or more themes; a review can carry several. 253 reviews received at least one theme; the rest were too short to code ("Bad", "Good", "Nice") or were about the company, not the app. I then checked all 955 for words that name the buying workflow (hold, memo, bid, compare, video, certificate, price, notification, share, eye-clean, BGM).

## Themes (of 253 coded reviews; multi-coded)

| Theme | Reviews | Since 1 Jan 2023 | Ratings | Apps | Review ids (last 6 characters) |
|---|---|---|---|---|---|
| **Crashes, freezes, slow, won't open** | **101** | 22 | 65×1★, 13×2★, 12×3★, 9×4★, 2×5★ | RapNet 69, hk.co 9, Nivoda 9, VDB 4, SRKONE 4, others 6 | since 2025: 866068, 688606, 788175, 7ea74f, 6abfac (Nivoda); 152304, 585c00, 6e1d90 (RapNet); 1fe89d (Kiran); 459942 (VDB) |
| **Can't get in: login, registration, OTP, device limits, logged out** | **59** | 16 | 45×1★ | RapNet 36, hk.co 8, VDB 5, Kiran 3, SRKONE 3, Venus 2, UNI 1, Nivoda 1 | 120946, f1ab31, ae90d5, a844b3, 81f6ea, e60cf7, 0e7b14, f9143a, 26737d, 6a44ce, 9d5b49, 4dc6a6, 63b0ef, eef868, 2b6888, 4496d9, 8bd970, c43ca9, 818033, 963156, 47e218, 6c9fce, 6810e6, 557866, f56c7e … |
| — of which: **waiting for account approval / verification** | 11 | 5 | 10×1★ | VDB 4, Kiran 2, RapNet 2, SRKONE, Venus, hk.co | 818033, 963156, 47e218, 6810e6, e60cf7, 944f1c, 4496d9, f56c7e, f473e3, a844b3, 81f6ea |
| **Search and filters: wrong, missing or incomplete results; missing filters** | **39** | 12 | 18×1★, 6×4★, 7×5★ | RapNet 30, VDB 3, DDPL 2, hk.co 2, Nivoda 1, Kiran 1 | 27b906, ecc661, cbe174, 6e046b, 8cf0f5, 738c77, 966908, 831807, 968651, 347072, 688606, 497a0a, d0315e, 1b906d, 76e813, 402798, 4f59e2 … |
| **"The old version was better" after a redesign** | **35** | 12 | 22×1★ | RapNet 32, VDB 3 | 576610, 152304, 836ba6, ee9528, e9c169, d735b5, b36268, 3a4738, 9b54eb, c3a007, 316785, 402798 … |
| Support unreachable or slow | 18 | 10 | 15×1★ | RapNet 9, VDB 4, Nivoda 2, others 3 | e60cf7, f9143a, eef868, 818033, 963156, 47e218, e00b09, aca12a, c43ca9, f1ab31 … |
| Talking to the seller: chat, enquiries, notifications | 14 | 4 | 6×1★, 6×4★ | RapNet 11, Nivoda 2, VDB 1 | 068536, 664148, ccf686, 4ff663, 421c43, d2816a, 688606, 625143, 968651, 5a7e48, 7c0c77, 1a815a |
| Membership cost and device limits | 13 | 6 | 11×1★ | RapNet 12, VDB 1 | 7febc9, 900078, e1c202, 0e7b14, 6a44ce, e00b09 … |
| Seller-side listing tools (not buyer) | 12 | 3 | | RapNet 10, Nivoda 2 | 779900, 695610, 6e7f04, 4a417b, ee9921, e62535 … |
| **Shortlisting, comparing, selecting many stones** | **11** | 4 | mixed 1–5★ | RapNet 8, Nivoda 2, VDB 1 | 968651, 2d8665, 1c3710, 237d26, 2bd6af, 579be1, b36268, 459942, 866068, 577644, 24d664 |
| Mobile access: forced into the app, offline, tablets | 11 | 5 | 6×1★ | RapNet 7, Nivoda 4 | 866068, 302287, 85510a, ac32ea, 07b28c, 794103 … |
| **What the result card shows: seller name, location, how many stones fit** | **9** | 4 | 5×4★ | RapNet 7, VDB 1, DDPL 1 | e9c169, 836ba6, 316785, 0271fd, 1b906d, 831807, b36268, 276166, 922891 |
| **Media and certificate: can't see, share or download video, photos, certificate** | **7** | 3 | 1–4★ | RapNet 6, VDB 1 | 0acb06, 6395b0, 5a7e48, 295030, 968651, 859554, 539bd6 |
| New-stock alerts and new-goods search | 4 | 0 | 4–5★ | RapNet 2, hk.co 2 | 4ff663, 012af1, 4f59e2, 734808 |
| Checkout and payment | 3 | 3 | 1–2★ | Nivoda 3 | 688606, 788175, 866068 |

**Keyword check across all 955 reviews.** price/discount/Rap 34 · video/image/photo/media 10 · certificate 7 · notification 5 · compare 4 · bid/auction 3 · share/WhatsApp 2 · eye-clean/BGM 2 · **hold/memo 2**. Almost nobody writes a store review about holds, memo or bids.

## What this says

1. **The floor is "let me in and don't crash".** 148 of the 253 coded reviews (58%) are about stability or access. In a trade tool, a crash or a lockout costs a deal: "for a 2 days not able to business" (1★, RapNet, Google Play IN, 26 May 2025, id …f9143a). Approval waits are a specific sub-theme (11), and they hit the most valuable moment, the first one.
2. **Workflow complaints are fewer but specific.** 71 reviews touch the buying workflow (search, media, shortlisting, the card, chat, new stock, checkout). They are precise: filters that don't filter, results that stop at 40 of 218, no way to act on several stones at once, video that can't be shared without WhatsApp.
3. **Trade users punish redesigns that lose density or names.** 35 reviews (mostly RapNet's 2018, 2022 and 2026 updates) say the old version was better; the concrete reasons are fewer stones per screen ("Only 3 stones we can see"), seller initials instead of names, moved filters.
4. **Store reviews under-report the buying moment.** Holds, memo and bids appear in 2–3 reviews of 955. **Hypothesis:** professional buyers settle these through their sales contact or chat, not the store review box, so this sample can't measure them. The journey audit and the benchmark have to carry that part of the argument.

## Quotes (verbatim)

- "No option to select and contact multiple stones at a time. Have to do it individually." (4★, RapNet, App Store US, 17 Sep 2026, id 14559968651)
- "If client ask for video, you can't share on the chat. And sharing photos are in very law resolution. You need to go to Whatsapp." (4★, RapNet, Google Play IN, 2 Jul 2021, id …5a7e48)
- "Result shows 218 stones and while scrolling the app shows only about 40." (1★, RapNet, Google Play IN, 9 Dec 2023, id …27b906)
- "I select gia but shows all the lab certs. Even i select 3 ex show all type of cutting stone." (1★, RapNet, Google Play IN, 11 Jan 2018, id …ecc661)
- "New look for viewing diamonds very bad. Only 3 stones we can see." (1★, RapNet, Google Play IN, 19 Nov 2022, id …b36268)
- "please provide feature to display on search tab with seller's full name instead of their initials" (2★, RapNet, Google Play IN, 30 May 2026, id …e9c169)
- "It's been months and they haven't approved my account" (1★, VDB, Google Play IN, 22 Oct 2023, id …6810e6)
- "Anytime you need to chat the app closes the chat and cannot be recovered." (1★, Nivoda, App Store US, 11 Apr 2026, id 13946688606)
- "It erased my cart and favorites." (1★, Nivoda, App Store US, 20 Jun 2026, id 14206866068)
- KGK: "allowing me to quickly compare stones, download necessary details, and even place bids or book appointments effortlessly" (5★, App Store IN, 20 Sep 2024, id 11744346938)
