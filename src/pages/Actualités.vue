<template>
  <Layout>
    <div class="recrutement">
      <PageTitle>
        Actualités
      </PageTitle>

      <div class="mx-auto max-w-screen-md">
        <div 
          v-for="{ node } in $page.actualites.edges"
          :key="node.id"
          :job="node"
          class="text-xl"
        >
          <g-link :to=node.path>{{ node.title }} - {{ node.date_publie }}</g-link>
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
          date_publie
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
