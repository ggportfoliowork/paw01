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

import QuickAddAppointmentForm from './components/Forms/Appointment/QuickAddAppointmentForm'

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
    this.$store.dispatch('SET_USER', window.User)
  },
  components: {
    'Qa': QuickAddAppointmentForm
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
          content: `Discover <strong>Vue Tour</strong>!`,
        },
        {
          target: '#step-2',
          content: 'An awesome plugin made with Vue.js!',
        },
        {
          target: '#step-3',
          content: 'Try it, you\'ll love it!<br>You can put HTML in the steps and completely customize the DOM to suit your needs.',
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
}).$mount('#app-container')
