<template>
  <div id="app-content">
   <app-header></app-header>
  
    <router-view/>
  
  
   
  </div>
</template>

<script>

import appHeader from './header.vue'

export default {
  name: 'App',
  components: {
    appHeader
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>