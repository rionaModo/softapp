/**
 * Created by danlu on 2018/1/16.
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router'
import App from './src/views/App.vue'
import axios from 'axios'
import ElementUI from 'element-ui'


Vue.prototype.$http = axios
window.Vue=Vue;
Vue.use(VueRouter)
Vue.use(ElementUI)
const router = new VueRouter({
  mode: 'history',
    routes:routes // （缩写）相当于 routes: routes
  })
  

  const app = new Vue({
      el:'#app',
    router:router,
    render: h => h(App)
  });



