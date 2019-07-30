import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Thos_praticeList from '@/components/thos_praticeList'
import pratice1 from '@/components/CenteredVerticallyHorizontally/Pseudo_element_vertical_centered'
import pratice2 from '@/components/CenteredVerticallyHorizontally/transform_centered'
import pratice3 from '@/components/CenteredVerticallyHorizontally/flex_centered'

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
    },
    {
      path: '/pratice2',
      name: 'pratice2',
      component: pratice2
    },
    {
      path: '/pratice3',
      name: 'pratice3',
      component: pratice3
    }
  ]
})
