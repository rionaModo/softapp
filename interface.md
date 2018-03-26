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

eg：请求参数
{
       "resource_name":"千牛", //软件名 必填  string
       "resource_type":"222",  //软件分类id 必填  string
       "id":"5a754e7a6b9b2f3c0968f2f8", //软件大小 非必填  string
       "limit":10   //一次分页请求多少数据 非必填  number  默认20
       "pageIndex":1 //  当前页
     }
返回数据：

{
    "status": 0, // 请求状态 0 成功 -1 失败
    "data": {
        "data": [{
                  "_id": "5a9ac00fc8de31d8e5273d10",
                  "createTime": "2018-03-03T15:32:31.000Z",
                  "resource_name": "腾讯电脑管家",
                  "resource_type": "选项1",
                  "resource_size": "52M",
                  "resource_attr": "免费",
                  "resource_web": "腾讯",
                  "resource_content": "使用",
                  "icon_url": "http://www.xiazaiba.com/uploadfiles/ico/2016/0630/thumb_48_48_2016063017011935148.png",
                  "updateTime": "2018-03-03T15:32:31.693Z",
                  "soft_status": "1",
                  "download_src": [{"id": 1, "desc": "电信下载1444", "label": "", "url": "http://呃呃呃"}],
                  "id": 0
               }],
    "pageIndex": 1, //当前第几页
    "pageSize": 20, //每页多少条
    "total": 100  //总共有多少条数据
    }
}
以前的
{
    "status": 0, // 请求状态 0 成功 -1 失败
    "data": [{}]

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
