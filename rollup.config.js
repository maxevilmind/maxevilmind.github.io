import resolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import copy from 'rollup-plugin-copy';

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
    copy({
      targets: [
        { src: 'index.html', dest: 'dist' }
      ]
    })
  ]
}; 