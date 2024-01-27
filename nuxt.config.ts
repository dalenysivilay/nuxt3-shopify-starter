import apollo from './apollo/apollo'

export default defineNuxtConfig({
  modules: [
    '@vueuse/nuxt',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    '@nuxtjs/apollo',
    '@nuxtjs/tailwindcss',
  ],
  apollo,
  tailwindcss: {
    viewer: { endpoint: '/tailwind', exportViewer: true },
  },
  typescript: {
    strict: true,
  },

  devtools: { enabled: true },
})
