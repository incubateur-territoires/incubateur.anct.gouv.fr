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
        {key:'twitter:title', property: 'twitter:title', content: `Offres aux acteurs publics et partenaires de collectivités`},
        {key:'twitter:description', property: 'twitter:description', content: `${this.$page.job.equipe} recrute : ${this.$page.job.role}`},
        {key:'twitter:image', property: 'twitter:image', content: `https://incubateur.anct.gouv.fr/og-image-offre-partenaires.png`},
        // OpenGraph
        {key:'og:title', property: 'og:title', content: `Offres aux acteurs publics et partenaires de collectivités`},
        {key:'og:site_name', property: 'og:site_name', content: `Incubateur des Territoires`},
        {key:'og:description', property: 'og:description', content: `Les collectivités peuvent à tout moment solliciter l'Incubateur des Territoires`},
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
