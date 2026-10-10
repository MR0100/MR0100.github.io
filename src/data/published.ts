import { getCollection } from 'astro:content';

// Articles appear on the site from their publish date (the day they go out on LinkedIn).
// The site rebuilds daily, so scheduled articles show up on time.
export async function publishedWriting() {
  const now = new Date();
  return (await getCollection('writing'))
    .filter(w => w.data.date <= now)
    .sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

export const fmtDate = (d: Date) => d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });

export async function nextScheduled() {
  const now = new Date();
  return (await getCollection('writing')).filter(w => w.data.date > now).sort((a, b) => a.data.date.getTime() - b.data.date.getTime())[0];
}
