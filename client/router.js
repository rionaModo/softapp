/**
 * Created by danlu on 2018/1/16.
 */
import About from './src/views/components/about.vue'
import Message from './src/views/components/message.vue'
//import Create from './src/views/components/create.vue'
//import List from './src/views/components/list.vue'
//import Edit from './src/views/components/edit.vue'
import Login from './src/views/components/login.vue'

const Create = () => import( /* webpackChunkName: "groupjs" */ './src/views/components/create.vue')
const List = () => import( /* webpackChunkName: "groupjs" */  './src/views/components/list.vue')
const Edit = () => import( './src/views/components/edit.vue')
module.exports= [
    { path: '/foo', component: About },
    { path: '/bar', component: Message },
    { path: '/create', component: Create },
     { path: '/edit', component: Edit },
    { path: '/list', component: List },
    { path: '/login', component: Login }, // 登录
  ]