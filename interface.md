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
       "resource_web":"阿里巴巴", //软件官网 g非必填  strin
       "soft_status:"",  //是否展示该软件  非必填  默认1 展示，0不展示
        "icon_url":"",              //软件图标地址 非必填 string
        "resource_content":"",//软件详情 非必填  strin
       "download_src":[{ //软件下载链接   Array
       "type":1,    //链接通道id  1 推荐的 2 其他
       "desc":"电信下载",  //下载通道描述
       "url":"www.baidu.com" //下载地址
     }]
     }










数据查询
 interface： http://localhost:9051/api/soft_content/search
method：post
  content-type：json

eg：{
       "resource_name":"千牛", //软件名 必填  string
       "resource_type":"222",  //软件分类id 必填  string
       "id":"5a754e7a6b9b2f3c0968f2f8", //软件大小 非必填  string
       "limit":10   //一次请求多少数据 非必填  number  默认20
       "pageIndex":1 //  当前页
     }
     


数据编辑
 interface： http://localhost:9051/api/soft_content/edit
method：post
  content-type：json

eg：{
       "id":"5a754e7a6b9b2f3c0968f2f8", //软件大小 必填  string
       "resource_name":"千牛", //软件名 非必填  string
       "resource_type":"222",  //软件分类id 必填  string
       "resource_size":"30M", //软件大小 非必填  string
       "resource_attr":"免费软件", //软件属性 非必填  string
       "resource_web":"阿里巴巴", //软件官网 g非必填  strin
       "soft_status:"",  //是否展示该软件  非必填  默认1 展示，0不展示
        "icon_url":"",              //软件图标地址 非必填 string
        "resource_content":"",//软件详情 非必填  strin
       "download_src":[{ //软件下载链接   Array
       "type":1,    //链接通道id  1 推荐的 2 其他
       "desc":"电信下载",  //下载通道描述
       "url":"www.baidu.com" //下载地址
     }]
     }
