import axios from './index'

export const getTodoAndDoneList = (UserId) => {
  return axios.request({
    url: `/api/todos/${UserId}/all`,
    method: 'get'
  })
}

export const addContent = (UserId, content) => {
  return axios.request({
    url: '/api/todos',
    method: 'post',
    data: {
      user_id: UserId,
      content
    }
  })
}

export const updateContent = (TodoId, content) => {
  return axios.request({
    url: '/api/todos/content',
    method: 'put',
    data: {
      todo_id: TodoId,
      content
    }
  })
}

export const updateStatus = (TodoId) => {
  return axios.request({
    url: '/api/todos/status',
    method: 'put',
    data: {
      todo_id: TodoId
    }
  })
}

export const deleteContent = (TodoId) => {
  return axios.request({
    url: `/api/todos/${TodoId}`,
    method: 'delete'
  })
}
