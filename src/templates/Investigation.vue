<template>
  <Layout>
    <div class="offres">
      <PageTitle>Investigation</PageTitle>

      <div class="mb-8 -mt-12 pb-6 bg-gray-100">

        <div class="max-w-screen-md pt-4 pb-6 mx-auto backlinks">
          <g-link to="/investigations/">Toutes les investigations</g-link>
          <div v-if="investigation.promotion">
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
        <div v-if="this.investigation.status === 'en_preparation'">
          <div class="max-w-screen-md mx-auto text-lg rounded-md bg-yellow-200 py-2 px-4">
            🏗 Cette investigation est en cours de préparation. Sa Fiche Problème sera publiée prochainement.
          </div>
        </div>

        <div v-if="investigation.membres.length > 0">
          <div class="max-w-screen-md mx-auto my-6 flex flex-row gap-x-6">
            <div class="flex items-center" v-for="m, idx in investigation.membres" :key=idx>
              <g-image
                v-if="m.membre.photo"
                class="rounded-full mr-2"
                width="48px"
                height="48px"
                :src="`${assetsUrl}/${m.membre.photo.id}?width=48&height=48&quality=95`"
              />
              <div class="flex flex-col">
                <div>{{ `${m.membre.prenom} ${m.membre.nom}` }}</div>
                <div class="uppercase text-gray-600 text-sm">{{ m.membre.role }}</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Fiche de problème -->
        <div v-if="investigation.status !== 'en_preparation'">
          <div class="max-w-screen-md mx-auto my-6">
            <div v-if="investigation.start_date" class="text-gray-400 text-lg">{{ investigation.start_date }}</div>
            <h2 class="text-3xl mb-4">Fiche Problème</h2>
            <PageContent v-html="investigation.fiche_de_probleme" />
          </div>
        </div>

        <!-- Blogs -->
        <div v-if="investigation.blogs.length > 0">
          <div class="max-w-screen-md mx-auto my-6" v-for="blog, idx in investigation.blogs" :key=idx>
            <div class="text-gray-400 text-lg">{{ blog.publish_date }}</div>
            <div class="text-3xl mb-4">{{ blog.titre }}</div>
            <div v-if="blog.auteurs.length > 0" class="my-4 italic text-gray-800">
              par {{ blog.auteurs.map(a => `${a.membre.prenom} ${a.membre.nom}`).join(", ") }}
            </div>
            <PageContent v-html="blog.body" />
          </div>
        </div>

        <!-- Conclusion -->
        <div v-if="investigation.conclusion">
          <div class="max-w-screen-md mx-auto my-6">
            <div v-if="investigation.end_date" class="text-gray-400 text-lg">{{ investigation.end_date }}</div>
            <h2 class="text-3xl mb-4">Conclusion</h2>
            <PageContent v-html="investigation.conclusion" />
          </div>
        </div>
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
      start_date
      fiche_de_probleme
			blogs(filter: { status: { _eq: "published"} }) {
        body
        publish_date
        titre
        auteurs {
          membre: membres_id {
						prenom
            nom
          }
        }
      }
      end_date
      conclusion
      promotion {
        id
        nom
      }
      membres {
				membre: membres_id {
          prenom
          nom
          email
          photo {
            id
          }
          role
        }
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
    assetsUrl: function() {
      return process.env.GRIDSOME_ASSETS_URL
    },
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
