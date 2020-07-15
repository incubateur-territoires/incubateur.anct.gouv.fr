<template>
  <Layout>
    <div class="services">
      <PageTitle>
        Services incubés
      </PageTitle>

      <div class="px-4 services-cards">
        <ServiceCard v-for="{ node } in $page.services.edges" :key="node.id" :service="node" />
      </div>
    </div>
  </Layout>
</template>

<page-query>
  query Services ($page: Int) {
    services: allService (page: $page) {
      edges {
        node {
          id
          title
          status
          link
          repository
          stats_url
          contact
          mission
          path
        }
      }
    }
  }
</page-query>

<script>
import ServiceCard from '~/components/ServiceCard.vue'
import PageTitle from '~/components/PageTitle.vue'

export default {
  metaInfo: {
    title: 'Services incubés'
  },
  components: {
    ServiceCard,
    PageTitle
  }
}
</script>

<style lang="scss">
.services {

  .service-cards {
    @apply mx-auto max-w-screen-md;
  }
}
</style>
