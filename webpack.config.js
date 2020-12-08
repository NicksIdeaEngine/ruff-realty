const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ESLintPlugin = require('eslint-webpack-plugin')

const PATH_SOURCE = path.join(__dirname, './src')
const PATH_DIST = path.join(__dirname, './dist')

module.exports = {
  entry: {
    main: path.join(PATH_SOURCE, './index.js'),
  },
  output: {
    path: PATH_DIST,
    filename: 'js/[name].[contenthash].js',
  },
  target: 'web',
  devServer: {
    contentBase: PATH_DIST,
    host: 'localhost',
    port: 8080,
    open: 'firefox',
    historyApiFallback: true,
    overlay: {
      errors: true,
      warnings: true,
    },
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-env',
                {
                  debug: true,
                  useBuiltIns: 'usage',
                  corejs: 3,
                },
              ],
            ],
          },
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              implementation: require('sass'),
              sassOptions: {
                fiber: require('fibers'),
              },
            },
          },
        ],
      },
      { test: /\.css$/i, use: ['style-loader', 'css-loader'] },
      {
        test: /\.(woff|woff2|eot|ttf|otf|svg|png|jpe?g|gif)$/i,
        loader: 'file-loader',
        options: {
          publicPath: 'assets',
        },
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(PATH_SOURCE, './index.html'),
    }),
    new ESLintPlugin(),
  ],
}
