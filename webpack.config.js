const path = require('path');
const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtrctPlugin = require('mini-css-extract-plugin');
const loader = require('sass-loader');

module.exports = {
  mode: 'development',
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/bundle.js',
  },

  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(css|sass|scss)$/,
        // use: {
        //   loader: ['style-loader', 'css-loader', 'sass-loader'],
        // },
        use: [
          'style-loader',
          // MiniCssExtrctPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              // importLoaders: 2,
              sourceMap: true,
            },
          },
          {
            loader: 'postcss-loader',
            options: { sourceMap: true, config: { path: './postcss.config.js' } },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.(jpg|png|jpeg|svg|gif|webp)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: 'img/[name].[ext]',
            esModule: false,
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
    }),
    new VueLoaderPlugin(),
    new CleanWebpackPlugin(),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
    }),
    new MiniCssExtrctPlugin({
      // filename: '[name].css',
    }),
  ],
};
