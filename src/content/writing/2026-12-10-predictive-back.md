---
title: "Your back button is lying"
date: "2026-12-10"
dek: "Your \"Discard changes?\" dialog might never show up on Android 16."
format: "Video (`assets/video.mp4` + `assets/cover.png`)"
cover: "/writing/predictive-back/cover.png"
source: "LinkedIn"
---

Android's back gesture now shows where you're going: swipe from the edge and the previous screen peeks out before you let go. Google calls it predictive back.

For apps that target Android 16 (API level 36), it's on by default. And two old ways of catching "back" stop working:
- onBackPressed() is no longer called
- KEYCODE_BACK is no longer sent

So if your app used them to ask "Discard changes?", the gesture can now skip that question, and the user's work with it.

The fix is small:
- Handle back with OnBackPressedCallback (AndroidX) or OnBackInvokedCallback
- Turn the callback on only while there's something to lose, so the system animation can play the rest of the time
- Test it: swipe back on every screen that has a form

Need more time? There's a temporary opt-out in the manifest (android:enableOnBackInvokedCallback="false"). Treat it as a delay, not a fix.

Have you tested back on Android 16 yet?
