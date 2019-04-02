const baseConf = require('./webpack.config'),
  CopyWebpackPlugin = require('copy-webpack-plugin'),
  merge = require('webpack-merge'),
  CleanWebpackPlugin = require('clean-webpack-plugin');

const prodConf = {
  mode: 'production',
  output: {
    path: __dirname + '/dist/prod/',
    filename: 'app.js'
  },
  plugins: [
    new CopyWebpackPlugin([{ from: 'src/html', to: '.' }]),
    new CleanWebpackPlugin(['dist/prod'])
  ]

};

module.exports = merge(baseConf, prodConf);