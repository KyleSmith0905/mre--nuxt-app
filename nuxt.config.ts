// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@sidebase/nuxt-auth'],
  devtools: { enabled: true },
  ssr: true,
  runtimeConfig: {
    authSecret: process.env.AUTH_SECRET,
  },
  routeRules: {
    '/': {
      isr: 604800,
    }
  },
  auth: {
    baseURL: process.env.ORIGIN,
    globalAppMiddleware: false,
  },
})
