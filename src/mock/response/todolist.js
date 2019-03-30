import Mock from 'mockjs'

export const getTodoList = () => {
  const template = {
    'content|10': '@cword'
  }
  let arr = []
  for (let i = 0; i < 10; ++i) {
    arr.push(Mock.mock(template).content)
  }
  return arr
}

export const getDoneList = () => {
  const template = {
    'content|10': '@cword'
  }
  let arr = []
  for (let i = 0; i < 10; ++i) {
    arr.push(Mock.mock(template).content)
  }
  return arr
}
