
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
      
      大小：
     <el-input
      placeholder="请输入软件大小"
      v-model="softinfo.soft_size"
      clearable >
    </el-input>
      分类：
      <label>杀毒<el-input
      placeholder="请输入软件"
      v-model="softinfo.soft_classify"
      clearable >
    </el-input>
    </label>
      下载地：
    <ul><li v-for="(item,i) in items"
    >
      <label>  显示名：<el-input
      placeholder="请输入软件"
      v-model="item.text"
      clearable >
    </el-input>
    </label><br>

      
      <label>下载地址：<el-input
      placeholder="请输入下载地址"
      v-model="item.url"
      clearable>
    </el-input>
    </label>

    </li>
    </ul>
    <el-button type="success" @click=addlist() round>添加地址</el-button>
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
      }
    },
    methods:{
     remove:function(i){
     this.item[i].selected=false;
     },
     addlist:function(){
       this.items.push( { id:4,text:'',label:"",url:""})
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
  }
 }
 
</style>