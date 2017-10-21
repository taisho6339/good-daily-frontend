const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: [
    'react-hot-loader/patch',
    './src/app/index.js'
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  },
  resolve: {
    extensions: ['.js'],
  },
  module: {
    rules: [
      {
        test: /\.(css|styl)$/,
        use: ['style-loader', 'css-loader?minimize', 'stylus-loader'],
        // use: ExtractTextPlugin.extract({
        //     fallback: 'style-loader',
        //     use: ['css-loader?minimize', 'stylus-loader']
        // }),
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ],
  },
  plugins: [
    new ExtractTextPlugin('style.css'),
  ],
};
