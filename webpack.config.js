const webpack = require("webpack");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
// const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

// const autoprefixer = require("autoprefixer");
const path = require("path");

const _module = {
  rules: [
    {
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: {
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env"],
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
            config: {
              path: ".postcssrc",
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

const plugins = [
  // new BundleAnalyzerPlugin({analyzerMode: "static"}),
  new CleanWebpackPlugin(),
  new HtmlWebPackPlugin({
    template: "./public/index.html",
    filename: "./index.html",
  }),
  // new webpack.LoaderOptionsPlugin({
  //   options: {
  //     postcss: [autoprefixer()],
  //   },
  // }),
  new webpack.HotModuleReplacementPlugin(),
];

module.exports = (env, options) => ({
  mode: options.mode,
  optimization: {
    usedExports: true,
  },
  devtool: "inline-source-map",
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
  plugins,
  resolve: {
    extensions: [".js", ".jsx"],
  },
  devServer: {
    contentBase: "./dist",
    historyApiFallback: true,
    hot: true,
  },
});
