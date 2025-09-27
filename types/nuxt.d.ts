/// <reference types="nuxt" />
export {}

declare global {
  const useRuntimeConfig: typeof import('#app')['useRuntimeConfig']
}

declare module 'nuxt/schema' {
  interface NuxtConfig {
    i18n?: typeof import('@nuxtjs/i18n').default extends (input: infer I) => any
      ? I
      : any
  }
  interface NuxtOptions {
    i18n?: NuxtConfig['i18n']
  }
}