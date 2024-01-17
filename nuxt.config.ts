import type { NuxtPage } from 'nuxt/schema'
import apollo from './apollo/apollo'
import ignoreComponentsDirHook from './utils/ignoreComponentsDirHook'

export default defineNuxtConfig({
  modules: [
    '@vueuse/nuxt',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    '@nuxtjs/apollo',
    '@nuxt/ui',
    '@nuxtjs/tailwindcss',
  ],
  apollo,
  typescript: {
    strict: true,
  },
  hooks: {
    'pages:extend': function (pages: NuxtPage[]) {
      ignoreComponentsDirHook(pages)
    },
  },
  components: [
    '~/components',
    {
      path: '~/pages',
      pattern: '*/components/**',
      pathPrefix: false,
    },
  ],
  devtools: { enabled: true },
})
