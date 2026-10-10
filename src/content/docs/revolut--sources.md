---
title: "Sources for the re-created screens"
app: "Revolut"
study: "revolut"
kind: "sources"
---

The prototype screens are my re-creations. These are the public images and pages they were based on. The images themselves are not republished here.

## App Store screenshots (Revolut — Mobile Finance, GB storefront, v10.151, pulled 10 Oct 2026)

Source: https://apps.apple.com/gb/app/revolut-mobile-finance/id932493382?uo=4

For research and commentary only. © the app owner. Not for republishing as our own work.

- 01.jpg: https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/59/0e/d6/590ed6f1-7110-790f-d6c4-acfc61a5711a/Screen_1_1242x2208.jpg/320x480bb.jpg
- 02.jpg: https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/06/a0/62/06a06208-b26d-33a1-628b-819e6c343fd6/Screen_2_1242x2208.jpg/320x480bb.jpg
- 03.jpg: https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/f2/94/25/f29425de-14e2-2c2a-efe2-94ae21fcfc85/Screen_3_1242x2208.jpg/320x480bb.jpg
- 04.jpg: https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/1d/cb/62/1dcb6259-f2df-b33f-757f-639f44d194ae/Screen_4_1242x2208.jpg/320x480bb.jpg
- 05.jpg: https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/94/c5/65/94c5655c-694e-c022-7bd4-a279c4e21bca/Screen_5_1242x2208.jpg/320x480bb.jpg
- 06.jpg: https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/d1/65/03/d1650309-6138-7932-a01a-f30c786cb3bf/Screen_6_1242x2208.jpg/320x480bb.jpg
- 07.jpg: https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/03/9b/f6/039bf633-f31e-a6a3-326a-a6aa0dc92f5e/Screen_7_1242x2208.jpg/320x480bb.jpg
- 08.jpg: https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/7d/e2/49/7de2497e-4573-b6bc-77ad-602b410829ea/Screen_8_1242x2208.jpg/320x480bb.jpg
- 09.jpg: https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/89/81/1a/89811ac5-1309-4fbf-1b93-bd4b15aa96b7/Screen_9_1242x2688.jpg/320x480bb.jpg


## Problem-state references (checked 10 Oct 2026)

No images saved. I searched Revolut's help centre, blog and 2026 tech/fintech press for screenshots of the problem states. revolut.com blocks automated fetching (403), and the search results that loaded carried text only, so no reputable image of these states could be verified. The prototype re-creates them from the nearest real screens in `../appstore-gb-2026-10-10/` plus the descriptions below.

| State in prototype | Closest real visual reference | Text source used | Public image found? |
|---|---|---|---|
| Card payment declined, Home banner / tile (A) | Home cards in 02, 04, 08 | help.revolut.com, "Payment declined by security system": a declined payment is reviewed through an in-app questionnaire opened from a Home tile, the push notification or an email. https://help.revolut.com/help/card-payments-withdrawals/paying-by-card-issues/declined-card-payments/payment-declined-by-security-system/ | No |
| "Some features are restricted" info page + "supporting documents" upload (A) | Grouped list rows in 03 | help.revolut.com, "Source of funds": documents requested via a banner on Home; examples are payslips, bank statements, tax documents. https://help.revolut.com/help/profile-and-plan/profile-plan/source-of-funds-check/i-need-to-verify-my-source-of-funds/ | No |
| Support chat with assistant, then an agent (A and B) | Chat screen in 06 | revolut.com/blog, "Revolut customer service: 24/7 support" (May 2026): AI chatbot first, then human support via Profile → Help → Support. https://www.revolut.com/blog/post/how-revolut-customer-service-works/ ; press on the separate AIR assistant (Apr 2026): https://www.uktech.news/ai/revolut-launches-in-app-ai-assistant-20260409 , https://fstech.co.uk/fst/Revolut_Launches_In_App_AI_Assistant_To_Reshape_Money_Management.php | No |
| "Was this you?" check and face check (B, proposal) | Security hub and "Wealth Protection · With selfie-check" in 03 | Proposal, so no real screen expected | n/a |
| Case page, items, camera, live clock (B, proposal) | Grouped cards and pills in 03 and 06 | Proposal | n/a |

Note for the study: the help page above says Revolut already offers an in-app questionnaire for declined card payments. Variant A keeps the approved v2 flow (push → generic restricted info → chat), which is the path reviewers describe; the test kit's "capture the real flow" step should confirm how the questionnaire looks today.
