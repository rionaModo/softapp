
const mongoose=require('mongoose');
//var db = mongoose.connection;
const action={
   login:function(model,params,call){
    console.log('user login is ok');
    var data={
     userAccount:params.userAccount,
     password:params.password
    };

    var entity=new model(data);
    model.find(data,'userName userAccount',function(err,list){
     if(!err&&list.length>0){
      call(list)
     }else {
      call({
       type:-1,
       msg:'登录失败'
      })
     }
    })
   }
}

module.exports=action;


