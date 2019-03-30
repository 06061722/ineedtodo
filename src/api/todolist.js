import axios from './index'

export const getTodoList = () => {
  return axios.request({
    url: '/getTodoList',
    method: 'get'
  })
}

export const getDoneList = () => {
  return axios.request({
    url: '/getDoneList',
    method: 'get'
  })
}
