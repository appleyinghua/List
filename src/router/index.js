import Vue from 'vue'
import Router from 'vue-router'
import List from '@/components/List'
import SubOne from '@/components/subcomponents/SubOne'
import SubTwo from '@/components/subcomponents/SubTwo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'List',
      component: List
    },
    {
      path: '/subone',
      name: 'SubOne',
      component: SubOne
    },
    {
      path: '/subtwo',
      name: 'SubTwo',
      component: SubTwo
    }
  ]
})
