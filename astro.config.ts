// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';

import react from '@astrojs/react';

const REPO_NAME = 'mycn18-ui-landing';
const isProd = process.env.NODE_ENV === 'production';


// https://astro.build/config
export default defineConfig({
  integrations: [
    icon(), 
    react(), 
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en',
          es: 'es',
        },
      },
    })
  ],
  
  site: isProd 
    ? `https://luke1606.github.io` 
    : `http://localhost:5000`,
  
  base: `/${REPO_NAME}`,
  
  trailingSlash: 'always',
  
  output: 'static', 
  
  server: {
    host: '0.0.0.0',
    port: 5000,
    allowedHosts: true,
  },
});