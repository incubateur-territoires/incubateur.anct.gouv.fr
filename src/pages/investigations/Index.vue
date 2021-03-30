<template>
  <Layout>
    <div class="offres">
      <PageTitle>
        Investigations
      </PageTitle>

      <div class="px-4">
        <!-- <PageContent v-html="$page.pageContent.content" /> -->

        <div class="mx-auto max-w-screen-md">
          <FiltresEtCarto
            :enCoursCount=enCoursCount
            :termineCount=termineCount
            :statusFilter=statusFilter
            @clicked="onStatusFilterClick"
          />

          <ServiceCard
            v-for="node in filteredInvestigations"
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
import FiltresEtCarto from '~/components/investigations/FiltresEtCarto.vue'

import { gql } from 'graphql-request';

export default {
  metaInfo: {
    title: `Programme d'Investigation`
  },
  components: {
    PageTitle,
    PageContent,
    ServiceCard,
    FiltresEtCarto
  },
  methods: {
    onStatusFilterClick(value) {
      this.statusFilter = value;
    }
  },
  computed: {
    enCoursCount: function () {
      return this.investigations.en_cours.length;
    },
    termineCount: function () {
      return this.investigations.termine.length;
    },
    filteredInvestigations: function () {
      if (this.statusFilter === "en_cours") {
        return this.investigations.en_cours;
      } else if (this.statusFilter === "termine") {
        return this.investigations.termine;
      }
    }
  },
  data() {
    return {
      statusFilter: "en_cours",
      investigations: {
        en_cours: [],
        termine: []
      }
    }
  },
  async mounted () {
    const query = gql`
    query {
      items {
        en_cours: investigations(filter: { status: { _eq: "en cours" } }) {
          id
          nom
          status
          mission
          beta_url
          repo_url
          stats_url
          service_url
        }
        termine: investigations(filter: { status: { _eq: "termine" } }) {
          id
          nom
          status
          mission
          beta_url
          repo_url
          stats_url
          service_url
        }
      }
    }`

    // communes {
    //         communes_id {
    //           id
    //           nom
    //         }
    //       }
    //       epcis {
    //         epcis_id {
    //           id
    //           nom
    //         }
    //       }
    //       departements {
    //         departements_id {
    //           id
    //           nom
    //         }
    //       }
    //       regions {
    //         regions_id {
    //           id
    //           nom
    //         }
    //       }

    const response = await this.$graphql.request(query);
    this.investigations = response.items;
  }
}
</script>
