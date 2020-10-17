<template>
  <Layout>
    <div class="services">
      <PageTitle>
        Startups de Territoires
      </PageTitle>

      <div class="px-4 services-cards">
        <ServiceCard v-for="{ node } in $page.services.edges" :key="node.id" :service="node" />
      </div>
    </div>
  </Layout>
</template>

<page-query>
  query Services ($page: Int) {
    services: allStartups (page: $page, sortBy: "status", order: ASC) {
      edges {
        node {
          id
          name
          pitch
          status
          contact
          beta_url
          repo_url
          stats_url
          service_url
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
