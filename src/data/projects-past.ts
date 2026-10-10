// : details for past projects (the `otherWork` list in work.ts).
// Every proof link below was checked to load (HTTP 200) and to be about the app.
// Archived links point at the Wayback Machine because the live listings are gone.

export type PastDetail = {
  name: string;
  about: string;
  audience?: string;
  client?: string;
  role?: string;
  period?: string;
  stack: string[];
  contributions: string[];
  proof: { label: string; href: string }[];
  images: { src: string; kind: 'phone' | 'landscape' | 'graphic'; alt: string }[];
  imageSource?: string;
  icon?: string;
  notes?: string;
};

export const pastDetails: Record<string, PastDetail> = {
  lili: {
    name: 'Lili: Health Data Assistant',
    about:
      'Lili sat on top of a person’s Fitbit or Apple Health data and turned it into insights, personal plans and plain-language answers through a chat-style assistant. Users could also log symptoms, tags and mood so those were part of the analysis.',
    audience: 'People with a wearable who wanted to understand their own health data.',
    client: 'Lili (itslili.com)',
    role: 'Senior Flutter Developer, Sadguru Soft',
    period: '2021–2023',
    stack: ['Flutter', 'Dart', 'BLoC', 'REST APIs', 'Fitbit API (OAuth 2.0)', 'Apple Health', 'Encrypted local storage'],
    contributions: [
      'Led the Flutter build for iOS and Android.',
      'Connected two data sources, Fitbit over OAuth 2.0 and Apple Health through on-device permissions, into one internal health-data model.',
      'Built the chat-style assistant and its swipeable reply cards.',
      'Moved chat history onto a windowed BLoC stream, which cut start-up jitter and memory pressure during heavy data loads.',
      'Kept personal health data encrypted on the device and accessed accounts read-only.',
    ],
    proof: [
      { label: 'App Store listing, archived Jul 2024', href: 'https://web.archive.org/web/20240720065855/https://apps.apple.com/us/app/lili-health-data-assistant/id1549377844' },
      { label: 'Google Play listing, archived Jun 2022 (10K+ downloads, 4.6 stars)', href: 'https://web.archive.org/web/20220630150119/https://play.google.com/store/apps/details?id=com.itslili.lili' },
      { label: 'Lili website, archived May 2021', href: 'https://web.archive.org/web/20210513122155/https://itslili.com/' },
    ],
    images: [
      { src: '/images/projects/lili/1.jpg', kind: 'graphic', alt: 'Lili chat assistant, points and stats screens' },
      { src: '/images/projects/lili/2.jpg', kind: 'graphic', alt: 'Lili splash, chat and rewards screens' },
      { src: '/images/projects/lili/3.jpg', kind: 'graphic', alt: 'Lili store graphic: daily tasks and streak screen' },
      { src: '/images/projects/lili/4.jpg', kind: 'graphic', alt: 'Lili store graphic: asking Lili how your body is doing' },
    ],
    imageSource: 'Images 1–2 from Mitul’s old portfolio; 3–4 from the App Store listing.',
    icon: '/images/apps/lili.jpg',
    notes: 'Client country not stated in any source. App Store and Play listings both return 404 today.',
  },

  'physio-mobile': {
    name: 'Physio Mobile',
    about:
      'A home rehab app with video exercise programmes for back, shoulder and neck, and knee and hip pain. Patients picked a body area and difficulty, followed the videos, set reminders, gave feedback on each exercise and tracked their progress.',
    audience: 'Physiotherapy patients doing guided exercises at home, in the German-speaking market.',
    client: 'A physiotherapy practice (German-speaking market)',
    role: 'Flutter Developer, Sadguru Soft',
    period: '2021–2023',
    stack: ['Flutter', 'Dart', 'Firebase', 'FCM', 'Video playback', 'Local storage'],
    contributions: [
      'Built the iOS and Android app in Flutter.',
      'Built the exercise flow: body area, then level (easy, medium, hard), then guided video exercises.',
      'Tuned video playback for mid-length exercise clips.',
      'Added reminders over FCM, a stats screen and per-exercise feedback.',
      'Handled the patient health profile with care for data at rest and in transit.',
    ],
    proof: [],
    images: [
      { src: '/images/projects/physio-mobile/1.jpg', kind: 'graphic', alt: 'Physio Mobile exercise types, levels and menu' },
      { src: '/images/projects/physio-mobile/2.jpg', kind: 'graphic', alt: 'Physio Mobile notifications, stats and exercise feedback' },
      { src: '/images/projects/physio-mobile/3.jpg', kind: 'graphic', alt: 'Physio Mobile reminder, feedback and exercise video screens' },
    ],
    imageSource: 'Mitul’s old portfolio.',
    notes:
      'No verifiable proof link. App Store id6448959919 and Play id com.physiomoboile.training_app both return 404, have no Wayback snapshots, and the iTunes lookup returns nothing. The APKPure mirror could not be reached from this network, so it is left out.',
  },

  'bookmrk-delivery': {
    name: 'BookMrk + BookMrk Delivery',
    about:
      'BookMrk was a school books and stationery shop where parents and students could shop by school, class, publisher or subject. The companion delivery app gave drivers their assigned orders, maps and status updates so customers could follow the order live.',
    audience: 'Parents and students in India buying school books, and the delivery staff fulfilling those orders.',
    client: 'BOOKMRK Ventures India Pvt. Ltd. (bookmrk.in)',
    role: 'Flutter Developer, Sadguru Soft',
    period: '2020–2022',
    stack: ['Flutter', 'Dart', 'REST APIs', 'Google Maps SDK', 'Background location', 'FCM', 'In-app purchase'],
    contributions: [
      'Built the customer app with drill-down shopping by school, class and subject, plus cart and checkout.',
      'Built the driver app: order list, status changes and navigation with the Google Maps SDK.',
      'Kept driver location updating in the background so the customer app could show live tracking.',
      'Added FCM notifications for new orders and order status.',
    ],
    proof: [
      { label: 'App Store listing (BOOKMRK), archived Jun 2021', href: 'https://web.archive.org/web/20210603233748/https://apps.apple.com/in/app/bookmrk/id1543839623' },
      { label: 'bookmrk.in, archived Jul 2021 (links to the iOS and Android apps)', href: 'https://web.archive.org/web/20210713115929/https://www.bookmrk.in/' },
    ],
    images: [
      { src: '/images/projects/bookmrk-delivery/1.jpg', kind: 'graphic', alt: 'BookMrk home, shop by class and school list screens' },
      { src: '/images/projects/bookmrk-delivery/2.jpg', kind: 'graphic', alt: 'BookMrk Delivery splash, order list and status screens' },
      { src: '/images/projects/bookmrk-delivery/3.jpg', kind: 'phone', alt: 'BookMrk home screen with categories' },
      { src: '/images/projects/bookmrk-delivery/4.jpg', kind: 'phone', alt: 'BookMrk list of schools' },
    ],
    imageSource: 'Images 1–2 from Mitul’s old portfolio; 3–4 from the App Store listing.',
    icon: '/images/apps/bookmrk-delivery.jpg',
    notes:
      'Proof covers the customer app only; the delivery app was never public. Android id com.solutioncone.bookmrk has no Wayback snapshot of its Play page; APKPure could not be reached from this network. bookmrk.in did not load live during this check.',
  },

  locket: {
    name: 'Locket',
    about:
      'A location-sharing app for friends and family. It showed each friend’s location, battery, movement speed and status on a map, with one-to-one and group chat, a “Ninja Mode” to adjust what you share, and a login streak.',
    audience: 'Friend groups and families, with a Japanese-language store listing.',
    client: 'Wanderlust studio',
    role: 'Lead Flutter Developer, Sadguru Soft',
    period: '2022–2023',
    stack: ['Flutter', 'Dart', 'Kotlin', 'Swift', 'Method Channels', 'Background services', 'WebSockets'],
    contributions: [
      'Led the Flutter build.',
      'Wrote native background location services in Kotlin and Swift, bridged to Flutter over Method Channels.',
      'Sent location, battery and speed updates to friends over a WebSocket, and ran group chat on the same connection.',
      'Set up the Android foreground service and iOS background modes so the app stayed within store rules and kept battery use reasonable.',
    ],
    proof: [
      { label: 'Google Play listing, archived Feb 2023', href: 'https://web.archive.org/web/20230202154959/https://play.google.com/store/apps/details?id=io.locket' },
    ],
    images: [
      { src: '/images/projects/locket/1.jpg', kind: 'phone', alt: 'Locket map with friends’ locations in Tokyo' },
      { src: '/images/projects/locket/2.jpg', kind: 'phone', alt: 'Locket chat screen' },
      { src: '/images/projects/locket/3.jpg', kind: 'graphic', alt: 'Locket store title graphic' },
    ],
    imageSource: 'Google Play listing (archived).',
    icon: '/images/apps/locket.jpg',
    notes:
      'The archived Play page has a privacy policy at wander-lust.studio.site, and the listing is in Japanese. That suggests a Japan-based client, but no source states the country, so work.ts still says "International". Not to be confused with Locket Widget (com.locket.Locket).',
  },

  'marline-media': {
    name: 'Marline Media',
    about:
      'A design app for the Marline Media shop, which sold Snapchat geofilters, Instagram lenses and digital invitations. Users picked a template for an occasion such as a wedding, birthday or baby shower, edited it on a canvas, and ordered it or unlocked premium templates.',
    audience: 'People planning events who wanted a custom invitation, filter or lens.',
    client: 'Marline Media (marlinemedia.com)',
    role: 'Flutter Developer, Sadguru Soft',
    period: '2021–2023',
    stack: ['Flutter', 'Dart', 'Firebase', 'Custom canvas rendering', 'REST APIs', 'FCM', 'In-app purchase'],
    contributions: [
      'Built and released the app.',
      'Built the canvas editor with independently movable text, image and graphic layers.',
      'Rendered exports at print resolution rather than screen resolution.',
      'Added the template catalogue by occasion and a membership with in-app purchase.',
    ],
    proof: [
      { label: 'Marline Media website, archived Apr 2022', href: 'https://web.archive.org/web/20220404100719/https://marlinemedia.com/' },
    ],
    images: [
      { src: '/images/projects/marline-media/1.jpg', kind: 'graphic', alt: 'Marline Media splash, onboarding and filter screens' },
      { src: '/images/projects/marline-media/2.jpg', kind: 'graphic', alt: 'Marline Media invitation editor and Snapchat filter categories' },
      { src: '/images/projects/marline-media/3.jpg', kind: 'graphic', alt: 'Marline Media membership, categories and profile screens' },
    ],
    imageSource: 'Mitul’s old portfolio.',
    notes:
      'The website proves the client but does not mention the app. The store title was "Invitation Card & Lenses Maker" (com.marlinemedia.invitation.card.maker.filter.mm, per the old portfolio notes); no Wayback snapshot of its Play page exists and APKPure could not be reached from this network. Client country unknown.',
  },

  'setera-tpms': {
    name: 'Setera TPMS',
    about:
      'An Android tool for technicians that talks to Setera’s tyre-pressure and temperature sensors over USB. It reads and writes sensor data so the hardware can be set up and checked in the field.',
    audience: 'Technicians installing Setera fleet-telemetry hardware.',
    client: 'Setera, a fleet telemetry company in Brazil (setera.seg.br)',
    role: 'Mobile Developer, Sadguru Soft',
    period: '2023–2024',
    stack: ['Flutter', 'Dart', 'Kotlin', 'Android USB Host API', 'Method Channels', 'Serial communication'],
    contributions: [
      'Wrote the USB serial layer in Kotlin: device discovery, permissions, reads and writes.',
      'Exposed it to the Flutter UI through Method Channels.',
      'Built the technician screens in Flutter, with clear error messages when the hardware did not respond.',
    ],
    proof: [
      { label: 'Setera website: tyre pressure and temperature product line', href: 'https://setera.seg.br/' },
    ],
    images: [],
    notes: 'B2B tool, never in a public store. No screenshots in any source. The website proves the client and its TPMS product, not the app itself.',
  },

  studymap: {
    name: 'Studymap',
    about:
      'A Japanese study app that builds a personal study plan around the learner’s goal exam and daily life, then serves daily tasks, quizzes and explanations and re-plans as they go. It also supported studying together in groups.',
    audience: 'Japanese learners preparing for certification and university entrance exams.',
    client: 'Remody Inc., Tokyo, Japan',
    role: 'Flutter Developer, Sadguru Soft',
    period: '2022–2024',
    stack: ['Flutter', 'Dart', 'REST APIs', 'Reactive streams', 'Real-time sync', 'Local storage', 'Japanese localisation'],
    contributions: [
      'Built the iOS and Android app in Flutter for a Japanese-language audience.',
      'Modelled the AI-generated study content as typed Dart models so the UI did not depend on raw JSON.',
      'Built the group study session as a state machine for joining, leaving, moving through content and reconnecting.',
      'Used reactive streams to keep every participant’s screen in sync.',
    ],
    proof: [
      { label: 'App Store listing (Japan), archived Dec 2025', href: 'https://web.archive.org/web/20251218014020/https://apps.apple.com/jp/app/studymap/id1613502226' },
      { label: 'Remody, the client’s website', href: 'https://www.remody.co.jp/' },
    ],
    images: [
      { src: '/images/projects/studymap/1.jpg', kind: 'phone', alt: 'Studymap today’s study tasks and progress' },
      { src: '/images/projects/studymap/2.jpg', kind: 'phone', alt: 'Studymap quiz progress by subject and year' },
      { src: '/images/projects/studymap/3.jpg', kind: 'phone', alt: 'Studymap multiple-choice question' },
      { src: '/images/projects/studymap/4.jpg', kind: 'phone', alt: 'Studymap creating your study plan' },
    ],
    imageSource: 'App Store listing (archived).',
    icon: '/images/apps/studymap.jpg',
    notes:
      'The client later renamed the product Remody; the Remody website does not mention Studymap by name. The archived listing shows the last version, 1.1.0, released Nov 2024. Android id jp.co.remody.remody has no Wayback snapshot.',
  },

  'warden-tracker': {
    name: 'Warden Tracker',
    about:
      'A geofencing app that watches the device’s location in the background and sends an alert as soon as it enters or leaves a set area.',
    role: 'Flutter Developer, Sadguru Soft',
    period: '2022–2023',
    stack: ['Flutter', 'Dart', 'Kotlin', 'Swift', 'Background location', 'Geofencing', 'Native push notifications'],
    contributions: [
      'Built native background location for each platform: an Android foreground service, and iOS significant-change updates with full precision when needed.',
      'Checked fence crossings on the device so alerts fired without waiting for a server.',
      'Sent proximity alerts through native push.',
    ],
    proof: [],
    images: [],
    notes: 'Internal B2B project, never public. No proof link, no screenshots, client and country unknown.',
  },

  careshare: {
    name: 'CareShare',
    about:
      'A health companion app where people logged symptoms, pain, blood pressure, pulse and temperature, either by hand, from a photo of a device, or synced from Google Fit and Apple Health.',
    audience: 'People keeping track of their own health or caring for someone.',
    role: 'Flutter Developer, Sadguru Soft',
    period: '2021–2022',
    stack: ['Flutter', 'Dart', 'Google Fit', 'Apple Health', 'Camera', 'REST APIs', 'FCM', 'In-app purchase'],
    contributions: [
      'Read Google Fit and Apple Health data into one shared model.',
      'Built the symptom and vitals logging screens, including a body map for where pain is.',
      'Added photo capture of readings from devices such as a blood pressure monitor.',
      'Added FCM reminders and in-app purchase for premium features.',
    ],
    proof: [],
    images: [
      { src: '/images/projects/careshare/1.jpg', kind: 'graphic', alt: 'CareShare pain scale, body map and blood pressure screens' },
      { src: '/images/projects/careshare/2.jpg', kind: 'graphic', alt: 'CareShare date picker, symptoms list and symptom detail' },
      { src: '/images/projects/careshare/3.jpg', kind: 'graphic', alt: 'CareShare pulse entry, device photo and symptom search' },
    ],
    imageSource: 'Mitul’s old portfolio.',
    notes: 'Never released. No proof link, client and country unknown.',
  },

  synergy: {
    name: 'Synergy',
    about:
      'A matchmaking and dating app with a discover feed of profiles, profile interests and real-time chat between matches.',
    role: 'Flutter Developer, Sadguru Soft',
    period: '2021–2022',
    stack: ['Flutter', 'Dart', 'Firebase', 'WebSockets', 'REST APIs', 'FCM', 'In-app purchase'],
    contributions: [
      'Built real-time chat over WebSockets, with reconnects handled so messages did not repeat or go missing.',
      'Built the discover, chat and profile screens.',
      'Added in-app purchase for premium features, kept separate from the chat path.',
      'Added FCM notifications for new messages.',
    ],
    proof: [],
    images: [
      { src: '/images/projects/synergy/1.jpg', kind: 'graphic', alt: 'Synergy discover, chat and profile screens' },
    ],
    imageSource: 'Mitul’s old portfolio.',
    notes: 'Never released. No proof link, client and country unknown. The old portfolio had a second image that was almost identical, so it was left out.',
  },
};
