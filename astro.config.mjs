import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import rehypeRaw from 'rehype-raw';
import rehypeSections from './src/lib/rehype-sections.mjs';

// Old v1 addresses keep working, but stay out of the sitemap
const redirects = {
    '/work/kgk-diamonds/case-study': '/studies/kgk-diamonds/',
    '/work/chatgpt': '/studies/chatgpt/',
    '/work/chatgpt/test-kit': '/studies/chatgpt/test-kit/',
    '/work/chatgpt/sources': '/studies/chatgpt/sources/',
    '/work/duolingo': '/studies/duolingo/',
    '/work/duolingo/test-kit': '/studies/duolingo/test-kit/',
    '/work/duolingo/sources': '/studies/duolingo/sources/',
    '/work/myfitnesspal': '/studies/myfitnesspal/',
    '/work/myfitnesspal/test-kit': '/studies/myfitnesspal/test-kit/',
    '/work/myfitnesspal/sources': '/studies/myfitnesspal/sources/',
    '/work/revolut': '/studies/revolut/',
    '/work/revolut/test-kit': '/studies/revolut/test-kit/',
    '/work/revolut/sources': '/studies/revolut/sources/',
    '/work/temu': '/studies/temu/',
    '/work/temu/test-kit': '/studies/temu/test-kit/',
    '/work/temu/sources': '/studies/temu/sources/',
    '/work/revolut/evidence/restriction-themes': '/studies/revolut/evidence/restriction-themes/',
    '/work/temu/evidence/game-themes': '/studies/temu/evidence/game-themes/'
};


export default defineConfig({
  site: 'https://mr0100.github.io',
  trailingSlash: 'always',
  build: { format: 'directory' },
  redirects,
  // Raw HTML first, so figures and eyebrows written as HTML are seen by the section layout
  markdown: { rehypePlugins: [rehypeRaw, rehypeSections] },
  integrations: [sitemap({ filter: page => !Object.keys(redirects).some(r => page === `https://mr0100.github.io${r}/`) && !page.includes('/linkedin/') })],
});
