import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import LinearProgress from '@material-ui/core/LinearProgress'
import { TodoList } from './list'
import { fetch as fetchTodos } from './_actions'
import { fetchUsers } from '../../redux/users/actions'
import { mapUsersById } from './selectors'
import { Header } from './header'
import styles from './index.css'

type Props = {
  currentUser: UserType | null
  fetchTodos: ActionProp<'todos', 'fetch'>
  fetchUsers: ActionProp<'users', 'fetchUsers'>
  statuses: StateFieldProp<'todos', 'statuses'>
  todos: ToDo[]
  usersById: Map<number, UserType>
  userStatuses: StateFieldProp<'users', 'statuses'>
}

const Todos = ({
  currentUser,
  fetchTodos,
  fetchUsers,
  statuses,
  todos,
  usersById,
  userStatuses,
}: Props) => {
  const isLoading =
    statuses.fetch === 'LOADING' && userStatuses.fetchUsers === 'LOADING'

  useEffect(() => {
    if (statuses.fetch !== 'SUCCESS') {
      fetchTodos()
    }
    if (userStatuses.fetchUsers !== 'SUCCESS') {
      fetchUsers()
    }
  }, [fetchTodos, fetchUsers, statuses.fetch, userStatuses.fetchUsers])

  return (
    <section>
      {isLoading ? (
        <LinearProgress className={styles.loading} color="secondary" />
      ) : (
        <>
          <Header currentUser={currentUser} />
          <TodoList todos={todos} statuses={statuses} usersById={usersById} />
        </>
      )}
    </section>
  )
}

const mapStateToProps = (state: AppState) => ({
  todos: state.todos.todos,
  statuses: state.todos.statuses,
  userStatuses: state.users.statuses,
  currentUser: state.users.currentUser,
  usersById: mapUsersById(state),
})

const mapDispatchToProps = { fetchTodos, fetchUsers }

export const TodosPage = connect(mapStateToProps, mapDispatchToProps)(Todos)
