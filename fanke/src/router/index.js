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
import QList from '../views/QList.vue'
import GameResult from '../views/GameResult.vue'
import Shake from '../views/Shake.vue'
import AwardResult from '../views/AwardResult.vue'
import AwardDetail from '../views/AwardDetail.vue'
import LoadingPage from '../views/LoadingPage.vue'

Vue.use(VueRouter);

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
              component: ActAward,
              children: [
                {
                  path: 'awardDetail',
                  component: AwardDetail
                }
              ]
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
            },
            {
              path: '/home/gamePage/gameResult',
              name: 'gameResult',
              component: GameResult,
              children: [
                {
                  path: '/home/gamePage/gameResult/actInfo',
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
                }
              ]
            },
            {
              path: '/home/gamePage/shake',
              name: 'shake',
              component: Shake
            },
            {
              path: '/home/gamePage/awardResult',
              name: 'awardResult',
              component: AwardResult
            }

          ]
        }
      ]
    },
    {
      path: '/loading',
      component: LoadingPage
    },
    {
      path: '/',
      redirect: '/loading'
    }
  ]
})
