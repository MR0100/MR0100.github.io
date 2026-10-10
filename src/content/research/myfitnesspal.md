---
title: "MyFitnessPal slows down its core habit, then sells the shortcut"
app: "MyFitnessPal"
study: "myfitnesspal"
---

> **Independent study.** Not affiliated with or endorsed by MyFitnessPal. Public sources only, every number linked. The proposal is my own concept. Both prototype variants are re-created in MyFitnessPal's visual style for the study; they are not the real app. Anything I couldn't verify is labelled **Hypothesis**.

**Summary.** I expected this to be a story about the barcode paywall. It is partly that, but the evidence pointed somewhere larger. In 145 recent one- to three-star App Store reviews, 15 named the paywalled barcode scanner. 42 blamed the 2026 redesign for making logging or reviewing the day slower. Trial data says the same thing in a different way: people stop logging because it feels tedious, and logging often, not logging for longer, is what predicts weight loss. Most of what people log, they have logged before. So I designed "Log it again": the meals you repeat become one tap, the diary leads the home screen again, and edits save in place. The camera tools stay Premium. I built it as a clickable prototype and wrote the test that would prove or kill it.

## The question I started with was only half right

MyFitnessPal reports "over 280 million members" ([2026 Winter Release](https://lite.aol.com/sports/other/story/0022/20260224/9659625.htm)). It only works if people keep logging food. In a randomised trial of the app in primary care (n = 212), median logins fell from 8 in month 1 to 0 in month 6, and the number of active users fell from 94 to 34. The authors say use dropped "because they found it tedious or felt it took too much time" ([Laing et al., *Annals of Internal Medicine*, 2014](https://pmc.ncbi.nlm.nih.gov/articles/PMC4422872/)).

In 2022 the app moved barcode scanning, its fastest free way to log, behind Premium ([Droid Life](https://www.droid-life.com/2022/08/24/myfitnesspal-puts-barcode-scanner-behind-premium-paywall/)). So my starting angle was the paywall: the shortcut was taken away from the people who needed it most.

Before designing anything, I read what users actually complain about. I pulled the 250 most recent US App Store reviews (30 Aug – 8 Oct 2026) and coded all 145 rated one to three stars by hand.

| What negative reviews are about (n = 145, one review can have several themes) | Reviews |
|---|---|
| **Redesign made logging or reviewing the day slower** | **42** |
| Paywall, price, features "that used to be free" | 33 |
| — naming the barcode scanner | 15 |
| Bugs, logouts, Premium not recognised | 30 |
| Ads, upsell pop-ups, notifications interrupting logging | 24 |
| Explicit logging effort (extra taps, copying meals, serving sizes) | 21 |
| AI features unwanted or weak | 6 |

The paywall is real, and four years later it still shows up. But the larger group is about something the company changed this year. In April 2026 the classic diary was replaced by a "Today" summary screen. The diary is now a section below the calorie and macro cards, one card per meal with a Log button, and the full diary with every item sits behind "View all" ([PiunikaWeb](https://piunikaweb.com/2026/04/24/myfitnesspal-new-update-complaints/); [help centre](https://support.myfitnesspal.com/hc/en-us/articles/39985611667341-Introducing-the-brand-new-Today-tab)). The complaints are about everyday mechanics, not taste:

> "just stop switching me back to the Home Screen every time I edit an entry" (1★, 29 Sep 2026)

> "I pretty much eat the same thing every week and copying one day at a time is so unnecessary" (2★, 3 Sep 2026)

So the question changed from "should barcode be free?" to "what makes the *tenth* log of the same breakfast cost so much?"

## What the evidence already shows

Logging frequency is the outcome driver. In a 24-week study, people who reached 5% weight loss opened their food journal 2.4 times a day, against 1.6 for those who didn't. Time spent logging fell from 23.2 minutes a day in month 1 to 14.6 in month 6, and minutes did not predict success ([Harvey et al., *Obesity*, 2019](https://pubmed.ncbi.nlm.nih.gov/30801989/)). The goal is many cheap logging moments, not longer ones.

The repeat-meal tools already exist. Reviews mention copying meals between days and saved custom meals ("my custom meals just don't work", 1★, 22 Sep 2026). What users describe is that these tools are hard to reach and lose their place: "You can no longer copy from one day to another keeping the meals separated" (1★, 31 Aug 2026). One reviewer asked for the exact feature I ended up designing: "suggestion of breakfast/lunch/dinner based on time would be helpful" (3★, 27 Sep 2026).

## Three insights

**1. The cost of logging causes the drop-off more than a lack of motivation does.** Motivation fades after the first weeks, so ability (how easy logging is) has to rise to make up for it. Every extra tap costs most exactly when the Laing trial shows use falling off.

**2. The redesign competes with the one job that happens several times a day.** A home screen built around calorie and macro cards pushes the diary, used three to six times a day, below the summary and puts the full list of what you ate one level deeper. Many of the 42 redesign complaints come from people with 5–10 years of history. <span class="tag hypothesis">Hypothesis</span> Long-time users stay partly because of switching costs ("I feel trapped because I have so many recipes and data", 1★, 5 Oct 2026). That looks like retention on a dashboard, but it isn't loyalty.

**3. Speed for repeat meals doesn't need AI.** The category is racing to photo logging. MyFitnessPal acquired Cal AI, and its CEO said "there is an audience of people that want it fast, they want AI based" ([TechCrunch](https://techcrunch.com/?p=3098039)). Only 6 of the 145 one- to three-star reviews mention AI at all. A preliminary study presented at an NIH-hosted meeting reported that photo features in several apps undercounted calories by about a third ([Healio](https://www.healio.com/news/primary-care/20260804/ai-photobased-calorietracking-tools-underestimate-them-by-33)). That is a conference abstract, not peer-reviewed, so I treat it as a warning rather than a fact. A meal the user has already confirmed before is both fast and accurate.

## How others handle it

From public store screens: **Cal AI** makes the camera the main logging surface, with a pencil on every value and a "Fix Results" button, so correction is part of the flow. **Lose It!** labels detected foods on the photo. **Cronometer** shows the data source behind each food, which builds trust in the numbers. None of their store screenshots show a strong "repeat my usual" pattern.

## Options I considered

| Option | For | Against | Decision |
|---|---|---|---|
| A. Make barcode free again | Repairs trust with long-time users | Removes a main reason to buy Premium; hard to reverse a second time | Rejected |
| B. All fast-logging tools free for the first 14–30 days | Users feel the value during the weeks the habit forms | Can feel like a bait-and-switch when it ends; overlaps the free trial | Second experiment, once C gives a baseline |
| C. Free "Log it again" + diary-first navigation; camera tools stay Premium | Removes the most frequent cost; gives away no paid feature; measurable on its own | Users may not feel a need to upgrade if repeats cover most meals | **Chosen, and test the upgrade risk** |

**What I'd deliberately not build:** more streaks, pop-ups or AI coaching prompts to bring people back. Reviews already complain about "Passive Aggressive Notifications" (1★, 3 Sep 2026) and that "a paid app should not hijack my screen" (1★, 27 Sep 2026). More prompts on top of a slow flow don't make logging any easier.

## The design

I built the proposal as a working prototype so it can be tested with real people. It has two variants: **A** is today's pattern, **B** is the proposal. Both are re-created in MyFitnessPal's real visual style from its App Store screenshots dated 10 Oct 2026 (GB, v26.40.0) and its Google Play screenshots, so the comparison is like for like. They are re-creations, not the real app, and carry a small "Re-creation for an independent study" tag. The Today screen, meal cards, food result rows, calorie ring and the meal-scan footer follow the store screens. The food search with history, the + menu, the Premium lock and the full diary behind "View all" had no public image, so I built them from the closest real screens and the help-centre and press descriptions. All foods, calories and history counts are sample data.

<div class="figs"><figure class="fig"><div class="frame"><img src="/studies/myfitnesspal/design/b1-usual-breakfast.png" alt="" loading="lazy" /></div><figcaption>Fig. 1. <strong>The diary leads the home screen, and the usual meal is one tap.</strong> At 8 am the card under a compact calorie summary reads "Your usual breakfast?" with what's in it, the total, and why it's suggested ("9 of the last 14 mornings"). The card is built from the user's own history for that meal slot. When there's no clear usual, it offers yesterday's meal instead.</figcaption></figure><figure class="fig"><div class="frame"><img src="/studies/myfitnesspal/design/b2-change-before-logging.png" alt="" loading="lazy" /></div><figcaption>Fig. 2. <strong>Change it before logging.</strong> One tap on Change lets the user untick an item or halve it. The footer, borrowed from the app's own meal-scan screen, shows the item count and new total.</figcaption></figure><figure class="fig"><div class="frame"><img src="/studies/myfitnesspal/design/b4-edit-in-place.png" alt="" loading="lazy" /></div><figcaption>Fig. 3. <strong>Edits save in place.</strong> Tapping an entry opens serving chips under it. A change saves at once, and the screen stays where it was. No jump back to the top, which several reviewers described.</figcaption></figure><figure class="fig"><div class="frame"><img src="/studies/myfitnesspal/design/b5-add-your-foods.png" alt="" loading="lazy" /></div><figcaption>Fig. 4. <strong>Your foods first, with no ads in the way.</strong> The add sheet ranks the user's own foods by how often they log them ("30×"), and each one adds with a single tap while the sheet stays open. Barcode scan stays Premium, as one quiet line at the bottom: "New packaged food? Scan the barcode".</figcaption></figure><figure class="fig"><div class="frame"><img src="/studies/myfitnesspal/design/b6-copy-lunch.png" alt="" loading="lazy" /></div><figcaption>Fig. 5. <strong>Copy a meal from any day, and it lands in the right slot.</strong> Every meal has a Copy button. The user can copy just that meal or a whole day, and items keep their slots and amounts. An Undo follows every bulk action.</figcaption></figure><figure class="fig"><div class="frame"><img src="/studies/myfitnesspal/design/a3-back-to-top.png" alt="" loading="lazy" /></div><figcaption>Fig. 6. <strong>Variant A, for comparison.</strong> Today's pattern, re-created in MyFitnessPal's style: the diary sits below the calorie and macro cards with a Log button per meal, each food is added on its own (open it and tap Add, or tap + on a history row), and every save returns to the top of Today, as reviewers describe. This is a test control built from the store screens and reviews, not a screenshot of MyFitnessPal.</figcaption></figure></div>

### How I'd build it (developer's view)

- **The suggestion engine is a query, not a model.** It counts what the user logged in the same meal slot over the last 14 days, weighted by weekday and time. It runs on the device against the local diary store (SQLite; in Flutter, drift), so it works offline and adds no server cost.
- **Edit in place is state restoration.** Saving an entry updates one row and keeps the list's scroll offset and expanded meal, instead of rebuilding the whole navigation stack.
- **Bulk actions are one transaction with an undo token.** Logging a usual meal or copying a day writes all items at once and keeps a snapshot for Undo.
- **Ads load after the first frame and outside the add sheet.** Several reviews say the screen freezes while a banner ad loads during search. <span class="tag hypothesis">Hypothesis</span> The ad view is laid out synchronously in the list.
- **Ship order:** edit in place, then the usual-meal card behind a remote flag, then per-slot copy. Home-screen widgets ("Log usual breakfast" via iOS App Intents and Android Glance) come later, once the in-app card proves the behaviour, because widget and sync conflicts need care.

## How I'll know if it works

**User test (next step).** Five adults who tracked calories in the last 12 months and stopped, at least two of them former free users of a calorie app. Each does the same four tasks on variant A and variant B, in alternating order: log their usual breakfast, halve one item and add a snack, copy Monday's lunch, and find the barcode scanner. The prototype logs every tap and the time per task. The full script and results sheet are in [the test kit](/studies/myfitnesspal/test-kit/).

**Pass signal:** at least 4 of 5 log the usual breakfast in under 10 seconds without help, and none say they distrust the suggested items. **What would change my mind:** 3 or more say they'd stop checking what they log because it's one tap, or 3 or more say they'd never need Premium because of it.

| Result | Variant A | Variant B |
|---|---|---|
| Logged usual breakfast without help | *pending* | *pending* |
| Median taps for breakfast | *pending* | *pending* |
| Median seconds for breakfast | *pending* | *pending* |
| Ease (Single Ease Question, avg 1–7) | *pending* | *pending* |
| Trusted the suggested items | n/a | *pending* |

**In production**, the primary metric would be logging days per week in weeks 2–4 for new users, plus the share still logging at least 3 days a week at day 30. The guardrails matter as much: Premium conversion at day 30 and 60, and the share of days logged under 800 kcal, to catch lazy one-tap logs that undercount. I'd run a 50/50 test on new free users for at least six weeks, so the month-one drop is visible, and roll out to existing users at 5% → 25% → 100% with a long-running holdout.

## What I'd do differently, and what only MyFitnessPal knows

- I started from the most famous decision (the 2022 paywall) instead of the most recent one. Counting 145 complaints showed the redesign was the bigger group. Next time I read the reviews before choosing the angle.
- My sample is six weeks of US iOS reviews, coded by one person, and people who write reviews skew angry. I couldn't record the free logging flow on a device, so variant A is re-created from store screens and reviews. The search, + menu and Premium lock screens had no public image. The next pass needs a real screen recording.
- Open questions only the team can answer: what share of logged meals are repeats; whether the Today redesign moved retention or conversion on their dashboards; how much Premium conversion comes from barcode scan specifically; and whether the login and "Premium not recognised" bugs (30 of the 145 one- to three-star reviews) need fixing before any UX change can show up in the numbers.

The full research report, with every source, is available on request.
