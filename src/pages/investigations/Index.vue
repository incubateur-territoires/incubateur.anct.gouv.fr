<template>
  <Layout>
    <div class="offres">
      <PageTitle>
        Investigations
      </PageTitle>

      <div class="px-4">
        <!-- <PageContent v-html="$page.pageContent.content" /> -->

        <div class="mx-auto max-w-screen-md">
          <h2 class="font-marianne text-3xl mb-4 mt-6 font-semibold">
            Investigations ...
          </h2>

          <ServiceCard
            v-for="node in investigations"
            :id="node.id"
            :status="node.status"
            :key="node.id"
            :name="node.nom"
            :pitch="node.mission"
            :contact="node.contact"
            :beta_url="node.beta_url"
            :repo_url="node.repo_url"
            :stats_url="node.stats_url"
            :service_url="node.service_url"
            :communes="node.communes"
            :departements="node.departements"
            :regions="node.regions"
            :epcis="node.epcis"
          />
        </div>
      </div>
    </div>  
  </Layout>
</template>

<script>
import PageTitle from '~/components/PageTitle.vue'
import PageContent from '~/components/PageContent.vue'
import ServiceCard from '~/components/ServiceCard.vue'

import { GraphQLClient, gql } from 'graphql-request';

export default {
  metaInfo: {
    title: `Programme d'Investigation`
  },
  components: {
    PageTitle,
    PageContent,
    ServiceCard
  },
  data() {
    return {
      investigations: []
    }
  },
  async mounted () {
    const client = new GraphQLClient('http://localhost:8055/graphql', {
      headers: {
        authorization: 'Bearer e1466b8e7b8bb789d1ea55dc4c78f1c46670fc0d4b6b2443a3e40a231221fc1d',
      },
    });

    const query = gql`
    query {
      items {
        investigations {
          id
          nom
          status
          mission
          beta_url
          repo_url
          stats_url
          service_url
          communes {
            communes_id {
              id
              nom
            }
          }
          epcis {
            epcis_id {
              id
              nom
            }
          }
          departements {
            departements_id {
              id
              nom
            }
          }
          regions {
            regions_id {
              id
              nom
            }
          }
        }
      }
    }`

    const response = await client.request(query);
    this.investigations = response.items.investigations;
  }
}
</script>
