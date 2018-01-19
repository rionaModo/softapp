/**
 *  链接数据库，对数据的操作来源cotroller
 */
var mongoose=require('mongoose');
var config=require('config');

mongoose.connect(config.get('app.mongodb.url'));
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

module.exports=function(req,res,next){
  var params=Object.assign({},req.params);
  if(params&&params.c){
    const schemas=require('./model/'+params.c);
    const cotrollers=require('./cotroller/'+params.c);
    if(params.c&&params.a&&cotrollers[params.a]&&schemas[params.a]) {
      var Schema = schemas[params.a]();
      var cotroller=cotrollers[params.a]

     cotroller(Schema)(req,res,next,function(data){
       console.log('mongodb handle is ok！');
     })
      var m= cotroller(Schema);
      console.log('cotroller',m);
    }else {
      res.json({
        status:-1,
        msg:"没有对应的操作!"
      });
    }
  }else{
    res.json({
      status:-1,
      msg:"没有对应的操作!"
    });
  }
}