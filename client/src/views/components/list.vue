
<template>
<div  class="soft-list">
  <div class="soousuo">
  <el-col :span="6">查询：
  </el-col>
  <el-col :span="10">
    <el-input
        placeholder="请输入内容"
        prefix-icon="el-icon-search"
        v-model="input21">
    </el-input>
    </el-col>
    </div>
    <el-col :span="6">
  </el-col>
    <el-col :span="10"
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
       <el-table-column>
        <template slot-scope="scope">
         <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">
          <router-link :to="{ path: 'edit', query: { id: scope.row._id,name:scope.row.resource_name}}">编辑</router-link></el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
      </el-table-column>
    </el-table>
      
    <div class="block">
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="query.pageIndex"
      :page-sizes="[10, 20, 30, 40]"
      :page-size="query.limit"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400">
    </el-pagination>
  </div>
</div>
</template>

<script>

  export default {
    name: 'Create',
    components: {

    },
    data:function () {
      return {
        query:{
          limit:20,
          pageIndex:1
        },

      tableData: [{
            name: '千牛',
            size: '30MB',
            classify: '软件',
            _id:''
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
      this.$http.post('/api/soft_content/search',resData).then(function({data,status,statusText}){//{data,status,statusText}

       if(status==200&&data.status==0) {
           that.tableData=data.data.data;
           var total=data.data.total;

       }
      })
    },

   handleSizeChange(val) {     
        this.query.limit=val;
        this.query.pageIndex=1;
        this.searchData(this.query);
      },
      handleCurrentChange(val) {
        this.query.pageIndex=val;
        this.searchData(this.query)
      }

    },
    beforeRouteEnter(to,from,next){
      next(vm => {
       console.log('route',vm.$route);
       
       vm.searchData(vm.query)
      })
    },


    }
</script>

<style scoped lang="less">


</style>