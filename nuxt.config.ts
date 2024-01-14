import apollo from './apollo/apollo'

export default defineNuxtConfig({
  modules: [
    '@vueuse/nuxt',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    '@nuxtjs/apollo',
    '@unocss/nuxt',
  ],
  apollo,
  typescript: {
    typeCheck: true,
    strict: true,
  },
  devtools: { enabled: true },
})
