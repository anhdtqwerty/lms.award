import axios from 'axios'

axios.defaults.baseURL = process.env.baseUrl
axios.interceptors.response.use(
  (res) => {
    return res.data
  },
  (err) => {
    throw err
  }
)

export default axios
