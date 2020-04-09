declare module 'middle-router' {
  import { Store } from 'redux'

  export type MiddleRouterLocation = {
    href: string
    protocol: string
    host: string
    hostname: string
    port: string
    pathname: string
    search: string
    hash: string
    query: Record<string, string>
  }

  export type MiddleRouter = {
    addListener(event: string, listener: Function): MiddleRouter
    emit(event: string, ...args: Array<any>): boolean
    eventNames(): Array<string>
    listeners(event: string): Array<Function>
    listenerCount(event: string): number
    on(event: string, listener: Function): MiddleRouter
    once(event: string, listener: Function): MiddleRouter
    removeAllListeners(event?: string): MiddleRouter
    removeListener(event: string, listener: Function): MiddleRouter
    routing: Promise<any> | undefined
    start(): Promise<any>
    stop(): MiddleRouter
    navigate(path: string, state?: Object, title?: string): Promise<void>
    replace(
      path: string,
      state?: Object,
      title?: string
    ): Promise<void> | undefined
    back(): Promise<void>
    forward(): Promise<void>
    use(path: string, middleware: Middleware): MiddleRouter
    use(middleware: Middleware, nested: Middleware): MiddleRouter
    use(middleware: Middleware): MiddleRouter
    lazy(path: string, lazyLoader: () => Promise<Middleware>): MiddleRouter
    lazy(lazyLoader: () => Promise<Middleware>): MiddleRouter
    route(path?: string, state?: Object): Promise<any>
    isListening: boolean
    stack: string[]
    stackIndex: number
  }
  type MiddleRouterConstructor = {
    new (options?: RouterOptions): MiddleRouter
    (options?: RouterOptions): MiddleRouter
  }
  const Router: MiddleRouterConstructor

  type RouterOptions = {
    hash?: string | true
    routeLinks?: boolean
    confirm?: (message: string) => boolean
  }

  export type Middleware = MiddleRouter | ((step: MiddlewareStep) => void)

  export type MiddlewareContext = {
    store: Store<AppState>
    back: MiddleRouterLocation[]
    forward: MiddleRouterLocation[]
    actions: AppActions
    closeHref: string
  }
  export type MiddlewareStep = {
    router: MiddleRouter
    context: MiddlewareContext
    next: () => Promise<any>
    resolve: (
      value: ((...params: any[]) => React.ReactElement<any>) | Promise<any>
    ) => Promise<any> | undefined
    location: MiddleRouterLocation
    path: string
    params: Record<string, string>
    state?: Object
    beforeExit: (handler: any) => void
    exiting?: Promise<any>
  }

  export default Router
}
