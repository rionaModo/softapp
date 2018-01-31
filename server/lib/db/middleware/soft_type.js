/**
 * Created by danlu on 2018/1/24.
 */


/*{
 "soft_name":"postceshiwww",
 "soft_status":"1",
 "soft_parent_code":"5a699870316412a0416773b3"
 }*/
var mongoose = require('mongoose')
mongoose.model();
model.schema.pre('save', function(next) {
  var doc = this;
  console.log('ss',doc)
  model.findByIdAndUpdate({_id: 'entityId'}, {$inc: { id: 1} }, function(error, counter) {
    if(error)
      return next(error);
    if(!counter){
      model.save({_id:"entityId",id:0})
    }
    next();
  });
});
module.exports=action;


