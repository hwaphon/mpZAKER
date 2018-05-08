import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    statusBarHeight: 0
  },
  mutations: {
    setSBH: (state, n) => state.statusBarHeight = n
  },
  getters: {
    getSBH: (state) => state.statusBarHeight
  }
});

export default store
