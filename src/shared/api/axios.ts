import axios from 'axios'

export const instanceAxios = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_SERVER_URL,
})

instanceAxios.interceptors.request.use((config) => {
  config.headers.Authorization = localStorage.getItem('token')
  return config
})
