/**
 * Created by danlu on 2018/1/24.
 */

const mongoose=require('mongoose');

const action={
  create:function(model,db){
    console.log('soft_type.create is open');

    var opx=function(req,res,next,call){
      var params=Object.assign({},req.query,req.body);

      var entity=new model({
        soft_parent_code:params.soft_parent_code,
        soft_name:params.soft_name||'',
      //  soft_namedd:'nihao',
      //  soft_full_name:1,
        soft_status:params.soft_status //'启用状态(0：未启用，1：启用)',
      })
      entity.validate(function(err) {
        console.log(err); // Will tell you that null is not allowed.
      });
     // entity.save().then((err, fluffy) => {});
      entity.save((err, fluffy) =>{
        if(!err){
           call(fluffy);
           res.json(fluffy);
        }else{

        }
      })
    }
    return opx;
  }
}

module.exports=action;


