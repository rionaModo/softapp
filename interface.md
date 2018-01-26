## 添加分类
  interface：/api/soft_type/create
  method：post
  content-type：json
  eg：{
         "soft_name":"postceshiwww", //分类名 必填  string
         "soft_status":"1",    //是否开启改分类  非必填 string 默认 1（1 开启，0 禁用）
         "soft_parent_code":"5a699870316412a0416773b3" //父分类id ，非必填 string 默认0（表示最外层分类）
     }
