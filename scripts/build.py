"""Build the portfolio site from content/ into _site/ (deployed by GitHub Pages).

Usage:  python3 scripts/build.py      (then: python3 -m http.server -d _site 8000)
Needs:  pip install markdown
Content comes from the private research repo via scripts/sync_from_research.py.
"""
import html, os, re, shutil, glob
import markdown

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)
CS = os.path.join(ROOT, 'content', 'case-studies')
SITE = os.path.join(ROOT, '_site')
EMAIL = 'mr.vaghasiya197@gmail.com'
LINKEDIN = 'https://www.linkedin.com/in/mitul-vaghasiya/' 

STUDIES = [  # dir, slug, app, one-line question
    ('01-chatgpt', 'chatgpt', 'ChatGPT', 'Activation: what happens when a free user hits a limit they didn’t see coming?'),
    ('02-duolingo', 'duolingo', 'Duolingo', 'Retention: what happens to learners the streak doesn’t hold?'),
    ('03-myfitnesspal', 'myfitnesspal', 'MyFitnessPal', 'Habit: why people stop logging, and what the paywall does to that.'),
    ('04-revolut', 'revolut', 'Revolut', 'Trust: what a banking app owes you on your worst day.'),
    ('05-temu', 'temu', 'Temu', 'Conversion: where persuasion becomes pressure, and what it costs.'),
]

FONTS_AND_CSS = '''<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="/design-system/tokens.css"><link rel="stylesheet" href="/design-system/components.css">'''


def shell(title, body, prefix, desc=''):
    return f'''<!doctype html><html lang="en"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>{html.escape(title)}</title><meta name="description" content="{html.escape(desc)}">
{FONTS_AND_CSS.format(p=prefix)}</head><body>
<div class="announce">New case study every two weeks · <a href="mailto:{EMAIL}?subject=Subscribe">Get it by email</a></div>
<header class="site-header">
  <nav><a href="/#work">Work</a></nav>
  <a class="wordmark" href="/">Mitul Vaghasiya</a>
  <nav><a href="{LINKEDIN}">LinkedIn</a><a href="mailto:{EMAIL}">Email</a></nav>
</header>
{body}
<footer class="site-footer"><div class="inner">
  <div><h5>Validate first. Then build what users keep.</h5><p style="max-width:44ch;color:var(--ink-75)">Senior mobile developer and team lead. I research and test ideas before building, so the apps I ship are the ones people keep.</p></div>
  <div><h5>Work</h5><ul>{''.join(f'<li><a href="/work/{s}/">{a}</a></li>' for _, s, a, _ in STUDIES)}</ul></div>
  <div><h5>Elsewhere</h5><ul><li><a href="{LINKEDIN}">LinkedIn</a></li><li><a href="https://github.com/MR0100">GitHub</a></li><li><a href="mailto:{EMAIL}">Email</a></li></ul></div>
</div><p class="legal">Independent studies. Not affiliated with or endorsed by the companies named. App screens are my re-creations for commentary and testing; app names and trademarks belong to their owners.</p></footer>
</body></html>'''


def dots(n):
    n = int(n)
    return f'<span class="dots s{n}" title="Severity {n} of 4" aria-label="Severity {n} of 4"><span class="on">{"●" * n}</span><span class="off">{"●" * (4 - n)}</span></span>'


def slugify(t):
    t = re.sub(r'<[^>]+>', '', t)
    return re.sub(r'[^a-z0-9]+', '-', t.lower()).strip('-')[:60]


def convert(dirname, slug, app, question, prev, nxt):
    # The portfolio edit (case-study.md) wins over the full research report when it exists
    src = preprocess(open(os.path.join(CS, dirname, 'case-study.md'), encoding='utf-8').read())
    words = len(re.findall(r'\w+', src))
    minutes = max(1, round(words / 230))
    # Markdown needs a blank line before a list that follows a paragraph line
    src = re.sub(r'(?m)^(?!\s*$)(?!\s*[-*] )(?!\s*\d+\. )(?!\|)(.+)\n(\s*(?:[-*]|\d+\.) )', r'\1\n\n\2', src)
    body = markdown.markdown(src, extensions=['tables', 'sane_lists'])
    img_prefix = ''

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
        pager += f'<a href="../{prev[1]}/"><span class="dir">‹ Previous case study</span><span class="t">{prev[2]}</span></a>'
    if nxt:
        pager += f'<a class="next" href="../{nxt[1]}/"><span class="dir">Next case study ›</span><span class="t">{nxt[2]}</span></a>'
    pager += '</div>'

    page = f'''<main class="layout">
<article class="card">
  <header>
    <div class="breadcrumb"><a href="/">Home</a><span>/</span><a href="/#work">Case studies</a><span>/</span>{app}</div>
    <div class="meta"><b>Independent study</b><span class="dot">·</span>{minutes} min read<span class="dot">·</span>By Mitul Vaghasiya</div>
    <h1>{title}</h1>
  </header>
  {body}
  {pager}
</article>
<aside class="sidebar">
  <div class="panel sand" id="subscribe"><h4 style="margin:0 0 var(--s-4)">Get the next teardown in your inbox.</h4><input class="input" type="email" placeholder="Your email" aria-label="Email"><a class="btn block" href="mailto:{EMAIL}?subject=Subscribe">Subscribe</a></div>
  <div class="panel"><div class="eyebrow" style="margin-bottom:var(--s-3)">Try it</div><p style="margin:0 0 var(--s-3)"><a href="prototype/try.html">Before and after, both phones live →</a></p><p style="margin:0 0 var(--s-3)"><a href="prototype/">The flow, screen by screen →</a></p><p style="margin:0"><a href="test-kit/">The user-test kit →</a></p></div>
  <div class="panel"><div class="eyebrow" style="margin-bottom:var(--s-3)">The question</div><p style="margin:0">{question}</p></div>
</aside>
</main>'''
    out = os.path.join(SITE, 'work', slug, 'index.html')
    os.makedirs(os.path.dirname(out), exist_ok=True)
    open(out, 'w', encoding='utf-8').write(shell(f'{app}: {re.sub("<[^>]+>", "", title)}', page, '', question))
    return title


