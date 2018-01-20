/**
 * Created by danlu on 2018/1/18.
 */

var mongoose = require('mongoose')
var Schema = mongoose.Schema
var user={
    userInfo1:function(){
     return  new Schema({
       title: {
         type: String,
         required: true
       },
       contents: String,
       author: String,
       category: {
         type: ObjectId,
         ref: 'Category' //关联Category表的_id
       },
       createTime: {
         type: Date,
         default: Date.now
       }
     }, {
       connection: 'Article', //模型名称,
     })
    },
  userInfo:function(){

     return
  }
}

var  Schema= mongoose.Schema({name:String});
module.exports = mongoose.model('users',Schema,'users');