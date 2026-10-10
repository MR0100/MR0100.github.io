import { getCollection } from 'astro:content';

// Articles appear on the site from their publish date (the day they go out on LinkedIn).
// The site rebuilds daily, so scheduled articles show up on time. Dates are days in India (IST, UTC+5:30).
const nowIST = () => new Date(Date.now() + 5.5 * 3600e3);
export async function publishedWriting() {
  const now = nowIST();
  return (await getCollection('writing'))
    .filter(w => w.data.date <= now)
    .sort((a, b) => b.data.date.getTime() - a.data.date.getTime() || (a.data.order ?? 99) - (b.data.order ?? 99));
}

export const fmtDate = (d: Date) => d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });

export async function nextScheduled() {
  const now = nowIST();
  return (await getCollection('writing')).filter(w => w.data.date > now).sort((a, b) => a.data.date.getTime() - b.data.date.getTime())[0];
}
