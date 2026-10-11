// Lays out every markdown body on the site's editorial grid (see DESIGN-RULES.md):
// each h2, with the eyebrow just above it, goes in the side column; the text that follows goes in the main column;
// tables and screen groups span both columns. The output is .sec > .side / .main / .wide.
const cls = n => [].concat(n.properties?.className ?? []);
const isEl = (n, tag) => n?.type === 'element' && (!tag || n.tagName === tag);
const blank = n => n.type === 'text' && !n.value.trim();
const isEyebrow = n => isEl(n, 'p') && cls(n).includes('eyebrow');
const isWide = n => isEl(n, 'table') || (isEl(n) && (cls(n).includes('figs') || cls(n).includes('wide')));
const div = (className, children = []) => ({ type: 'element', tagName: 'div', properties: { className: [className] }, children });

export default function rehypeSections() {
  return tree => {
    const kids = tree.children, out = [];
    let sec = null, main = null;
    // Text before the first heading is the intro: layouts put the page's facts beside it
    const open = side => { sec = side ? div('sec', [div('side', side)]) : { ...div('sec'), properties: { className: ['sec', 'intro'] } }; out.push(sec); main = null; };
    for (let i = 0; i < kids.length; i++) {
      const n = kids[i];
      if (blank(n) || isEl(n, 'hr')) continue;
      if (isEyebrow(n)) {
        let j = i + 1; while (j < kids.length && blank(kids[j])) j++;
        if (isEl(kids[j], 'h2')) { open([n, kids[j]]); i = j; continue; }
      }
      if (isEl(n, 'h2')) { open([n]); continue; }
      if (!sec) open(null);
      if (isWide(n)) { sec.children.push(div('wide', [n])); main = null; continue; }
      if (!main) { main = div('main'); sec.children.push(main); }
      main.children.push(n);
    }
    tree.children = out;
  };
}
