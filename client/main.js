/**
 * Created by danlu on 2018/1/16.
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router'
import App from './src/views/App.vue'


Vue.use(VueRouter)
const router = new VueRouter({
    routes // （缩写）相当于 routes: routes
  })
  

  const app = new Vue({
    router:router,
    render: h => h(App)
  }).$mount('#app')