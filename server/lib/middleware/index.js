
var middleware={
  session:require('./session')
}
module.exports= function(app,config){
  app.use(middleware.session(config.session))
//  middleware.session(app,config.session)
}