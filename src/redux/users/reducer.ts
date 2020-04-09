import { UsersActionType } from './actions'
import {
  USERS_FETCH_START,
  USERS_FETCH_SUCCESS,
  USERS_FETCH_FAILURE,
} from './action-types'

export type State = {
  currentUser: UserType | null
  users: UserType[]
  statuses: FetchStatusMap<'fetchUsers'>
}

const initialState: State = {
  currentUser: null,
  users: [],
  statuses: {
    fetchUsers: 'UNSENT' as FetchStatus,
  },
}

export default (state: State = initialState, action: UsersActionType) => {
  switch (action.type) {
    // Fetch Users:
    case USERS_FETCH_START:
      return {
        ...state,
        statuses: {
          ...state.statuses,
          fetchUsers: 'LOADING',
        },
      }
    case USERS_FETCH_SUCCESS:
      return {
        ...state,
        users: action.payload,
        currentUser: getRandomUser(action.payload),
        statuses: {
          ...state.statuses,
          fetchUsers: 'SUCCESS',
        },
      }
    case USERS_FETCH_FAILURE:
      return {
        ...state,
        statuses: {
          ...state.statuses,
          fetchUsers: 'ERROR',
        },
      }

    default:
      return state
  }
}

const getRandomUser = (users: UserType[]): UserType =>
  users[Math.floor(Math.random() * users.length)]
