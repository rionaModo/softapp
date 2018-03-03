/**
 * Created by danlu on 2018/1/24.
 */


/*{
 "soft_name":"postceshiwww",
 "soft_status":"1",
 "soft_parent_code":"5a699870316412a0416773b3"
 }*/

var mongoose = require('mongoose')
var model=mongoose.model('soft_content');
var config=require('config');
var id=config.get('app.mongodb.auto_inc.soft_content');
if(!!id){
  console.log('请先添加用于自增存储的数据id');
}
model.schema.pre('save', function(next) {
  var doc = this;
  model.findByIdAndUpdate({_id: id}, {$inc: { list_num: 1} }, function(error, counter) {
    if(error){
      next(error);
      return
    }
    if(!counter){
      doc.id=1;
    }else {
      doc.id=counter.list_num;
      next();
    }

  });
});
module.exports={
  login:function(){

  }
};


