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
        resource_content:params.resource_content,
        icon_url:params.icon_url,
        download_src:params.download_src
      };

      var entity=new model(data);

      entity.validate(function(err) {
        console.log(err); // Will tell you that null is not allowed.
      });



    model.find({resource_name:data.resource_name},function(err,list){
        if(!err){
          if(list.length>0){
            call({
                type:1,
                msg:'"'+data.resource_name+'"重复'
              })
          }else {
              entity.save((err, fluffy) =>{
                console.log('entity',entity,err);
                if(!err){
                call(fluffy);
                entity={};
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
  edit:function(model,params,call){
    console.log('soft_content.edit is open');
      var data={
      };
    if(params.resource_name){
      data.resource_name=params.resource_name;
    }
    if(params.resource_type){
      data.resource_type=params.resource_type;
    }
    if(params.resource_size){
      data.resource_size=params.resource_size;
    }
    if(params.resource_attr){
      data.resource_attr=params.resource_attr;
    }
    if(params.resource_web){
      data.resource_web=params.resource_web;
    }
    if(params.soft_status){
      data.soft_status=params.soft_status;
    }
    if(params.icon_url){
      data.icon_url=params.icon_url;
    }
    if(params.resource_content){
      data.resource_content=params.resource_content;
    }
    if(params.download_src){
      data.download_src=params.download_src;
    }
      model.update({ _id: params.id }, data, function(err,up){
        call(up);
      });
  },
  search:function(model,params,call){
    console.log('soft_content.search is open');
      var query={
          // soft_status:params.soft_status||"1" //'启用状态(0：未启用，1：启用)',
      }
      var limit=params.limit||20;
      if(params.id){
        query._id=params.id;
      }
      if(params.sid){
          query.id=params.sid;
      }
       if(params.resource_type){
        query.resource_type=params.resource_type
      }
      if(params.resource_name){
        query.resource_name=params.resource_name
      }
    if(Object.keys(query).length==0){
     /* call({
        type:-1,
        msg:'缺少请求参数！'
      });
      return*/
    }
      console.log('query:',query,params);
      model.find(query).limit(limit).exec(function(err,list){
        call(list);
      });
  },
}

module.exports=action;


