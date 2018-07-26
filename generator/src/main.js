import Vue from 'vue'
import VueI18n from 'vue-i18n'
import router from './router'
import App from './App'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBook } from '@fortawesome/free-solid-svg-icons/faBook'
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub'
import { faDiscord } from '@fortawesome/free-brands-svg-icons/faDiscord'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

Vue.use(VueI18n)

library.add(faBook)
library.add(faGithub)
library.add(faDiscord)
Vue.component('font-awesome-icon', FontAwesomeIcon)

// Use locale passed from webpack or fall back to default.
const locale = process.env.LOCALE || 'en'

const i18n = new VueI18n({
  locale: locale,
  messages: {
    en: {
    },
    ja: {
    }
  }
})

new Vue({
  el: '#app',
  i18n,
  router,
  template: '<App/>',
  components: {
    App
  },
  mounted () {
    // You'll need this for renderAfterDocumentEvent.
    document.dispatchEvent(new Event('render-event'))
  }
})
