/**
 * Created by danlu on 2018/2/26.
 */
module.exports = function(req, res, data) {
  console.log('api middleware is ok');
  var params=req.params;

  if(params.c=='user'&&params.a=='login'){
    console.log('api middlewares is ok');
    require('./login')(req, res, data);
  }
}