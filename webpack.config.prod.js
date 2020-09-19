var HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");
const base = require("./webpack.config.base.js");

module.exports = {
  ...base,
  mode: "production",
  plugins: [
    ...base.plugins,
    new HtmlWebpackPlugin({
      tittle: "MY APP",
      template: "src/assets/index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
      chunkFilename: "[id].[contenthash.css",
      ignoreOrder: false, //Enable to remove warning about conflicting order
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: "../",
            },
          },
          "css-loader",
        ],
        // use: ["style-loader", "css-loader"],     //上面的use用于抽成CSS，这里的use用于提取CSS
      },
    ],
  },
};
