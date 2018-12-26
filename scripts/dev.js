import config from './config';
import serve from 'rollup-plugin-serve';
import liveLoad from 'rollup-plugin-livereload'

export default {
  ...config,
  output: [
    {
      file: `serve/index.js`,
      format: 'umd',
      name: 'component',
      sourcemap: true,
    },
  ],
  watch: {
    include: 'src/**',
    exclude: 'node_modules/**'
  },
  plugins: [
    ...config.plugins,
    serve({
      open: true,
      port: 5000,
      contentBase: 'serve',
    }),
    liveLoad()
  ],
}
