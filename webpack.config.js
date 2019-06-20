const path = require("path");

module.exports = {
  entry: {
    index: "./src/index.js",
    test1: "./src/test1.js",
    test2: "./src/test2.js",
    test3: "./src/test3.js",
    test4: "./src/test4.js"
  },
  mode: "production",
  output: {
    filename: "[name].js",
    path: __dirname + "/dist"
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      }
    ]
  }
};
