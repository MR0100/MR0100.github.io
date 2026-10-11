// Reads a study document's own markdown and pulls out what its "at a glance" band shows (DESIGN-RULES.md §3):
// key numbers for every kind, plus the session timeline and signals for a test kit, and theme counts for a review coding.
const cap = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);
const plain = (s: string) => s.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/[*_`]/g, '').trim();
// The first number in a cell ("**23**" → 23, "11 (10 of them…)" → 11, "1,910" → 1910)
const num = (s: string) => parseInt((s.match(/\d[\d,]*/)?.[0] ?? '').replace(/,/g, ''), 10) || 0;
const cells = (line: string) => line.trim().replace(/^\||\|$/g, '').split('|').map(c => c.trim());

export type Stat = { value: string; label: string };
export type Step = { name: string; time: string; minutes: number };
export type Bar = { label: string; value: number; sub?: boolean };
export type Glance = { stats: Stat[]; steps?: Step[]; signals?: { pass?: string; kill?: string }; bars?: { title: string; rows: Bar[] } };

function tables(body: string) {
  const lines = body.split('\n'), out: { head: string[]; rows: string[][] }[] = [];
  for (let i = 0; i < lines.length - 1; i++) {
    if (!lines[i].startsWith('|') || !/^\|[\s:|-]*-{3,}/.test(lines[i + 1])) continue;
    const head = cells(lines[i]), rows: string[][] = [];
    for (i += 2; i < lines.length && lines[i].startsWith('|'); i++) rows.push(cells(lines[i]));
    out.push({ head, rows });
  }
  return out;
}

export function docGlance(kind: string, body = ''): Glance {
  const minutes = Math.max(1, Math.round(body.split(/\s+/).length / 230));
  const links = new Set([...body.matchAll(/\]\((https?:\/\/[^)\s]+)\)|href="(https?:\/\/[^"]+)"/g)].map(m => m[1] ?? m[2])).size;
  const figures = (body.match(/<figure/g) ?? []).length;
  const tbls = tables(body);
  const keep = (s: (Stat | false)[]) => s.filter(Boolean).slice(0, 4) as Stat[];

  if (kind === 'test-kit') {
    const steps = [...body.matchAll(/^\*\*([^*(]+?)\s*\(([^)]*?\d[^)]*?min[^)]*)\)\.?\*\*/gm)].map(m => {
      const each = /each/.test(m[2]), n = parseInt(m[2], 10);
      return { name: plain(m[1]).replace(/:.*$/, ''), time: m[2].replace(/,.*$/, ''), minutes: n * (each ? 2 : 1) };
    });
    const people = body.match(/run (\d+) sessions/)?.[1];
    const per = body.match(/About (\d+) minutes/)?.[1];
    const pass = body.match(/^\*\*Pass signal:\*\*\s*(.+)$/m)?.[1], kill = body.match(/^\*\*Kill signal:\*\*\s*(.+)$/m)?.[1];
    return {
      stats: keep([!!people && { value: people, label: 'people, one at a time' }, !!per && { value: per, label: 'minutes a session' },
        steps.length > 0 && { value: String(steps.length), label: 'steps in the script' }, (!!pass || !!kill) && { value: String(+!!pass + +!!kill), label: 'signals decide it: pass or kill' }]),
      steps, signals: { pass: pass && cap(plain(pass)), kill: kill && cap(plain(kill)) },
    };
  }
  if (kind.startsWith('evidence/')) {
    const sample = body.match(/([\d,]+) unique reviews/)?.[1], found = body.match(/found ([\d,]+) reviews/)?.[1], n = body.match(/n = (\d+)/)?.[1];
    const t = tbls.find(t => t.head.some(h => /^(reviews|total)$/i.test(plain(h))));
    let bars: Glance['bars'];
    if (t) {
      const col = t.head.findIndex(h => /^(reviews|total)$/i.test(plain(h)));
      // A row starting with a dash is a subset of the row above it ("— a timeline was given, then broken")
      const rows = t.rows.map(r => { const l = plain(r[0]); return { label: l.replace(/^[—–-]\s*/, '').replace(/\s*\(.*\)$/, ''), value: num(r[col] ?? ''), sub: /^[—–-]/.test(l) }; })
        .filter(r => r.value > 0 && !/^(total|all)$/i.test(r.label));
      const by = plain(t.head[0]).replace(/\s*\(.*\)$/, '').toLowerCase();
      bars = { title: by === 'theme' ? 'Reviews by theme · one review can sit under several' : `Reviews by ${by}`, rows };
    }
    const totalCol = t ? t.head.findIndex(h => /^total$/i.test(plain(h))) : -1;
    const total = t && totalCol >= 0 ? t.rows.filter(r => !/^(total|all)$/i.test(plain(r[0]))).reduce((a, r) => a + num(r[totalCol] ?? ''), 0) : 0;
    return {
      stats: keep([!!sample && { value: sample, label: 'unique reviews in the sample' }, !!total && { value: total.toLocaleString('en-GB'), label: 'reviews across the apps' },
        !!found && { value: found, label: 'matched and coded by hand' }, !!n && { value: n, label: 'written reviews of the app itself' },
        !!bars && { value: String(bars.rows.filter(r => !r.sub).length), label: bars.title.startsWith('Reviews by theme') ? 'themes' : bars.title.replace('Reviews by ', '') + 's compared' }]),
      bars,
    };
  }
  if (kind === 'sources') {
    const refs = (body.match(/^(\s*[-*] |\s*\d+\. )/gm) ?? []).length + tbls.reduce((a, t) => a + t.rows.length, 0);
    const dates = [...body.matchAll(/(?:checked|pulled) (\d{1,2} [A-Z][a-z]{2} \d{4})/g)].map(m => m[1]);
    const last = dates.sort((a, b) => +new Date(b) - +new Date(a))[0];
    return { stats: keep([{ value: String(refs), label: 'images and pages the screens follow' }, !!last && { value: last, label: 'last checked' }, { value: `${minutes}`, label: minutes === 1 ? 'minute to read' : 'minutes to read' }]) };
  }
  return { stats: keep([{ value: `${minutes}`, label: minutes === 1 ? 'minute to read' : 'minutes to read' }, links > 0 && { value: String(links), label: 'sources linked' },
    figures > 0 && { value: String(figures), label: 'screens re-created' }, tbls.length > 0 && { value: String(tbls.length), label: 'tables of evidence' }]) };
}
