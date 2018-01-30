/**
 * Created by danlu on 2018/1/24.
 */

const mongoose=require('mongoose');
var db = mongoose.connection;
/*{
 "soft_name":"postceshiwww",
 "soft_status":"1",
 "soft_parent_code":"5a699870316412a0416773b3"
 }*/
const action={
  create:function(model,params,call){
    console.log('soft_type.create is open');
      var data={
        soft_parent_code:params.soft_parent_code||"TE",
        soft_name:params.soft_name||''
      };

     /* entity.validate(function(err) {
        console.log(err); // Will tell you that null is not allowed.
      });*/
      model.find({soft_parent_code:data.soft_parent_code,soft_name:data.soft_name},function(err,list){ //验重
        if(!err){
          if(list.length>0){
            call({
              status:0,
              data:{
                type:1,
                msg:'"'+data.soft_name+'"重复'
              }
            });
          }else {
            model.find({soft_parent_code:data.soft_parent_code}).sort({"soft_code":"-1"}).exec(function(err,docs){ //添加查询
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
                console.log(data);
                data.soft_code=data.soft_parent_code+soft_code;
                data.soft_status=1 //'启用状态(0：未启用，1：启用)',
                var entity=new model(data);
                entity.save((err, fluffy) =>{ //保存
                  if(!err){
                     call(fluffy);
                  }else{
                    call({
                      status:0,
                      data:{
                        type:-1,
                        msg:'保存失败！'
                      }
                    });
                  }
              })
              }else{
                call({
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
  },
  update:function(model,params,call){
    console.log('soft_type.update is open');
      var data={
        soft_code:params.soft_code,
        soft_name:params.soft_name
      };

      model.update({ soft_code: params.soft_code }, { $set: { soft_name:params.soft_name }}, function(err,up){
        call(up);
      });


  },
  gettype:function(model,params,call){
    console.log('soft_type.gettype is open');


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
        call(list);
      })

  },
}

module.exports=action;


