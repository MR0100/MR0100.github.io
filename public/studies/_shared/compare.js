/* Before/after view for a case-study prototype (prototype/try.html).
   try.html                 → two live phones side by side: variant A (today) and B (the proposal)
   try.html?v=A&solo=1      → one bare phone, used inside the side-by-side frames
   try.html?test=1          → one phone + facilitator panel, for user tests (unchanged)
   The page defines window.COMPARE = {title, question, before:{try, notice}, after:{try, notice}, controls:[...]} first.
   Controls are buttons under a phone that click an element inside it, e.g. {side:'after', label:'Next day →', click:'nextDay', status:'dayLabel'}. */
(function () {
  const q = new URLSearchParams(location.search);

  // Inside a frame: bare phone, plus a postMessage bridge for the controls (works on file:// too)
  if (q.has('solo')) {
    document.body.classList.add('solo');
    window.addEventListener('message', e => { const el = e.data && e.data.click && document.getElementById(e.data.click); if (el) el.click(); });
    (window.COMPARE && window.COMPARE.controls || []).forEach(c => {
      const el = c.status && document.getElementById(c.status); if (!el) return;
      const send = () => parent.postMessage({ status: c.status, text: el.textContent }, '*');
      new MutationObserver(send).observe(el, { childList: true, characterData: true, subtree: true }); send();
    });
    return;
  }
  if (q.has('v') || q.has('test')) return;

  // Side-by-side page. The phone's own script already ran on this page; stop its timers before replacing the DOM
  for (let id = setTimeout(() => {}, 0); id > 0; id--) { clearTimeout(id); clearInterval(id); }
  const C = window.COMPARE, esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const base = location.pathname.split('/').pop() || 'try.html';
  const side = (key, v, label, cls) => {
    const d = C[key], ctrls = (C.controls || []).filter(c => c.side === key);
    return `<div class="cmp-col">
      <div class="cmp-label ${cls}">${label}</div>
      <div class="cmp-guide cmp-top"><p><b>Try:</b> ${d.try}</p><p><b>Notice:</b> ${d.notice}</p></div>
      <div class="cmp-fit"><iframe class="cmp-frame" data-side="${key}" src="${base}?v=${v}&solo=1" title="${esc(label)}" width="390" height="844"></iframe></div>
      <div class="cmp-guide">
        <div class="cmp-actions">${ctrls.map((c, i) => `<button class="cmp-btn primary" data-side="${key}" data-i="${i}">${esc(c.label)}</button>${c.status ? `<span class="cmp-status" id="st-${key}-${c.status}"></span>` : ''}`).join('')}
        <button class="cmp-btn" data-restart="${key}">Restart</button></div></div></div>`;
  };
  document.head.insertAdjacentHTML('beforeend', `<link rel="stylesheet" href="/design-system/tokens.css"><style>
    body.compare{display:block;padding:40px 24px 56px;background:var(--paper);font:300 17px/1.6 var(--font-body);color:var(--ink);min-height:0}
    .cmp-wrap{max-width:1040px;margin:0 auto}
    .cmp-eyebrow{font:500 13px/1.4 var(--font-heading);letter-spacing:.1em;text-transform:uppercase;color:var(--ink-60)}
    .cmp-wrap h1{font:300 clamp(1.9rem,2vw + 1rem,2.6rem)/1.15 var(--font-heading);letter-spacing:-.02em;margin:10px 0 8px}
    .cmp-q{color:var(--ink-75);font-size:18px;max-width:60ch}
    .cmp-grid{display:grid;grid-template-columns:1fr 1fr;gap:32px;margin-top:32px}
    .cmp-col{background:var(--surface);border-radius:10px;padding:24px;display:flex;flex-direction:column;align-items:center}
    .cmp-label{align-self:flex-start;font:500 12px/1 var(--font-heading);letter-spacing:.1em;text-transform:uppercase;padding:.6em .8em;border-radius:5px;margin-bottom:20px}
    .cmp-label.before{background:var(--problem-bg);color:var(--problem)}.cmp-label.after{background:var(--outcome-bg);color:var(--outcome)}
    .cmp-fit{position:relative;overflow:hidden;box-shadow:0 24px 60px rgba(0,0,0,.16);margin-top:4px}
    .cmp-frame{border:0;display:block;transform-origin:0 0;background:transparent}
    .cmp-guide{align-self:stretch;margin-bottom:18px;font-size:16px;color:var(--ink-75)}.cmp-guide p{margin-bottom:8px}.cmp-guide b{font-weight:600;color:var(--ink)}
    .cmp-actions{display:flex;flex-wrap:wrap;align-items:center;justify-content:center;gap:10px;margin-top:20px}
    .cmp-btn{height:42px;padding:0 18px;border-radius:8px;border:1px solid var(--ink-20);background:#fff;font:500 15px/1 var(--font-body);color:var(--ink);cursor:pointer}
    .cmp-btn.primary{background:var(--accent);border-color:var(--accent);color:#fff}
    .cmp-status{font-size:14px;color:var(--ink-60)}
    .cmp-links{margin-top:32px;display:flex;gap:18px;flex-wrap:wrap;font-size:15px}.cmp-links a{color:var(--accent)}
    .cmp-note{font-size:14px;color:var(--ink-60);margin-top:12px}
    @media (max-width:860px){.cmp-grid{grid-template-columns:1fr}body.compare{padding:28px 16px 48px}.cmp-col{padding:18px}}
  </style>`);
  document.body.className = 'compare';
  document.body.innerHTML = `<div class="cmp-wrap">
    <div class="cmp-eyebrow">Before and after · ${esc(C.app)} case study</div>
    <h1>${esc(C.title)}</h1><p class="cmp-q">${C.question}</p>
    <div class="cmp-grid">${side('before', 'A', 'Before · today’s app, re-created', 'before')}${side('after', 'B', 'After · my proposal', 'after')}</div>
    <p class="cmp-note">Both phones are live: tap through them. Both are my re-creations in ${esc(C.app)}’s visual style, based on its App Store screenshots (10 Oct 2026) and the public images listed in the case study’s references. They are not the real app. Independent study, not affiliated with ${esc(C.app)}; prices and numbers on screen are placeholders.</p>
    <div class="cmp-links"><a href="index.html">← The flow, explained screen by screen</a><a href="${C.caseStudy}">Read the case study</a></div></div>`;

  // Scale the phones to fit the window (both columns at the same scale)
  const fit = () => {
    const tops = [...document.querySelectorAll('.cmp-top')]; tops.forEach(t => t.style.minHeight = '');
    if (innerWidth > 860) { const h = Math.max(...tops.map(t => t.offsetHeight)); tops.forEach(t => t.style.minHeight = h + 'px'); }
    const col = document.querySelector('.cmp-col'), w = col.clientWidth - 48;
    const s = Math.min(1, w / 390, Math.max(.55, (innerHeight - 120) / 844));
    document.querySelectorAll('.cmp-frame').forEach(f => { f.style.transform = `scale(${s})`; f.parentNode.style.width = 390 * s + 'px'; f.parentNode.style.height = 844 * s + 'px'; f.parentNode.style.borderRadius = 54 * s + 'px'; });
  };
  addEventListener('resize', fit); fit(); document.fonts.ready.then(fit); addEventListener('load', fit);

  const frame = k => document.querySelector(`.cmp-frame[data-side="${k}"]`);
  document.querySelectorAll('[data-restart]').forEach(b => b.onclick = () => { const f = frame(b.dataset.restart); f.src = f.src; });
  document.querySelectorAll('.cmp-btn[data-i]').forEach(b => b.onclick = () => {
    const c = (C.controls || []).filter(x => x.side === b.dataset.side)[+b.dataset.i]; frame(b.dataset.side).contentWindow.postMessage({ click: c.click }, '*');
  });
  addEventListener('message', e => { (C.controls || []).forEach(c => { const f = frame(c.side); if (e.data && e.data.status === c.status && (!f || e.source === f.contentWindow)) { const el = document.getElementById(`st-${c.side}-${c.status}`); if (el) el.textContent = e.data.text; } }); });
})();
