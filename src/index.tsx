import React from 'react'
import { render } from 'react-dom'
import { Store } from 'redux'
import { Provider } from 'react-redux'
import { ErrorBoundary } from './shared/error-boundary'
import router from './router'
import { initFormatMessage } from './utils/locales'
import { createStore } from './redux'

type ViewType = Function | undefined

const initRouteRendering = (
  root: HTMLElement,
  store: Store<AppState>,
  actions: AppActions
) => {
  let currentView: ViewType

  function renderView() {
    if (!currentView) return
    render(
      <ErrorBoundary>
        <Provider store={store}>
          {currentView(store.getState(), actions)}
        </Provider>
      </ErrorBoundary>,
      root
    )
  }

  function setView(view: ViewType) {
    currentView = view
    renderView()
  }

  const onRoute = (args: { context: Object }, routing: Promise<ViewType>) => {
    Object.assign(args.context, {
      actions,
      store,
    })
    routing.then(setView).catch(console.error)
  }

  router.on('route', onRoute)
  router.start()
}

export const initApp = () => {
  const root = document.getElementById('root')
  if (!root) return

  const { store, actions } = createStore()
  initFormatMessage()

  initRouteRendering(root, store, actions)
}

initApp()
