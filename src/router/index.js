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
      path: '/center',
      name: 'center',
      component: () => import('../views/center/index.vue')
    },
    {
      path:'/detail/:gid', name:'detail', component: () => import('../views/detail/index.vue')
    },
    {
      path:'/cart', name:'cart', component: () => import('../views/cart/index.vue')
    }
  ]
})
