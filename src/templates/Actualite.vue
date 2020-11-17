<template>
  <Layout>
    <div class="actualite">
      <PageTitle>
        {{$page.actualite.title}}
      </PageTitle>

      <div class="px-4">
        <PageContent v-html="$page.actualite.content" />
      </div>
    </div>
  </Layout>
</template>

<page-query>
query ($id: ID!) {
  actualite(id: $id) {
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
      title: this.$page.actualite.title,
      meta: [
        // Twitter Card
        {key:'twitter:title', property: 'twitter:title', content: this.$page.actualite.title},
        // Facebook OpenGraph
        {key:'og:title', property: 'og:title', content: this.$page.actualite.title},
        {key:'og:site_name', property: 'og:site_name', content: `L'Incubateur des Territoires`},
      ]
    }
  },
  components: {
    PageTitle,
    PageContent
  }
}
</script>
