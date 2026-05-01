import resolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import html from '@rollup/plugin-html';
import copy from 'rollup-plugin-copy';
import { readFileSync } from 'fs';

const template = ({ files }) => {
  const html = readFileSync('index.html', 'utf-8');
  const scripts = files.js
    .map(file => `<script type="module" src="${file.fileName}"></script>`)
    .join('\n');
  return html.replace(
    /<script type="module" src="\.\/src\/index\.js"><\/script>/,
    scripts
  );
};

export default {
  input: 'src/index.js',
  output: {
    dir: 'dist',
    format: 'es',
    sourcemap: true,
    manualChunks: {
      vendor: [
        'lit'
      ],
      pages: [
        './src/components/pages/HomePage.js',
        './src/components/pages/ProjectsPage.js',
        './src/components/pages/AboutPage.js',
        './src/components/pages/ContactPage.js'
      ]
    },
    chunkFileNames: 'chunks/[name]-[hash].js',
    entryFileNames: '[name]-[hash].js',
    minifyInternalExports: true
  },
  plugins: [
    copy({
      targets: [
        { src: 'assets/*', dest: 'dist/assets' },
        { src: 'styles/*', dest: 'dist/styles' }
      ]
    }),
    resolve(),
    terser({
      compress: {
        drop_console: true,
        drop_debugger: true
      },
      keep_classnames: true,
      keep_fnames: true
    }),
    html({ template })
  ]
}; 
