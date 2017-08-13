require('dotenv/config');
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const distFolder = path.resolve(__dirname, './dist');
const srcFolder = path.resolve(__dirname, './src');

const lintCode = process.env.LINT_CODE.toString() === 'true';

module.exports = {
  entry: {
    bundle: [
      'babel-polyfill',
      'react-hot-loader/patch',
      'webpack-hot-middleware/client?path=http://localhost:3000/__webpack_hmr',
      path.resolve(srcFolder, './main'),
    ],
  },
  output: {
    path: distFolder,
    publicPath: '/dist/',
    filename: '[name].[hash].js',
  },
  module: {
    rules: [
      (lintCode ? {
        test: /\.js$/,
        enforce: 'pre',
        loader: 'eslint-loader',
        options: {
          emitWarning: true,
        },
      } : {}),
      {
        test: /\.(js|jsx)?$/,
        loader: 'babel-loader',
        exclude: /(node_modules)/,
      },
    ],
  },
  devtool: 'source-map',
  context: __dirname,
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
        GOOGLE_ANALYTICS_ID: JSON.stringify(process.env.GOOGLE_ANALYTICS_ID),
      },
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({
      title: 'SamConnect - Widget',
      filename: 'index.html',
      template: './src/index.html',
      inject: true,
    }),
  ],
  resolve: {
    extensions: ['.js', '.json', '.jsx', '.css'],
  },
};
