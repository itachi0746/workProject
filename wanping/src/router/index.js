import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/view/home/home'
import Shop from '@/view/shop/shop'
import Screen from '@/view/screen/screen'


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
