import * as types from './_action-types'

export type ToDoActionType =
  | FetchStartAction
  | FetchSuccessAction
  | FetchFailureAction

// Fetch Todos:
type FetchStartAction = {
  type: typeof types.TODOS_FETCH_START
  method: 'GET'
  url: string
}
type FetchSuccessAction = {
  type: typeof types.TODOS_FETCH_SUCCESS
  initiator: FetchStartAction
  payload: ToDo[]
}
type FetchFailureAction = {
  type: typeof types.TODOS_FETCH_FAILURE
  initiator: FetchStartAction
}

export const fetch = (): FetchStartAction => ({
  type: types.TODOS_FETCH_START,
  method: 'GET',
  // Commented out because the response is different, the 'body' tag is not sent
  //  when using the Webpack proxy... I have no time today to fix it, but I will.
  // url: '/api/todos',
  url: 'https://jsonplaceholder.typicode.com/posts',
})
