import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Synced from the research repo by scripts/sync_from_research.py (don't edit by hand)
const research = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/research' }),
  schema: z.object({ title: z.string(), app: z.string(), study: z.string() }),
});
const docs = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/docs' }),
  schema: z.object({ title: z.string(), app: z.string(), study: z.string(), kind: z.string() }),
});
const writing = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/writing' }),
  schema: z.object({ title: z.string(), date: z.coerce.date(), dek: z.string(), format: z.string().optional(), cover: z.string().optional(), source: z.string().optional() }),
});

// Written for this site: the portfolio-length version of each study
const studies = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/studies' }),
  schema: z.object({
    app: z.string(), title: z.string(), summary: z.string(), theme: z.string(), order: z.number(),
    accent: z.string(), cover: z.string(), heroImages: z.array(z.string()),
    meta: z.array(z.object({ label: z.string(), value: z.string() })),
    tldr: z.object({ question: z.string(), found: z.string(), change: z.string() }),
    stats: z.array(z.object({ value: z.string(), label: z.string() })),
    figures: z.array(z.object({ src: z.string(), caption: z.string() })),
  }),
});

export const collections = { research, docs, writing, studies };
