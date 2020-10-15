const { mergeWithCustomize, customizeArray } = require('webpack-merge');
const TerserPlugin = require('terser-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const devConfig = require('./webpack.config');

module.exports = () =>
  mergeWithCustomize({
    customizeArray: customizeArray({
      "module.rules.use.*": "prepend",
    }),
  })
    (devConfig, {
      watch: false,
      output: {
        path: `${__dirname}/dist`,
        publicPath: '/',
        filename: 'app.min.js',
      },
      optimization: {
        minimizer: [new TerserPlugin()],
      },
      plugins: [
        new CleanWebpackPlugin(),
      ]
    });
