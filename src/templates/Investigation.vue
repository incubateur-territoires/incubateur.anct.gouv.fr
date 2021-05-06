<template>
  <Layout>
    <div class="offres">
      <PageTitle>Investigation</PageTitle>

      <div class="mb-8 -mt-12 pb-6 bg-gray-100">

        <div class="max-w-screen-md pt-4 pb-6 mx-auto backlinks">
          <g-link to="/investigations/">Toutes les investigations</g-link>
          <div v-if="investigation.promotion.id">
            &nbsp;/
            <g-link  
              :to="`/investigations/?promo=${investigation.promotion.id}`"
            >
              {{ investigation.promotion.nom }}
            </g-link>
          </div>
        </div>

        <div class="max-w-screen-md mx-auto investigation-card">
          <div>
            <div :class=investigation.status class="status">{{ this.stringHelpers.humanizedInvestigationStatus(this.investigation.status) }}</div>
            <div class="pitch" v-html="investigation.mission" />
          </div>
          <div class="flex flex-row flex-1 justify-between mt-4">
            <ul class="collectivites">
              <li v-for="nom, idx in investigation.collectivites" :key=idx>{{nom}}</li>
            </ul>
            <div class="title" v-if="investigation.nom" v-html="investigation.nom" />
          </div>
          <div class="flex flex-row-reverse space-x-4 space-x-reverse service-links">
            <g-link :to="investigation.beta_url" v-if="investigation.beta_url">fiche beta.gouv.fr</g-link>
            <g-link :to="investigation.service_url" v-if="investigation.service_url">site</g-link>
            <g-link :to="investigation.stats_url" v-if="investigation.stats_url">stats</g-link>
            <g-link :to="investigation.repo_url" v-if="investigation.repo_url">repo</g-link>
          </div>
        </div>
      </div>

      <div class="px-4">
        <h2 class="max-w-screen-md mx-auto text-3xl">Fiche de Probléme</h2>
        <PageContent v-html="investigation.fiche_de_probleme" />
      </div>
    </div>  
  </Layout>
</template>

<page-query>
query ($id: ID!) {
  directus {
    investigation: investigations_by_id(id: $id) {
      id
      nom
      mission
      status
      fiche_de_probleme
      promotion {
        id
        nom
      }
      beta_url
      repo_url
      stats_url
      service_url
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
  }
}
</page-query>

<script>
import PageTitle from '~/components/PageTitle.vue'
import PageContent from '~/components/PageContent.vue'
import { collectivitesArray, collectivitesTypesArray } from '~/helpers/model-helpers.js'

export default {
  metaInfo: {
    title: `Programme d'Investigation`
  },
  components: {
    PageTitle,
    PageContent
  },
  computed: {
    investigation: function() {
      const investigation = this.$page.directus.investigation;

      return {
        ...investigation,
        collectivites: collectivitesArray(investigation),
        collectivitesTypes: collectivitesTypesArray(investigation)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.backlinks {
  @apply flex flex-row text-lg;

  a {
    @apply text-blue;
  }
}

.investigation-card {
  @apply relative py-4;

  .pitch {
    @apply text-xl text-gray-900;
  }

  .status {
    @apply float-right mb-2 ml-2 text-xs uppercase font-medium text-white py-1 px-2 rounded-md;

    &.en_preparation {
      @apply bg-blue;
    }

    &.en_cours {
      @apply bg-green;
    }

    &.termine {
      @apply bg-yellow-600;
    }
  }

  .title {
    @apply font-marianne text-lg text-navy leading-none;
  }

  .collectivites {
    @apply font-marianne text-lg font-bold text-gray-800;
  }

  .service-links {
    a {
      @apply text-blue;
    }
  }
}
</style>
