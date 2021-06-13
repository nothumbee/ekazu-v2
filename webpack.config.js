const HtmlWebPackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const path = require("path");
const { equals } = require("rambda");
// const MomentLocalesPlugin = require("moment-locales-webpack-plugin");

const _module = {
  rules: [
    {
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: {
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"],
          plugins: ["babel-plugin-styled-components"],
        },
      },
    },
    {
      test: /\.html$/,
      use: [
        {
          loader: "html-loader",
        },
      ],
    },
    {
      test: /\.css$/i,
      use: ["style-loader", "css-loader"],
    },
    {
      test: /\.s[ac]ss$/i,
      use: [
        "style-loader",
        {
          loader: "css-loader",
          options: {
            sourceMap: true,
            modules: {
              mode: "global",
              localIdentName: "[local]_[hash:base64:5]",
            },
          },
        },
        {
          loader: "postcss-loader",
          options: {
            sourceMap: true,
            postcssOptions: {
              config: path.resolve(__dirname, ".postcssrc"),
            },
          },
        },
        {
          loader: "sass-loader",
          options: {
            sourceMap: true,
          },
        },
      ],
    },
    {
      test: /\.less$/,
      use: [
        {
          loader: "style-loader",
        },
        {
          loader: "css-loader", // translates CSS into CommonJS
        },
        {
          loader: "less-loader", // compiles Less to CSS
          options: {
            lessOptions: {
              // If you are using less-loader@5 please spread the lessOptions to options directly
              modifyVars: {
                "primary-color": "red",
                "link-color": "#1DA57A",
                "border-radius-base": "2px",
                "@form-item-margin-bottom": "12px",
                // "list-item-padding-sm": 0,
              },
              javascriptEnabled: true,
            },
          },
        },
      ],
    },
    {
      test: /\.(woff|woff2|eot|ttf|otf)$/,
      use: [
        {
          loader: "file-loader",
          options: {
            name: "[name].[ext]",
            outputPath: "fonts/",
          },
        },
      ],
    },
    {
      test: /\.svg$/,
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            svgo: false,
            svgoConfig: {},
          },
        },
      ],
    },
  ],
};

const plugins = (mode) => [
  // new BundleAnalyzerPlugin({
  //   analyzerMode: isProductionMode(mode) ? false : "server",
  //   analyzerPort: 7567,
  // }),
  new CleanWebpackPlugin(),
  new HtmlWebPackPlugin({
    template: "./public/index.html",
    filename: "./index.html",
  }),
  // new MomentLocalesPlugin({
  //   localesToKeep: ["cs"],
  // }),
  new CopyPlugin({
    patterns: [
      {
        from: path.resolve(__dirname, "public/_redirects"),
        to: path.resolve(__dirname, "dist"),
      },
    ],
  }),
];

const isProductionMode = equals("production");

module.exports = (env, options) => ({
  mode: options.mode,
  target: "web",
  optimization: {
    usedExports: true,
  },
  // devtool: isProductionMode(options.mode) ? false : "inline-source-map",
  entry: {
    index: "./src/index.js",
  },
  output: {
    filename: "[name].bundle.js",
    chunkFilename: "[name].bundle.js",
    publicPath: "/",
    path: path.resolve(__dirname, "dist"),
  },
  module: _module,
  plugins: plugins(options.mode),
  resolve: {
    extensions: [".js", ".jsx"],
  },
  devServer: {
    contentBase: "./dist",
    historyApiFallback: true,
    hot: true,
  },
});
