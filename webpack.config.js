const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  entry: path.join(__dirname, 'src/index.js'),
  output: {
    path: path.join(__dirname, 'build/static/js'),
    filename: `bundle.min.js`,
    publicPath: '',
  },
  module: {
    rules: [
       { test: /\.css$/, use: [ 'style-loader', 'css-loader' ] },
      {
        test: /\.js/,
        exclude: /node_modules/,
        options: {
          cacheDirectory: true,
          presets: [
            '@babel/preset-env',
            ['@babel/preset-react', { runtime: 'automatic' }],
          ],
        },
        loader: 'babel-loader',
      },
    ],
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
};
