var path = require('path');
var webpack = require('webpack');
var root = path.join(process.cwd(), 'src');

module.exports = {
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './src/index.js'
  ],

  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/assets/',
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      {
        test: /\.(js|jsx)?$/,
        use: [ 'babel-loader' ],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loaders: [
          'style-loader',
          'css-loader?importLoades=1'
        ]
      },
      {
        test: /\.(eot|png|ttf|svg|woff|woff2)$/,
        loader: 'url-loader'
      }
    ]
  },

  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [
      'node_modules',
      './src',
      path.resolve(__dirname, 'dist')
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],

  devtool: "source-map"
};