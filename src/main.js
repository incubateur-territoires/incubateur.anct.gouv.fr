// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import BasicPageLayout from '~/layouts/BasicPage.vue'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { config, library } from '@fortawesome/fontawesome-svg-core'
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'
import {
  faPaperPlane,
  faExternalLinkAlt,
  faBars,
  faTimes
  } from '@fortawesome/free-solid-svg-icons'
import {
  faEnvelope,
  faChartBar,
  } from '@fortawesome/free-regular-svg-icons'
import '@fortawesome/fontawesome-svg-core/styles.css'

library.add(
  faGithub,
  faTwitter,
  faPaperPlane,
  faExternalLinkAlt,
  faEnvelope,
  faChartBar,
  faBars,
  faTimes
)


export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  Vue.component('BasicPage', BasicPageLayout)
  Vue.component('font-awesome', FontAwesomeIcon)

  // Load some other dependencies
  const moment = require('moment')
  require('moment/locale/fr')

  Vue.use(require('vue-moment'), {
      moment
  })

  let ROOT_PATH = 'https://incubateur.anct.gouv.fr'

  // Set Head
  head.htmlAttrs = { lang: 'fr' }
  const socialMediaMeta = [
    // Twitter Card
    {name: 'twitter:card', content: 'summary'},
    {name: 'twitter:title', content: `L'Incubateur des Territoires`},
    {name: 'twitter:description', content: `Une mission de l'Agence nationale de la cohesion des territoires`},
    // image must be an absolute path
    {name: 'twitter:image', content: `${ROOT_PATH}/assets/images/logoIncubateur.svg`},
    // Facebook OpenGraph
    {property: 'og:title', content: `L'Incubateur des Territoires`},
    {property: 'og:site_name', content: `L'Incubateur des Territoires`},
    {property: 'og:type', content: 'website'},
    {property: 'og:image', content: `${ROOT_PATH}/assets/images/logoIncubateur.svg`},
    {property: 'og:description', content: `Une mission de l'Agence nationale de la cohesion des territoires`}
  ]

  head.meta = head.meta.concat(socialMediaMeta)
}
