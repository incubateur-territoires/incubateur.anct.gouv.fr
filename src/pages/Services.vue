<template>
  <Layout>
    <div class="services">
      <div class="splash">
        <h1>Services incubés</h1>
      </div>

      <div class="services-cards">
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

export default {
  metaInfo: {
    title: 'Services incubés'
  },
  components: {
    ServiceCard
  }
}
</script>

<style lang="scss">
.services {
  .splash {
    @apply py-8 mb-12 font-marianne text-white bg-navy;
  }

  h1 {
    @apply text-5xl font-black mx-auto max-w-screen-md;
  }

  .service-cards {
    @apply mx-auto max-w-screen-md;
  }
}
</style>
