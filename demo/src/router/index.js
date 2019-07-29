import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Thos_praticeList from '@/components/thos_praticeList'
import pratice1 from '@/components/Pseudo_element_vertical_centered'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/thos_praticeList',
      name: 'Thos_praticeList',
      component: Thos_praticeList
    },
    {
      path: '/pratice1',
      name: 'pratice1',
      component: pratice1
    }
  ]
})
