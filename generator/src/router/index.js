import Vue from 'vue'
import Router from 'vue-router'

import Home from '../components/Home'
import Contact from '../components/Contact'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home
    }, {
      path: '/contact',
      component: Contact
    }
  ]
})
