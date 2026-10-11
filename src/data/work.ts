// Work shown on the site. The facts live in portfolio-content/work/*.json (synced to src/content/work/);
// "live" means verified in an official store on storesChecked. This file only types and combines them.
import live from '../content/work/live-apps.json';
import pastList from '../content/work/past-work.json';
import details from '../content/work/project-details.json';

export const STORES_CHECKED: string = live.storesChecked;

export type LiveApp = {
  slug: string; name: string; client: string; category: string; role: string; period: string;
  oneLiner: string; platforms: string[]; rating?: string; icon?: string; accent: string;
  appStore?: string; playStore?: string; caseStudy?: boolean;
};
export type PastWork = { slug: string; name: string; what: string; where: string; year: string; status: string };
export type Shot = { src: string; kind: 'phone' | 'landscape' | 'graphic'; alt: string };
export type Project = {
  slug: string; name: string; status: 'live' | 'past'; statusLabel: string; statusNote?: string;
  category: string; client?: string; role?: string; period?: string; platforms?: string[]; oneLiner: string;
  about: string; audience?: string; team?: string; stack: string[]; contributions: string[];
  images: Shot[]; imageSource?: string; icon?: string; accent: string;
  appStore?: string; playStore?: string; proof: { label: string; href: string; note?: string }[];
};

export const liveApps = live.apps as LiveApp[];
// Projects that are real work but can't be verified in a store today. `proof` = independent public records that they existed.
export const otherWork = pastList as PastWork[];

const liveDetails = details.live as Record<string, any>;
const pastDetails = details.past as Record<string, any>;
const pastAccents = ['#e6e8ec', '#ece6e1', '#e3ebe2', '#efe6dc', '#e9e7df', '#efe3ec', '#e4e6ee', '#e6efdc', '#e9eef3', '#f6e6d8'];
export const projects: Project[] = [
  ...liveApps.map(a => {
    const d = liveDetails[a.slug];
    return { ...a, ...d, status: 'live' as const, statusLabel: 'Live in the stores', proof: d?.proof ?? [] };
  }),
  ...otherWork.map((o, i) => {
    const { name: fullName, ...d } = pastDetails[o.slug] ?? {};
    return { slug: o.slug, name: o.name, status: 'past' as const, statusLabel: o.status, category: d.category ?? 'Mobile app',
      oneLiner: o.what, accent: pastAccents[i % pastAccents.length], period: o.year, ...d, fullName, proof: d.proof ?? [] };
  }),
];
