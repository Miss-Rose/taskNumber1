const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: './src/index.js',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'build'),
    clean: true,
    assetModuleFilename: (pathData) => {
      const filepath = path
        .dirname(pathData.filename)
        .split("/")
        .slice(1)
        .join("/");
      return `${filepath}/[name].[hash][ext][query]`;
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'public', 'index.html')
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({ filename: "style.css" })
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'build')
    },
    port: 3000,
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
          },
        },
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
        ],
      },
      { test: /\.html$/i, loader: "html-loader" },
      {
        test: /\.(png|svg|jpg|jpeg|gif|jfif)$/,
        type: 'asset/resource',
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        type: 'asset/resource',
      },
    ]
  },
  resolve: {
    extensions: [ '*', '.js' ]
  }
};