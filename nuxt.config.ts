/// <reference types="nuxt" />
export default defineNuxtConfig({
  css: ['@/assets/css/tailwind.css'],
  modules: [
    '@nuxtjs/i18n',
    '@nuxt/ui',
    '@nuxt/fonts',
    '@nuxt/icon'
  ],

  i18n: {
    locales: [
      { code: 'en', name: 'English' },
      { code: 'id', name: 'Indonesia' }
    ],
    defaultLocale: 'en',
    strategy: 'no_prefix',
    vueI18n: './i18n.config.ts'
  },
  fonts: {
    families: [
      { name: 'Inter', provider: 'google' },
      { name: 'Roboto', provider: 'google' },
    ],
  },

  compatibilityDate: '2025-09-26',
})