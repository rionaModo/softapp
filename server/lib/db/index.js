/**
 *  链接数据库，对数据的操作来源cotroller
 */
var mongoose=require('mongoose');
var config=require('config');
/*if(typeof db=='undefined'){
    mongoose.connect(config.get('app.mongodb.url'),config.get('app.mongodb.options')||{});
    global.db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
}*/

/*db.on('open',function(){
  console.log('db is open');

});*/
console.log('index is open');
module.exports=function(req,res,next){

    mongoose.connect(config.get('app.mongodb.url'),config.get('app.mongodb.options')||{});
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));

  var params=Object.assign({},req.params);
  if(params&&params.c){
    const model=require('./model/'+params.c);
    const cotrollers=require('./cotroller/'+params.c);
    if(params.c&&params.a&&cotrollers[params.a]) {
      var cotroller=cotrollers[params.a]
       // db.on('open',function(){
            cotroller(model,db)(req,res,next,function(data){
                console.log('mongodb handle is ok！');
            })
      //  })
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