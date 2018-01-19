
const mongoose=require('mongoose');
var db = mongoose.connection;
const action={
  index:function(Schema){
   var opx=function(req,res,next,call) {
  //  res.json(fluffy);
    return opx;
   }
  },
   userInfo:function(Schema){
    var Schema = Schema||mongoose.Schema({});
    var users=mongoose.model('test',Schema,'users');
    var opx=function(req,res,next,call){
     users.find(function (err, fluffy) {
      db.close();
      call(fluffy);
      res.json(fluffy);
     })
    }
    return opx;
   }
}

module.exports=action;


