import { nodeResolve } from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import postcss from 'rollup-plugin-postcss';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

export default {
  input: 'src/index.js',
  output: {
    dir: 'dist',
    format: 'es',
    sourcemap: true
  },
  plugins: [
    nodeResolve(),
    postcss({
      plugins: [
        tailwindcss,
        autoprefixer,
      ],
    }),
    terser()
  ]
}; 