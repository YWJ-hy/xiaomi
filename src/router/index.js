import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
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
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/login/index.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/register/index.vue')
    },
    {
      path: '/listfile',
      name: 'listfile',
      component: () => import('../views/listfile/index.vue')
    },
  ]
})
