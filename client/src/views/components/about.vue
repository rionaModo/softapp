
<template>
  <div id="About" class="about">
    About
ddddeeee
ddd 

{{img}}

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
        img:'s'
      }
    }
  }
  /*background: url("/public/images/doodle.png") no-repeat;*/
</script>

<style scoped>
 .about{
   background: url("/static/images/doodle.png") no-repeat;
 }
</style>