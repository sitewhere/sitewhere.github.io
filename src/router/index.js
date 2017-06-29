import Vue from 'vue'
import Router from 'vue-router'
import Vuetify from 'vuetify'
import Home from '@/components/Home'

Vue.use(Router)
Vue.use(Vuetify)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }
  ]
})
