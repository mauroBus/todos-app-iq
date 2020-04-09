import { combineReducers } from 'redux'
import TodosReducer from '../../pages/todos/_reducer'
import UsersReducer from '../users/reducer'

export default combineReducers<any, any>({
  todos: TodosReducer,
  users: UsersReducer,
})
