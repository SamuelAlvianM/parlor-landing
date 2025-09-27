// nuxt.config.ts
import { execSync } from 'node:child_process'

const commitHash = execSync('git rev-parse --short HEAD').toString().trim()

export default defineNuxtConfig({
  ssr: true,
  nitro: { preset: 'static' },

  css: ['@/assets/css/tailwind.css'],

  modules: [
    '@nuxtjs/i18n',
    '@nuxt/image',
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
  image: {
    domains: ['parlor.dev','localhost','hompimplay.id','backend.hompimplay.id']
  },

  runtimeConfig: {
    apiEndPoint: process.env.NUXT_API_BASE,

    public: {
       buildTime: new Date().toISOString(),
       commit: commitHash,
      wsUrl: process.env.NUXT_WS_URL ,
      apiUrl: process.env.NUXT_API_BASE,
      rootUrl: process.env.NUXT_API_BASE_PROD || 'http://localhost:3000',
    }
  },

  compatibilityDate: '2025-09-26',
})
