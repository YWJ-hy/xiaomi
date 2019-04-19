// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/index'
import store from './store/store'

import {
  Search,
  Tab,
  Tabs,
  Swipe,
  SwipeItem,
  Tabbar,
  TabbarItem,
  Lazyload,
  Sku,
  Actionsheet,
  NavBar,
  Icon,
  Card,
  Button,
  Stepper,
  Badge,
  BadgeGroup,
  GoodsAction,
  GoodsActionBigBtn,
  GoodsActionMiniBtn,
  Checkbox,
  CheckboxGroup,
  Picker,
  Toast,
  SubmitBar,
  AddressEdit,
  Area,
  Dialog,
  Cell,
  CellGroup
} from 'vant'

Vue.use(Search)
Vue.use(Tab).use(Tabs)
Vue.use(Swipe).use(SwipeItem)
Vue.use(Tabbar).use(TabbarItem)
Vue.use(Lazyload, {
  loading: '/static/loading-svg/loading-bars.svg'
})
Vue.use(Sku)
Vue.use(Actionsheet)
Vue.use(NavBar)
Vue.use(Icon)
Vue.use(Card)
Vue.use(Button)
Vue.use(Stepper)
Vue.use(Badge)
Vue.use(BadgeGroup)
Vue
  .use(GoodsAction)
  .use(GoodsActionBigBtn)
  .use(GoodsActionMiniBtn)
Vue.use(Checkbox).use(CheckboxGroup)
Vue.use(Picker)
Vue.use(Toast)
Vue.use(SubmitBar)
Vue.use(AddressEdit)
Vue.use(Area)
Vue.use(Dialog)
Vue.use(Cell).use(CellGroup)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
})
