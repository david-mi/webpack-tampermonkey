const path = require("path");

module.exports = {
  entry: path.resolve(__dirname, "src/app.ts"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: {
          loader: "ts-loader"
        },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  devtool: "source-map",
  mode: "development",
  devServer: {
    static: path.resolve(__dirname, './dist'),
    open: true,
    port: 4000
  }
};