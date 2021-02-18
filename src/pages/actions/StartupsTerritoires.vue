<template>
  <Layout>
    <div class="services">
      <PageTitle>
        {{ $page.pageContent.title }}
      </PageTitle>

      <div class="px-4">
        <PageContent v-html="$page.pageContent.content" />

        <div class="mx-auto max-w-screen-md">
          <h2 class="font-marianne text-3xl mb-4 mt-6 font-semibold">
            Startups de Territoires
          </h2>
          
          <ServiceCard 
            v-for="{ node } in $page.startupsTerritoires.edges"
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

        <div class="mx-auto max-w-screen-md">
          <h2 class="font-marianne text-3xl mb-4 mt-6 font-semibold">
            Startups d'État
          </h2>
          
          <ServiceCard 
            v-for="{ node } in $page.startupsEtats.edges"
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

      <div class="mx-auto max-w-screen-md">
        <h2 class="font-marianne text-3xl mb-4 mt-6 font-semibold">
          Communs numériques
        </h2>

        <ServiceCard 
          name="OpenFisca"
          pitch="Transformer le code législatif en code logiciel"
          contact="contact@openfisca.org"
          repo_url="https://github.com/openfisca"
          service_url="https://openfisca.org/fr/"
        />

        <ServiceCard 
          name="Bases Adresses Locales"
          pitch="Transmettre les adresses de votre commune à la Base Adresse Nationale"
          contact="adresse@data.gouv.fr"
          repo_url="https://github.com/etalab/adresse.data.gouv.fr"
          service_url="https://adresse.data.gouv.fr/bases-locales"
        />

        <ServiceCard 
          name="Mes Aides Locales"
          pitch="Rendre visibles les aides et dispositifs de votre collectivité à destination des particuliers"
          contact="accompagnement@mes-aides.org"
          repo_url="https://github.com/mes-aides/simulateur"
          service_url="https://mes-aides.org"
        />
      </div>
    </div>
  </Layout>
</template>

<page-query>
  query Services ($page: Int) {
    pageContent(id: "startups-de-territoires") {
      title
      content
    }
    startupsTerritoires: allService (page: $page, sortBy: "status", order: ASC, filter: { service_type: { eq: "startup_territoires" } }) {
      edges {
        node {
          id
          name
          pitch
          contact
          beta_url
          repo_url
          stats_url
          service_url
        }
      }
    }
    startupsEtats: allService (page: $page, sortBy: "status", order: ASC, filter: { service_type: { eq: "startup_etat" } }) {
      edges {
        node {
          id
          name
          pitch
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
import ServiceCard from '~/components/ServiceCard.vue'
import PageTitle from '~/components/PageTitle.vue'
import PageContent from '~/components/PageContent.vue'

export default {
  metaInfo: {
    title: 'Startups de Territoires'
  },
  components: {
    ServiceCard,
    PageTitle,
    PageContent
  }
}
</script>
