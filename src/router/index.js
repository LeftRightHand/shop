import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/index'
import DetailPage from '@/views/detail'
import DetailAnalysis from '@/views/detail/analysis'
import DetailCount from '@/views/detail/count'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/detail',
      component: DetailPage,
      redirect: "/detail/analysis",
      children: [
        {
          path: 'analysis',
          component: DetailAnalysis
        },
        {
          path: 'count',
          component: DetailCount
        }
      ]
    }
  ]
})
