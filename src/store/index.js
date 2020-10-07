import Vue from 'vue'
import Vuex from 'vuex'
import auth from './auth';
import timepunch from './timepunch'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    auth,
    timepunch
  }
})
