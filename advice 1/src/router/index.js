import Vue from 'vue'
import Router from 'vue-router'
import Test from '@/page/test.vue'
import index from '@/page/index.vue'
import tips from '@/page/tips.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: index
    },
    {
      path: '/tips/:id',
      component: tips
    },
    {
      path: '/test',
      component: Test
    }
  ]
})
