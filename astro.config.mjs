// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://m3.foundation',
  output: 'static',
  integrations: [sitemap()],
  compressHTML: true,
  build: {
    inlineStylesheets: 'always',
  },
});
