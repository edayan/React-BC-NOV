var webpack = require('webpack');
const path = require('path');

var config = {
  entry : [path.join(__dirname, '/src/Emily.jsx')],
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
    })
  ]
}
module.exports = config;
