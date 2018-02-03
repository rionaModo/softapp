
<template>
<div  class="soft-about">
<el-row>
  <el-col :span="6">
    <div class="soft-left">
         软件名：
    </div>
 </el-col>
  <el-col :span="10">
  <div class="soft-right">
    <el-input
        placeholder="请输入软件" 
        v-model="softinfo.soft_name"
        clearable >
      </el-input>
  </div>
  </el-col>
</el-row>
<el-row>  
  <el-col :span="6">
    <div class="soft-left1">
         大小：
    </div>
 </el-col>
  <el-col :span="10">
  <div class="soft-right1">
    <el-input
        placeholder="" 
        v-model="softinfo.soft_size"
        clearable >
      </el-input>
  </div>
  </el-col>
</el-row>
    <el-row>
   <el-col :span="6">
    <div class="soft-left1">
         分类：
    </div>
 </el-col>
  <el-col :span="10">
  <div class="soft-right1">
    <el-select v-model="value" placeholder="请选择">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
  </div>
  </el-col>
</el-row>
  
    <ul><li v-for="(item,i) in items">
  <el-row>
   <el-col :span="6">
    <div class="soft-left1">
         显示名：
    </div>
 </el-col>
 <el-col :span="10">
 <div class="soft-right1">
 <el-input
      placeholder=""
      v-model="item.text"
      clearable >
    </el-input>
    </div>
  </el-col>
</el-row>
 <el-row>      
  <el-col :span="6">
    <div class="soft-left1">
         下载地址：
    </div>
 </el-col>
 <el-col :span="10">
 <div class="soft-right1">
 <el-input
      placeholder="请输入下载地址"
      v-model="item.url"
      clearable>
    </el-input>
  </div>
</el-col>
</el-row>
    </li>
    </ul>
    <el-button type="success" @click="addlist" round>添加地址</el-button>



    <el-row> <el-button type="success" @click="saveData" >添加地址</el-button></el-row>
</div>
</template>

<script>

 

  export default {
    name: 'Create',
    components: {

    },
    data:function () {
      return {
        softinfo:{
          soft_name:'',
          soft_size:'',
          soft_classify:'',

        },
        items:[
       { id:1,text:'电信下载1',label:"",url:"http://"},
        {id:2,text:'类型：',label:"",url:"http://"},
        {id:3,text:'ul:',label:"",url:"http://"}
        ],
        options:[{
          value:'选项1',
          label:'杀毒软件'
        },{
          value:'选项2',
          label:'其他软件'
        }],
        value:''
      }
    },
    methods:{
     remove:function(i){
     this.item[i].selected=false;
     },
     addlist:function(){
       this.items.push( { id:4,text:'',label:"",url:""})
     },
     saveData:function(){
      var data={
       "resource_name":this.softinfo.soft_name, //软件名 必填  string
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
      this.$http.post('/api/soft_content/create',data).then(function(res){
        console.log(res.data);
      })
    }
    },
    beforeRouteEnter:function(to,from,next){
      next(vm => {
       
      })
    }
  }

</script>

<style scoped lang="less">
 .soft-about{
  width: 1000px;
  margin: 0 auto;
  .soft-left{
  float: right;
  line-height: 40px;
  margin: 0 0 15px 0;
  }
  .soft-left1{
  float: right;
  line-height: 40px;
  margin: 0 0 15px 0;
  }
  .soft-left2{
  float: right;
  line-height: 40px;
  margin: 0 0 15px 0;
  };
 }
 
</style>