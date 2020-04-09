declare global {
  type FetchStatus = 'LOADING' | 'SUCCESS' | 'ERROR' | 'UNSENT'

  type FetchStatusMap<Key extends string | number | symbol> = Record<
    Key,
    FetchStatus
  >

  type UserType = {
    id: number
    name: string
    username: string
    email: string
    address: {
      street: string
      suite: string
      city: string
      zipcode: string
      geo: {
        lat: number
        lng: number
      }
    }
    phone: string
    website: string
    company: {
      name: string
      catchPhrase: string
      bs: string
    }
  }
}

export {}
