export default {
  state: {
    imageViewDialog: {
      show: false,
      url: ''
    }
  },
  mutations: {
    displayImage (state, { subtitle, title, description, url }) {
      state.imageViewDialog = {
        show: true,
        subtitle,
        title,
        description,
        url
      }
    },
    hideImage (state) {
      state.imageViewDialog = {
        show: false,
        url: '',
        description: '',
        subtitle: '',
        title: ''
      }
    }
  }
}
