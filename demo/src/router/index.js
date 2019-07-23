import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Thos_pratice from '@/components/thos_pratice'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/thos_pratice',
      name: 'Thos_pratice',
      component: Thos_pratice
    }
  ]
})
