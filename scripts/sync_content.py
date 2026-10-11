"""Copy the publishable parts of the private content repos into this site.

Usage:  python3 scripts/sync_content.py [--content PATH] [--linkedin PATH]
        defaults: ../portfolio-content and ../linkedin-growth (the repos sit side by side in profile-growth/)
The "Sync and deploy" workflow runs the same script on GitHub with fresh checkouts of both repos.

From portfolio-content:
  case-studies/NN-app/overview.md   -> src/content/studies/<slug>.md       the study's portfolio page
  case-studies/NN-app/case-study.md -> src/content/research/<slug>.md      full analysis, links mapped to site URLs
  test-kit.md, data/*.md, references/**/SOURCE.md -> src/content/docs/  test kit, review coding, source lists
  design/*.png, prototype/try.html  -> public/studies/<slug>/             my re-created screens and the live phones
  prototype/screens.json            -> src/content/prototypes/<slug>.json screen by screen + the before/after guide
  essays/*.md + essays/assets/      -> src/content/writing/, public/writing/<slug>/
  work/*.json (without "notes")     -> src/content/work/;  work/images/ -> public/images/
From linkedin-growth:
  linkedin-posts/<date>_post-NN_slug/ -> src/content/writing/<date>-<slug>.md (shown from its date)

Never copied: report.md (available on request), raw review data (*.json in data/), references/ and assets/
(third-party store and press images), render scripts, and the "notes" (sources and caveats) in work data.
"""
import glob, json, os, re, shutil, subprocess, sys

HERE = os.path.dirname(os.path.abspath(__file__))
REPO = os.path.dirname(HERE)
def _arg(flag, default):
    return sys.argv[sys.argv.index(flag) + 1] if flag in sys.argv else default
PARENT = os.path.dirname(REPO)
CONTENT = os.path.abspath(_arg('--content', os.path.join(PARENT, 'portfolio-content')))
LINKEDIN = os.path.abspath(_arg('--linkedin', os.path.join(PARENT, 'linkedin-growth')))
CS = os.path.join(CONTENT, 'case-studies')
ESSAYS = os.path.join(CONTENT, 'essays')
WORK = os.path.join(CONTENT, 'work')
POSTS = os.path.join(LINKEDIN, 'linkedin-posts')

STUDIES = [('01-chatgpt', 'chatgpt', 'ChatGPT'), ('02-duolingo', 'duolingo', 'Duolingo'), ('03-myfitnesspal', 'myfitnesspal', 'MyFitnessPal'),
           ('04-revolut', 'revolut', 'Revolut'), ('05-temu', 'temu', 'Temu'),
           ('06-kgk-diamonds', 'kgk-diamonds', 'KGK Diamonds')]
GH_CASE = re.compile(r'https://github\.com/MR0100/(?:PersonalResearch/blob/main/linkedin-growth|portfolio-content/blob/main)/case-studies/[^/"\']+/case-study\.md')


def out(*p):
    path = os.path.join(REPO, *p)
    os.makedirs(os.path.dirname(path), exist_ok=True)
    return path


def fm(d):
    def v(x):
        return '"' + str(x).replace('\\', '\\\\').replace('"', '\\"') + '"'
    return '---\n' + ''.join(f'{k}: {v(x)}\n' for k, x in d.items()) + '---\n\n'


