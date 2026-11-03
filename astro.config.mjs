// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://ezequielmonteleone.vercel.app/',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  redirects: {
    '/en': '/',
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
