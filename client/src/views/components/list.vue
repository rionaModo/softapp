
<template>
<div  class="soft-list">
     <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="resource_name"
        label="软件名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="resource_size"
        label="大小"
        width="180">
      </el-table-column>
      <el-table-column
        prop="resource_type"
        label="分类"
        width="180">
      </el-table-column>
      <el-table-column
        prop="clas"
        label="编辑">
        <template slot-scope="scope">
          <router-link :to="{ path: 'edit', query: { id: scope.row._id,name:scope.row.resource_name}}">编辑</router-link>
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
    searchData(query){
      var resData=query;
      var that=this;
      this.$http.post('/api/soft_content/search',resData).then(function({data,status,statusText}){
       if(status==200&&data.status==0) {
           that.tableData=data.data
       }
      })
    }

    },
    beforeRouteEnter(to,from,next){
      next(vm => {
       console.log('route',vm.$route);
       var query={
           "limit":20   //一次请求多少数据 非必填  number  默认20
       }
       vm.searchData(query)
      })
    }
  }

</script>

<style scoped lang="less">


</style>