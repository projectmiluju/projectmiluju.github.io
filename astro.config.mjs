import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  site: 'https://projectmiluju.github.io',
  integrations: [
    mdx(),
    // sitemap은 별도로 생성하거나 astro-sitemap 패키지 버전 문제 해결 후 추가
  ],
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
      wrap: true,
    },
  },
  build: {
    assets: 'assets',
  },
});
