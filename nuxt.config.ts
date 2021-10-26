import { defineNuxtConfig } from 'nuxt3'

export default defineNuxtConfig({
  css: [
    '@gouvfr/dsfr/dist/css/dsfr.min.css'
  ],
  meta: {
    script: [
      {
        src: '/node_modules/@gouvfr/dsfr/dist/js/dsfr.module.js',
        type: 'module'
      }
    ]
  }
})
