"""Build the portfolio prototype from the case-study reports.

Usage:  python3 build.py
Needs:  pip install markdown
Output: ../site/index.html and ../site/case-studies/<slug>.html
"""
import html, os, re
import markdown

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.normpath(os.path.join(HERE, '..', '..'))          # linkedin-growth/
CS = os.path.join(ROOT, 'case-studies')
SITE = os.path.join(ROOT, 'portfolio', 'site')

STUDIES = [  # dir, slug, app, one-line question
    ('01-chatgpt', 'chatgpt', 'ChatGPT', 'Activation: what happens when a free user hits a limit they couldn’t see coming?'),
    ('02-duolingo', 'duolingo', 'Duolingo', 'Retention: what happens to learners the streak doesn’t hold?'),
    ('03-myfitnesspal', 'myfitnesspal', 'MyFitnessPal', 'Habit: why people stop logging, and what the paywall does to that.'),
    ('04-revolut', 'revolut', 'Revolut', 'Trust: what a banking app owes you on your worst day.'),
    ('05-temu', 'temu', 'Temu', 'Conversion: where persuasion becomes pressure, and what it costs.'),
]

FONTS_AND_CSS = '''<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="{p}design-system/tokens.css"><link rel="stylesheet" href="{p}design-system/components.css">'''


def shell(title, body, prefix, desc=''):
    return f'''<!doctype html><html lang="en"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>{html.escape(title)}</title><meta name="description" content="{html.escape(desc)}">
{FONTS_AND_CSS.format(p=prefix)}</head><body>
<div class="announce">New case study every two weeks · <a href="#subscribe">Get it by email</a></div>
<header class="site-header">
  <nav><a href="{prefix}site/index.html#work">Work</a><a href="{prefix}site/index.html#writing">Writing</a><a href="{prefix}site/index.html#about">About</a></nav>
  <a class="wordmark" href="{prefix}site/index.html">Mitul Vaghasiya</a>
  <nav><a href="https://www.linkedin.com/in/mitul-vaghasiya/">LinkedIn</a><a href="mailto:mr.vaghasiya197@gmail.com">Email</a></nav>
</header>
{body}
<footer class="site-footer"><div class="inner">
  <div><h5>Validate first. Then build what users keep.</h5><p style="max-width:44ch;color:var(--ink-75)">Senior mobile developer and team lead. I research and test ideas before building, so the apps I ship are the ones people keep.</p></div>
  <div><h5>Work</h5><ul>{''.join(f'<li><a href="{prefix}site/case-studies/{s}.html">{a}</a></li>' for _, s, a, _ in STUDIES)}</ul></div>
  <div><h5>Elsewhere</h5><ul><li><a href="https://www.linkedin.com/in/mitul-vaghasiya/">LinkedIn</a></li><li><a href="https://github.com/MR0100">GitHub</a></li><li><a href="mailto:mr.vaghasiya197@gmail.com">Email</a></li></ul></div>
</div><p class="legal">Independent studies. Not affiliated with or endorsed by the companies named. Screens © their owners, used for commentary.</p></footer>
</body></html>'''


def dots(n):
    n = int(n)
    return f'<span class="dots s{n}" title="Severity {n} of 4" aria-label="Severity {n} of 4"><span class="on">{"●" * n}</span><span class="off">{"●" * (4 - n)}</span></span>'


def slugify(t):
    t = re.sub(r'<[^>]+>', '', t)
    return re.sub(r'[^a-z0-9]+', '-', t.lower()).strip('-')[:60]


