---
title: "For expert users, density is speed"
dek: "Professional users punish redesigns that look cleaner but show less. How to add what they need without taking away what they scan."
date: 2026-10-11
order: 3
cover: "/writing/density-is-speed/cover.png"
topic: "Design"
source: "Essay"
minutes: 4
---


> "New look for viewing diamonds very bad. Only 3 stones we can see."

That's a one-star review of RapNet, one of the biggest diamond-trading apps in the world, written after a redesign. When I read 955 reviews of nine diamond-trading apps for my KGK study, **35** of the coded reviews said some version of the same thing: *the old version was better*. Almost all of them came after a redesign that made the screen look more modern and show less.

If you design for professionals (traders, accountants, nurses, dispatchers, developers, anyone who uses your app all day as part of their job), this is the most important constraint you'll work with, and the one most design instincts get wrong.

## Why "clean" fails experts

Most design advice is written for newcomers. More white space. Bigger cards. One thing per screen. Progressive disclosure: hide the detail until someone asks for it. For a first-time user, all of that helps.

For an expert, it does the opposite. Educational psychologists have a name for this: the **expertise reversal effect**. Guidance that helps beginners learn becomes a burden once people know the material, because they have to process help they no longer need ([Kalyuga, Ayres, Chandler & Sweller, 2003](https://doi.org/10.1207/S15326985EP3801_4)). In interfaces, the "help" is the white space and the hidden detail. A diamond trader comparing forty stones doesn't want to open each one. They want forty rows they can scan in seconds, because scanning *is* the job.

So when a redesign cuts a list from ten rows to three, the expert doesn't experience it as cleaner. They experience it as slower. And they're right.

## What experts actually complain about

Read the "old version was better" reviews closely and the complaints are concrete, not aesthetic:

- **Fewer items per screen.** "Only 3 stones we can see."
- **Lost information.** A trader asked for the *"seller's full name instead of their initials"* back on the results list.
- **Moved controls.** Filters they'd used for years were somewhere new.
- **Extra taps for routine work.** One wrote that there's *"no option to select and contact multiple stones at a time. Have to do it individually."*

MyFitnessPal shows the same pattern with a different kind of expert: someone who has logged food every day for years. In my study, **42** low-rated reviews blamed a 2026 redesign that made logging slower, and logging every day is exactly what predicts results. The people most hurt by the change were the most committed users.

## How to add information without losing density

None of this means expert screens can't improve. The KGK study is a good example. Its result card shows codes and three unlabelled prices, but no picture of the stone, even though how a stone looks is half the buying decision. The obvious fix is a big photo on each card. The reviews say that would be a disaster.


<figure class="essay-fig"><img src="/writing/density-is-speed/kgk-before-after.png" alt="KGK Diamonds: the same four stones, now with the stone, a labelled price and a tint check." loading="lazy" /><figcaption>KGK Diamonds: the same four stones, now with the stone, a labelled price and a tint check.</figcaption></figure>

Here's how I approached it instead, and the principles generalise:

**1. Set a density budget before you design.** Count how many items fit on screen today and treat that number as a requirement. In KGK's case: four stones visible on a standard phone, before and after.

**2. Add beside, not on top.** A 76-pixel thumbnail next to the specs adds the missing information without pushing a single row off the screen. A hero image would have cost two rows.

**3. Replace codes with labels, not with space.** "ROUND D VVS2 EX VG EX" is dense but unreadable. "1.02 ct Round · H · VS1" on one line is just as dense and readable at a glance. Labelling numbers ("$5,141 total · $5,040/ct · 28% off Rap") costs almost no space and removes guesswork.

**4. Show what experts check, not what newcomers need.** Experts check specific things repeatedly. For diamond buyers, it's tint and eye-cleanliness, which aren't on the certificate. Two small chips answer the question they'd otherwise open every stone to check.

**5. Keep the controls where they are.** Muscle memory is a feature. If a control has to move, move it once, explain why, and don't move it again.


<figure class="essay-fig"><img src="/writing/density-is-speed/rules.png" alt="The five rules at a glance." loading="lazy" /><figcaption>The five rules at a glance.</figcaption></figure>

## How to test it

Testing expert screens with newcomers will mislead you; newcomers will always prefer the cleaner version. Test with the people who use the screen for a living, and test the job, not the look:

- Give them a realistic task ("find a stone for this customer's brief").
- Count how many items they open before deciding, and time it.
- Ask directly: *"Could you see enough at once? Was anything slower?"*

Write your failure condition before the test. For the KGK prototype, it's simple: if three of five buyers say the new card shows too few stones or feels slower, it's back to the drawing board, however much nicer it looks.


<aside class="try"><p class="k">Try this</p><p>Open the screen your most experienced users spend the most time in. Count how many items fit today and write that number at the top of the brief. Any proposal that shows fewer needs a very good reason.</p></aside>

## The short version

Experts aren't resistant to change. They're resistant to losing speed. Protect the number of things they can see, add what's missing beside it rather than on top, label instead of hiding, and test with the people whose job depends on the screen. Your redesign will look less dramatic in a portfolio, and it will be the one they thank you for.
