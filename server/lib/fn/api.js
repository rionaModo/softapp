


var db=require('../db')
var mw=require('./middleware')
//module.exports = router;
module.exports = function(req, res, next) {
    console.log('api is open');
  var params=req.params;
  var params=Object.assign({},req.params,req.body,req.query);
 // mw(req, res, next);
  if(params&&params.c){
   var collect=db(params,function(data){
     mw(req, res, data)
     res.json(data);
   });
  }else{
    res.json({
      status:-1,
      msg:"操作失败!"
    });
  }
};