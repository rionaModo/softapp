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


/*exports=function(call){
  model.findByIdAndUpdate({_id: 'entityId'}, {$inc: { id: 1} }, function(error, counter) {
    if(error)
      return next(error);
    if(!counter){
      (new model({_id:"entityId",id:0})).save(function(){
        call&&call();
      });
    }else {
      call&&call();
    }
  });
}*/

model.schema.pre('save', function(next) {
  var doc = this;
  model.findByIdAndUpdate({_id: '5a713abbfb1ba9620cbaf99b'}, {$inc: { id: 1} }, function(error, counter) {
    if(error){
      next(error);
      return
    }
    if(!counter){
      doc.id=1;
    }else {
      doc.id=counter.id;
      next();
    }

  });
});
module.exports={};


