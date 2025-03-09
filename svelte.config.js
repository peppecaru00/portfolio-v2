// svelte.config.js
import adapter from '@sveltejs/adapter-static';

const config = {
  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: '200.html', // Use 200.html for SPA fallback
      strict: false // Add this line to ignore dynamic route errors
    })
  }
};

export default config;
