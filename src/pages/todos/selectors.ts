import { createSelector } from 'reselect'

const getUsers = (state: AppState): UserType[] => state.users.users

export const mapUsersById = createSelector([getUsers], (users: UserType[]) => {
  const map = new Map<number, UserType>()
  users.forEach(user => map.set(user.id, user))
  return map
})

const getTodos = (state: AppState): ToDo[] => state.todos.todos
const getCurrentUserId = (state: AppState): number | null =>
  state.users.currentUser ? state.users.currentUser.id : null

export const filterTodosByCurrentUser = createSelector(
  [getTodos, getCurrentUserId],
  (todos: ToDo[], currentUserId: number | null) =>
    getCurrentUserId
      ? todos.filter(todo => todo.userId === currentUserId)
      : todos
)
