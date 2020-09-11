import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import detector from 'i18next-browser-languagedetector'

import translationEN from '../shared/locales/en/translation.json'
import translationVN from '../shared/locales/vn/translation.json'

const resources = {
  en: {
    translation: translationEN
  },
  vn: {
    translation: translationVN
  }
}

i18n
  .use(detector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: 'vn',
    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  })

export default i18n
