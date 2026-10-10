---
title: "Put the meter where the decision happens"
dek: "Usage limits and paywalls don't make people leave. Surprises do. Four rules for limits that feel fair and still sell the upgrade."
date: 2026-10-11
order: 4
cover: "/writing/limits-and-paywalls/cover.png"
topic: "Product"
source: "Essay"
minutes: 4
---


When I started studying ChatGPT, I was sure the problem was discovery: free users couldn't find the best features hidden behind a blank text box. So I read the reviews.

Of 147 negative App Store reviews, **one** was about not finding a feature. **Fifty-four** were about usage limits. And 21 of those were about the photo and image tools that the App Store page leads with. People weren't failing to find the good stuff. They were finding it, starting to rely on it, and hitting a wall in the middle of a task.

That pattern shows up far beyond AI tools. Every freemium product has a limit somewhere: messages per day, exports per month, scans, storage, seats. The limit itself is rarely the problem. People understand that free has a ceiling. What makes them angry is *meeting* it unexpectedly, at the worst possible moment, with only one way out.

## Why the surprise hurts so much

Two pieces of psychology explain most of it.

**Peak-end rule.** People judge an experience largely by its most intense moment and how it ends. A limit that appears halfway through editing a photo becomes the peak *and* the end of that session. Everything good that came before is forgotten; the wall is what they remember and what they write a review about.

**Effort already spent.** By the time someone hits a limit mid-task, they've invested in it: uploaded the photo, written the prompt, waited for the result. Losing that work feels like a penalty, and an upgrade offered at that moment reads as a ransom rather than a deal.

In ChatGPT's case, the remaining allowance existed, but it lived in Settings, two screens away from where people choose a tool. The information was there. It just wasn't where the decision happened.

## Rule 1: Show the meter at the point of choice

Put the count on the thing people tap. Not in Settings, not in a usage dashboard, not in a help article. If someone is choosing the photo tool, the photo tool should say "3 left today".

This feels risky to product teams. *Won't showing the limit make people use less?* Maybe a little, and that's worth testing (more on that below). But the alternative is that they use more, hit the wall without warning, and leave angry. A visible meter turns a surprise into a decision, and people forgive decisions they made themselves.

## Rule 2: Warn before the last one, not after

One quiet line before the final use, something like "This is your last photo edit today. It resets at 3:40 pm.", changes the whole experience. The person can save the last use for something that matters, finish the task in another way, or decide to upgrade while they're still in control.

This is classic error prevention: it's better to stop a problem than to explain it afterwards. A warning costs one line of UI. A surprise costs a review.

## Rule 3: Give more than one way out

When someone does reach the limit, an "Upgrade" button as the only exit feels like a punishment. In my ChatGPT design, the limit sheet offers three equal choices:

- **Save it for later:** the request runs automatically when the allowance resets.
- **Do it another way:** text is unlimited, so describe the edit or do it in words.
- **Upgrade:** with the price and what it adds.

Counter-intuitively, offering alternatives tends to make the upgrade *more* attractive, not less, because it's now a choice rather than a toll. And the people who choose "save for later" come back tomorrow, which is worth more than an angry uninstall.


<figure class="essay-fig"><img src="/writing/limits-and-paywalls/chatgpt-flow.png" alt="Rules 1 to 3 in my ChatGPT proposal: the meter on the chip, a warning before the last use, three ways forward." loading="lazy" /><figcaption>Rules 1 to 3 in my ChatGPT proposal: the meter on the chip, a warning before the last use, three ways forward.</figcaption></figure>

## Rule 4: Never lose the work

Whatever happens at the limit, keep what the person made. The message, the uploaded photo, the half-filled form. If they upgrade, it continues. If they wait, it's there tomorrow. Nothing destroys goodwill faster than a limit that also deletes effort.

## The same rules apply to paywalls

MyFitnessPal is a useful contrast. Its barcode scanner is Premium, and 15 of the low-rated reviews I coded named that paywall. But 42 blamed something else: a redesign that made the free logging flow slower. The paywall was a visible irritation; the real damage was making the free product worse at its core job.

My proposal kept the scanner paid, and added a free "log it again" for meals people repeat. That follows the same logic as the limit rules: **keep the core habit free and fast, put the premium option where it's relevant, and don't make the free path worse to push people over.** A paywall that sells a genuine shortcut converts. A paywall that sells relief from friction you created gets one-star reviews.

## Test the risk you're worried about

The honest risk with visible meters is rationing: people who can see "3 left" might hold back and get less value. That's a real possibility, and it's testable in an afternoon. In my ChatGPT test plan, the failure condition is written down in advance: if three of five people say they'd hold back because they can see the count, the idea needs rethinking.

In production, I'd watch two numbers together: upgrades from the limit moment, and whether people come back the day after hitting the limit. A good limit design raises both.


<figure class="essay-fig"><img src="/writing/limits-and-paywalls/rules.png" alt="The four rules." loading="lazy" /><figcaption>The four rules.</figcaption></figure>

<aside class="try"><p class="k">Try this</p><p>Find the moment your product says “you’ve run out”. Screenshot it, then ask: did the person see it coming, can they keep their work, and is upgrading their only way out? Fix whichever answer is no.</p></aside>

## The short version

Limits don't lose users; surprises do. Show the count where people choose, warn before the last use, give more than one way out, and never throw away someone's work. It's the cheapest retention improvement most freemium products aren't making.
