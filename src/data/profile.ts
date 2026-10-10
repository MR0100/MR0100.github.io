// Facts about Mitul. Sources: LinkedIn export (Oct 2026), résumé (Sep 2026), Upwork profile (Oct 2026), App Store / Play Store checks (11 Oct 2026).
// Anything that changes over time is computed or dated, so the site never goes stale.

export const FIRST_JOB = new Date('2019-11-01'); // Jr. Flutter Developer, Sadguru Soft (LinkedIn)

export function yearsOfExperience(now = new Date()): number {
  const ms = now.getTime() - FIRST_JOB.getTime();
  return Math.floor(ms / (365.25 * 24 * 3600 * 1000));
}

// "almost 7 years" in the last two months before an anniversary, "7+ years" after it.
export function experienceLabel(now = new Date()): string {
  const months = (now.getFullYear() - FIRST_JOB.getFullYear()) * 12 + (now.getMonth() - FIRST_JOB.getMonth());
  const y = Math.floor(months / 12), m = months % 12;
  return m >= 10 ? `almost ${y + 1} years` : `${y}+ years`;
}

export const profile = {
  name: 'Mitul Vaghasiya',
  role: 'Senior Mobile Engineer & Team Lead',
  location: 'Surat, India',
  email: 'mr.vaghasiya197@gmail.com',
  linkedin: 'https://www.linkedin.com/in/mitul-vaghasiya/',
  github: 'https://github.com/MR0100',
  upwork: 'https://www.upwork.com/freelancers/~01d1417b5f7c73e5e1',
  headshot: '/images/mitul.jpg',
  tagline: 'Validate first. Then build what users keep.',
};

// Counts. "projectsWorkedOn" is Mitul's own count (shipped, unreleased, cancelled by clients, or later removed).
// "liveApps" is only what can be verified in an official store today; see work.ts.
export const counts = {
  projectsWorkedOn: '35+',
  upworkJobs: 38,
  upworkJobSuccess: '100%',
};

export const experience = [
  {
    company: 'KGK InfoTech LLP',
    role: 'Mobile Development Team Lead',
    period: 'Apr 2025 — Now',
    note: 'Lead a 7-person team building KGK Diamonds, a B2B trading app for wholesalers in 10+ countries, and KGK HRMS.',
  },
  {
    company: 'Sadguru Soft',
    role: 'Jr. Flutter Developer → Senior Mobile Developer',
    period: 'Nov 2019 — Mar 2025',
    note: 'Promoted four times in five years. Shipped apps for clients in North America, Europe, Korea, Japan, Brazil and India.',
  },
  {
    company: 'Upwork',
    role: 'Freelance mobile & full-stack developer',
    period: 'Alongside',
    note: '38 projects, 100% Job Success, 25 client reviews.',
  },
];

// Real quote from Mitul's Upwork profile; the rest are placeholders until Mitul shares them.
export const testimonials = [
  {
    quote: 'Mitul is the best developer I’ve worked with to date. Fantastic communication.',
    name: 'Upwork client',
    title: '20+ years hiring developers',
    placeholder: false,
  },
  {
    quote: 'Placeholder: a short quote from a KGK colleague or manager about leadership and delivery.',
    name: 'Name Surname',
    title: 'Role, KGK InfoTech',
    placeholder: true,
  },
  {
    quote: 'Placeholder: a client quote about a shipped app, ideally naming the result.',
    name: 'Name Surname',
    title: 'Founder, Company',
    placeholder: true,
  },
];
