// npm imports
import Vue from 'vue'
import Vuex from 'vuex'
import moment from 'moment'
import lodash from 'lodash'
import VueRouter from 'vue-router'
import VueCroppie from 'vue-croppie';

// element-ui
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/display.css';
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

// Loading
import Loading from './scaffold/Loading'

Vue.use(Vuex)
Vue.use(VueTour)
Vue.use(VueRouter)
Vue.use(VueCroppie)

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

    this.$router.beforeEach((to, from, next) => {
      next()
    })

    this.$bus.$on('page-load', (isLoading) => {
      this.pageIsLoading =  isLoading.value
    })

    this.$bus.$on('page-offload', (isLoading) => {
      this.pageIsLoading =  isLoading.value
    })

    this.$bus.$on('display-success', (data) => {
        this.$notify({
          type: 'success',
          title: data.title,
          message: data.message,
        })
    })

    this.$bus.$on('display-server-error', (data) => {
      this.$message({
        type: 'exception',
        title: 'Error',
        message: 'There was an error processing your data'
      })
    })
  },
  components: {
    Loading,
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
      pageIsLoading: false
    }
  },
  methods: {

  },
  watch: {

  }
}).$mount('#app')
