import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    drawer: false
  },
  mutations: {
    setDrawer(state) {
      state.drawer = !state.drawer
    },
  },
  actions: {
    setDrawer({ commit }, drawer) {
      commit('setDrawer', drawer)
    },
  },
  getters: {
    drawer: state => {
      return state.drawer
    },
  }
})
