import { ToDoActionType } from './_actions'
import {
  TODOS_FETCH_START,
  TODOS_FETCH_SUCCESS,
  TODOS_FETCH_FAILURE,
} from './_action-types'

export type State = {
  todos: ToDo[]
  statuses: FetchStatusMap<'fetch'>
}

const initialState: State = {
  todos: [],
  statuses: {
    fetch: 'UNSENT' as FetchStatus,
  },
}

export default (state: State = initialState, action: ToDoActionType) => {
  switch (action.type) {
    // Fetch:
    case TODOS_FETCH_START:
      return {
        ...state,
        statuses: {
          ...state.statuses,
          fetch: 'LOADING',
        },
      }
    case TODOS_FETCH_SUCCESS:
      return {
        ...state,
        todos: action.payload,
        statuses: {
          ...state.statuses,
          fetch: 'SUCCESS',
        },
      }
    case TODOS_FETCH_FAILURE:
      return {
        ...state,
        statuses: {
          ...state.statuses,
          fetch: 'ERROR',
        },
      }

    default:
      return state
  }
}
