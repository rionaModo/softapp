/**
 * 软件分类
 */

var mongoose = require('mongoose')
var Schema = mongoose.Schema
/*
* soft_code：1电脑安全，2聊天工具，3多媒体，4开发工具
*
* */
var  Schema= mongoose.Schema({
  soft_parent_code:{
    type:'String',
    default:"TE"
  },
  soft_name:{
    type:'String',
    required:true
  },
  soft_code:{
    type:'String'
  },
 // soft_full_name:'String',
  soft_status:{
    type:'String',
    default:1
  }, //'启用状态(0：未启用，1：启用)',
  createTime: {
    type: Date,
    default: Date.now
  },
  updateTime: {
    type: Date,
    default: Date.now
  }
}, { collection: "soft_type" ,versionKey: false,timestamps: { createdAt: 'createTime',updatedAt:'createTime' }}); //
var model= mongoose.model('soft_type',Schema);
Schema.method.validate=function(){}
module.exports = model;