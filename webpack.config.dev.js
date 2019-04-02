const path = require('path'),
  baseConf = require('./webpack.config'),
  CopyWebpackPlugin = require('copy-webpack-plugin'),
  merge = require('webpack-merge'),
  CleanWebpackPlugin = require('clean-webpack-plugin');

const devConf = {
  mode: 'development',
  output: {
    path: __dirname + '/dist/dev/',
    filename: 'app.js'
  },
  plugins: [
    new CopyWebpackPlugin([{ from: 'src/html', to: '.' }]),
    new CleanWebpackPlugin(['dist/dev'])
  ],
  devServer: {
    contentBase: path.join(__dirname, 'src/html/'),
    compress: true,
    port: 9000
  }
};

module.exports = merge(baseConf, devConf);