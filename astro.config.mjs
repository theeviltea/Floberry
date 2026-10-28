import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://floberry.ae',
  trailingSlash: 'always',
  // "assets" instead of the default "_astro": artifact hosting reserves leading underscores.
  build: { inlineStylesheets: 'auto', assets: 'assets' },
});
