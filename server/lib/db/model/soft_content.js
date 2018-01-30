/**
 * 软件内容
 */

var mongoose = require('mongoose')
var Schema = mongoose.Schema
/*
* soft_code：1电脑安全，2聊天工具，3多媒体，4开发工具
*
* */
var  Schema= mongoose.Schema({
  resource_name:{ //资源名字
    type:'String',
    required:true
  },
  resource_type:{ //资源类型id
    type:'String',
    required:true
  },
  icon_url:'String',
  resource_size:{//资源大小 单位M
    type:'String'
  },
  resource_attr:{//资源大小 单位M
    type:'String'
  },
  resource_web:{//官方网站
    type:'String'
  },
  download_src:[{
  }],
 // soft_full_name:'String',
  soft_status:{//资源启用状态
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
}, { collection: "soft_content" ,versionKey: false,timestamps: { createdAt: 'createTime',updatedAt:'createTime' }}); //
var model= mongoose.model('soft_content',Schema);
Schema.method.validate=function(){}
module.exports = model;