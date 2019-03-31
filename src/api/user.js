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

export const register = ({ userName, password }) => {
  return axios.request({
    url: '/api/users',
    method: 'post',
    data: {
      username: userName,
      password
    }
  })
}

export const login = ({ userName, password }) => {
  return axios.request({
    url: '/api/users/login',
    method: 'post',
    data: {
      username: userName,
      password
    }
  })
}
