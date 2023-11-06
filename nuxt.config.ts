// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@sidebase/nuxt-auth'],
  devtools: { enabled: true },
  ssr: true,
  runtimeConfig: {
    authSecret: process.env.AUTH_SECRET,
  },
  auth: {
    baseURL: process.env.AUTH_ORIGIN,
  }
})
