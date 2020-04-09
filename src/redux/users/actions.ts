import * as types from './action-types'

export type UsersActionType =
  | FetchUsersStartAction
  | FetchUsersSuccessAction
  | FetchUsersFailureAction

// Fetch Users:
type FetchUsersStartAction = {
  type: typeof types.USERS_FETCH_START
  method: 'GET'
  url: '/api/users'
}
type FetchUsersSuccessAction = {
  type: typeof types.USERS_FETCH_SUCCESS
  initiator: FetchUsersStartAction
  payload: UserType[]
}
type FetchUsersFailureAction = {
  type: typeof types.USERS_FETCH_FAILURE
  initiator: FetchUsersStartAction
}

export const fetchUsers = (): FetchUsersStartAction => ({
  type: types.USERS_FETCH_START,
  method: 'GET',
  url: '/api/users',
})
