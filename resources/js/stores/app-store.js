import Vue from 'vue'
import Vuex from 'vuex'
import {HttpClient} from '../lib/HttpClient'

Vue.use(Vuex);

const appStore = new Vuex.Store({
  state: {
      user: null,
      available_states: [
        {
          key: 'AL',
          value: 'Alabama',
        },
        {
          key: 'AK',
          value: 'Alaska'
        },
        {
          key: 'AZ',
          value: 'Arizona'
        },
        {
          key: 'AR',
          value: 'Arkansas'
        },
        {
          key: 'CA',
          value: 'California'
        },
        {
          key: 'CO',
          value: 'Colorado'
        },
        {
          key: 'CT',
          value: 'Connecticut'
        },
        {
          key: 'DE',
          value: 'Deleware'
        },
        {
          key: 'DC',
          value: 'District Of Columbia'
        },
        {
          key: 'FL',
          value: 'Florida'
        },
        {
          key: 'GA',
          value: 'Georgia'
        },
        {
          key: 'HI',
          value: 'Hawaii'
        },
        {
          key: 'ID',
          value: 'Idaho'
        },
        {
          key: 'IL',
          value: 'Illinois'
        },
        {
          key: 'IN',
          value: 'Indiana'
        },
        {
          key: 'IA',
          value: 'Iowa'
        },
        {
          key: 'KS',
          value: 'Kansas'
        },
        {
          key: 'KY',
          value: 'Kentucky'
        },
        {
          key: 'LA',
          value: 'Louisiana'
        },
        {
          key: 'ME',
          value: 'Maine'
        },
        {
          key: 'MD',
          value: 'Maryland'
        },
        {
          key: 'MA',
          value: 'Massachusetts'
        },
        {
          key: 'MS',
          value: 'Mississippi'
        },
        {
          key: 'MI',
          value: 'Michigan'
        },
        {
          key: 'MN',
          value: 'Minnesota'
        },
        {
          key: 'MO',
          value: 'Missouri'
        },
        {
          key: 'MT',
          value: 'Montana'
        },
        {
          key: 'NH',
          value: 'New Hampshire'
        },
        {
          key: 'NJ',
          value: 'New Jersey'
        },
        {
          key: 'NM',
          value: 'New Mexico'
        },
        {
          key: 'NY',
          value: 'New York'
        },
        {
          key: 'NC',
          value: 'North Carolina'
        },
        {
          key: 'ND',
          value: 'North Dakota'
        },
        {
          key: 'OH',
          value: 'Ohio'
        },
        {
          key: 'OK',
          value: 'Oklahoma'
        },
        {
          key: 'OR',
          value: 'Oregon'
        },
        {
          key: 'PA',
          value: 'Pennsylvania'
        },
        {
          key: 'RI',
          value: 'Rhode Island'
        },
        {
          key: 'SC',
          value: 'South Carolina'
        },
        {
          key: 'SD',
          value: 'South Dakota'
        },
        {
          key: 'TN',
          value: 'Tennessee'
        },
        {
          key: 'TX',
          value: 'Texas'
        },
        {
          key: 'UT',
          value: 'Utah'
        },
        {
          key: 'VT',
          value: 'Vermont'
        },
        {
          key: 'VA',
          value: 'Virginia'
        },
        {
          key: 'WA',
          value: 'Washington'
        },
        {
          key: 'WV',
          value: 'West Virginia'
        },
        {
          key: 'WI',
          value: 'Wisconsin'
        },
        {
          key: 'WY',
          value: 'Wyoming'
        },
      ]
  },
  getters: {
      user: state => {
        return state.user
      },
      available_states: state => {
        return state.available_states
      }
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
