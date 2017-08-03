var path = require('path')
var webpack = require('webpack')
var NpmInstallPlugin = require('npm-install-webpack-plugin')
var autoprefixer = require('autoprefixer');
var precss = require('precss');

module.exports = {
  entry: [
    'babel-polyfill',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: './'
  },
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        loaders: ['eslint'],
        include: [
          path.resolve(__dirname, "src"),
        ],
      }
    ],
    loaders: [
      {
        loaders: ['babel-loader'],
        include: [
          path.resolve(__dirname, "src"),
        ],
        test: /\.js$/,
        plugins: ['transform-runtime'],
      },
      {
        test:   /\.css$/,
        loader: "style-loader!css-loader!postcss-loader"
      },
      {
        test: /\.gif$/,
        loader: "url-loader?limit=30000&mimetype=image/gif"
      },
      {
        test: /\.jpg$/,
        loader: "url-loader?limit=30000&mimetype=image/jpg"
      },
      {
        test: /\.png$/,
        loader: "url-loader?limit=30000&mimetype=image/png"
      },
      {
        test: /\.svg$/,
        loader: "url-loader?limit=26000&mimetype=image/svg+xml"
      },
      {
        test: /\.json$/,
        loader: "json-loader"
      }
    ]
  },
  postcss: function () {
    return [autoprefixer, precss];
  }
}