def home(titles):
    items = ''.join(f'''<a href="/work/{s}/"><span class="no">{i + 1:02d}</span><span><span class="t">{t}</span><div class="d">{q}</div></span><span class="app">{a}</span></a>'''
                    for i, ((_, s, a, q), t) in enumerate(zip(STUDIES, titles)))
    body = f'''<section class="hero">
  <div class="eyebrow">Senior Mobile Developer &amp; Team Lead · Surat, India</div>
  <h1 class="display" style="margin-top:var(--s-4)">I research before I build, so the apps I ship are the ones people keep.</h1>
  <p class="lead">7+ years and 35+ apps on iOS, Android and the web. Below: independent studies of popular apps. Where users get stuck, why it costs the business, what I would change, and how I would prove it worked.</p>
  <p style="margin-top:var(--s-6)"><a class="btn" href="#work">Read the case studies</a> <a class="btn ghost" href="mailto:{EMAIL}">Say hello</a></p>
</section>
<section id="work"><div class="work">{items}</div></section>'''
    open(os.path.join(SITE, 'index.html'), 'w', encoding='utf-8').write(
        shell('Mitul Vaghasiya: Validate first. Then build what users keep.', body, '', 'Independent product case studies by Mitul Vaghasiya.'))



# ---------- Content rules for the public site ----------
GH_CASE = re.compile(r'https://github\.com/MR0100/PersonalResearch/blob/main/linkedin-growth/case-studies/[^/"\']+/case-study\.md')


def preprocess(md):
    """Map research-repo links to public pages and drop anything not published."""
    md = re.sub(r'The full research report, with every source, is in \[`?report\.md`?\]\(report\.md\)\.',
                'The full research report, with every source, is available on request.', md)
    md = re.sub(r'\[`?report\.md`?\]\(report\.md\)', 'the full report (available on request)', md)
    md = re.sub(r'\[`?(?:report\.md )?§?[^\]]*\]\(report\.md[^)]*\)', 'the full report (available on request)', md)
    md = re.sub(r'\[`?test-kit\.md`?\]\(test-kit\.md\)', '[the test kit](test-kit/)', md)
    md = re.sub(r'\(test-kit\.md\)', '(test-kit/)', md)
    md = re.sub(r'\[`?data/([\w-]+)\.md`?\]\(data/[\w-]+\.md\)', lambda m: f'[the review coding](evidence/{m.group(1)}/)', md)
    md = re.sub(r'\]\(references/[^)]*\)', '](sources/)', md)
    md = re.sub(r'\[`?prototype/try\.html`?\]', '[the live prototype]', md)
    # Third-party store/press images stay in the private research repo; link to the source instead
    md = re.sub(r'!\[([^\]]*)\]\(assets/[^)]+\)',
                r'<div class="callout evidence">\1: a third-party image (App Store or press) that I don’t republish here. The source is linked in the caption below.</div>', md)
    return md


