import axios from 'axios'
import { baseUrl } from '@/config'
// import { getToken } from '@/lib/util'

class HttpRequest {
  constructor (baseURL = baseUrl) {
    this.baseURL = baseURL
  }
  getInsideConfig () {
    const config = {
      baseURL: this.baseURL,
      Headers: {}
    }
    return config
  }
  interceptors (instance) {
    instance.interceptors.request.use(config => {
      // 添加全局的loading
      // config.headers['Authorization'] = getToken()       //增加头部信息
      return config
    }, error => {
      return Promise.reject(error)
    })

    instance.interceptors.response.use(res => {
      const { data } = res// 过滤数据
      return data
    }, error => {
      return Promise.reject(error.response.data)
    })
  }
  request (options) {
    const instance = axios.create()
    options = Object.assign(this.getInsideConfig(), options)// Object.assign 合并对象，相同key值，用后者覆盖

    this.interceptors(instance)
    return instance(options)
  }
}

export default HttpRequest
