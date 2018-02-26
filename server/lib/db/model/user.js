/**
 * 软件分类
 */

var mongoose = require('mongoose')

/*
 * soft_code：1电脑安全，2聊天工具，3多媒体，4开发工具
 *
 * */
var  Schema= mongoose.Schema({
  userName:{
    type:'String'
  },
  userAccount:{
    type:'String'
  },
  password:{
    type:'String',
  }
}, { collection: "user" ,versionKey: false}); //
var model= mongoose.model('user',Schema);

module.exports = model;