def convert(dirname, slug, app, question, prev, nxt):
    # The portfolio edit (case-study.md) wins over the full research report when it exists
    md = 'case-study.md' if os.path.exists(os.path.join(CS, dirname, 'case-study.md')) else 'report.md'
    src = open(os.path.join(CS, dirname, md), encoding='utf-8').read()
    words = len(re.findall(r'\w+', src))
    minutes = max(1, round(words / 230))
    # Markdown needs a blank line before a list that follows a paragraph line
    src = re.sub(r'(?m)^(?!\s*$)(?!\s*[-*] )(?!\s*\d+\. )(?!\|)(.+)\n(\s*(?:[-*]|\d+\.) )', r'\1\n\n\2', src)
    body = markdown.markdown(src, extensions=['tables', 'sane_lists'])
    img_prefix = f'../../../case-studies/{dirname}/'

    # Links to sibling markdown files point at GitHub
    gh = f'https://github.com/MR0100/PersonalResearch/blob/main/linkedin-growth/case-studies/{dirname}/'
    body = re.sub(r'href="(?!https?:|#|mailto:)([^"]+\.md)"', lambda m: f'href="{gh}{m.group(1)}"', body)

    # Title
    m = re.search(r'<h1>(.*?)</h1>', body, re.S)
    title = m.group(1).strip()
    body = body.replace(m.group(0), '', 1)
    body = re.sub(r'<hr\s*/?>', '', body)

    # Disclaimer blockquote -> callout
    body = re.sub(r'<blockquote>\s*(.*?)\s*</blockquote>', r'<div class="callout">\1</div>', body, count=1, flags=re.S)

    # Summary -> lead
    body = re.sub(r'<p><strong>Summary\.</strong>\s*(.*?)</p>', r'<p class="lead">\1</p>', body, count=1, flags=re.S)

    # Facts table -> definition grid (horizontal "App | Category | ..." or vertical 2-col)
    def facts_from(table):
        heads = re.findall(r'<th(?:\s[^>]*)?>(.*?)</th>', table, re.S)
        rows = re.findall(r'<tr>(.*?)</tr>', table, re.S)[1:]
        cells = [re.findall(r'<td[^>]*>(.*?)</td>', r, re.S) for r in rows]
        if heads and heads[0].strip() == 'App' and len(cells) == 1:
            pairs = list(zip(heads, cells[0]))
        else:
            pairs = [(re.sub(r'</?strong>', '', c[0]), c[1]) for c in cells if len(c) == 2]
        return '<dl class="facts">' + ''.join(f'<div><dt>{k}</dt><dd>{v}</dd></div>' for k, v in pairs) + '</dl>'
    t = re.search(r'<table>.*?</table>', body, re.S)
    if t and ('<th>App</th>' in t.group(0) or '<strong>App</strong>' in t.group(0)):
        body = body.replace(t.group(0), facts_from(t.group(0)), 1)
        body = re.sub(r'<h2>1\. Facts row</h2>\s*', '', body)

    # Figures: <p><img></p> + optional following caption paragraph
    def fig(m):
        alt, srcp, cap = m.group(1), m.group(2), m.group(3) or ''
        cap = re.sub(r'^<p>|</p>$', '', cap.strip())
        return f'<figure><div class="frame"><img src="{img_prefix}{srcp}" alt="{alt}" decoding="async"></div>' + (f'<figcaption>{cap}</figcaption>' if cap else '') + '</figure>'
    body = re.sub(r'<p><img alt="([^"]*)" src="([^"]+)"\s*/?>\s*(.*?)</p>(\s*<p><em>(?:Fig|Source)[\s\S]*?</p>)?',
                  lambda m: fig(type('M', (), {'group': lambda _s, k: [None, m.group(1), m.group(2), (m.group(3) or '') + (m.group(4) or '')][k]})()), body, flags=re.S)

    # Paragraphs where the caption wraps the image (text, image, source in one <p>)
    def fig_inline(m):
        inner = m.group(1)
        im = re.search(r'<img alt="([^"]*)" src="([^"]+)"\s*/?>', inner)
        cap = (inner[:im.start()] + ' ' + inner[im.end():]).strip()
        return f'<figure><div class="frame"><img src="{img_prefix}{im.group(2)}" alt="{im.group(1)}" decoding="async"></div><figcaption>{cap}</figcaption></figure>'
    body = re.sub(r'<p>((?:(?!</p>).)*?<img alt="[^"]*" src="(?!\.\./)[^"]+"\s*/?>(?:(?!</p>).)*?)</p>', fig_inline, body, flags=re.S)

    # Tables: wrap + severity dots
    def table(m):
        tb = m.group(0)
        heads = re.findall(r'<th(?:\s[^>]*)?>(.*?)</th>', tb, re.S)
        sev = [i for i, h in enumerate(heads) if 'Severity' in h]
        if sev:
            idx = sev[0]
            def row(r):
                parts = re.split(r'(<td[^>]*>.*?</td>)', r.group(0), flags=re.S)
                tds = [k for k, x in enumerate(parts) if x.startswith('<td')]
                if len(tds) > idx:
                    k = tds[idx]
                    v = re.sub(r'<[^>]+>', '', parts[k]).strip()
                    if v in ('1', '2', '3', '4'):
                        parts[k] = re.sub(r'(<td[^>]*>).*?(</td>)', lambda mm: mm.group(1) + dots(v) + mm.group(2), parts[k], flags=re.S)
                return ''.join(parts)
            tb = re.sub(r'<tr>.*?</tr>', row, tb, flags=re.S)
        return f'<div class="table-wrap">{tb}</div>'
    body = re.sub(r'<table>.*?</table>', table, body, flags=re.S)

    # Hypothesis labels -> tags
    body = re.sub(r'<strong>Hypothesis</strong>:?', '<span class="tag hypothesis">Hypothesis</span>', body)
    body = body.replace('(<span class="tag hypothesis">Hypothesis</span>)', '<span class="tag hypothesis">Hypothesis</span>')

    # h2 ids + TOC
    toc = []
    def h2(m):
        text = m.group(1)
        clean = re.sub(r'^\d+\.\s*', '', re.sub(r'<[^>]+>', '', text))
        i = slugify(clean)
        toc.append((i, clean))
        return f'<h2 id="{i}">{clean}</h2>'
    body = re.sub(r'<h2>(.*?)</h2>', h2, body)
    toc_html = '<nav class="toc" aria-label="In this case study"><div class="eyebrow">In this case study</div><ol>' + ''.join(f'<li><a href="#{i}">{t}</a></li>' for i, t in toc) + '</ol></nav>'
    # place TOC after the facts grid (or after the lead)
    anchor = '</dl>' if '<dl class="facts">' in body else '</p>'
    body = body.replace(anchor, anchor + toc_html, 1)

    # Insight blocks: bold "1. ..." paragraphs inside Insights section get a rule
    body = re.sub(r'<p><strong>(?:Insight )?(\d)\.', r'<p class="insight"><strong>\1.', body)

    pager = '<div class="pager">'
    if prev:
        pager += f'<a href="{prev[1]}.html"><span class="dir">‹ Previous case study</span><span class="t">{prev[2]}</span></a>'
    if nxt:
        pager += f'<a class="next" href="{nxt[1]}.html"><span class="dir">Next case study ›</span><span class="t">{nxt[2]}</span></a>'
    pager += '</div>'

    page = f'''<main class="layout">
<article class="card">
  <header>
    <div class="breadcrumb"><a href="../index.html">Home</a><span>/</span><a href="../index.html#work">Case studies</a><span>/</span>{app}</div>
    <div class="meta"><b>Independent study</b><span class="dot">·</span>{minutes} min read<span class="dot">·</span>By Mitul Vaghasiya</div>
    <h1>{title}</h1>
  </header>
  {body}
  {pager}
</article>
<aside class="sidebar">
  <div class="panel sand" id="subscribe"><h4 style="margin:0 0 var(--s-4)">Get the next teardown in your inbox.</h4><input class="input" type="email" placeholder="Your email" aria-label="Email"><a class="btn block" href="mailto:mr.vaghasiya197@gmail.com?subject=Subscribe">Subscribe</a></div>
  <div class="panel"><div class="eyebrow" style="margin-bottom:var(--s-3)">The question</div><p style="margin:0">{question}</p></div>
</aside>
</main>'''
    out = os.path.join(SITE, 'case-studies', f'{slug}.html')
    os.makedirs(os.path.dirname(out), exist_ok=True)
    open(out, 'w', encoding='utf-8').write(shell(f'{app}: {re.sub("<[^>]+>", "", title)}', page, '../../', question))
    return title


