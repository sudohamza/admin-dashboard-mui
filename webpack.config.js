path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const config = {
  // Select entry point
  entry: path.resolve(__dirname + "/src/index.tsx"),
  // Select target eg. web or electron
  target: "web",
  // Output path for compiled code
  output: {
    path: path.resolve(__dirname + "/public/js/"),
    filename: "bundle.js",
    publicPath: "/js",
  },
  // Modules for technologies like HTML CSS JSX TS TSX
  module: {
    rules: [
      {
        test: /\.tsx$/,
        exclude: /node_modules/,
        use: "ts-loader",
      },
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: "ts-loader",
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname + "/src/index.html"),
      filename: "../index.html",
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname + "/public"),
    },
    compress: true,
    port: 3000,
    historyApiFallback: true,
  },
  devtool: "eval",
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
};

module.exports = (env, argv) => {
  // if (argv.mode === "development") {
  //   config.output.publicPath = "/";
  // }
  return config;
};
