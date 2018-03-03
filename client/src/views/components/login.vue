
<template>
  <div  class="soft-about">
    <el-row>
      <el-col :span="6">
        <div class="soft-left">
          登录账号：
        </div>
      </el-col>
      <el-col :span="10">
        <div class="soft-right">
          <el-input
              placeholder="请输入账号"
              v-model="userAccount"
              clearable >
          </el-input>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="6">
        <div class="soft-left1">
          密码：
        </div>
      </el-col>
      <el-col :span="10">
        <div class="soft-right1">
          <el-input
              placeholder=""
              v-model="password"
              clearable >
          </el-input>
        </div>
      </el-col>
    </el-row>


    <el-row>
    <el-col >
      <div class="button-right">
         <el-button @click="saveData" type="primary">登录</el-button>
      </div>
    </el-col>
    </el-row>
  </div>
</template>

<script>



  export default {
    name: 'Create',
    components: {

    },
    data:function () {
      return {
        userAccount:'',
        password:''
      }
    },
    props:['good'],
    methods:{
      saveData:function(){
        var data={
          "userAccount":this.userAccount,
          "password":this.password
        }
        var that=this;
        this.$http.post('/api/user/login',data).then(function({data,status,statusText}){
          if(status==200&&data.status==0){
            data=data.data;
            if(!data.type||data.type!=-1){
              that.$message({
                message: '登录成功',
                type: 'success',
                onClose:function(){
                  that.$router.push({ path: '/list' })
                }
              });
            }else {
              that.$message({
                message: '登录失败',
                type: 'error'
              });
            }
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
  }
  .button-left{
    margin: 0 0 15px 0;
  }
  .button-right{
    text-align: center;
  }
  .item{
    border: red;
    color: red;
  }



  }

</style>