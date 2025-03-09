// svelte.config.js
import adapter from '@sveltejs/adapter-static';

const config = {
    kit: {
        adapter: adapter({
            // default options are shown
            pages: 'build',
            assets: 'build',
            fallback: null,
            precompress: false
        }),
        prerender: {
            default: true
        },
        trailingSlash: 'always' // or 'always' depending on your needs
    }
};

export default config;
