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



 
  module: {
    loaders: [
      {test:/\.jsx$/, loaders:['jsx?harmony']}
    ],
    //使用ES6时，才需要添加此loaders
    loaders:[
      {
        test: /\.jsx?$/,
        loader: 'babel',
     //   include: ROOT_PATH,
        query: {
          //添加两个presents 使用这两种presets处理js或者jsx文件
          presets: ['es2015', 'react']
        }
      }
    ]
  },
   babel: {
    presets: ['es2015','stage-3'],
    plugins: ['transform-runtime']
  },
};