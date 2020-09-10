// const { webpack } = require('webpack');
const path = require('path');

module.exports = {
  entry: './src/main.js',
  mode: process.env.NODE_ENV,
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react',
            ],
          },
        },
      },
      {
        test: /\.s?[ac]ss$/i,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
  devServer: {
    // contentBase: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    port: 8080,
    compress: true,
    proxy: {
      '/dist': 'http://localhost:3000',
      '/': 'http://localhost:3000',
    },
  },
};
