<template>
  <Layout>
    <div class="services">
      <PageTitle>
        {{ $page.pageContent.title }}
      </PageTitle>

      <PageContent v-html="$page.pageContent.content" />

      <div class="mx-auto max-w-screen-md">
        <h2 class="font-marianne text-3xl mb-4 mt-6 font-semibold">
          Startups de Territoires incubées
        </h2>
        
        <ServiceCard 
          v-for="{ node } in $page.services.edges"
          :key="node.id"
          :name="node.name"
          :pitch="node.pitch"
          :contact="node.contact"
          :beta_url="node.beta_url"
          :repo_url="node.repo_url"
          :stats_url="node.stats_url"
          :service_url="node.service_url"
        />
      </div>
    </div>
  </Layout>
</template>

<page-query>
  query Services ($page: Int) {
    pageContent(id: "startups-de-territoires") {
      title
      content
    }
    services: allStartups (page: $page, sortBy: "status", order: ASC, filter: { status: { nin: ["partenariat passé", "en investigation"]} }) {
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
import PageContent from '~/components/PageContent.vue'

export default {
  metaInfo: {
    title: 'Services incubés'
  },
  components: {
    ServiceCard,
    PageTitle,
    PageContent
  }
}
</script>
