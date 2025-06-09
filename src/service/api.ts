import axios from 'axios'

const baseApi = axios.create({
  baseURL: import.meta.env.VITE_API,  // 你的 API 根網址
  timeout: 5_000,
  headers: {
    'Content-Type': 'application/json'
  }
})

export default baseApi