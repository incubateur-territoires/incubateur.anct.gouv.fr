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
        <a class="button matomo_download" title="Télécharger le kit" href="/kitelus_def.pdf" target="_blank" id="downloadpdfbutton" onclick="_paq.push(['trackEvent', 'KitTerritoires', 'Download']);">Télécharger le kit</a>
        <div class="button cursor-pointer" v-on:click="showContact = !showContact">Questions? Contactez-nous</div>
      </div>

      <div class="my-12 max-w-screen-md mx-auto" v-if="showContact">
        <iframe class="airtable-embed airtable-dynamic-height" src="https://airtable.com/embed/shr1fmbfwYDtsKX7l?backgroundColor=orange" frameborder="0" onmousewheel="" width="100%" height="533" style="background: transparent; border: 1px solid #ccc;"></iframe>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query page {
  pageContent(path: "/pages/kit-territoires/") {
    title
    content
  }
}
</page-query>


<style lang="scss">
.kit-territoires {
  .buttons {
    @apply mt-12 font-semibold;

    .button:first-child {
      @apply mb-4;

      @screen sm {
        @apply mb-0 mr-4;
      }
    }

    @screen sm {
      @apply flex justify-center mb-6;
    }

    .button {
      @apply block text-center;

      @apply py-2 px-4 bg-yellow rounded-lg text-navy border-4 border-yellow text-lg transition ease-linear duration-100;

      &:hover {
        @apply border-4 border-yellow bg-navy text-yellow;
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
    title: "Kit territoires",
  },
  data() {
    return {
      showContact: false
    }
  },
  components: {
    PageTitle,
    PageContent,
  },
  mounted() {
    let recaptchaScript = document.createElement('script')
    recaptchaScript.setAttribute('src', 'https://static.airtable.com/js/embed/embed_snippet_v1.js')
    document.head.appendChild(recaptchaScript)
  },
};
</script>
