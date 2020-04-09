import { MiddlewareStep } from 'middle-router'

/*
Maps navigation keys used internally by middle-router to actual urls, and then
builds the history lists from the stack of navigation keys.
*/
const keyToUrl = {}

export default ({ context, location, router }: MiddlewareStep) => {
  const key = router.stack[router.stackIndex]
  keyToUrl[key] = location // eslint-disable-line immutable/no-mutation
  context.back = router.stack // eslint-disable-line immutable/no-mutation
    .slice(0, router.stackIndex)
    .map(key => keyToUrl[key])
  context.forward = router.stack // eslint-disable-line immutable/no-mutation
    .slice(router.stackIndex + 1)
    .map(key => keyToUrl[key])
}
