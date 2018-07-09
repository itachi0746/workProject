// 路由器模块

import Vue from 'vue'
import VueRouter from 'vue-router'

// 引入组件
import Home from '../views/Home.vue'
import GamePage from '../views/GamePage.vue'
import ActInfo from '../views/ActInfo.vue'
import ActDesc from '../views/ActDesc.vue'
import ActRank from '../views/ActRank.vue'
import ActAward from '../views/ActAward.vue'
import QList from '../components/QList.vue'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/home',
      component: Home,
      children: [
        {
          path: 'actInfo',
          component: ActInfo,
          children: [
            {
              path: 'actDesc',
              component: ActDesc
            },
            {
              path: '',
              redirect: 'actDesc'
            },
            {
              path: 'actRank',
              component: ActRank
            },
            {
              path: 'actAward',
              component: ActAward
            }
          ]
        },
        {
          path: 'gamePage',
          name: 'gamePage',
          component: GamePage,
          children: [
            {
              path: '/home/gamePage/question/:id',
              name: 'question',
              component: QList
            }
          ]
        }
      ]
    },
    {
      path: '/',
      redirect: '/home'
    }
  ]
})