def map_links(md, slug, depth_prefix=''):
    base = f'/studies/{slug}/'
    md = re.sub(r'The full research report, with every source, is in \[`?report\.md`?\]\(report\.md\)\.',
                'The full research report, with every source, is available on request.', md)
    md = re.sub(r'\[`?(?:report\.md )?[^\]]*\]\(report\.md[^)]*\)', 'the full report (available on request)', md)
    md = re.sub(r'\[`?test-kit\.md`?\]\(test-kit\.md\)', f'[the test kit]({base}test-kit/)', md)
    md = re.sub(r'\((?:\.\./)?test-kit\.md\)', f'({base}test-kit/)', md)
    md = re.sub(r'\[`?data/([\w-]+)\.md`?\]\(data/[\w-]+\.md\)', lambda m: f'[the review coding]({base}evidence/{m.group(1)}/)', md)
    md = re.sub(r'\]\((?:\.\./)?references/[^)]*\)', f']({base}sources/)', md)
    md = re.sub(r'\[`?prototype/try\.html`?\]\(prototype/try\.html\)', f'[the live prototype]({base}try/)', md)
    md = re.sub(r'\]\((?:\.\./)?prototype/try\.html\)', f']({base}try/)', md)
    md = re.sub(r'\]\((?:\.\./)?prototype/', f']({base}prototype/', md)
    md = re.sub(r'\]\((?:\.\./)?design/', f']({base}design/', md)
    md = re.sub(r'\]\((?:\.\./)?case-study\.md\)', f']({base}full/)', md)
    # The facts table (App | Type | Platform | …) duplicates the page header on the site
    md = re.sub(r'\| App \| Type \|[^\n]*\n\|[-| ]+\|\n\|[^\n]*\|\n+(?:---\n+)?', '', md)
    # Third-party store/press images stay private; say so instead of showing them
    md = re.sub(r'!\[([^\]]*)\]\((?:\.\./)?assets/[^)]+\)',
                r'<div class="note-box">\1: a third-party image (App Store or press) that I don’t republish here. The source is linked in the caption below.</div>\n', md)
    # Internal workflow lines aren't for readers
    md = '\n'.join(l for l in md.split('\n') if not re.search(r'report\.md|assets/|build\.py|Rebuild the site|python3 ', l))
    return md


def inline_md(t):
    t = re.sub(r'\*\*(.+?)\*\*', r'<strong>\1</strong>', t)
    t = re.sub(r'\[([^\]]+)\]\(([^)]+)\)', r'<a href="\2">\1</a>', t)
    t = re.sub(r'(?<![\w*])\*(?!\s)(.+?)(?<!\s)\*(?![\w*])', r'<em>\1</em>', t)
    return t.replace('`', '')


def figures(md):
    """An image line followed by an italic caption line becomes a framed figure; runs of figures sit side by side."""
    def fig(m):
        cap = m.group(2).strip()
        return f'<figure class="fig"><div class="frame"><img src="{m.group(1)}" alt="" loading="lazy" /></div><figcaption>{inline_md(cap)}</figcaption></figure>'
    md = re.sub(r'^!\[[^\]]*\]\((/[^)]+)\)[ \t]*\n\*(.+)\*[ \t]*$', fig, md, flags=re.M)
    return re.sub(r'(?:<figure class="fig">.*?</figure>\s*)+', lambda m: '<div class="figs">' + ''.join(re.findall(r'<figure class="fig">.*?</figure>', m.group(0))) + '</div>\n\n', md, flags=re.S)


def first_heading(md):
    m = re.search(r'^# (.*)', md, re.M)
    return m.group(1).strip() if m else ''


def strip_h1(md):
    return re.sub(r'^# .*\n+', '', md, count=1)


def fix_prototype(text):
    text = text.replace('../../../portfolio/design-system/tokens.css', '/design-system/tokens.css')
    text = text.replace('../../_shared/tokens.css', '/design-system/tokens.css')
    text = text.replace('../../_shared/compare.js', '/studies/_shared/compare.js')
    return GH_CASE.sub('../full/', text)


def compare_data(try_html):
    """window.COMPARE from try.html (a JS object literal) as plain data."""
    m = re.search(r'window\.COMPARE\s*=\s*(\{.*?\});\s*</script>', try_html, re.S)
    js = 'process.stdout.write(JSON.stringify(eval("(" + require("fs").readFileSync(0, "utf8") + ")")))'
    return json.loads(subprocess.run(['node', '-e', js], input=m.group(1), capture_output=True, text=True, check=True).stdout)


