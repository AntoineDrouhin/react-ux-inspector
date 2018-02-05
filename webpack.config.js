const path = require("path");
module.exports = {
  entry: ["./UxWatcher.js"],
  output: {
    path: path.resolve(__dirname, "lib"),
    filename: "library.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
};