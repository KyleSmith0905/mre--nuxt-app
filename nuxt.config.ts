// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@sidebase/nuxt-auth'],
  devtools: { enabled: true },
  ssr: true,
  auth: {
    baseURL: process.env.ORIGIN,
    globalAppMiddleware: false,
  }
})
