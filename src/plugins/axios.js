import axios from 'axios'

axios.defaults.baseURL = process.env.VUE_APP_API_ENDPOINT
export default axios



axios.interceptors.response.use(
  res => {
    return res.data
  },
  err => {
    throw err
  }
)