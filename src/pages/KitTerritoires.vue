<template>
  <Layout>
    <div class="kit-territoires">
      <PageTitle>{{ $page.pageContent.title }}</PageTitle>

      <g-image alt="kit territoires"
        class="mx-auto"
        src="~/assets/images/kit-cover.png"
      />

      <PageContent v-html="$page.pageContent.content" />

      <div class="buttons">
        <a class="cta matomo_download" title="Télécharger le kit" href="/kitelus_def.pdf" target="_blank" id="downloadpdfbutton" onclick="_paq.push(['trackEvent', 'KitTerritoires', 'Download']);">Télécharger le kit <font-awesome class="ml-2" :icon="['far', 'file-pdf']"/></a>
        <g-link class="contact cursor-pointer" to="/contact-territoires/">Intéressé ? Contactez-nous</g-link>
      </div>       
    </div>
  </Layout>
</template>

<page-query>
query page {
  pageContent(path: "/content/pages/kit-territoires/") {
    title
    content
  }
}
</page-query>


<style lang="scss">
.kit-territoires {
  .buttons {
    @apply flex flex-col justify-center mb-6 max-w-screen-xs mt-12 font-semibold mx-auto;

    .cta {
      @apply block px-4 py-2 my-4 border-2 border-navy text-navy font-bold text-lg rounded-full shadow-yellow text-center transition ease-linear duration-100;
    
      @screen sm {
        @apply inline-block my-2;
      }

      &:hover {
        @apply bg-navy text-white;
      }
    }

    .contact {
      @apply block px-4 py-2 mt-4 border-2 border-transparent text-navy font-bold rounded-full text-center transition ease-linear duration-100;
    
      &:hover {
        @apply border-navy;
      }
    }
  }


}
</style>

<script>

import PageTitle from "~/components/PageTitle.vue";
import PageContent from "~/components/PageContent.vue";

export default {
  metaInfo: {
    title: "Kit territoires des élus",
    meta: [
      {key: 'description', property: 'description', content: 'Guide des services publics numériques offert aux colléctivités'},
      // Twitter Card
      {key:'twitter:title', property: 'twitter:title', content: 'Kit territoires des élus'},
      {key:'twitter:description', property: 'twitter:description', content: "Guide des services publics numériques offert aux colléctivités"},
      // Facebook OpenGraph
      {key:'og:title', property: 'og:title', content: "Kit territoires des élus"},
      {key:'og:site_name', property: 'og:site_name', content: "Incubateur des Territoires"},
      {key:'og:description', property: 'og:description', content: "Guide des services publics numériques offert aux colléctivités"}
    ]
  },
  components: {
    PageTitle,
    PageContent,
  }
};
</script>
