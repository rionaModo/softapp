
var middleware={
  session:require('./session')
}
module.exports= function(app,config){
  middleware.session(app,config.session)
}