var path = require('path');
var webpack = require('webpack');
var root = path.join(process.cwd(), 'src'); // home/dosim/www-data/react/src
console.log('my root is: ', root);

module.exports = {
  entry: [
    './src/index.js' //точка входа в приложение
  ],

  output: {
    path: path.join(__dirname, 'dist'), //home/dosim/www-data/react/dist
    publicPath: '/assets/', //путь  во которому браузер будет обрщааться к этой директории
    filename: 'bundle.js' //имя файла с получившимся пакетом
  },

  module: {
    loaders: [
      //{
      //  test: /\.js$/,
      //  exclude: /node_modules/,
      //  loader: 'babel-loader'
      //},
      {
        test: /\.(js|jsx)?$/,
        use: [ 'babel-loader' ],
        exclude: /node_modules/
      },
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
};