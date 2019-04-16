import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('../views/home/index'),
      redirect: '/home/recommend',
      children: [
        {path: 'recommend', component: () => import('../views/home/recommend.vue')}
      ]
    },
    {
      path: '/center',
      name: 'center',
      component: () => import('../views/center/index.vue')
    },
    {
      path: '/classify',
      name: 'classify',
      component: () => import('../views/classify/index.vue')
    }
  ]
})
