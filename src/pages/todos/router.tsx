import React from 'react'
import Router from 'middle-router'
import { TodosPage } from './index'

export const TodosRouter = Router().use(({ resolve }) => {
  resolve(() => <TodosPage />)
})
