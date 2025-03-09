import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),
  
  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: 'index.html', // This is crucial - it makes all routes redirect to index.html
      precompress: false
    }),
    paths: {
      base: process.env.NODE_ENV === 'production' ? '/portfolio-v2' : ''
    },
    // Use the correct format for trailingSlash in SvelteKit v2
    trailingSlash: 'ignore' // Valid options are 'always', 'never', or 'ignore'
  }
};

export default config;