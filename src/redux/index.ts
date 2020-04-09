import {
  createStore as createReduxStore,
  bindActionCreators,
  applyMiddleware,
  Store,
} from 'redux'
import rootReducer from './reducers'
import { fetchMiddleware } from './middlewares/fetch'
import * as todosActions from '../pages/todos/_actions'
import * as usersActions from './users/actions'
import { fetchApi } from '../utils/fetch'
import { loadState, saveState } from './localStorage'

const bindActions = (store: Store<any, any>): AppActions => ({
  todos: bindActionCreators(todosActions, store.dispatch),
  users: bindActionCreators(usersActions, store.dispatch),
})

export const createStore = () => {
  const persistedState = loadState()
  const store = createReduxStore<AppState, any, any, any>(
    rootReducer,
    persistedState,
    applyMiddleware(fetchMiddleware(fetchApi))
  )

  store.subscribe(() => {
    saveState({
      todos: store.getState().todos,
      users: store.getState().users,
    })
  })

  const actions = bindActions(store)
  return { actions, store }
}
