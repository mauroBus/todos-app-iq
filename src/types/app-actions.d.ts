declare global {
  type AppActions = {
    todos: {
      fetch(): any
    }
    users: {
      fetchUsers(): any
    }
  }

  type ActionProp<
    T extends keyof AppActions,
    S extends keyof AppActions[T]
  > = AppActions[T][S]
}

export {}
