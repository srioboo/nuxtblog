// @ts-check
import { defineConfig } from 'astro/config';
import vue from '@astrojs/vue';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

const site = process.env.PUBLIC_SITE_URL || 'https://tu-dominio.com';

// Excluye:
// - /politica-privacidad/**
// - /tags/* (y /tags)
/**
 * @param {string | URL} page
 */
function shouldIncludePage(page) {
  const { pathname } = new URL(page);
  return !(
    pathname === '/tags' ||
    pathname.startsWith('/tags/') ||
    pathname === '/politica-privacidad' ||
    pathname.startsWith('/politica-privacidad/')
  );
}

export default defineConfig({
  site,
  integrations: [
    vue(),
    sitemap({
      filter: shouldIncludePage,
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
