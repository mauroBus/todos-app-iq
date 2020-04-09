const merge = require('webpack-merge')
const configDev = require('./config-dev')
const path = require('path')
const { srcDir, publicPath } = require('./paths')
const { HOST } = require('./environment')

module.exports = (env = {}) => {
  return merge(configDev, {
    devServer: {
      clientLogLevel: 'none',
      compress: true,
      contentBase: path.join(srcDir, 'mock-data'),
      port: 4000,
      host: HOST || 'localhost',
      watchOptions: {
        ignored: ['node_modules'],
        aggregateTimeout: 300,
      },
      historyApiFallback: {
        disableDotRule: true,
        index: publicPath,
      },
      proxy: {
        '/api': {
          target: 'https://jsonplaceholder.typicode.com',
          pathRewrite: { '^/api': '' },
          changeOrigin: true,
        },
      },
    },
  })
}
