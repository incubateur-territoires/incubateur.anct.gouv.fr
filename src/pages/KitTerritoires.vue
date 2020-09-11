<template>
  <Layout>
    <div class="offres">
      <PageTitle>{{ $page.pageContent.title }}</PageTitle>
      <center>
        <a title="télécharger le kit" class="matomo_download" href="/kitelus_def.pdf" target="_blank" id="downloadpdfimage" onclick="_paq.push(['trackEvent', 'KitTerritoires', 'Download']);" >
          <img alt="kit territoires"
            width="600"
            src="/kit-cover.jpg"
          />
        </a>
      </center>
      <div class="buttons">
        <a title="télécharger le kit" class="matomo_download" href="/kitelus_def.pdf" target="_blank" id="downloadpdfbutton" onclick="_paq.push(['trackEvent', 'KitTerritoires', 'Download']);">télécharger kit-territoire.pdf</a>
      </div>
    </div>

    <div class="px-4">
      <PageContent v-html="$page.pageContent.content" />
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
