const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  devtool: 'inline-source-map',
  entry: './src/index.js',
  output: {
    path: __dirname + '/build',//'/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: "./build",//'./dist',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve('./index.html'),
    }),
  ],
  module: {
  rules: [{
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    use: ['babel-loader', 'eslint-loader']
  },
  {
    test: /\.less$/,
    use: [
      'style-loader',
      'css-loader',
      'less-loader',
    ],
  },
 ]
}
};