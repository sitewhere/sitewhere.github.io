import Vue from 'vue'
import VueI18n from 'vue-i18n'
import router from './router'
import App from './App'

Vue.use(VueI18n)

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
