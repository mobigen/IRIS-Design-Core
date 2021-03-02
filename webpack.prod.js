const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserJSPlugin = require("terser-webpack-plugin");

module.exports = merge(common, {
  mode: "production",

  // CSS Minify
  optimization: {
    minimizer: [new TerserJSPlugin({
      cache: false,
    }), new OptimizeCSSAssetsPlugin({})],
  },
});
