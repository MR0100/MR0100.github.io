// Detail for the live-app pages.
// Sources, as checked on 11 Oct 2026:
//   [store]  the official App Store / Google Play listing for each app (description, screenshots, install band, rating)
//   [resume] Mitul's résumé (Apr 2026 project lines and Sep 2026 KGK bullets)
//   [old]    the previous portfolio repo (project pages and the old project list of stacks)
// Every number below names its source in `notes`. Nothing here is invented; where a source is silent the field is left out.

export type ProjectDetail = {
  about: string;
  audience?: string;
  team?: string;
  stack: string[];
  contributions: string[];
  images: { src: string; kind: 'phone' | 'landscape' | 'graphic'; alt: string }[];
  imageSource: string;
  notes?: string;
};

export const projectDetails: Record<string, ProjectDetail> = {
  'kgk-diamonds': {
    about:
      'KGK Diamonds is the buying app of the KGK Group. Professionals search a consolidated inventory of certified diamonds from five sales offices, save searches, share stones, export details to Excel, bid on new arrivals and book viewings at KGK offices.',
    audience: 'Retailers, wholesalers, brokers and jewellery designers who buy certified diamonds in volume.',
    team: '7 people: 2 mobile, 1 backend, 1 web, 1 design, 2 QA. Mitul leads the team and mentors five of them.',
    stack: ['Flutter', 'Dart', 'Clean Architecture', 'MVVM', 'BLoC', 'REST and GraphQL', 'Hive', 'Encrypted storage', 'Patrol end-to-end tests', 'Fastlane', 'CI/CD'],
    contributions: [
      'Rebuilt the inventory grid with virtualised lists, server-driven filters and a slimmer payload. Scrolling on entry-level Android went from 50 to 60 FPS and the grid now appears in 2 seconds instead of 5.',
      'Cut app size by 10% and cold start by 45% on mid-tier Android 12 phones through tree-shaking, deferred asset loading and cache priming.',
      'Made Clean Architecture with MVVM and BLoC the team standard. Cross-feature merge conflicts fell about 65% and new engineers became productive in 2 weeks instead of 5.',
      'Protected commercially sensitive pricing: screen capture blocked on pricing screens, the app refuses to start when it detects traffic-sniffing tools, and credentials and cached inventory sit in encrypted storage behind JWT and OAuth 2.0.',
      'Built a test suite of unit, widget and Patrol end-to-end tests at about 80% coverage, run on every pull request.',
      'Owns the release pipeline end to end, including Fastlane signing and store upload. A release takes 1.5 days instead of 4, and crash-free sessions hold at 99.9% on both stores.',
    ],
    images: [
      { src: '/images/projects/kgk-diamonds/1.jpg', kind: 'phone', alt: 'KGK Diamonds dashboard with new arrivals, bids, cart and saved searches' },
      { src: '/images/projects/kgk-diamonds/2.jpg', kind: 'phone', alt: 'Diamond search screen with shape, carat and clarity filters' },
      { src: '/images/projects/kgk-diamonds/3.jpg', kind: 'phone', alt: 'Search results listing certified stones with price per carat and discount' },
      { src: '/images/projects/kgk-diamonds/4.jpg', kind: 'phone', alt: 'New arrivals with a bid countdown timer' },
      { src: '/images/projects/kgk-diamonds/5.jpg', kind: 'phone', alt: 'Match pair screen for selecting two matching stones' },
    ],
    imageSource: 'Google Play listing, com.kgk.diamonds (store frames with a caption above each phone screen)',
    notes:
      'Numbers: 50,000+ diamonds, 5 sales offices, 10+ countries and 120+ years are from the store listing. 50 to 60 FPS, 5s to 2s, 10% size, 45% cold start, ~65% merge conflicts, 5 to 2 weeks onboarding, ~80% coverage, 4 to 1.5 days, 99.9% crash-free and the team of 7 are from the résumé (Sep 2026). Store: 5.0 from 7 ratings on the India App Store; 1K+ downloads on Google Play. Client: KGK Group (Play publisher KGK Diamonds BVBA, App Store seller KGK Infotech LLP). Role: mobile development team lead, Apr 2025 to now, iOS and Android.',
  },

  mytarot: {
    about:
      'A daily tarot app built around a talking cat who shuffles the deck and presents your reading. You pick a topic, such as money, love or work, draw a card and get a short reading meant to start the day calmly.',
    audience: 'Korean consumers who like a quick daily fortune.',
    stack: ['Flutter', 'Dart', 'Firebase', 'Local storage', 'FCM', 'Custom animations'],
    contributions: [
      'Built the interactive card-drawing flow with custom animations that run the same on iOS and Android.',
      'Set up an offline database so the daily reading works without a connection.',
    ],
    images: [
      { src: '/images/projects/mytarot/1.jpg', kind: 'graphic', alt: 'Tarot Cat title card with the pink cat beside a fanned deck' },
      { src: '/images/projects/mytarot/2.jpg', kind: 'phone', alt: 'Money luck topic with the green card back' },
      { src: '/images/projects/mytarot/3.jpg', kind: 'phone', alt: 'Love luck topic with the pink card back' },
      { src: '/images/projects/mytarot/4.jpg', kind: 'phone', alt: 'Work luck topic with the blue card back' },
      { src: '/images/projects/mytarot/5.jpg', kind: 'phone', alt: 'Topic picker with the cat resting on a cushion' },
    ],
    imageSource: 'Google Play listing, com.onezlabs.tarot_cat ("Tarot Cat", 500x1024 originals, so they display small)',
    notes:
      'Client: 1z Labs, Seoul, South Korea (Play developer 1zlabs, App Store seller 1z Labs Inc.). Role: Flutter developer at Sadguru Soft. Contributions are from the résumé project line; stack from the old portfolio. Screenshots deliberately taken from the Play "Tarot Cat" listing (last updated 30 Sep 2022), which matches the period Mitul worked on it. The Korean App Store app is now "MyTarot" (v8.0.0) with saju readings, MBTI readings and an AI chat counsellor; there is no source saying Mitul built those, so they are left out. Store: 4.7 (4.66) from 2,086 ratings on the Korean App Store; 100+ downloads on Google Play. Period in work.ts is 2022 to 2023 but the Play build was last updated Sep 2022, worth confirming. Team size unknown.',
  },

  foresite: {
    about:
      'ForeSite is the field app of Ukko Agro, a smart-agriculture company. It turns data from on-farm weather stations and crop models into daily insights: which fields need attention, growth stages, disease risk and spray timing, plus field data entry and farm management.',
    audience: 'Growers and agronomists who need to decide what to do on the farm today with little time to spare.',
    stack: ['Flutter', 'Dart', 'REST APIs', 'SQLite', 'Offline-first sync', 'Maps', 'Live location', 'WebSockets', 'Kotlin and Swift (Method Channels)', 'Charts', 'FCM'],
    contributions: [
      'Built offline-first sync: a local SQLite store that replays changes and resolves conflicts when the connection returns, with request retry and caching, so crop monitoring keeps working in fields with no signal.',
      'Shaped API payloads around what each screen actually shows, to keep map and chart screens quick on weak connections.',
      'Wrote a native bridge in Kotlin and Swift for secure WebSocket telemetry, where Dart alone could not reach the platform.',
    ],
    images: [
      { src: '/images/projects/foresite/1.jpg', kind: 'phone', alt: 'Daily insights feed with disease models, growth stages and notifications' },
      { src: '/images/projects/foresite/2.jpg', kind: 'phone', alt: 'Insight detail listing the fields that need spraying today' },
      { src: '/images/projects/foresite/3.jpg', kind: 'phone', alt: 'Satellite map of fields and weather stations' },
      { src: '/images/projects/foresite/4.jpg', kind: 'phone', alt: 'Growth stage modelling on a field map with stage timeline' },
      { src: '/images/projects/foresite/5.jpg', kind: 'phone', alt: 'Disease modelling with a spray window for a canola field' },
    ],
    imageSource: 'Google Play listing, com.ukkoag.enterprise (store frames with a caption above each phone screen)',
    notes:
      'Client: Ukko Agro Inc., Toronto, Canada (city from the old portfolio; country from the résumé). Role: Flutter developer at Sadguru Soft, 2022 to 2024. Contributions from the résumé; stack from the résumé and the old portfolio. Store: 3.7 from 12 ratings on the Canadian App Store; 500+ downloads on Google Play, last updated 9 Oct 2026 (so the current screens may include work after Mitul left). Team size unknown.',
  },

  'kgk-hrms': {
    about:
      'KGK HRMS is the KGK Group’s staff app for everyday HR: attendance, leave, gate passes, travel requests, canteen and performance reviews, with each screen shown according to the employee’s role.',
    audience: 'KGK Group employees, team leads, heads of department and HR administrators.',
    team: 'Built by the same KGK InfoTech mobile team that Mitul leads (7 people across mobile, backend, web, design and QA).',
    stack: ['Flutter', 'Dart', 'Clean Architecture', 'BLoC', 'REST APIs', 'Role-based access control', 'Encrypted local storage'],
    contributions: [
      'Leads the team that builds and ships the app, owning architecture, code review and sprint scoping.',
      'Role-based access control, so each person only sees the screens and data their role allows.',
      'Encrypted local storage for any HR data held on the device.',
      'Integration with KGK’s HR back end through REST APIs, on the Clean Architecture and BLoC standard used across KGK’s apps.',
    ],
    images: [
      { src: '/images/projects/kgk-hrms/1.jpg', kind: 'phone', alt: 'KGK HRMS sign-in screen' },
      { src: '/images/projects/kgk-hrms/2.jpg', kind: 'phone', alt: 'Performance review scorecard with role tabs for user, team lead, HR, head of department and admin' },
      { src: '/images/projects/kgk-hrms/3.jpg', kind: 'phone', alt: 'No access rights message shown when a role is not allowed to view a section' },
    ],
    imageSource: 'Google Play listing, com.kgkhrms.app (plain phone screenshots)',
    notes:
      'Client: KGK Group, India (Play publisher KGK Diamonds BVBA). Role: mobile development team lead, Apr 2025 to now. Android only on the public store; the old portfolio records Mitul saying the iOS build is internal only by design. Store: 500+ downloads, last updated 17 Dec 2025. Contributions from the résumé (HRMS line and KGK team bullets); no HRMS-specific metrics exist in any source. Store screens that show a real employee’s name, code, email or age are not used.',
  },

  havitglam: {
    about:
      'Havitglam helps people build one healthy habit at a time through seven-day challenges, such as taking vitamins, yoga, drinking water or reading. Each day you prove it with a timestamped photo and share progress with other users.',
    audience: 'People who want to stick with a self-care routine and like a little social encouragement.',
    stack: ['Flutter', 'Dart', 'Firebase', 'Local storage', 'FCM', 'Camera', 'Sound', 'Animations'],
    contributions: [
      'Built local image caching with cloud storage behind it, so a photo-heavy app kept scrolling at 60 fps.',
    ],
    images: [
      { src: '/images/projects/havitglam/1.jpg', kind: 'graphic', alt: 'Promotional graphic: transform your healthy habit with a seven-day challenge' },
      { src: '/images/projects/havitglam/2.jpg', kind: 'phone', alt: 'Goal screen with a yoga photo and a take a glam moment button' },
      { src: '/images/projects/havitglam/3.jpg', kind: 'phone', alt: 'Daily photo grid tracking a seven-day challenge' },
      { src: '/images/projects/havitglam/4.jpg', kind: 'phone', alt: 'Seven-day challenge success screen with shared photos' },
      { src: '/images/projects/havitglam/5.jpg', kind: 'phone', alt: 'Feed of other users’ challenge photos' },
    ],
    imageSource: 'Google Play listing, com.onezlabs.havitglam (store frames with captions, 500x1024 originals)',
    notes:
      'Client: 1z Labs, Seoul, South Korea (Play developer 1zlabs). Role: Flutter developer at Sadguru Soft, 2022 to 2023. Android only. The 60 fps figure is from the résumé. Stack from the old portfolio. Store: 500+ downloads, last updated 29 Sep 2022. The store screenshots mention 31,276 Glammers; that is marketing copy in the image, not a verified number, so it is not used. Team size unknown.',
  },

  'todays-quote': {
    about:
      'Today’s Quote delivers a daily quote from well-known people, set on calm photographic backgrounds. Users can save favourites, search by author and play small puzzle games built from quotes, with a leaderboard to compete with others.',
    audience: 'People who want a short dose of motivation to start the day.',
    stack: ['Flutter', 'Dart', 'Firebase', 'FCM and local notifications', 'Local storage', '2D game'],
    contributions: [
      'Automated the daily quote delivery through FCM, with local notifications as well.',
      'Built the screen transitions and micro-animations across the app.',
    ],
    images: [
      { src: '/images/projects/todays-quote/1.jpg', kind: 'phone', alt: 'Daily quote card on a mountain background' },
      { src: '/images/projects/todays-quote/2.jpg', kind: 'phone', alt: 'Quote search results by author with like buttons' },
      { src: '/images/projects/todays-quote/3.jpg', kind: 'phone', alt: 'My Quotes collection of saved favourites' },
      { src: '/images/projects/todays-quote/4.jpg', kind: 'phone', alt: 'Quote puzzle game with a counter and timer' },
    ],
    imageSource: 'Google Play listing, com.onezlabs.todaysquote (store frames with captions, 430x800 originals, so they display small)',
    notes:
      'Client: 1z Labs, Seoul, South Korea (Play developer 1zlabs). Role: Flutter developer at Sadguru Soft, 2022 to 2023. Android only. Contributions from the résumé; stack from the old portfolio (its "2D game" tag matches the store’s quote games). Store: 100+ downloads, last updated 26 Sep 2022. Only 4 usable screenshots; the fifth repeats the first. Team size unknown.',
  },

  'invitation-cards': {
    about:
      'An invitation card maker for Indian occasions: weddings, engagements, baby showers, house warmings, business openings, festivals and obituaries. Users pick a template, edit text, photos, stickers and colours, then export as PNG or PDF and share directly. The app and its cards are available in Gujarati, Hindi and English.',
    audience: 'Families and small businesses in India who want a printed or shareable invitation without hiring a designer.',
    stack: ['Flutter', 'Dart', 'Firebase', 'REST APIs', 'Custom canvas editor', 'Local storage', 'In-app purchase', 'FCM', 'Animations'],
    contributions: [
      'Built the card editor: a customisable canvas with layers, where text, images and vector elements can be moved and edited independently.',
      'Built the export path that turns the edited card into a shareable file.',
    ],
    images: [
      { src: '/images/projects/invitation-cards/1.jpg', kind: 'phone', alt: 'Category list for wedding, engagement, baby shower and opening invitations' },
      { src: '/images/projects/invitation-cards/2.jpg', kind: 'phone', alt: 'Editor with sticker picker on a wedding card' },
      { src: '/images/projects/invitation-cards/3.jpg', kind: 'phone', alt: 'Text colour picker on a Gujarati invitation' },
      { src: '/images/projects/invitation-cards/4.jpg', kind: 'phone', alt: 'Settings with language choice of Hindi, English and Gujarati' },
      { src: '/images/projects/invitation-cards/5.jpg', kind: 'phone', alt: 'Font and text formatting tools on a pink invitation card' },
    ],
    imageSource: 'Google Play listing, com.luxecard.app (store frames with captions)',
    notes:
      'Client: Lux Ecards, India (Play publisher Verdad IT, brand site lux-ecards.com). Role: Flutter developer at Sadguru Soft, 2021 to 2023. Android only. Contributions from the résumé project line; stack from the résumé and the old portfolio. Store: 10K+ downloads, last updated 8 Oct 2024. Team size unknown.',
  },
};
