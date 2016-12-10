var path = require('path');
var webpack = require('webpack');
var precss = require('precss');
var autoprefixer = require('autoprefixer');
var postcssEach = require('postcss-each');
var HtmlWebpackPlugin  = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: './app/app.jsx',
  devtool: 'inline-source-map',
  devServer: {
    historyApiFallback: true
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'index.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel'
      },
      {
        test: /\.css$/,
        loaders: ['style', 'css?camelCase', 'postcss']
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [ 'url?limit=10000', 'img?minimize']
      },
      { test: /\.woff$/, loader: 'url?limit=10240&mimetype=application/font-woff' },
      { test: /\.woff2$/, loader: 'url?limit=10240&mimetype=application/font-woff2' },
      { test: /\.ttf$/, loader: 'url?limit=10240&mimetype=application/x-font-ttf' },
      { test: /\.eot$/, loader: 'url?limit=10240&mimetype=application/vnd.ms-fontobject' }
    ]
  },
  postcss: function() {
    return [precss, autoprefixer, postcssEach];
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  plugins: [
    new webpack.DefinePlugin({
      // フロントのスクリプト内でNODE_ENVが読み込めるように
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    new HtmlWebpackPlugin({
      template: './app/index.html'
    }),
    new CleanWebpackPlugin(['dist'])
  ]
}
