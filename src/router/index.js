import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'*',
      redirect:'/'
    },
    {
      path: '/',
      component: () => import('../views/home/index'),
      redirect:'/home',
      children: [
        {
          path: 'home',
          name: 'home',
          component: () => import('../views/home/home'),
          meta:{bottomNav:0}
        },
        {
          path:'classify',
          name: 'classify',
          component: () => import('../views/classify/index.vue'),
          meta:{bottomNav:1}
        },
        {
          path: 'cart',
          name: 'cart',
          component: () => import('../views/cart/index.vue'),
          meta:{bottomNav:2}
        },
        {
          path:'center', name:'center', component: () => import('../views/center/index.vue'), meta:{bottomNav:3}
        }
      ]
    },
    {
      path:'/detail/:gid', name:'detail', component: () => import('../views/detail/index.vue')
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
    }
  ]
})
