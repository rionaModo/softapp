var path=require('path');
module.exports = {
  entry: "./app/main.js",
  output: {
    path: path.join(__dirname, '/app/public/js'),
    filename: "bundle.js",
    publicPath:'/js/'

  },
  module: {
    loaders: [
      { test: /\.css$/, loader: "style-loader!css-loader" }
    ]
  }
};