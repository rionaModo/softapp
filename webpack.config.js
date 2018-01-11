var path=require('path');
module.exports = {
  entry: "./app/main.js",
  output: {
    path: path.join(__dirname, '/app/public/js'),
    filename: "bundle.js",
    publicPath:'/js/'

  },
  /*module: {
    loaders: [
      { test: /\.css$/, loader: "style-loader!css-loader" },
      { test: /\.jsx$/, loaders: 'jsx-loader' },
      {
        test: /\.js$/, loaders: 'babel-loader',
        query: {
          //添加两个presents 使用这两种presets处理js或者jsx文件
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.js$/,
        loaders: 'jsx-loader',
        query: {
          //添加两个presents 使用这两种presets处理js或者jsx文件
          presets: ['es2015', 'react']
        }
      }
    ]
  }*/
  module:{
    rules:[
      {
        test:/\.js?$/,
        exclude: /node_modules/,
        use: [{
          loader: "babel-loader",
          options: { presets: ["react","es2015"] }
        }],
      },
      { test: /\.css$/, loader: "style-loader!css-loader" }

    ]
  },
  resolve:{
    modules: ['./node_modules']
  }


/*
  module: {

    //使用ES6时，才需要添加此loaders
    loaders:[
      { test: /\.css$/, loader: "style-loader!css-loader" },
      {
        test: /\.js$/,
        loader: 'babel'

      }
    ]
  },
   babel: {
    presets: ['es2015','stage-3'],
   // plugins: ['transform-runtime']
  }*/
};