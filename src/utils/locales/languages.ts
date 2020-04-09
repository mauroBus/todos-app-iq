type Translations = {
  default: Record<
    string,
    | string
    | {
        message: string
        format?: (args?: Object) => string
        toParts?: (args?: Object) => any[]
      }
  >
}
type LanguageMapEntry = {
  name: string
  import?: () => Promise<Translations>
}

export const languagesMap = new Map<string, LanguageMapEntry>([
  [
    'en',
    {
      name: 'English (US)',
      import: () =>
        import('../../locales/en.json' /* webpackChunkName: "en" */),
    },
  ],
  [
    'es',
    {
      name: 'Español',
      import: () =>
        import('../../locales/es.json' /* webpackChunkName: "es" */),
    },
  ],
])
