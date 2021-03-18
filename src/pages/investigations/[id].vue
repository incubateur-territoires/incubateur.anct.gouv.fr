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

import { GraphQLClient, gql } from 'graphql-request';

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
    const client = new GraphQLClient('http://localhost:8055/graphql', {
      headers: {
        authorization: 'Bearer e1466b8e7b8bb789d1ea55dc4c78f1c46670fc0d4b6b2443a3e40a231221fc1d',
      },
    });

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

    const response = await client.request(query);
    this.investigation = response.items.investigations[0];
  }
}
</script>
