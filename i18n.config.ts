export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'en',
  messages: {
    en: {
      welcome: 'Welcome to my app!',
      language: 'Language',
    },
    id: {
      welcome: 'Selamat datang di aplikasi saya!',
      language: 'Bahasa',
    }
  }
}))
