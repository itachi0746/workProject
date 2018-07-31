import Vue from 'vue'
import Router from 'vue-router'
import Home from '../view/home/home.vue'
import Shop from '../view/shop/shop.vue'
import Screen from '../view/screen/screen.vue'
import Order from '../view/order/order.vue'
import ShoppingCart from '../view/shoppingCart/shoppingCart.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ShoppingCart',
      component: ShoppingCart
    }
  ]
})
