import alias from 'rollup-plugin-alias';
import replace from 'rollup-plugin-replace';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import progress from 'rollup-plugin-progress';
import postcss from 'rollup-plugin-postcss';
import NpmImport from 'less-plugin-npm-import';
import json from 'rollup-plugin-json';

export default {
  input: 'src/main.js',
  plugins: [
    alias({
      resolve: ['.js']
    }),
    json(),
    replace({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
    }),
    resolve({
      jsnext: true, preferBuiltins: true, browser: true, main: true,
    }),
    commonjs({
      include: 'node_modules/**'
    }),
    babel({
      exclude: 'node_modules/**'
    }),
    progress({
      clearLine: true
    }),
    postcss({
      extract: true,
      extensions: ['.css', '.less'],
      minimize: true,
      modules: {
        generateScopedName: '[name]__[local]__[hash:base64:5]'
      },
      use: [['less', {
        javascriptEnabled: true,
        plugins: [new NpmImport({prefix: '~'})],
      }]],
      plugins: [
        require('autoprefixer'),
      ]
    }),
  ],
}
