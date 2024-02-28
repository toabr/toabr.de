import { defineConfig } from 'astro/config';

export default defineConfig({
    site: 'https://toabr.github.io',
    // base: process.env.NODE_ENV === 'production' ? '/wiki/' : '/',
    output: 'static',
});
