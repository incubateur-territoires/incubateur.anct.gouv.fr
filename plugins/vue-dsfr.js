import { defineNuxtPlugin } from '#app';
import VueDsfr from '@laruiss/vue-dsfr';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueDsfr);
});
