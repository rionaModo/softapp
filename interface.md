## 添加分类
  interface：/api/soft_type/create
  method：post
  content-type：json
  eg：{
         "soft_name":"postceshiwww", //分类名 必填  string
         "soft_status":"1",    //是否开启改分类  非必填 string 默认 1（1 开启，0 禁用）
         "soft_parent_code":"5a699870316412a0416773b3" //父分类id ，非必填 string 默认0（表示最外层分类）
     }



## 添加软件详情
  interface：/api/soft_content/create
  method：post
  content-type：json
  eg：{
       "resource_name":"千牛", //软件名 必填  string
       "resource_type":"222",  //软件分类id 必填  string
       "resource_size":"30M", //软件大小 非必填  string
       "resource_attr":"免费软件", //软件属性 非必填  string
       "resource_web":"阿里巴巴", //软件官网 非必填  string
        "icon_url":"",              //软件图标地址 非必填 string
       "download_src":[{ //软件下载链接 必填  Array
       "type":1,    //链接通道id  1 推荐的 2 其他
       "desc":"电信下载",  //下载通道描述
       "url":"www.baidu.com" //下载地址
     }]
     }










数据查询
http://localhost:9051/api/soft_content/search