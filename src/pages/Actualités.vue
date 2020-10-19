<template>
  <Layout>
    <div class="recrutement">
      <PageTitle>
        Actualités
      </PageTitle>

      <div class="actualites">
        <div v-for="{ node } in $page.actualites.edges" :key="node.id" :job="node">
          <g-link :to=node.path>{{ node.title }}</g-link>
        </div>
      </div>
    </div>
  </Layout>
</template>

<page-query>
  query Actualites {
    actualites: allActualite (sortBy: "date_publie") {
      edges {
        node {
          id
          path
          title
        }
      }
    }
  }
</page-query>

<script>
import PageTitle from '~/components/PageTitle.vue'
import PageContent from '~/components/PageContent.vue'

export default {
  metaInfo: {
    title: 'Actualités'
  },
  components: {
    PageTitle,
    PageContent
  }
}
</script>
