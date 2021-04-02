<template>
  <div class="mx-auto max-w-screen-md">
    <div>
      <select
        name="promotions"
        @change="onPromotionsChange"
        v-model="selectedPromotionsPath"
        class="select-promotions"
      >
        <option value="all">Toutes les investigations</option>
        <option
          v-for="promo in items.promotions"
          :key="promo.id"
          :value="promo.id"
        >
          {{promo.nom}}
        </option>
      </select>
    </div>

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
</template>

<script>
import ServiceCard from '~/components/ServiceCard.vue'
import FiltresEtCarto from '~/components/investigations/FiltresEtCarto.vue'

import { gql } from 'graphql-request';

export default {
  props: {
    promotionId: String,
    allInvestigations: Boolean
  },
  components: {
    ServiceCard,
    FiltresEtCarto
  },
  methods: {
    onStatusFilterClick(value) {
      this.statusFilter = value;
    },
    onPromotionsChange(event) {
      const value = event.target.value;
      
      if (value === 'all') {
        this.$router.push('/investigations')
      } else {
        this.$router.push(`/investigations/promotions/${value}`)
      }
    },
    async fetchInvestigations() {
      let query;
        
      if (this.allInvestigations) {
        query = gql`
          query {
            items {
              en_cours: investigations(filter: { 
                status: { _eq: "en cours" }
              }) {
                id
                nom
                status
                mission
                beta_url
                repo_url
                stats_url
                service_url
              }
              termine: investigations(filter: { 
                status: { _eq: "termine" }
              }) {
                id
                nom
                status
                mission
                beta_url
                repo_url
                stats_url
                service_url
              }
              promotions {
                id
                nom
              }
            }
          }`
      } else {
        query = gql`
          query {
            items {
              en_cours: investigations(filter: { 
                status: { _eq: "en cours" },
                promotion: { id: { _eq: ${this.promotionId} } }
              }) {
                id
                nom
                status
                mission
                beta_url
                repo_url
                stats_url
                service_url
              }
              termine: investigations(filter: { 
                status: { _eq: "termine" },
                promotion: { id: { _eq: ${this.promotionId} } }
              }) {
                id
                nom
                status
                mission
                beta_url
                repo_url
                stats_url
                service_url
              }
              promotions {
                id
                nom
              }
            }
          }`
      }

      const response = await this.$graphql.request(query);
      this.items = response.items;
    }
  },
  watch: {
    promotionId: async function () {
      this.fetchInvestigations()
    }
  },
  computed: {
    enCoursCount: function () {
      return this.items.en_cours.length;
    },
    termineCount: function () {
      return this.items.termine.length;
    },
    filteredInvestigations: function () {
      if (this.statusFilter === "en_cours") {
        return this.items.en_cours;
      } else if (this.statusFilter === "termine") {
        return this.items.termine;
      }
    }
  },
  data() {
    return {
      statusFilter: "en_cours",
      selectedPromotionsPath: this.promotionId ? this.promotionId : 'all',
      items: {
        en_cours: [],
        termine: [],
        promotions: []
      }
    }
  },
  async mounted () {
    this.fetchInvestigations()
  }
}
</script>

<style lang="scss">
.select-promotions {
  @apply text-3xl font-marianne mb-4 p-0 w-full border-none overflow-visible;

  option {
    @apply p-0;
  }
}
</style>
