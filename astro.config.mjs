import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { readFileSync } from 'node:fs';

const ayarlar = JSON.parse(readFileSync(new URL('./src/data/ayarlar.json', import.meta.url), 'utf-8'));
const domain = (ayarlar.domain || 'ornekemlak.com').replace(/^https?:\/\//, '').replace(/\/$/, '');

export default defineConfig({
  site: `https://${domain}`,
  trailingSlash: 'always',
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/tesekkurler/'),
    }),
  ],
});
