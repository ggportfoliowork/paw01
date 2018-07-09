// npm imports
import Vue from 'vue'
import Vuex from 'vuex'
import moment from 'moment'
import lodash from 'lodash'
import VueRouter from 'vue-router'

// element-ui
import Element from 'element-ui'
import locale from 'element-ui/lib/locale/lang/en'

// library
import EventBus from './lib/EventBus'
import HttpClient from './lib/HttpClient'

// vue setup
import VueTour from 'vue-tour'
import store from './stores/app-store'
import router from './routers/app-router'
require('vue-tour/dist/vue-tour.css')

// theme
import '../pawtrackers-theme-2.3.6'

import UserNavMenu from './scaffold/UserNavMenu'

Vue.use(Vuex)
Vue.use(VueTour)
Vue.use(VueRouter)

Vue.use(Element, { locale })

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
  store,
  mounted() {
    this.$store.dispatch('SET_USER')
  },
  components: {
    UserNavMenu
  },
  created() {
    let vm = this
  },
  computed: {
    user() {
      return this.$store.state.user
    }
  },
  data() {
    return {
      steps: [
        {
          target: '#step-1',
          content: `A test tour object.`,
        },
        {
          target: '#step-2',
          content: 'Another test tour object with longer text for the DOM.',
        },
        {
          target: '#step-3',
          content: 'An even longer test tour object to prepare the vue tour for the longest text lorem ipsum see if it wraps around the eniter page DOM and see what the formatting is like on a super long string inside of a tour object.',
          params: {
            placement: 'bottom'
          }
        }
      ],
      myCallbacks: {
         onStop: this.completeTour
       }
    }
  },
  methods: {
    startTour() {
      this.$tours['pawsTour'].start()
    },

    completeTour() {
      this.$http.put('users/'+this.user.uid, {
          has_viewed_joyride: 1
      })
        .then(response => {
            console.log(response)
        })
    }
  },
  watch: {
    user(val) {

    }
  }
}).$mount('#app')