def home(titles):
    items = ''.join(f'''<a href="case-studies/{s}.html"><span class="no">{i + 1:02d}</span><span><span class="t">{t}</span><div class="d">{q}</div></span><span class="app">{a}</span></a>'''
                    for i, ((_, s, a, q), t) in enumerate(zip(STUDIES, titles)))
    body = f'''<section class="hero">
  <div class="eyebrow">Senior Mobile Developer &amp; Team Lead · Surat, India</div>
  <h1 class="display" style="margin-top:var(--s-4)">I research before I build, so the apps I ship are the ones people keep.</h1>
  <p class="lead">7+ years and 35+ apps on iOS, Android and the web. Below: independent studies of popular apps. Where users get stuck, why it costs the business, what I would change, and how I would prove it worked.</p>
  <p style="margin-top:var(--s-6)"><a class="btn" href="#work">Read the case studies</a> <a class="btn ghost" href="mailto:mr.vaghasiya197@gmail.com">Say hello</a></p>
</section>
<section id="work"><div class="work">{items}</div></section>'''
    open(os.path.join(SITE, 'index.html'), 'w', encoding='utf-8').write(
        shell('Mitul Vaghasiya: Validate first. Then build what users keep.', body, '../', 'Independent product case studies by Mitul Vaghasiya.'))


if __name__ == '__main__':
    titles = []
    for i, st in enumerate(STUDIES):
        prev = STUDIES[i - 1] if i > 0 else None
        nxt = STUDIES[i + 1] if i < len(STUDIES) - 1 else None
        titles.append(convert(*st, prev, nxt))
    home(titles)
    print('built', len(titles), 'case studies →', SITE)
