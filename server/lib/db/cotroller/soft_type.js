/**
 * Created by danlu on 2018/1/24.
 */

const mongoose=require('mongoose');

const action={
  create:function(model,db){
    console.log('soft_type.create is open');
    var opx=function(req,res,next,call){
      var params=Object.assign({},req.query,req.body);
      var data={
        soft_parent_code:params.soft_parent_code||"0",
        soft_name:params.soft_name||'',
        soft_status:params.soft_status //'启用状态(0：未启用，1：启用)',
      };
      var entity=new model(data)
      entity.validate(function(err) {
        console.log(err); // Will tell you that null is not allowed.
      });
      model.find({soft_parent_code:data.soft_parent_code,soft_name:data.soft_name},function(err,list){
        if(!err){
          if(list.length>0){
            res.json({
              status:0,
              data:{
                type:1,
                msg:'"'+data.soft_name+'"重复'
              }
            });
          }else {
            entity.save((err, fluffy) =>{
              if(!err){
              call(fluffy);
              res.json(fluffy);
            }else{
              res.json({
                status:0,
                data:{
                  type:-1,
                  msg:'保存失败！'
                }
              });
            }
          })
          }
        }else {
          console.log('验重失败！');
        }
      })
    }
    return opx;
  },
  delete:function(model,db){
    console.log('soft_type.delete is open');
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
  },
}

module.exports=action;


