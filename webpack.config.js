var path=require('path');
module.exports = {
  entry: "./app/main.js",
  output: {
    publicPath:'/app/public/js/',
    path: path.join(__dirname, '/app/public/js'),
    filename: "bundle.js"
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: "style-loader!css-loader" }
    ]
  }
};