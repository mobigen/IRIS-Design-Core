const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "development",

  watch: true,
  
  watchOptions: {
    ignored: [
      "./node_modules/**",
      "./prod.env.js",
      "./clean-dist.js",
      "./filter-images.js",
      "./move-images",
    ],
  },
});
