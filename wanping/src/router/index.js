import Vue from 'vue'
import Router from 'vue-router'
import Home from '../view/home/home.vue'
import Shop from '../view/shop/shop.vue'
import Screen from '../view/screen/screen.vue'
import OrderConfirm from '../view/order/children/orderConfirm.vue'
import OrderDetail from '../view/order/children/orderDetail.vue'
import MyOrder from '../view/order/myOrder.vue'
import ShoppingCart from '../view/shoppingCart/shoppingCart.vue'
import Search from '../view/search/search.vue'
import Profile from '../view/profile/profile.vue'
import Info from '../view/profile/children/info.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Search',
      component: Info
    }
  ]
})
