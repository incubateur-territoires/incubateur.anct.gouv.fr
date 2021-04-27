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
      :statusFilters=statusFilters
      @clicked="onStatusFilterClick"
    />

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
    onStatusFilterClick(value) {
      if (this.statusFilters.includes(value)) {
        this.statusFilters = this.statusFilters.filter(filter => filter !== value)
      } else {
        this.statusFilters.push(value)
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
    investigationsEnPreparation: function () {
      return this.items.investigations.filter(item => item.status === "en_preparation")
    },
    investigationsEnCours: function () {
      return this.items.investigations.filter(item => item.status === "en_cours")
    },
    investigationsTermine: function () {
      return this.items.investigations.filter(item => item.status === "termine")
    },
    filteredInvestigations: function () {
      const filtered = this.items.investigations.filter(item => this.statusFilters.includes(item.status))
      return filtered.map(item => {
        const collectivites = [];

        item.communes.forEach(c => collectivites.push(c.commune.nom))
        item.departements.forEach(d => collectivites.push(d.departement.nom))
        item.regions.forEach(r => collectivites.push(r.region.nom))
        item.epcis.forEach(e => collectivites.push(e.epci.nom))

        item.collectivites = collectivites
        return item;
      })
    }
  },
  data() {
    return {
      statusFilters: ["en_cours", "termine", "en_preparation"],
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
