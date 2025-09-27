// nuxt.config.ts
export default defineNuxtConfig({
  ssr: true,
  nitro: { preset: 'static' },

  css: ['@/assets/css/tailwind.css'],

  modules: [
    '@nuxtjs/i18n',
    '@nuxt/ui',
    '@nuxt/fonts',
    '@nuxt/icon'
  ],

  i18n: {
    strategy: 'no_prefix',
    defaultLocale: 'id',
    langDir:'locales',
    locales: [
      { code: 'id', iso: 'id-ID', file: 'id.json', name: 'Bahasa Indonesia' },
      { code: 'en', iso: 'en-US', file: 'en.json', name: 'English' }
    ],
  },

  fonts: {
    families: [
      { name: 'Inter', provider: 'google' },
      { name: 'Roboto', provider: 'google' }
    ],
  },

  compatibilityDate: '2025-09-26',
})
