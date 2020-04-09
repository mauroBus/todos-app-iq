import React from 'react'
import Router from 'middle-router'
import historyMiddleware from './redux/middlewares/history'
import { NotFoundPage } from './pages/error'
import { setLocale } from './utils/locales'

import { TodosRouter } from './pages/todos/router'
import { App } from './app'
import { base, home, todos, notFound } from './utils/routes'

const router = Router()
  .use(historyMiddleware)

  // Fetch current user and check auth:
  .use(
    base(),
    Router()
      .use(async () => await setLocale('en'))

      // Redirect home on root:
      .use(base(), ({ location, resolve, router }) => {
        const path = home() + location.search + location.hash
        router.replace(path)
        resolve(router.route(path))
      })

      .use(async ({ resolve, next }) => {
        const children = await next()
        resolve(() => {
          return <App>{children()}</App>
        })
      })

      .use(todos(), TodosRouter)

      .use(notFound(), ({ resolve, location }) => {
        resolve(() => <NotFoundPage location={location} />)
      })
  )

  .use(({ resolve, location }) => {
    resolve(() => <NotFoundPage location={location} />)
  })

export default router
