/**
 *  链接数据库，对数据的操作来源cotroller
 */
var mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/softapp');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

module.exports=function(req,res,next){
  var params=Object.assign({},req.params)
  if(params&&params.c){
    require('../db/cotroller/'+params.c)(req,res,next,function(data){
      //console.log('mongodb handle is ok！');
    })
  }
}