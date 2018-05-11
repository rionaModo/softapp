
<template>
  <div id="header">
header
    <router-link :to="{ path: 'create'}">创建</router-link>
    <router-link :to="{ path: 'list'}">列表</router-link>

  
  
  
  </div>
</template>

<script>



export default {
  name: 'Header',
  components: {
    
  },
  data:()=>{
  console.log(1222);
return {}
}
}
</script>

<style>

</style>