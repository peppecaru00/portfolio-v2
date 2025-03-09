import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),
  
  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: 'index.html', // Critical for SPA routing
      precompress: false
    }),
    paths: {
      // Update to your actual repository name
      base: process.env.NODE_ENV === 'production' ? '/portfolio-v2' : ''
    }
  }
};

export default config;