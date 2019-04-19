// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/index'

import { Search, Tab, Tabs, Swipe, SwipeItem, Tabbar, TabbarItem,NavBar, Icon, Dialog} from 'vant'
Vue.use(Search)
Vue.use(Tab).use(Tabs)
Vue.use(Swipe).use(SwipeItem)
Vue.use(Tabbar).use(TabbarItem)
Vue.use(NavBar)
Vue.use(Icon)
Vue.use(Dialog)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
