var webpack = require('webpack');
const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var config = {
  entry : [path.join(__dirname, './src/Index.jsx')],
  devtool: 'source-map',
  module : {
    loaders : [
      {
        test : /\.jsx?$/,
        exclude : /node_modules/,
        loader : 'babel-loader'
      }
    ]
  },
  resolve: {
      extensions: ['', '.js', '.jsx']
  },
  output : {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        // suppresses warnings, usually from module minification
        warnings: false,
      },
      output: {comments: false}
    }),
    new HtmlWebpackPlugin({
      template: __dirname + '/src/index.html',
      filename: 'index.html',
      inject: 'body'
    })
  ]
}
module.exports = config;
