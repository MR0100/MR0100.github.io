# Problem-state references (checked 10 Oct 2026)

No images saved. I searched Revolut's help centre, blog and 2026 tech/fintech press for screenshots of the problem states. revolut.com blocks automated fetching (403), and the search results that loaded carried text only, so no reputable image of these states could be verified. The prototype re-creates them from the nearest real screens in `../appstore-gb-2026-10-10/` plus the descriptions below.

| State in prototype | Closest real visual reference | Text source used | Public image found? |
|---|---|---|---|
| Card payment declined, Home banner / tile (A) | Home cards in 02, 04, 08 | help.revolut.com, "Payment declined by security system": a declined payment is reviewed through an in-app questionnaire opened from a Home tile, the push notification or an email. https://help.revolut.com/help/card-payments-withdrawals/paying-by-card-issues/declined-card-payments/payment-declined-by-security-system/ | No |
| "Some features are restricted" info page + "supporting documents" upload (A) | Grouped list rows in 03 | help.revolut.com, "Source of funds": documents requested via a banner on Home; examples are payslips, bank statements, tax documents. https://help.revolut.com/help/profile-and-plan/profile-plan/source-of-funds-check/i-need-to-verify-my-source-of-funds/ | No |
| Support chat with assistant, then an agent (A and B) | Chat screen in 06 | revolut.com/blog, "Revolut customer service: 24/7 support" (May 2026): AI chatbot first, then human support via Profile → Help → Support. https://www.revolut.com/blog/post/how-revolut-customer-service-works/ ; press on the separate AIR assistant (Apr 2026): https://www.uktech.news/ai/revolut-launches-in-app-ai-assistant-20260409 , https://fstech.co.uk/fst/Revolut_Launches_In_App_AI_Assistant_To_Reshape_Money_Management.php | No |
| "Was this you?" check and face check (B, proposal) | Security hub and "Wealth Protection · With selfie-check" in 03 | Proposal, so no real screen expected | n/a |
| Case page, items, camera, live clock (B, proposal) | Grouped cards and pills in 03 and 06 | Proposal | n/a |

Note for the study: the help page above says Revolut already offers an in-app questionnaire for declined card payments. Variant A keeps the approved v2 flow (push → generic restricted info → chat), which is the path reviewers describe; the test kit's "capture the real flow" step should confirm how the questionnaire looks today.
