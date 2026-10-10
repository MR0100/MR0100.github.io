// The parts of one study, in reading order. Used by the tab row and by the back/next bar at the bottom.
import { getCollection } from 'astro:content';
export type StudyTab = { key: string; label: string; href: string };
export async function studyTabs(slug: string): Promise<StudyTab[]> {
  const base = `/studies/${slug}/`;
  const docs = (await getCollection('docs')).filter(d => d.data.study === slug);
  const has = (k: string) => docs.some(d => d.data.kind === k);
  return [
    { key: 'overview', label: 'Overview', href: base },
    { key: 'try', label: 'Try it', href: `${base}try/` },
    { key: 'screens', label: 'Screen by screen', href: `${base}prototype/` },
    { key: 'full', label: 'Full analysis', href: `${base}full/` },
    ...(has('test-kit') ? [{ key: 'test-kit', label: 'Test kit', href: `${base}test-kit/` }] : []),
    ...docs.filter(d => d.data.kind.startsWith('evidence/')).map(e => ({ key: e.data.kind, label: 'Review coding', href: `${base}${e.data.kind}/` })),
    ...(has('sources') ? [{ key: 'sources', label: 'Sources', href: `${base}sources/` }] : []),
  ];
}
