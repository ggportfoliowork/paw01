import Vue from 'vue'
import Vuex from 'vuex'
import {HttpClient} from '../lib/HttpClient'

Vue.use(Vuex);

const appStore = new Vuex.Store({
  state: {
      user: null,
  },
  getters: {
      user: state => {
        return state.user
      },
  },
  mutations: {
    setCurrentUser(state, user) {
        state.user = _.assign({}, state.user, user)
      },
  },
  actions: {
      SET_USER(context, user) {
          context.commit('setCurrentUser', user)
      },
      REFRESH_USER_TOKEN(state, user) {

      }
  }
});

export default appStore;
