// Work. "live" = verified in an official store on STORES_CHECKED. Ratings are the store's own numbers on that date.
export const STORES_CHECKED = '11 Oct 2026';

export type LiveApp = {
  slug: string; name: string; client: string; category: string; role: string; period: string;
  oneLiner: string; platforms: string[]; rating?: string; icon?: string; accent: string;
  appStore?: string; playStore?: string; caseStudy?: boolean;
};

export const liveApps: LiveApp[] = [
  { slug: 'kgk-diamonds', name: 'KGK Diamonds', client: 'KGK Group', category: 'B2B commerce', role: 'Mobile team lead', period: '2025 — now',
    oneLiner: 'A trading app that puts 50,000+ certified diamonds in front of wholesalers in 10+ countries.',
    platforms: ['iOS', 'Android'], rating: '5.0★ App Store', icon: '/images/apps/kgk-diamonds.jpg', accent: '#e9e4da',
    appStore: 'https://apps.apple.com/in/app/kgk-diamonds-buy-diamonds/id6479595403', playStore: 'https://play.google.com/store/apps/details?id=com.kgk.diamonds', caseStudy: true },
  { slug: 'mytarot', name: 'MyTarot (Tarot Cat)', client: '1z Labs, Seoul', category: 'Consumer', role: 'Flutter developer', period: '2022 — 2023',
    oneLiner: 'A daily-tarot app for the Korean market, built around one well-crafted card-draw moment.',
    platforms: ['iOS', 'Android'], rating: '4.7★ from 2,086 ratings', icon: '/images/apps/mytarot.jpg', accent: '#efe3ec',
    appStore: 'https://apps.apple.com/kr/app/id6446103793', playStore: 'https://play.google.com/store/apps/details?id=com.onezlabs.tarot_cat' },
  { slug: 'foresite', name: 'ForeSite', client: 'Ukko Agro, Toronto', category: 'AgTech', role: 'Flutter developer', period: '2022 — 2024',
    oneLiner: 'An offline-first field app for agronomists and growers, still shipping updates in 2026.',
    platforms: ['iOS', 'Android'], icon: '/images/apps/foresite.jpg', accent: '#e3ebe2',
    appStore: 'https://apps.apple.com/ca/app/foresite/id1604668353', playStore: 'https://play.google.com/store/apps/details?id=com.ukkoag.enterprise' },
  { slug: 'kgk-hrms', name: 'KGK HRMS', client: 'KGK Group', category: 'Enterprise', role: 'Mobile team lead', period: '2025 — now',
    oneLiner: 'The group’s HR app: employee records, leave and approvals with role-based access.', icon: '/images/apps/kgk-hrms.jpg', platforms: ['Android'], accent: '#e6e8ec',
    playStore: 'https://play.google.com/store/apps/details?id=com.kgkhrms.app' },
  { slug: 'havitglam', name: 'Havitglam', client: '1z Labs, Seoul', category: 'Habits', role: 'Flutter developer', period: '2022 — 2023',
    oneLiner: 'Photo-verified habit challenges: seven days of water, reading, yoga or vitamins.', icon: '/images/apps/havitglam.jpg', platforms: ['Android'], accent: '#ece6e1',
    playStore: 'https://play.google.com/store/apps/details?id=com.onezlabs.havitglam' },
  { slug: 'todays-quote', name: 'Today’s Quote', client: '1z Labs, Seoul', category: 'Consumer', role: 'Flutter developer', period: '2022 — 2023',
    oneLiner: 'A daily quote with a small game around it and a leaderboard.', icon: '/images/apps/todays-quote.jpg', platforms: ['Android'], accent: '#e9e7df',
    playStore: 'https://play.google.com/store/apps/details?id=com.onezlabs.todaysquote' },
  { slug: 'invitation-cards', name: 'Indian Invitation Cards Maker', client: 'Lux ECards', category: 'Design tool', role: 'Flutter developer', period: '2021 — 2023',
    oneLiner: 'A layered card editor for weddings and events, in Gujarati, Hindi and English.', icon: '/images/apps/invitation-cards.jpg', platforms: ['Android'], accent: '#efe6dc',
    playStore: 'https://play.google.com/store/apps/details?id=com.luxecard.app' },
];

