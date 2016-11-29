var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var config = {
  entry : [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './src/Index.jsx'
  ],
  module : {
    loaders : [
      {
        test : /\.jsx?$/,
        exclude : /node_modules/,
        loader : 'react-hot!babel'
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
  devServer: {
    contentBase: './dist',
    hot: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(), // Wire in the hot loading plugin
    new webpack.NoErrorsPlugin(),
    new HtmlWebpackPlugin({
      template: __dirname + '/src/index.html',
      filename: 'index.html',
      inject: 'body'
    })
  ]

}
module.exports = config;
