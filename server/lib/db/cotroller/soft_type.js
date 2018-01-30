/**
 * Created by danlu on 2018/1/24.
 */

const mongoose=require('mongoose');

/*{
 "soft_name":"postceshiwww",
 "soft_status":"1",
 "soft_parent_code":"5a699870316412a0416773b3"
 }*/
const action={
  create:function(model,db){
    console.log('soft_type.create is open');
    var opx=function(req,res,next,call){
      var params=Object.assign({},req.query,req.body);
      var data={
        soft_parent_code:params.soft_parent_code||"TE",
        soft_name:params.soft_name||'',
        soft_status:params.soft_status //'启用状态(0：未启用，1：启用)',
      };

     /* entity.validate(function(err) {
        console.log(err); // Will tell you that null is not allowed.
      });*/
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
            model.find({soft_parent_code:data.soft_parent_code}).sort({"soft_code":"-1"}).exec(function(err,docs){
              if(!err){
                var soft_code='',
                  pre='';
                var len=data.soft_parent_code.length;
                if(len==2){
                  pre='B';
                }else if(len==6){
                  pre='C';
                }else if(len==10){
                  pre='D';
                }
                if(docs.length==0){
                  soft_code=pre+'000'
                }else {
                 soft_code=docs[0].soft_code;
                  soft_code=(parseInt(soft_code.slice(-3))+1).toString();
                  if(soft_code.length==1){
                    soft_code=pre+'00'+soft_code;
                  }else if(soft_code.length==2){
                    soft_code=pre+'0'+soft_code;
                  }else if(soft_code.length==3){
                    soft_code=pre+soft_code;
                  }
                }



                data.soft_code=data.soft_parent_code+soft_code;
                var entity=new model(data);
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
  update:function(model,db){
    console.log('soft_type.update is open');
    var opx=function(req,res,next,call){
      var params=Object.assign({},req.query,req.body);
      var data={
        id:params.id,
        soft_name:params.soft_name
      };

      model.update({ _id: params.id }, { $set: { soft_name:params.soft_name }}, function(err,up){
        res.json(up);
      });

    }
    return opx;
  },
  gettype:function(model,db){
    console.log('soft_type.gettype is open');
    var opx=function(req,res,next,call){
      var params=Object.assign({},req.query,req.body);

      var query={
        soft_status:"1" //'启用状态(0：未启用，1：启用)',
      }
      if(params.soft_parent_code){
        query.soft_parent_code=params.soft_parent_code
      }
      if(params.soft_name){
        query.soft_name=params.soft_name
      }
      if(params.soft_code){
        query.soft_code=params.soft_code
      }
      console.log('query:',query);
      model.find(query,function(err,list){
        res.json(list);
      })
    }
    return opx;
  },
}

module.exports=action;


