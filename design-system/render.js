// Screenshot the design system and site prototype. Usage: NODE_PATH=$(npm root -g) node render.js
const { chromium } = require('playwright'); const path = require('path');
const pages = [
  ['specimen.html', 'specimen', 1440], ['../site/index.html', 'home', 1440],
  ['../site/case-studies/chatgpt.html', 'case-study-chatgpt', 1440], ['../site/case-studies/chatgpt.html', 'case-study-chatgpt-mobile', 390],
];
(async () => {
  const b = await chromium.launch();
  for (const [f, n, w] of pages) {
    const p = await b.newPage({ viewport: { width: w, height: 900 }, deviceScaleFactor: 1 });
    await p.goto('file://' + path.resolve(__dirname, f), { waitUntil: 'networkidle' });
    await p.evaluate(() => document.fonts.ready);
    await p.evaluate(async () => { for (let y = 0; y < document.body.scrollHeight; y += 600) { window.scrollTo(0, y); await new Promise(r => setTimeout(r, 60)); } window.scrollTo(0, 0); await Promise.all([...document.images].map(i => i.decode().catch(() => {}))); });
    await p.screenshot({ path: path.join(__dirname, 'previews', n + '.png'), fullPage: true });
    await p.close();
  }
  await b.close();
})();
