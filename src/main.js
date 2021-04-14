// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import vClickOutside from 'v-click-outside'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { config, library } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'

import { 
  faGithub,
  faTwitter,
  faLinkedin,
  faYoutube
} from '@fortawesome/free-brands-svg-icons'

import {
  faPaperPlane,
  faExternalLinkAlt,
  faBars,
  faTimes
} from '@fortawesome/free-solid-svg-icons'

import {
  faEnvelope,
  faChartBar,
  faFilePdf
} from '@fortawesome/free-regular-svg-icons'

library.add(
  faGithub,
  faTwitter,
  faPaperPlane,
  faExternalLinkAlt,
  faEnvelope,
  faChartBar,
  faBars,
  faTimes,
  faFilePdf,
  faLinkedin,
  faYoutube
)

//Plugins
import '@/plugins/Dayjs'
import '@/plugins/graphql'

import LogRocket from 'logrocket';
LogRocket.init('xz8jmz/incubateuranctgouvfr');

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  Vue.component('font-awesome', FontAwesomeIcon)

  Vue.use(vClickOutside)

  let ROOT_PATH = 'https://incubateur.anct.gouv.fr'

  // Set Head
  head.htmlAttrs = { lang: 'fr' }
  const socialMediaMeta = [
    // Twitter Card
    {key:'twitter:card', property: 'twitter:card', content: 'summary'},
    {key:'twitter:title', property: 'twitter:title', content: `L'Incubateur des Territoires`},
    {key:'twitter:description', property: 'twitter:description', content: `Une mission de l'Agence nationale de la cohesion des territoires`},
    // image must be an absolute path
    {key:'twitter:image', property: 'twitter:image', content: `${ROOT_PATH}/og-image-front.png`},
    // Facebook OpenGraph
    {key:'og:title', property: 'og:title', content: `L'Incubateur des Territoires`},
    {key:'og:site_name', property: 'og:site_name', content: `L'Incubateur des Territoires`},
    {key:'og:type', property: 'og:type', content: 'website'},
    {key:'og:image', property: 'og:image', content: `${ROOT_PATH}/og-image-front.png`},
    {key:'og:description', property: 'og:description', content: `Une mission de l'Agence nationale de la cohesion des territoires`}
  ]

  head.meta = head.meta.concat(socialMediaMeta)
}
