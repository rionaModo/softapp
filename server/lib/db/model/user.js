/**
 * Created by danlu on 2018/1/18.
 */

const mongoose = require('mongoose')
const Schema = mongoose.Schema
var user={
    userInfo:function(){
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
    }
}
module.exports = user;