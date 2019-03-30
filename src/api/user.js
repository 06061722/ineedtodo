import axios from './index'

export const getUserInfo = ({ userId }) => {
  return axios.request({
    url: '/getUserInfo',
    method: 'post',
    data: {
      userId
    }
  })
}

export const authorization = () => {
  return axios.request({
    url: '/users/authorization',
    method: 'get'
  })
}

export const register = () => {
  return axios.request({
    url: '/register',
    method: 'get'
  })
}

export const login = () => {
  return axios.request({
    url: '/login',
    method: 'post'
  })
}