// Projects that are real work but can't be verified in a store today. `proof` = independent public records that they existed.
export type PastWork = { slug: string; name: string; what: string; where: string; year: string; status: string };
export const otherWork: PastWork[] = [
  { slug: 'lili', name: 'Lili', what: 'AI health assistant reading Fitbit and Apple Health', where: 'International', year: '2021–23', status: 'No longer in stores' },
  { slug: 'physio-mobile', name: 'Physio Mobile', what: 'Video rehab programmes for physiotherapy patients', where: 'Germany', year: '2021–23', status: 'No longer in stores' },
  { slug: 'bookmrk-delivery', name: 'BookMrk + Delivery', what: 'School book ordering and its last-mile delivery app', where: 'India', year: '2020–22', status: 'No longer in stores' },
  { slug: 'locket', name: 'Locket', what: 'Real-time location sharing with native background services', where: 'International', year: '2022–23', status: 'No longer in stores' },
  { slug: 'marline-media', name: 'Marline Media', what: 'Invitation cards and photo-lens maker', where: 'International', year: '2021–23', status: 'No longer in stores' },
  { slug: 'setera-tpms', name: 'Setera TPMS', what: 'Tyre-pressure sensor tool over native USB serial', where: 'Brazil', year: '2023–24', status: 'B2B tool' },
  { slug: 'studymap', name: 'Studymap', what: 'AI study content and group study sessions', where: 'Japan', year: '2022–24', status: 'Rebranded by the client' },
  { slug: 'warden-tracker', name: 'Warden Tracker', what: 'Geofencing with background location and proximity alerts', where: '—', year: '2022–23', status: 'Internal' },
  { slug: 'careshare', name: 'CareShare', what: 'Care coordination with Google Fit and Apple Health', where: '—', year: '2021–22', status: 'Unreleased' },
  { slug: 'synergy', name: 'Synergy', what: 'Matchmaking with real-time messaging', where: '—', year: '2021–22', status: 'Unreleased' },
];

// Independent product studies (my own research and concepts, not client work).
export const studies = [
  { slug: 'temu', app: 'Temu', title: 'The games aren’t the problem. The hidden rules are.', theme: 'Conversion', accent: '#f6e6d8', cover: '/studies/temu/cover.png' },
  { slug: 'revolut', app: 'Revolut', title: 'What a bank owes you when a hold turns into a case', theme: 'Trust', accent: '#e4e6ee', cover: '/studies/revolut/cover.png' },
  { slug: 'duolingo', app: 'Duolingo', title: 'A broken streak deserves a way back', theme: 'Retention', accent: '#e6efdc', cover: '/studies/duolingo/cover.png' },
  { slug: 'chatgpt', app: 'ChatGPT', title: 'The limit people don’t see coming', theme: 'Activation', accent: '#e9eef3', cover: '/studies/chatgpt/cover.png' },
  { slug: 'myfitnesspal', app: 'MyFitnessPal', title: 'Log it again: the meals you repeat, in one tap', theme: 'Habit', accent: '#e3ebf6', cover: '/studies/myfitnesspal/cover.png' },
];

// Everything shown on a project page: the lists above plus the detail in projects-detail.ts
import { liveDetails, pastDetails } from './projects-detail';
export type Shot = { src: string; kind: 'phone' | 'landscape' | 'graphic'; alt: string };
export type Project = {
  slug: string; name: string; status: 'live' | 'past'; statusLabel: string; statusNote?: string;
  category: string; client?: string; role?: string; period?: string; platforms?: string[]; oneLiner: string;
  about: string; audience?: string; team?: string; stack: string[]; contributions: string[];
  images: Shot[]; imageSource?: string; icon?: string; accent: string;
  appStore?: string; playStore?: string; proof: { label: string; href: string; note?: string }[];
};
const pastAccents = ['#e6e8ec', '#ece6e1', '#e3ebe2', '#efe6dc', '#e9e7df', '#efe3ec', '#e4e6ee', '#e6efdc', '#e9eef3', '#f6e6d8'];
export const projects: Project[] = [
  ...liveApps.map(a => {
    const d = liveDetails[a.slug];
    return { ...a, ...d, status: 'live' as const, statusLabel: 'Live in the stores', proof: d?.proof ?? [] };
  }),
  ...otherWork.map((o, i) => {
    const d = pastDetails[o.slug];
    return { slug: o.slug, name: o.name, status: 'past' as const, statusLabel: o.status, category: d?.category ?? 'Mobile app',
      oneLiner: o.what, accent: pastAccents[i % pastAccents.length], period: o.year, ...d, proof: d?.proof ?? [] };
  }),
];
