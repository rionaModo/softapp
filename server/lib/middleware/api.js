module.exports= function(req,res,next){
  var params=req.params;
  console.log(params);
  if(params&&params.c){
    var user=require('../db/cotroller/'+params.c)(params.c,params.a,function(data){
      res.json(data);
    });
  }

}