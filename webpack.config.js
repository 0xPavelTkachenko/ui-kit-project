const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js'
  },
  plugins: [
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery'
    }),
    new HtmlWebPackPlugin({
      filename: 'index.html',
      template: './src/index.pug'
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|.git|libs)/,
        loader: 'eslint-loader'
      },
      {
        test: /\.pug$/,
        exclude: /(node_modules|.git)/,
        loader: 'pug-loader'
      },
      {
        test: /\.styl$/,
        exclude: /(node_modules|.git)/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'stylus-loader',
            options: {
              'resolve url': true
            }
          }
        ]
      },
      {
        test: /\.css$/,
        exclude: /.git/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(eot|woff|ttf|svg)$/,
        exclude: /(node_modules|.git)/,
        loader: 'file-loader',
        options: {
          name: "./fonts/[name].[ext]"
        }
      },
      {
        test: /\.(png|ico)$/,
        exclude: /(node_modules|.git)/,
        loader: 'file-loader',
        options: {
          name: "./assets/[name].[ext]"
        }
      }
    ]
  }
}
