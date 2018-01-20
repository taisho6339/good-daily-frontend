const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const CONTEXT_ROOT = '';

module.exports = {
  entry: [
    'react-hot-loader/patch',
    './src/app/index.js',
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
  },
  resolve: {
    extensions: ['.js'],
  },
  module: {
    rules: [
      {
        test: /\.(css|scss)$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader?importLoader=1&modules&localIdentName=[name]__[local]___[hash:base64:5]', 'sass-loader'],
        }),
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.(png|jpg|svg|gif)$/,
        exclude: /node_modules/,
        use: {
          loader: `file-loader?name=${CONTEXT_ROOT}/assets/[hash:20].[ext]`,
          options: {},
        },
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin('style.css'),
    new HtmlWebpackPlugin({
      template: './index.ejs',
      inject: false,
      baseUrl: CONTEXT_ROOT,
      hashTime: new Date().getTime(),
    }),
  ],
  devServer: {
    port: 3000,
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, 'build'),
  },
};
