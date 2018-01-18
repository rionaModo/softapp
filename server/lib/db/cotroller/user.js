/**
 * Created by danlu on 2018/1/18.
 */

const user=require('../model/user');
const action={
   userInfo:function(){}
}

module.exports=function(c,a,call){
 if(c&&a&&call){//根据数据库进行查询数据

 }else {
  call(onActionErr());
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