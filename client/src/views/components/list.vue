
<template>
<div  class="soft-list">
     <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="name"
        label="软件名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="size"
        label="大小"
        width="180">
      </el-table-column>
      <el-table-column
        prop="classify"
        label="分类"
        width="180">
      </el-table-column>
      <el-table-column
        prop="clas"
        label="编辑">
        <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <router-link :to="{ path: 'edit', query: { id: '5a754e7a6b9b2f3c0968f2f8',name:'this.softinfo.soft_name'}}">编辑</router-link>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
      </el-table-column>
    </el-table>
      
</div>
</template>

<script>

 

  export default {
    name: 'Create',
    components: {

    },
    data:function () {
      return {
      tableData: [{
            name: '千牛',
            size: '30MB',
            classify: '软件',
          },
          ]
        }
    },
    methods:{
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      },
     saveData:function(){
      var data={
       "resource_name":this.softinfo.soft_name, //软件名 必填  string
       "resource_type":"222",  //软件分类id 必填  string
       "resource_size":"30M", //软件大小 非必填  string
       "resource_attr":"免费软件", //软件属性 非必填  string
       "resource_web":"阿里巴巴", //软件官网 非必填  string
        "icon_url":"",              //软件图标地址 非必填 string
        "resource_content":"xxxx",//软件详情 非必填  strin
       "download_src":[{ //软件下载链接 必填  Array
       "type":1,    //链接通道id  1 推荐的 2 其他
       "desc":"电信下载",  //下载通道描述
       "url":"www.baidu.com" //下载地址
     }]
     }
      this.$http.post('/api/soft_content/create',data).then(function(res){
        console.log(res.data);
      })
    },
    searchData:function(query){
      var that=this;
      this.$http.post('/api/soft_content/search',query).then(function(res){
        console.log('searchData',res);
         that.softinfo.soft_name=res.data.data[0].resource_name;
         that.softinfo.soft_size=res.data.data[0].resource_size;
        that.softinfo.soft_classify=res.data.data[0].resource_classify;
      })
    }

    },
    beforeRouteEnter:function(to,from,next){
      next(vm => {
       console.log('route',vm.$route);
       vm.searchData({"id":vm.$route.query.id})
      })
    }
  }

</script>

<style scoped lang="less">


</style>