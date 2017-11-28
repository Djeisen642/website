import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';
import vue from 'rollup-plugin-vue';
import commonjs from 'rollup-plugin-commonjs';
import buble from 'rollup-plugin-buble';
import resolve from 'rollup-plugin-node-resolve';
import replace from 'rollup-plugin-replace';
import alias from 'rollup-plugin-alias';

export default {
  input: 'src/main.js',
  output: {
    file: 'server/public/dist/bundle.js',
    format: 'iife',
  },
  sourcemaps: true,
  plugins: [
    alias({ vue: require.resolve('vue/dist/vue.esm.js') }),
    replace({
      'process.env.NODE_ENV': JSON.stringify('development'),
      'process.env.VUE_ENV': JSON.stringify('browser'),
    }),
    resolve({
      jsnext: true,
      main: true,
      browser: true,
    }),
    commonjs(),
    vue({ compileTemplates: true }),
    buble(),
    serve({
      open: true,
      contentBase: 'server/public',
    }),
    livereload('server/public'),
  ],
};
