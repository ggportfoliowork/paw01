// npm imports
import Vue from 'vue'
import Vuex from 'vuex'
import moment from 'moment'
import lodash from 'lodash'
import VueRouter from 'vue-router'

import App from './scaffold/App'

// library
import EventBus from './lib/EventBus'
import HttpClient from './lib/HttpClient'

// vue setup
import appStore from './stores/app-store'
import router from './routers/router'

Vue.use(Vuex)
Vue.use(VueRouter)

// vue globals
Vue.prototype._ = lodash
Vue.prototype.$moment = moment
Vue.prototype.$bus = EventBus
Vue.prototype.$http = HttpClient
Vue.prototype.$smoothScroll = () => {
  window.scroll({top: 0, left: 0, behavior: 'smooth'});
}

new Vue({
  router,
  appStore,
  mounted() {

  },
  created() {
    let vm = this
  },
}).$mount('#app-container')
