// svelte.config.js
import adapter from '@sveltejs/adapter-static';

const config = {
  kit: {
    // Remove or adjust the trailingSlash option
    // trailingSlash: 'always', // This line caused the issue
    adapter: adapter({
      // default options are shown
      pages: 'build',
      assets: 'build',
      fallback: null,
      strict: false // Add this line to ignore the error

    })
  }
};

export default config;
