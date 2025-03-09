import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
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
    // Disable trailing slashes (important for GitHub Pages)
    trailingSlash: 'ignore'
  }
};

export default config;
