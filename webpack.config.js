const path = require('path');
const MinifyPlugin = require('babel-minify-webpack-plugin');

module.exports = {
  entry: [
    'whatwg-fetch',
    './plorth.js'
  ],
  output: {
    path: path.resolve(__dirname),
    filename: 'plorth.min.js'
  },
  plugins: [
    new MinifyPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
};
