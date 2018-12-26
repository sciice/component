import fileSize from 'rollup-plugin-filesize';
import { terser } from 'rollup-plugin-terser';
import config from './config';

export default {
  ...config,
  input: 'src/component/index.js',
  output: [
    {
      file: 'dist/index.js',
      format: 'umd',
      name: 'component',
      sourcemap: false,
      globals: {
        'react': 'React',
        'react-dom': 'ReactDOM',
        'antd': 'antd',
        'moment': 'moment',
        'path-to-regexp': 'pathToRegexp',
      },
    }
  ],
  external: ['react', 'react-dom', 'antd', 'moment', 'path-to-regexp'],
  plugins: [
    ...config.plugins,
    fileSize(),
    terser({
      output: {
        ascii_only: true // 仅输出ascii字符
      },
      compress: {
        pure_funcs: ['console.log'] // 去掉console.log函数
      }
    })
  ]
}
