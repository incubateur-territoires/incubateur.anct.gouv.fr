<template>
  <Layout>
    <div class="offres">
      <PageTitle>
        {{ $page.pageContent.title }}
      </PageTitle>

      <div class="px-4">
        <PageContent v-html="$page.pageContent.content" />
      </div>

      <div class="mx-auto max-w-screen-md">
        <h2 class="font-marianne text-3xl mb-4 mt-6 font-semibold">
          Investigation en cours
        </h2>
        
        <ServiceCard
          v-for="{ node } in $page.investigations.edges"
          :key="node.id"
          :name="node.name"
          :pitch="node.pitch"
          :contact="node.contact"
          :beta_url="node.beta_url"
          :repo_url="node.repo_url"
          :stats_url="node.stats_url"
          :service_url="node.service_url"
        />
        
        <h2 class="font-marianne text-3xl mb-4 mt-6 font-semibold">
          Investigation passée
        </h2>

        <ServiceCard
          v-for="{ node } in $page.archive.edges"
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
query {
  pageContent(id: "programme-investigation") {
    title
    content
  }
  investigations: allStartups (
    sortBy: "status",
    order: ASC,
    filter: { status: { eq: "en investigation" }}
  ) {
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
  archive: allStartups (
    sortBy: "status",
    order: ASC,
    filter: { status: { eq: "partenariat passé" }}
  ) {
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
import PageTitle from '~/components/PageTitle.vue'
import PageContent from '~/components/PageContent.vue'
import ServiceCard from '~/components/ServiceCard.vue'

export default {
  metaInfo: {
    title: `Programme d'Investigation`
  },
  components: {
    PageTitle,
    PageContent,
    ServiceCard
  }
}
</script>
