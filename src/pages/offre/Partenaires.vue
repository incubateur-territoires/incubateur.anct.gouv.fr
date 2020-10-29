<template>
  <Layout>
    <div>
      <PageTitle>
        {{ $page.pageContent.title }}
      </PageTitle>
      
      <div class="px-4">
        <PageContent v-html="$page.pageContent.content" />
      </div>
    </div>
  </Layout>
</template>

<page-query>
query page {
  pageContent(id: "offres-partenaires") {
    title
    content
  }
}
</page-query>

<script>
import PageTitle from '~/components/PageTitle.vue'
import PageContent from '~/components/PageContent.vue'

export default {
  metaInfo() {
    return {
      title: `Offres aux acteurs publics et partenaires de collectivités`,
      meta: [
        // Twitter
        {key:'twitter:image', property: 'twitter:image', content: `https://incubateur.anct.gouv.fr/og-image-offre-partenaires.png`},
        // OpenGraph
        {key:'og:image', property: 'og:image', content: `https://incubateur.anct.gouv.fr/og-image-offre-partenaires.png`},
      ]
    }
  },
  components: {
    PageTitle,
    PageContent
  }
}
</script>