def sync_studies():
    for d in ('src/content/research', 'src/content/docs', 'src/content/prototypes', 'src/content/studies'):
        shutil.rmtree(os.path.join(REPO, d), ignore_errors=True)
    for dirname, slug, app in STUDIES:
        s = os.path.join(CS, dirname)
        dst = os.path.join(REPO, 'public', 'studies', slug)
        for sub in ('design', 'prototype'):
            shutil.rmtree(os.path.join(dst, sub), ignore_errors=True)
        shutil.copytree(os.path.join(s, 'design'), os.path.join(dst, 'design'))
        if os.path.exists(os.path.join(s, 'og.png')):
            shutil.copy2(os.path.join(s, 'og.png'), out('public', 'studies', slug, 'og.png'))
        try_html = fix_prototype(open(os.path.join(s, 'prototype', 'try.html'), encoding='utf-8').read())
        open(out('public', 'studies', slug, 'prototype', 'try.html'), 'w', encoding='utf-8').write(try_html)
        screens = json.load(open(os.path.join(s, 'prototype', 'screens.json'), encoding='utf-8'))
        json.dump({**screens, 'compare': compare_data(try_html)},
                  open(out('src', 'content', 'prototypes', f'{slug}.json'), 'w', encoding='utf-8'), ensure_ascii=False, indent=1)
        shutil.copy2(os.path.join(s, 'overview.md'), out('src', 'content', 'studies', f'{slug}.md'))
        cs = open(os.path.join(s, 'case-study.md'), encoding='utf-8').read()
        open(out('src', 'content', 'research', f'{slug}.md'), 'w', encoding='utf-8').write(
            fm({'title': first_heading(cs), 'app': app, 'study': slug}) + figures(map_links(strip_h1(cs), slug)))
        tk = os.path.join(s, 'test-kit.md')
        if os.path.exists(tk):
            t = open(tk, encoding='utf-8').read()
            open(out('src', 'content', 'docs', f'{slug}--test-kit.md'), 'w', encoding='utf-8').write(
                fm({'title': first_heading(t), 'app': app, 'study': slug, 'kind': 'test-kit'}) + map_links(strip_h1(t), slug))
        for f in glob.glob(os.path.join(s, 'data', '*.md')):
            name = os.path.splitext(os.path.basename(f))[0]
            t = open(f, encoding='utf-8').read()
            open(out('src', 'content', 'docs', f'{slug}--evidence-{name}.md'), 'w', encoding='utf-8').write(
                fm({'title': first_heading(t), 'app': app, 'study': slug, 'kind': f'evidence/{name}'}) + map_links(strip_h1(t), slug))
        srcs = sorted(glob.glob(os.path.join(s, 'references', '**', 'SOURCE.md'), recursive=True))
        if srcs:
            body = ('The prototype screens are my re-creations. These are the public images and pages they were based on. '
                    'The images themselves are not republished here.\n\n')
            body += '\n\n'.join(re.sub(r'^# ', '## ', open(f, encoding='utf-8').read(), flags=re.M) for f in srcs)
            open(out('src', 'content', 'docs', f'{slug}--sources.md'), 'w', encoding='utf-8').write(
                fm({'title': 'Sources for the re-created screens', 'app': app, 'study': slug, 'kind': 'sources'}) + map_links(body, slug))
    shutil.copy2(os.path.join(CS, '_shared', 'compare.js'), out('public', 'studies', '_shared', 'compare.js'))
    t = open(out('public', 'studies', '_shared', 'compare.js'), encoding='utf-8').read()
    # On the site, the side-by-side view is the /studies/<slug>/try/ page; try.html only serves the phones inside it
    t = t.replace("if (q.has('v') || q.has('test')) return;",
                  "if (q.has('v') || q.has('test')) return;\n  location.replace('../try/'); return;")
    open(out('public', 'studies', '_shared', 'compare.js'), 'w', encoding='utf-8').write(fix_prototype(t))
    shutil.copy2(os.path.join(CS, '_shared', 'tokens.css'), out('public', 'design-system', 'tokens.css'))


