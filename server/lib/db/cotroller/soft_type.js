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
        soft_parent_code:params.soft_parent_code||"0",
        soft_name:params.soft_name||''
      };
      data.soft_status=params.soft_status||"0";
      if(params.soft_parent_code==''){
          call({
              type:-1,
              msg:'父分类id不能为空！'
          });
          return
      }
      if(params.soft_name==''){
          call({
              type:-1,
              msg:'分类名不能为空！'
          });
          return
      }
     /* entity.validate(function(err) {
        console.log(err); // Will tell you that null is not allowed.
      });*/
      model.find({soft_parent_code:data.soft_parent_code,soft_name:data.soft_name},function(err,list){ //验重
        if(!err){
          if(list.length>0){
            call({
                type:1,
                msg:'"'+data.soft_name+'"重复'
              });
          }else {
            model.find({soft_parent_code:data.soft_parent_code}).sort({"soft_code":"-1"}).exec(function(err,docs){ //添加查询
              if(!err){
                var soft_code='',
                  pre='';
                var len=data.soft_parent_code.length;
                if(len==2){
                  pre='b';
                }else if(len==6){
                  pre='c';
                }else if(len==10){
                  pre='d';
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
                        type:-1,
                        msg:'保存失败！'
                      });
                  }
              })
              }else{
                call({
                    type:-1,
                    msg:'保存失败！'
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
  search:function(model,params,call){
    console.log('soft_type.search is open');
     params.limit=params.limit||20;
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
      model.find(query).limit(params.limit).exec(exec(function(err,list){
        call(list);
      })

  },
}

module.exports=action;


