/**
 * Created by danlu on 2018/1/24.
 */


/*{
  "resource_name":"千牛",
  "resource_type":"222",
  "resource_size":"30M",
  "resource_attr":"免费软件",
  "resource_web":"阿里巴巴",
  "icon_url":"",
  "download_src":[{
  "type":1,
  "desc":"电信下载",
  "url":"www.baidu.com"
}]
}*/

const mongoose=require('mongoose');
var db = mongoose.connection;
const action={
  create:function(model,params,call){
    console.log('soft_content.create is open');
      var data={
        resource_name:params.resource_name||'',
        resource_type:params.resource_type,
        resource_size:params.resource_size,
        resource_attr:params.resource_attr,
        resource_web:params.resource_web,
        icon_url:params.icon_url,
        download_src:params.download_src
      };
      var entity=new model(data)
      entity.validate(function(err) {
        console.log(err); // Will tell you that null is not allowed.
      });
      model.find({resource_name:data.resource_name},function(err,list){
        if(!err){
          if(list.length>0){
            call({
              status:0,
              data:{
                type:1,
                msg:'"'+data.resource_name+'"重复'
              }
            })
          }else {
            entity.save((err, fluffy) =>{
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
          }
        }else {
          console.log('验重失败！');
        }
      })
  },
  update:function(model,params,call){
    console.log('soft_content.update is open');
      var data={
        id:params.id,
        soft_name:params.soft_name
      };
      model.update({ _id: params.id }, { $set: { download_src:params.download_src }}, function(err,up){
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


