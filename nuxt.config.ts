import { defineNuxtConfig } from 'nuxt3'

export default defineNuxtConfig({
  css: [
    '@laruiss/vue-dsfr/dist/vue-dsfr-fonts.css',
    '@laruiss/vue-dsfr/dist/vue-dsfr.css',
    '@gouvfr/dsfr/dist/dsfr/dsfr.min.css',
  ],
  build: {
    transpile: [
      'oh-vue-icons/dist/v3/icon.es',
      'oh-vue-icons/icons/ri/index.js',
    ],
  },
})
