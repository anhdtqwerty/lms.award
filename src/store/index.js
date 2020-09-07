import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    drawer: false,
    imageViewDialog: {
      images: [],
      index: 0,
      subtitle: '',
      title: '',
      description: '',
      show: false,
      url: ''
    }
  },
  mutations: {
    setDrawer(state) {
      state.drawer = !state.drawer
    },
    displayImage(state, { subtitle, title, description, url, index, showcases }) {
      state.imageViewDialog = {
        index,
        showcases,
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
