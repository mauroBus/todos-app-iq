declare global {
  type TodoComment = {}

  type ToDo = {
    id: number
    body: string
    title: string
    userId: number
  }
}

export {}
