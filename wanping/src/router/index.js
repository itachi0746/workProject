import Vue from 'vue'
import Router from 'vue-router'
import Home from '../view/home/home.vue'
import Shop from '../view/shop/shop.vue'
import Screen from '../view/screen/screen.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Screen',
      component: Screen
    }
  ]
})
