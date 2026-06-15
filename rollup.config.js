import resolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import html from '@rollup/plugin-html';
import copy from 'rollup-plugin-copy';
import { readFileSync, rmSync } from 'fs';

const minifyHtml = source => source
  .replace(/>\s+</g, '><')
  .replace(/\s{2,}/g, ' ')
  .trim();

const minifyCss = contents => contents
  .toString()
  .replace(/\/\*[\s\S]*?\*\//g, '')
  .replace(/\s+/g, ' ')
  .replace(/\s*([{}:;,>+~])\s*/g, '$1')
  .replace(/;}/g, '}')
  .trim();

const template = ({ files }) => {
  const html = readFileSync('index.html', 'utf-8');
  const scripts = files.js
    .filter(file => file.isEntry)
    .map(file => `<script type="module" src="${file.fileName}"></script>`)
    .join('\n');
  return minifyHtml(html.replace(
    /<script type="module" src="\.\/src\/index\.js"><\/script>/,
    scripts
  ));
};

const manualChunks = id => {
  const normalizedId = id.replace(/\\/g, '/');

  if (!normalizedId.includes('/node_modules/')) {
    return undefined;
  }

  if (normalizedId.includes('/marked/') || normalizedId.includes('/dompurify/')) {
    return 'markdown';
  }

  return 'vendor';
};

const cleanDist = () => ({
  name: 'clean-dist',
  buildStart() {
    rmSync('dist', { recursive: true, force: true });
  }
});

export default {
  input: 'src/index.js',
  output: {
    dir: 'dist',
    format: 'es',
    sourcemap: false,
    manualChunks,
    chunkFileNames: 'chunks/[name]-[hash].js',
    entryFileNames: '[name]-[hash].js',
    minifyInternalExports: true
  },
  plugins: [
    cleanDist(),
    copy({
      targets: [
        { src: 'assets/*', dest: 'dist/assets' },
        { src: 'styles/*.css', dest: 'dist/styles', transform: minifyCss },
        { src: 'content', dest: 'dist' }
      ]
    }),
    resolve(),
    terser({
      compress: {
        drop_console: true,
        drop_debugger: true,
        passes: 2
      },
      format: {
        comments: false
      },
      module: true
    }),
    html({ template })
  ]
}; 
