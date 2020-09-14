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
        <a title="Télécharger le kit" class="matomo_download" href="/kitelus_def.pdf" target="_blank" id="downloadpdfbutton" onclick="_paq.push(['trackEvent', 'KitTerritoires', 'Download']);">Télécharger le kit</a>
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

    a:first-child {
      @apply mb-4;

      @screen sm {
        @apply mb-0 mr-4;
      }
    }

    @screen sm {
      @apply flex justify-center mb-6;
    }

    a {
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
  components: {
    PageTitle,
    PageContent,
  },
};
</script>
