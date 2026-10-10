import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://mr0100.github.io',
  trailingSlash: 'always',
  build: { format: 'directory' },
});
