"""Copy the publishable parts of each case study from the private research repo into content/.

Usage:  python3 scripts/sync_from_research.py [path/to/PersonalResearch]
        (default: ../PersonalResearch next to this repo)

Publishable:  case-study.md, test-kit.md, design/*.png, prototype/index.html + try.html,
              data/*.md (review coding notes, quotes are short and cited), references/**/SOURCE.md,
              _shared/compare.js (the research repo's _shared/tokens.css is only a preview copy; the site uses design-system/)
Never copied: report.md (full research, available on request), raw review data (*.json),
              App Store / press reference images, assets/ (third-party store and press images),
              render scripts.
"""
import os, shutil, sys, glob

HERE = os.path.dirname(os.path.abspath(__file__))
REPO = os.path.dirname(HERE)
SRC_REPO = sys.argv[1] if len(sys.argv) > 1 else os.path.join(os.path.dirname(REPO), 'PersonalResearch')
SRC = os.path.join(SRC_REPO, 'linkedin-growth', 'case-studies')
DST = os.path.join(REPO, 'content', 'case-studies')

STUDIES = ['01-chatgpt', '02-duolingo', '03-myfitnesspal', '04-revolut', '05-temu']


def copy(src, dst):
    os.makedirs(os.path.dirname(dst), exist_ok=True)
    shutil.copy2(src, dst)


def main():
    if not os.path.isdir(SRC):
        sys.exit(f'Research repo not found at {SRC}. Pass its path as the first argument.')
    if os.path.isdir(DST):
        shutil.rmtree(DST)
    n = 0
    for d in STUDIES:
        s, t = os.path.join(SRC, d), os.path.join(DST, d)
        files = ['case-study.md', 'test-kit.md', 'prototype/index.html', 'prototype/try.html']
        files += [os.path.relpath(f, s) for f in glob.glob(os.path.join(s, 'design', '*.png'))]
        files += [os.path.relpath(f, s) for f in glob.glob(os.path.join(s, 'data', '*.md'))]
        files += [os.path.relpath(f, s) for f in glob.glob(os.path.join(s, 'references', '**', 'SOURCE.md'), recursive=True)]
        for f in files:
            if os.path.exists(os.path.join(s, f)):
                copy(os.path.join(s, f), os.path.join(t, f)); n += 1
    copy(os.path.join(SRC, '_shared', 'compare.js'), os.path.join(DST, '_shared', 'compare.js')); n += 1
    print(f'synced {n} files from {SRC} → {DST}')


if __name__ == '__main__':
    main()
