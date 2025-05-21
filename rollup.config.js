import resolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import html from '@rollup/plugin-html';
import { readFileSync } from 'fs';
import { join } from 'path';

const template = ({ files }) => {
  const html = readFileSync('index.html', 'utf-8');
  return html.replace(
    /<script type="module" src="\.\/src\/index\.js"><\/script>/,
    `<script type="module" src="${files.js[0].fileName}"></script>`
  );
};

export default {
  input: 'src/index.js',
  output: {
    dir: 'dist',
    format: 'es',
    sourcemap: true
  },
  plugins: [
    resolve(),
    terser(),
    html({ template })
  ]
}; 