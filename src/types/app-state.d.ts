import { State as TodosReducerState } from '../../src/pages/todos/_reducer'
import { State as UsersReducerState } from '../../src/redux/users/reducer'

declare global {
  type AppState = {
    todos: TodosReducerState
    users: UsersReducerState
  }

  type StateProp<T extends keyof AppState> = AppState[T]
  type StateFieldProp<
    T extends keyof AppState,
    S extends keyof AppState[T]
  > = AppState[T][S]
}

export {}
