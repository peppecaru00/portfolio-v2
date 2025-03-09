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
      // Fixed the base path format and added missing : ''
      base: process.env.NODE_ENV === 'production' ? '/peppecaru00.github.io' : ''
    }
  } // Added this missing closing brace for kit object
};

export default config;