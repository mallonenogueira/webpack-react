const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    "main-app": "./src/index.js"
  },
  module: {
    rules: [
      {
        test: /\.m?jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  output: {
    filename: "[name].[hash].js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "public/index.html"
    }),
    new CopyWebpackPlugin([{ from: "./public", to: "./" }])
  ],
  resolve: {
    modules: [path.resolve(__dirname, 'src'), 'node_modules']
  },
  // optimization: {
  //   splitChunks: {
  //     cacheGroups: {
  //       vendor: {
  //         test: /[\\/]node_modules[\\/]/,
  //         name: "vendors",
  //         chunks: "all"
  //       }
  //     }
  //   }
  // }
};
