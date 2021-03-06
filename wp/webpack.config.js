const path = require("path");


module.exports = {
    entry: "./src/index.js",
    output: {
      path: path.join(__dirname, "build"),
      filename: "index.js",
  },
  module: {
    rules: [
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
    {
      test: /\.(png|svg|jpg|jpeg|gif)$/i,
      type: 'asset/resource',
      },
      { test: /\.js$/, use: ["babel-loader"], exclude: /node_modules/ },
    ]
  }
  };