import adapter from '@sveltejs/adapter-static';

const dev = process.env.NODE_ENV === 'development';

export default {
  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: null,
      strict: false
    }),
    paths: {
      base: dev ? '' : '/portfolio-v2',
    },
  },
};
