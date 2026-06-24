// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // TODO once you create the GitHub repo: set `site` to your Pages URL, e.g.
  // site: 'https://<your-username>.github.io',
  // base: '/<your-repo-name>',
  // (skip `base` entirely if deploying to a custom domain or a username.github.io repo)
  vite: {
    plugins: [tailwindcss()]
  }
});