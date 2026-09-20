import { defineConfig } from 'astro/config';

// Deployed to GitHub Pages at https://robkennedy1.github.io/
// Preview builds on the fork set ASTRO_BASE=/robkennedy1.github.io/ so the
// project Pages URL (nabil-boag.github.io/robkennedy1.github.io) resolves assets.
export default defineConfig({
  site: 'https://robkennedy1.github.io',
  base: process.env.ASTRO_BASE || '/',
});
