/**
 * Created by riona on 2017/12/17.
 */
var mongoose=require('mongoose');



mongoose.connect('mongodb://localhost:27017/softapp');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
/*var opendb=function(callback){

  var Schema =  mongoose.Schema({name:String});
  var users=mongoose.model('test',Schema,'users');
  //var mongoModel = mongoose.model('test', Schema);
  new users({name:'2018-1-19-2'}).save(function (err, fluffy) {
    console.error(fluffy);
    db.close()
  })
}
opendb();*/
module.exports=function(req,res,next){
  var params=Object.assign({},req.params)
  if(params&&params.c){
    require('../db/cotroller/'+params.c)(req,res,next,function(data){
      //console.log('mongodb handle is ok！');
    })
  }
}