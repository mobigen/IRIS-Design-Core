const path = require("path"),
  MiniCssExtractPlugin = require("mini-css-extract-plugin"),
  FileIncludeWebpackPlugin = require("file-include-webpack-plugin"),
  SvgSpriteLoaderPlugin = require("svg-sprite-loader/plugin");

module.exports = {
  
  watchOptions: {
    ignored: ["./node_modules/**", "./clean-dist.js"]
  },

  entry: {
    "main": "./src/js/index.js",
  },

  module: {
    rules: [
      // Js
      {
        test: /\.(js|jsx)$/,
        exclude: /[\\/]node_modules[\\/]/,
        use: {
          loader: "babel-loader",
        },
      },

      // Font
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        include: path.resolve(__dirname, "./src/core-style/fonts"),
        use: [
          {
            loader: "file-loader",
            options: {
              name: "fonts/[name].[ext]",
            },
          },
        ],
      },

      // SCSS - Core
      // {
      //   test: /\.(sass|scss)$/,
      //   include: path.resolve(__dirname, "./src/core-style/scss"),
      //   use: [
      //     MiniCssExtractPlugin.loader,
      //     "css-loader", // css를 읽어들이기
      //     "postcss-loader", // 벤더프리픽스 대응
      //     "sass-loader", // scss to css
      //   ],
      // },

      // SCSS - Product
      {
        test: /\.(sass|scss)$/,
        include: path.resolve(__dirname, "./src/scss"),
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader", // css를 읽어들이기
          "postcss-loader", // 벤더프리픽스 대응
          "sass-loader", // scss to css
        ],
      },

      // Image(png) - Core
      {
        test: /\.(png|jp(e*)g|gif|ico)$/,
        include: path.resolve(__dirname, "./src/core-style/images"),
        use: {
          loader: "file-loader",
          options: {
            outputPath: "./",
            name: "[path][name].[ext]",
            // 가져올 경로에서 해당 경로만 지우고 가져온다.
            context: "src/core-style",
          },
        },
      },

      // Image(png) - Product
      {
        test: /\.(png|jp(e*)g|gif|ico)$/,
        include: path.resolve(__dirname, "./src/images"),
        use: {
          loader: "file-loader",
          options: {
            outputPath: "./",
            name: "[path][name].[ext]",
            // 가져올 경로에서 해당 경로만 지우고 가져온다.
            context: "src/",
          },
        },
      },

      // Image(svg) - Core
      {
        test: /\.svg$/,
        include: path.resolve(__dirname, "./src/core-style/images/icon"),
        use: {
          loader: "svg-sprite-loader",
          options: {
            outputPath: "./",
            name: "[path][name].[ext]",
            // 가져올 경로에서 해당 경로만 지우고 가져온다.
            context: "src/core-style",
          },
        },
      },

      // Image(svg) - Product
      {
        test: /\.svg$/,
        include: path.resolve(__dirname, "./src/images/icon"),
        use: {
          loader: "svg-sprite-loader",
          options: {
            outputPath: "./",
            name: "[path][name].[ext]",
            // 가져올 경로에서 해당 경로만 지우고 가져온다.
            context: "src",
          },
        },
      },
    ],
  },

  plugins: [
    // index.js에 포함된 css를 별도의 .css 파일 형식으로 추출한다.
    new MiniCssExtractPlugin({
      filename: "css/style.min.css",
    }),

    // 공통 컴포넌트 영역 모듈화
    new FileIncludeWebpackPlugin({
      source: "./src/html/pages",
      replace: [
        {
          regex: /\[\[FILE_VERSION]]/g,
          to: "v=1.0.0",
        },
      ],
      loader: "prettier-loader",
      destination: "../views",
    }),

    new SvgSpriteLoaderPlugin({}),
  ],

  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "./js/[name].bundle.js",
    publicPath: "../",
  },
};
