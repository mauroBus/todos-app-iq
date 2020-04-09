export type ID = number | string

const root = () => ''
const base = () => `${root()}/`

const todos = () => `${root()}/todos`

const notFound = () => `${root()}/404`

const home = todos

export { base, home, notFound, root, todos }
