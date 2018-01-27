/**
 * Created by danlu on 2018/1/16.
 */
import About from './src/views/components/about.vue'
import Message from './src/views/components/message.vue'
import Create from './src/views/components/create.vue'
module.exports= [
    { path: '/foo', component: About },
    { path: '/bar', component: Message },
    { path: '/create', component: Create }
  ]