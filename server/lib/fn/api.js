module.exports = function(req, res, next) {
  //console.log(api);
  var params=req.params;
  res.json({
    status:-1,
    msg:"操作失败!"
  });
 /* if(params&&params.c){

    var collect=require('../db/cotroller/')(req,res,next);
   /!* var user=require('../db/cotroller/'+params.c)(params.c,params.a,function(data){
      res.json(data);
    });*!/
  }else {
    res.json({
      status:-1,
      msg:"操作失败!"
    });
  }*/

}




//module.exports = router;
module.exports = function(req, res, next) {
  var params=req.params;
  if(params&&params.c){

  /*  res.json({
      status:-1,
      msg:"操作失败ww!"
    });*/
   var collect=require('../db')(req,res,next);
  }else{
    res.json({
      status:-1,
      msg:"操作失败!"
    });
  }


};