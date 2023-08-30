import axios, { AxiosResponse } from 'axios'
import { ElMessage } from 'element-plus'

const request = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API,
  timeout: 5000,
})

// 请求拦截器
request.interceptors.request.use((config) => {
  // headers 请求头

  // 返回配置对象
  return config
})

// 响应拦截器
request.interceptors.response.use(
  (response: AxiosResponse) => {
    return response.data
  },
  (error) => {
    // 失败回调
    let message = ''
    let status = 0
    status = error.response.status
    switch (status) {
      case 401:
        message = 'TOKEN 过期'
        break
      case 403:
        message = '无权访问'
        break
      case 404:
        message = '请求地址错误'
        break
      case 500:
        message = '服务器出现问题'
        break
      default:
        message = '服务器出现问题'
        break
    }

    // 提示错误信息
    ElMessage({
      type: 'error',
      message,
    })

    return Promise.reject(error)
  },
)

// 对外暴露
export default request
