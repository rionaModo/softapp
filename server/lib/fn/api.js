



//module.exports = router;
module.exports = function(req, res, next) {
    console.log('api is open');
  var params=req.params;
  var params=Object.assign({},req.params,req.body);
  if(params&&params.c){
   var collect=require('../db')(params,function(data){
     res.json(data);
   });
  }else{
    res.json({
      status:-1,
      msg:"操作失败!"
    });
  }
};