def sync_writing():
    """LinkedIn posts become articles. The site shows each one only from its publish date."""
    shutil.rmtree(os.path.join(REPO, 'src', 'content', 'writing'), ignore_errors=True)
    shutil.rmtree(os.path.join(REPO, 'public', 'writing'), ignore_errors=True)
    n = 0
    for d in sorted(glob.glob(os.path.join(POSTS, '20*_post-*'))):
        name = os.path.basename(d)
        m = re.match(r'(\d{4}-\d\d-\d\d)_post-\d\d_(.+)', name)
        date, slug = m.group(1), m.group(2)
        readme = open(os.path.join(d, 'README.md'), encoding='utf-8').read()
        title = re.sub(r'^Post \d+:\s*', '', first_heading(readme))
        title = re.sub(r'\s*\((?:intro)\)$', '', title)
        fmt = (re.search(r'\*\*Format\*\* \| ([^|]+)\|', readme) or [None, ''])[1].strip()
        text = open(os.path.join(d, 'post.txt'), encoding='utf-8').read().strip()
        if re.search(r'\[[^\]\n]{3,}\]', text):
            continue  # still has [placeholders] for Mitul to fill
        text = re.sub(r'\n+#\w[\w #]*$', '', text).strip()  # trailing hashtags
        lines = text.split('\n')
        dek = lines[0].strip()
        body = '\n'.join(lines[1:]).strip()
        body = re.sub(r'^→ ', '- ', body, flags=re.M)
        cover = ''
        a = os.path.join(d, 'assets')
        for cand in ['image.png', 'slides/01.png', 'slides/slide-01.png', 'cover.png', 'poster.png']:
            if os.path.exists(os.path.join(a, cand)):
                shutil.copy2(os.path.join(a, cand), out('public', 'writing', slug, 'cover.png'))
                cover = f'/writing/{slug}/cover.png'
                break
        if not cover:
            imgs = sorted(glob.glob(os.path.join(a, '**', '*.png'), recursive=True))
            if imgs:
                shutil.copy2(imgs[0], out('public', 'writing', slug, 'cover.png'))
                cover = f'/writing/{slug}/cover.png'
        open(out('src', 'content', 'writing', f'{date}-{slug}.md'), 'w', encoding='utf-8').write(
            fm({'title': title, 'date': date, 'dek': dek, 'format': fmt, 'cover': cover, 'source': 'LinkedIn'}) + body + '\n')
        n += 1
    # Essays written for the site: copied as they are, with a reading time
    for f in sorted(glob.glob(os.path.join(ESSAYS, '20*_*.md'))):
        m = re.match(r'(\d{4}-\d\d-\d\d)_(.+)\.md', os.path.basename(f))
        date, slug = m.group(1), m.group(2)
        raw = open(f, encoding='utf-8').read()
        _, head, body = raw.split('---', 2)
        minutes = max(1, round(len(re.sub(r'<[^>]+>|!\[[^\]]*\]\([^)]*\)', ' ', body).split()) / 230))
        # Graphics: essays/assets/<slug>/ -> public/writing/<slug>/; image + italic caption -> a figure
        src_assets = os.path.join(ESSAYS, 'assets', slug)
        if os.path.isdir(src_assets):
            for img in glob.glob(os.path.join(src_assets, '*.png')):
                shutil.copy2(img, out('public', 'writing', slug, os.path.basename(img)))
        head = head.replace(f'assets/{slug}/', f'/writing/{slug}/')
        body = re.sub(r'^!\[([^\]]*)\]\(assets/[^/]+/([^)]+)\)[ \t]*\n\*(.+)\*[ \t]*$',
                      lambda m: f'<figure class="essay-fig"><img src="/writing/{slug}/{m.group(2)}" alt="{m.group(1)}" loading="lazy" /><figcaption>{inline_md(m.group(3))}</figcaption></figure>',
                      body, flags=re.M)
        head = head.strip() + f'\nsource: "Essay"\nminutes: {minutes}\n'
        open(out('src', 'content', 'writing', f'{date}-{slug}.md'), 'w', encoding='utf-8').write(f'---\n{head}---\n{body}')
        n += 1
    return n


def sync_work():
    """Profile and project data. The "notes" field (sources, caveats) stays private."""
    def strip(o):
        if isinstance(o, dict):
            return {k: strip(v) for k, v in o.items() if k != 'notes'}
        return [strip(v) for v in o] if isinstance(o, list) else o
    shutil.rmtree(os.path.join(REPO, 'src', 'content', 'work'), ignore_errors=True)
    for f in glob.glob(os.path.join(WORK, '*.json')):
        json.dump(strip(json.load(open(f, encoding='utf-8'))), open(out('src', 'content', 'work', os.path.basename(f)), 'w', encoding='utf-8'),
                  ensure_ascii=False, indent=1)
    for d in ('projects', 'apps', 'og'):
        shutil.rmtree(os.path.join(REPO, 'public', 'images', d), ignore_errors=True)
        shutil.copytree(os.path.join(WORK, 'images', d), os.path.join(REPO, 'public', 'images', d))
    for f in glob.glob(os.path.join(WORK, 'images', '*.jpg')):
        shutil.copy2(f, out('public', 'images', os.path.basename(f)))


if __name__ == '__main__':
    for path, name in ((CS, 'portfolio-content'), (POSTS, 'linkedin-growth')):
        if not os.path.isdir(path):
            sys.exit(f'{name} not found at {path}. Pass --content / --linkedin.')
    sync_studies()
    sync_work()
    n = sync_writing()
    print(f'synced {len(STUDIES)} studies, work data and {n} articles from {CONTENT} and {LINKEDIN}')