def doc_page(md_text, title, app, slug, out, back_label, up='../'):
    """Render a supporting document (test kit, review coding, sources) inside the site shell."""
    # Internal workflow notes (private files, rebuild steps) aren't for public readers
    md_text = '\n'.join(l for l in md_text.split('\n')
                        if not re.search(r'report\.md|assets/|build\.py|Rebuild the site|python3 ', l))
    md_text = re.sub(r'^# .*\n', '', md_text, count=1)
    md_text = re.sub(r'(?m)^(?!\s*$)(?!\s*[-*] )(?!\s*\d+\. )(?!\|)(.+)\n(\s*(?:[-*]|\d+\.) )', r'\1\n\n\2', md_text)
    body = markdown.markdown(md_text, extensions=['tables', 'sane_lists'])
    body = re.sub(r'<table>.*?</table>', lambda m: f'<div class="table-wrap">{m.group(0)}</div>', body, flags=re.S)
    # Relative links in these docs were written from the study folder; pages sit one level deeper
    body = re.sub(r'href="(?!https?:|#|mailto:|/)([^"]+)"', lambda m: f'href="{up}{m.group(1)}"', body)
    body = re.sub(r'href="(?:\.\./)+case-study\.md"', f'href="{up}"', body)
    body = re.sub(r'href="\.\./report\.md[^"]*"', 'href="../"', body)
    page = f'''<main class="layout"><article class="card" style="grid-column:1/-1">
  <header><div class="breadcrumb"><a href="/">Home</a><span>/</span><a href="/#work">Case studies</a><span>/</span><a href="{up}">{app}</a><span>/</span>{back_label}</div>
  <h1>{html.escape(title)}</h1></header>{body}
  <p style="margin-top:var(--s-6)"><a href="{up}">‹ Back to the {app} case study</a></p></article></main>'''
    os.makedirs(os.path.dirname(out), exist_ok=True)
    open(out, 'w', encoding='utf-8').write(shell(f'{app}: {title}', page, '', title))


def fix_prototype(text):
    text = text.replace('../../../portfolio/design-system/', '/design-system/')
    text = text.replace('../../_shared/compare.js', '/work/_shared/compare.js')
    text = GH_CASE.sub('../', text)
    return text


def publish_extras(dirname, slug, app):
    s, t = os.path.join(CS, dirname), os.path.join(SITE, 'work', slug)
    shutil.copytree(os.path.join(s, 'design'), os.path.join(t, 'design'), dirs_exist_ok=True)
    os.makedirs(os.path.join(t, 'prototype'), exist_ok=True)
    for f in ('index.html', 'try.html'):
        src = os.path.join(s, 'prototype', f)
        if os.path.exists(src):
            open(os.path.join(t, 'prototype', f), 'w', encoding='utf-8').write(fix_prototype(open(src, encoding='utf-8').read()))
    tk = os.path.join(s, 'test-kit.md')
    if os.path.exists(tk):
        txt = open(tk, encoding='utf-8').read()
        doc_page(txt, re.search(r'^# (.*)', txt, re.M).group(1), app, slug, os.path.join(t, 'test-kit', 'index.html'), 'User-test kit')
    for f in glob.glob(os.path.join(s, 'data', '*.md')):
        name = os.path.splitext(os.path.basename(f))[0]
        txt = open(f, encoding='utf-8').read()
        doc_page(txt, re.search(r'^# (.*)', txt, re.M).group(1), app, slug, os.path.join(t, 'evidence', name, 'index.html'), 'Evidence', up='../../')
    srcs = sorted(glob.glob(os.path.join(s, 'references', '**', 'SOURCE.md'), recursive=True))
    if srcs:
        txt = '# Sources for the re-created screens\n\nThe prototype screens are my re-creations. These are the public images and pages they were based on. The images themselves are not republished here.\n\n'
        for f in srcs:
            part = open(f, encoding='utf-8').read()
            txt += re.sub(r'^# ', '## ', part, flags=re.M) + '\n\n'
        doc_page(txt, 'Sources for the re-created screens', app, slug, os.path.join(t, 'sources', 'index.html'), 'Sources')


def static_files():
    ds = os.path.join(SITE, 'design-system'); os.makedirs(ds, exist_ok=True)
    for f in ('tokens.css', 'components.css'):
        shutil.copy2(os.path.join(ROOT, 'design-system', f), ds)
    sh = os.path.join(SITE, 'work', '_shared'); os.makedirs(sh, exist_ok=True)
    open(os.path.join(sh, 'compare.js'), 'w', encoding='utf-8').write(fix_prototype(open(os.path.join(CS, '_shared', 'compare.js'), encoding='utf-8').read()))
    open(os.path.join(SITE, '.nojekyll'), 'w').close()
    page = '''<main class="layout"><article class="card" style="grid-column:1/-1"><header><h1>Page not found</h1></header>
<p>That page doesn’t exist, or it moved. <a href="/">Go to the home page</a> or <a href="/#work">see the case studies</a>.</p></article></main>'''
    open(os.path.join(SITE, '404.html'), 'w', encoding='utf-8').write(shell('Page not found · Mitul Vaghasiya', page, '', 'Page not found'))


if __name__ == '__main__':
    if os.path.isdir(SITE):
        shutil.rmtree(SITE)
    os.makedirs(SITE)
    titles = []
    for i, st in enumerate(STUDIES):
        prev = STUDIES[i - 1] if i > 0 else None
        nxt = STUDIES[i + 1] if i < len(STUDIES) - 1 else None
        titles.append(convert(*st, prev, nxt))
        publish_extras(st[0], st[1], st[2])
    home(titles)
    static_files()
    print('built', len(titles), 'case studies →', SITE)
