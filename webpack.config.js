const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
    }),
    new HtmlWebPackPlugin({
      filename: 'index.html',
      template: './src/pages/index/index.pug',
    }),
    new HtmlWebPackPlugin({
      filename: 'order.html',
      template: './src/pages/order/order.pug',
    }),
    new HtmlWebPackPlugin({
      filename: 'artists.html',
      template: './src/pages/artists/artists.pug',
    }),
    new HtmlWebPackPlugin({
      filename: 'feedback.html',
      template: './src/pages/feedback/feedback.pug',
    }),
    new HtmlWebPackPlugin({
      filename: 'ui-kit.html',
      template: './src/pages/ui-kit/ui-kit.pug',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.pug$/,
        exclude: /(node_modules|.git)/,
        loader: 'pug-loader',
      },
      {
        test: /\.styl$/,
        exclude: /(node_modules|.git)/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'stylus-loader',
            options: {
              'resolve url': true,
            },
          },
        ],
      },
      {
        test: /\.css$/,
        exclude: /.git/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(eot|woff|ttf|svg)$/,
        exclude: /(node_modules|.git)/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'assets/fonts/',
        },
      },
      {
        test: /\.png$/,
        exclude: /(node_modules|.git)/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'assets/images/',
        },
      },
      {
        test: /\.ico$/,
        exclude: /(node_modules|.git)/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'assets/favicons/',
        },
      },
      {
        type: 'javascript/auto',
        test: /\.json$/,
        exclude: /(node_modules|.git)/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
        },
      },
    ],
  },
  devServer: {
    inline: true,
    hot: true,
  },
};
