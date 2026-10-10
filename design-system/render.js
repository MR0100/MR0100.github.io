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
    await p.screenshot({ path: path.join(__dirname, 'previews', n + '.png'), fullPage: true });
    await p.close();
  }
  await b.close();
})();
