import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import city from '@/pages/city/city'
import detail from '@/pages/detail/detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/city',
      name: 'city',
      component: city
    },
    {
      path: '/detail',
      name: 'Detail',
      component: detail
    }
  ]
})
