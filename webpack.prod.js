
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserWebpackPlugin = require("terser-webpack-plugin");

module.exports = merge(common, {
  mode: "production",

  // CSS Minify
  // optimization: {
  //   minimizer: [new TerserWebpackPlugin({
  //     cache: false,
  //   }), new OptimizeCSSAssetsPlugin({})],
  // },


});
