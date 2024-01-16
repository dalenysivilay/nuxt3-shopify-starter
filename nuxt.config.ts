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
    strict: true,
  },
  devtools: { enabled: true },
})
