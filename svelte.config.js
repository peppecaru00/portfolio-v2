// svelte.config.js
import adapter from '@sveltejs/adapter-static';

const config = {
  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: 'index.html', // Use 200.html for SPA fallback
      strict: false // Add this line to ignore dynamic route errors
    }),
    prerender: {
      entries: [] // Leave empty or specify routes to prerender
    },
    paths: {
      base: process.env.NODE_ENV === 'production' ? 'peppecaru00.github.io/'
    }
  }
};

export default config;
