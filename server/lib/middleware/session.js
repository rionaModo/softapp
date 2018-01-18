/**
 * Created by danlu on 2018/1/18.
 */
var session = require('express-session');
var FileStore = require('session-file-store')(session);

module.exports= function(conf){
  var identityKey =conf.sId|| 'JSSESSION';
 /* console.log(identityKey);
  app.use();*/
  return session({
    name: identityKey,
    secret: 'softappseesion',  // 用来对session id相关的cookie进行签名
    store: new FileStore(conf),  // 本地存储session（文本文件，也可以选择其他store，比如redis的）
    saveUninitialized: false,  // 是否自动保存未初始化的会话，建议false
    resave: false,  // 是否每次都重新保存会话，建议false
    cookie: {
      maxAge: 1800 * 1000  // 有效期，单位是毫秒  半小时
    }
  })
}




