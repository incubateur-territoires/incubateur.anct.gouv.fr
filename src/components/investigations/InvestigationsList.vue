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
      :enPreparationCount=enPreparationCount
      :communesCount=communesCount
      :epcisCount=epcisCount
      :departementsCount=departementsCount
      :regionsCount=regionsCount
      :statusFilters=statusFilters
      :collectivitesFilters=collectivitesFilters
      @statusFilterClicked="statusFilterClicked"
      @collectiviteFilterClicked="collectivitesFilterClicked"
    />

    <div class="mb-4 text-lg">
      {{ filteredInvestigations.length }} investigations
    </div>

    <InvestigationCard
      v-for="node in filteredInvestigations"
      :id="node.id"
      :status="node.status"
      :key="node.id"
      :name="node.nom"
      :pitch="node.mission"
      :collectivites="node.collectivites"
    />
  </div>
</template>

<script>
import InvestigationCard from '~/components/investigations/InvestigationCard.vue'
import FiltresEtCarto from '~/components/investigations/FiltresEtCarto.vue'

import { gql } from 'graphql-request';

export default {
  props: {
    promotionId: String,
    allInvestigations: Boolean
  },
  components: {
    InvestigationCard,
    FiltresEtCarto
  },
  methods: {
    statusFilterClicked(value) {
      if (this.statusFilters.includes(value)) {
        this.statusFilters = this.statusFilters.filter(filter => filter !== value)
      } else {
        this.statusFilters.push(value)
      }
    },
    collectivitesFilterClicked(value) {
      if (this.collectivitesFilters.includes(value)) {
        this.collectivitesFilters = this.collectivitesFilters.filter(filter => filter !== value)
      } else {
        this.collectivitesFilters.push(value)
      }
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
              investigations {
                id
                nom
                status
                mission
                communes {
                  commune: communes_id {
                    nom
                  }
                }
                departements {
                  departement: departements_id {
                    nom
                  }
                }
                regions {
                  region: regions_id {
                    nom
                  }
                }
                epcis {
                  epci: epcis_id {
                    nom
                  }
                }
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
              investigations(filter: { 
                promotion: { id: { _eq: ${this.promotionId} } }
              }) {
                id
                nom
                status
                mission
                communes {
                  commune: communes_id {
                    nom
                  }
                }
                departements {
                  departement: departements_id {
                    nom
                  }
                }
                regions {
                  region: regions_id {
                    nom
                  }
                }
                epcis {
                  epci: epcis_id {
                    nom
                  }
                }
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
    enPreparationCount: function () {
      return this.investigationsEnPreparation.length;
    },
    enCoursCount: function () {
      return this.investigationsEnCours.length;
    },
    termineCount: function () {
      return this.investigationsTermine.length;
    },
    communesCount: function () {
      return this.items.investigations.filter(item => item.communes.length > 0).length
    },
    epcisCount: function () {
      return this.items.investigations.filter(item => item.epcis.length > 0).length
    },
    departementsCount: function () {
      return this.items.investigations.filter(item => item.departements.length > 0).length
    },
    regionsCount: function () {
      return this.items.investigations.filter(item => item.regions.length > 0).length
    },
    investigationsEnPreparation: function () {
      return this.items.investigations.filter(item => item.status === "en_preparation")
    },
    investigationsEnCours: function () {
      return this.items.investigations.filter(item => item.status === "en_cours")
    },
    investigationsTermine: function () {
      return this.items.investigations.filter(item => item.status === "termine")
    },
    investigations: function() {
      return this.items.investigations.map(item => {
        const collectivites = [];
        item.communes.forEach(c => collectivites.push(c.commune.nom))
        item.departements.forEach(d => collectivites.push(d.departement.nom))
        item.regions.forEach(r => collectivites.push(r.region.nom))
        item.epcis.forEach(e => collectivites.push(e.epci.nom))
        item.collectivites = collectivites

        const collectivitesTypes = [];
        if (item.communes.length > 0) { collectivitesTypes.push('communes') }
        if (item.departements.length > 0) { collectivitesTypes.push('departements') }
        if (item.regions.length > 0) { collectivitesTypes.push('regions') }
        if (item.epcis.length > 0) { collectivitesTypes.push('epcis') }
        item.collectivitesTypes = collectivitesTypes
        
        return item;
      })
    },
    filteredInvestigations: function () {
      return this.investigations
        .filter(item => this.statusFilters.includes(item.status))
        .filter(item => this.collectivitesFilters.some(c => item.collectivitesTypes.includes(c)))
    }
  },
  data() {
    return {
      statusFilters: ["en_cours", "termine", "en_preparation"],
      collectivitesFilters: ["communes", "departements", "epcis", "regions"],
      selectedPromotionsPath: this.promotionId ? this.promotionId : 'all',
      items: {
        investigations: [],
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
