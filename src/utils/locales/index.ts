import t, { SetupOptions } from 'format-message'
import { languagesMap } from './languages'

const formatConfig: SetupOptions = {
  missingTranslation: 'ignore',
  formats: {
    date: {
      dd: { day: '2-digit' },
      MMM: { month: 'short' },
      MMMM: { month: 'long' },
      'MMM d': { month: 'short', day: 'numeric' },
      'MMM d yyyy': { month: 'short', day: 'numeric', year: 'numeric' },
      'MMMM d': { month: 'long', day: 'numeric' },
      'MMMM yy': { month: 'long', year: '2-digit' },
      'MMM yyyy': { month: 'short', year: 'numeric' },
      'MMMM yyyy': { month: 'long', year: 'numeric' },
      'M/d/yyyy': { day: 'numeric', month: 'numeric', year: 'numeric' },
      'MM/dd/yyyy': { day: '2-digit', month: '2-digit', year: 'numeric' },
      'dd MMM yyyy': { day: '2-digit', month: 'short', year: 'numeric' },
      'd MMMM yyyy': { day: 'numeric', month: 'long', year: 'numeric' },
      yyyy: { year: 'numeric' },
      EEEE: { weekday: 'long' },
      'EEEE, MMM d': { weekday: 'long', month: 'short', day: 'numeric' },
      'E M/d': { weekday: 'short', month: 'numeric', day: 'numeric' },
      'EEEE MMMM d, yyyy': {
        day: 'numeric',
        weekday: 'long',
        month: 'long',
        year: 'numeric',
      },
    },
    time: {
      H: { hour: 'numeric' },
      'H:mm': { hour: 'numeric', minute: '2-digit' },
    },
  },
}

export const initFormatMessage = () => t.setup(formatConfig)

export const setLocale = async (locale: 'es' | 'en') => {
  if (t.setup().locale !== locale) {
    const language = languagesMap.get(locale)

    if (language == null || !language.import) return
    const strings = await language.import()
    // @ts-ignoree
    t.setup({ locale, translations: { [locale]: strings } })
  }
}
