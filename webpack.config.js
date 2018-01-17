var path=require('path');
module.exports = {
  entry: "./client/main.js",
  output: {
    path: path.join(__dirname, '/client/public/js'),
    filename: "bundles.js",
    publicPath:'/js/'

  },
  module:{
    rules:[
      {
        test:/\.vue?$/,
        exclude: /node_modules/,
        loader: "vue-loader"
      },
      {
        test:/\.js?$/,
        exclude: /node_modules/,
        use: [{
          loader: "babel-loader",
          options: {
            presets: ["es2015","stage-3"],
  //          plugins: ['transform-runtime']
          }
        }
      ],
      },
      { test: /\.(css|less)$/,
        use:["style-loader","css-loader","less-loader"]
      }

    ]
  },
  resolve:{
    modules: ['./node_modules']
  },
  devtool:'#source-map'


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


//module.exports.devtool = '#source-map';