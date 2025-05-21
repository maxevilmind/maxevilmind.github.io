import { fromRollup } from '@web/dev-server-rollup';
import postcss from 'rollup-plugin-postcss';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

const postcssPlugin = fromRollup(postcss);

export default {
  nodeResolve: true,
  plugins: [
    postcssPlugin({
      plugins: [
        tailwindcss,
        autoprefixer,
      ],
    }),
  ],
}; 