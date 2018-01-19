
<template>
  <div id="About" class="about">
    About


{{user.msg}}

  </div>
</template>

<script>

  //import img from './doodle1.png'

  export default {
    name: 'About',
    components: {

    },
    data:function () {
      return {
        img:'s',
        user:{
          msg:''
        }
      }
    },
    methods:{
      getData:function(){
        var that=this;
        this.$http.get('/api/user',{
              params:{
                ID:12345
              }
            })
            .then(function({data,status,statusText}){
               if(status==200){
                 that.$set(that,'user',data)
               }
            })
            .catch(function(err){
            //  console.log(err);
            });
      }
    },
    beforeRouteEnter:function(to,from,next){
      next(vm => {
        vm.getData();
      })
    }
  }
  /*background: url("/public/images/doodle.png") no-repeat;*/
</script>

<style scoped>
 .about{
   background: url("/static/images/doodle.png") no-repeat;
 }
</style>