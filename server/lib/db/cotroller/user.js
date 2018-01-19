/**
 * Created by danlu on 2018/1/18.
 */
const mongoose=require('mongoose');
var db = mongoose.connection;
const user=require('../model/user');
const action={
  index:function(db,Schema){

  },
   userInfo:function(Schema){
    console.log('Schema',Schema);
    var Schema = Schema||mongoose.Schema({});
    var users=mongoose.model('test',Schema,'users');
    var opx=function(req,res,next,call){
     users.find(function (err, fluffy) {
      db.close();
      res.json(fluffy);
     })

    }
    return opx;
   }
}

module.exports=function(req,res,next,call){
 var params=Object.assign({},req.params)
 if(params.c&&params.a&&call&&action[params.a]){//根据数据库进行查询数据
  var Schema=user[params.a]();
  return action[params.a](Schema)(req,res,next,call);
 }else {
  onActionErr();
 }
}

function onActionErr(type){
 var type=type||null;
 switch (type){
  case 1://control 没有对应的操作
   return {
    status:-1,
    msg:"没有对应的操作!"
   }
  case 2: //control 操作数据库失败
   return {
    status:-1,
    msg:"操作数据库失败!"
   }
  default:
   return {
    status:-1,
    msg:"操作失败!"
   }
 }
}