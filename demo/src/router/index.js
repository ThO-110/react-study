import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/pages/HelloWorld'
import Thos_praticeList from '@/pages/thos_praticeList'
import pratice from '@/pages/pratice'
import pratice1 from '@/pages/CenteredVerticallyHorizontally/Pseudo_element_vertical_centered'
import pratice2 from '@/pages/CenteredVerticallyHorizontally/transform_centered'
import pratice3 from '@/pages/CenteredVerticallyHorizontally/flex_centered'
import SvgPratice from '@/pages/svgPratice'
import StarrySky from '@/pages/starrySky'

Vue.use(Router)

const VueRouter = new Router({
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
      path: '/pratice',
      name: 'pratice',
      component: pratice
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
    },
    {
      path: '/svgPratice',
      name: 'SvgPratice',
      component: SvgPratice
    },
    {
      path: '/starrySky',
      name: 'StarrySky',
      component: StarrySky
    }
  ]
})

VueRouter.beforeEach((to, from, next) => {
  Vue.prototype.$store.dispatch('openCurtain');
  setTimeout(() =>{
    next();
  }, Vue.prototype.$store.state.duringTime)
});

VueRouter.afterEach((to, from) => {
  Vue.prototype.$store.dispatch('closeCurtain');
});

export default VueRouter
