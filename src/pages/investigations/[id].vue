<template>
  <Layout>
    <div class="offres">
      <PageTitle>
        {{ investigation.nom }}
      </PageTitle>

      <div class="px-4">
        
      </div>
    </div>  
  </Layout>
</template>

<script>
import PageTitle from '~/components/PageTitle.vue'
import PageContent from '~/components/PageContent.vue'

import { gql } from 'graphql-request';

export default {
  metaInfo: {
    title: `Programme d'Investigation`
  },
  components: {
    PageTitle,
    PageContent
  },
  data() {
    return {
      investigation: {}
    }
  },
  async mounted () {
    const { id } = this.$route.params

    const query = gql`
    query {
      items {
        investigations(filter: { id: { _eq: ${id} } }) {
          id
          nom
          mission
          beta_url
          repo_url
          stats_url
          service_url
        }
      }
    }`

    const response = await this.$graphql.request(query);
    this.investigation = response.items.investigations[0];
  }
}
</script>
