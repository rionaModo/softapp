/**
 *  链接数据库，对数据的操作来源cotroller
 */

/*if(typeof db=='undefined'){
    mongoose.connect(config.get('app.mongodb.url'),config.get('app.mongodb.options')||{});
    global.db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
}*/

/*db.on('open',function(){
  console.log('db is open');

});*/

var db=require('./db');
module.exports=function(params,call){
  //console.log(params,call)
  //var params=Object.assign({},req.params,req.body);
  console.log('mongodb handle start is ok！',params);
  if(params&&params.c){
    const model=require('./model/'+params.c);
    const cotrollers=require('./cotroller/'+params.c);
    //const middleware=require('./middleware/'+params.c);

    if(params.c&&params.a&&cotrollers[params.a]) {
      var cotroller=cotrollers[params.a]
      cotroller(model,params,function(data,type){
        let dsa={
              status:0,
                  data:data
          }
        call(dsa);
         // console.log('mongodb handle is ok！',dsa);
      })
    }else {
      call({
        status:-1,
        msg:"没有对应的操作!"
      });
    }
  }else{
    call({
      status:-1,
      msg:"没有对应的操作!"
    });
  }
}