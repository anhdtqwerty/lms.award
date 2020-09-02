import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    drawer: false,
    imageViewDialog: {
      show: false,
      url: ''
    }
  },
  mutations: {
    setDrawer(state) {
      state.drawer = !state.drawer
    },
    displayImage(state, { subtitle, title, description, url }) {
      state.imageViewDialog = {
        show: true,
        subtitle,
        title,
        description,
        url
      }
    },
    hideImage(state) {
      state.imageViewDialog = {
        show: false,
        url: '',
        description: '',
        subtitle: '',
        title: ''
      }
    }
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
