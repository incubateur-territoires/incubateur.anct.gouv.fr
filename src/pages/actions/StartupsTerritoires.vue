<template>
  <Layout>
    <div class="services">
      <PageTitle>
        {{ $page.pageContent.title }}
      </PageTitle>

      <div class="px-4">
        <PageContent v-html="$page.pageContent.content" />

        <div class="mx-auto max-w-screen-md">
          <h2 class="font-marianne text-3xl mb-4 mt-6 font-semibold">
            Startups de Territoires
          </h2>

          <ServiceCard
            v-for="{ node } in $page.startupsTerritoires.edges"
            :id="node.id"
            :name="node.name"
            :pitch="node.pitch"
            :contact="node.contact"
            :beta_url="node.beta_url"
            :repo_url="node.repo_url"
            :stats_url="node.stats_url"
            :service_url="node.service_url"
          />
        </div>

        <div class="mx-auto max-w-screen-md">
          <h2 class="font-marianne text-3xl mb-4 mt-6 font-semibold">
            Startups d'État
          </h2>

          <ServiceCard
            v-for="{ node } in $page.startupsEtats.edges"
            :id="node.id"
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
    </div>
  </Layout>
</template>

<page-query>
  query Services ($page: Int) {
    pageContent(id: "startups-de-territoires") {
      title
      content
    }
    startupsTerritoires: allStartups (page: $page, sortBy: "status", order: ASC, filter: { status: { nin: ["partenariat passé", "en investigation"]}, startup_etat: { eq: false } }) {
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
    startupsEtats: allStartups (page: $page, sortBy: "status", order: ASC, filter: { status: { nin: ["partenariat passé", "en investigation"]}, startup_etat: { eq: true } }) {
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
    title: 'Startups de Territoires'
  },
  components: {
    ServiceCard,
    PageTitle,
    PageContent
  }
}
</script>
