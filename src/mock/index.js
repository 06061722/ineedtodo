import Mock from 'mockjs'
import { register, login } from './response/user'
import { getTodoList, getDoneList } from './response/todolist'

Mock.mock(/\/login/, login)
Mock.mock(/\/register/, register)
Mock.mock(/\/getTodoList/, getTodoList)
Mock.mock(/\/getDoneList/, getDoneList)

export default Mock
