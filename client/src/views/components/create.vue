
<template>
<div  class="soft-about">
<el-row>
  <el-col :span="6">
    <div class="soft-left">
      <span class="soft-left0">*&nbsp &nbsp </span>软件名:
    </div>
 </el-col>
  <el-col :span="10">
  <div class="soft-right">
    <el-input 
      v-on:blur="changeCount(value)"
        placeholder="请输入软件" 
        v-model="softinfo.soft_name" 
        clearable >
      </el-input>
  </div>
  </el-col>
  <el-col :span="2">
  <div class="right">
    <el-tooltip class="item" v-if="tips.soft_name==1" effect="dark" content="不能为空" placement="right-start" type="error">
      <el-button  icon="el-icon-error">错误</el-button>
    </el-tooltip>
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
    <el-select v-model="softinfo.soft_classify" placeholder="请选择">
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
    <el-row>
    <el-col :span="6">
      <div class="soft-left1">
        软件状态：
      </div>
    </el-col>
    <el-col :span="10">
      <div class="soft-right1">
        <el-radio class="radio" v-model="softinfo.soft_status" label="1">启用</el-radio>
        <el-radio class="radio" v-model="softinfo.soft_status" label="0">停用</el-radio>
      </div>
    </el-col>
  </el-row>
    <el-row>
    <el-col :span="6">
      <div class="soft-left1">
        图标链接：
      </div>
    </el-col>
    <el-col :span="10">
      <div class="soft-right1">
        <el-input
            placeholder="请输入图标地址"
            v-model="softinfo.icon_url"
            clearable >
        </el-input>
      </div>
    </el-col>
  </el-row>
    <el-row>
    <el-col :span="6">
      <div class="soft-left1">
        软件属性：
      </div>
    </el-col>
    <el-col :span="10">
      <div class="soft-right1">
        <el-input
            placeholder="请输入 软件属性"
            v-model="softinfo.resource_attr"
            clearable >
        </el-input>
      </div>
    </el-col>
  </el-row>
    <el-row>
    <el-col :span="6">
      <div class="soft-left1">
        软件官网：
      </div>
    </el-col>
    <el-col :span="10">
      <div class="soft-right1">
        <el-input
            placeholder="请输入软件官网"
            v-model="softinfo.resource_web"
            clearable >
        </el-input>
      </div>
    </el-col>
  </el-row>
    <el-row>
    <el-col :span="6">
      <div class="soft-left1">
        软件详情：
      </div>
    </el-col>
    <el-col :span="10">
      <div class="soft-right1">
        <el-input
            type="textarea"
            placeholder="请输入软件详情"
            v-model="softinfo.resource_content"
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
    <el-col :span="17">
      <ul class="down-list clearfix">
        <li v-for="(item,i) in items" class="border-left">
            <el-row>
              <el-col :span="5">
                <div class="soft-left1">
                  地址：
                </div>
              </el-col>
              <el-col :span="15">
                <div class="soft-right1">
                  <el-input
                      placeholder="请输入下载地址"
                      v-model="item.url"
                      clearable>
                  </el-input>
                </div>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="5">
                <div class="soft-left1">
                  显示名：
                </div>
              </el-col>
              <el-col :span="15">
                <div class="soft-right1">
                  <el-input
                      placeholder=""
                      v-model="item.desc"
                      clearable >
                  </el-input>
                </div>
              </el-col>
            </el-row>
          <div class="icon-list">
            <i class="el-icon-circle-plus-outline" @click="addlist" v-if="items.length==i+1"></i>
            <i class="el-icon-delete" v-if="i!=0"  @click="deletelist(i)"></i>
          </div>
        </li>
      </ul>

    </el-col>
 </el-row>


    <el-col :span="6">
    <div class="button-right">
    <el-row> <el-button type="success" @click="saveData" round>完成</el-button></el-row>
</div>

</el-col>
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
          soft_status:"1",
          "resource_attr":'', //软件属性 非必填  string
          "resource_web":'', //软件官网 非必填  string
          "icon_url":'',
          "resource_content":''
        },
        tips:{
          soft_name:0
        },
        items:[
       { id:1,desc:'电信下载1',label:"",url:"http://"},
        //{id:2,text:'类型：',label:"",url:"http://"},
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
    props:['good'],
    methods:{
     remove:function(i){
       this.item[i].selected=false;
     },
     changeCount: function(value) {
      if(this.softinfo.soft_name==''){
        this.tips.soft_name=1
      }else{
        this.tips.soft_name=0
      }
    },
     addlist:function(){
       this.items.push( { id:4,text:'',label:"",url:""})
     },
      deletelist:function(i){
        this.items.splice(i,1);
      },
     reviselist:function(){
      this.items.revise({id:'',text:'',label:'',url:''})
     },
     saveData:function(){
      var data={
       "resource_name":this.softinfo.soft_name, //软件名 必填  string
       "resource_type":this.softinfo.soft_classify,  //软件分类id 必填  string
       "resource_size":this.softinfo.soft_size, //软件大小 非必填  string
       "resource_attr":this.softinfo.resource_attr, //软件属性 非必填  string
       "resource_web":this.softinfo.resource_web, //软件官网 非必填  string
        "icon_url":this.softinfo.icon_url,              //软件图标地址 非必填 string
        "resource_content":this.softinfo.resource_content,//软件详情 非必填  strin
       "download_src":this.items
     }
       var that=this;
      this.$http.post('/api/soft_content/create',data).then(function({data,status,statusText}){
          if(status==200&&data.status==0){
            if(!data.type||data.type!=0){
              that.$message({
                message: '保存成功',
                type: 'success',
                onClose:function(){
                    that.$router.push({ path: '/list' })
                }
              });
              }
            }
        console.log(res);
       
      })
    },
    searchData:function(query){
      var that=this;
      this.$http.post('/api/soft_content/search',query).then(function({data:{data,status},status:hstatus,statusText}){
          if(hstatus==200&&status==0){
              if(data.length==0)return
              that.softinfo.soft_name=data[0].resource_name;
              that.softinfo.soft_size=data[0].resource_size;
              that.softinfo.soft_classify=data[0].resource_classify;
              that.softinfo.resource_attr=data[0].resource_attr;
              that.softinfo.resource_web=data[0].resource_web;
              that.softinfo.icon_url=data[0].icon_url;
              that.softinfo.resource_content=data[0].resource_content;
              that.items=data[0].download_src;
          }
      })
    }

    },
    beforeRouteEnter:function(to,from,next){
      next(vm => {
        console.log('route',vm.$route);
     // vm.searchData({"id":"5a754e7a6b9b2f3c0968f2f8"})
      })
    }
  }

</script>

<style scoped lang="less">
.soft-left0{
    color: red;
    font-weight:bold 
}
 .soft-about{
  width: 1000px;
  margin: 0 auto;
  .soft-left{
  float: right;
  line-height: 40px;
  margin: 0 0 15px 0;
  }
  .soft-left3{
  color:red;
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
  }
  .button-left{
    margin: 0 0 15px 0;
  }
  .item{
    border: red;
    color: red;
  }

  .button-left{

  }
  .down-list{
     .border-left{
       position: relative;
       float: left;
       border: dotted 1px #ccc;
       width: 350px;
       margin: 0 auto;
       margin-bottom: 10px;
       padding-top: 10px;
       &:hover{
         .icon-list{
           display: block;
         }
        }
       .icon-list{
         z-index: 2;
         position: absolute;
         display: none;
         right: 5px;
         top: 10px;
         i{
           height: 20px;
           font-size: 18px;
           width: 20px;
         }
       }
     }
  }
 }
 
</style>