<template>
  <Layout>
    <div class="recrutement">
      <PageTitle>
        Recrutements
      </PageTitle>

      <div class="job-cards">
        <div
          v-if="jobs.length === 0"
          class="mb-8 p-4 rounded-lg bg-gray-200"
        >
          L'incubateur n'a actuellement aucun poste ouvert. Revenez consulter le site, car les équipes de l'Incubateur recrutent régulièrement.
        </div>
        
        <JobCard v-for="{ node } in jobs" :key="node.id" :job="node" />
        <g-link to="https://beta.gouv.fr/recrutement/" class="button">
          Consulter toutes les offres de la communauté Beta.gouv.fr <font-awesome class="ml-2" :icon="['fas', 'external-link-alt']"/>
        </g-link>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query {
  jobs: allJob (sortBy: "poste_ouvert", filter: { poste_pourvu: { ne: true } }) {
    edges {
      node {
        id
        path
        role
        equipe
        poste_ouvert
        poste_ferme
        poste_pourvu
        contrat
      }
    }
  }
}
</page-query>

<script>
import JobCard from '~/components/JobCard.vue'
import PageTitle from '~/components/PageTitle.vue'

export default {
  metaInfo: {
    title: 'Recrutements',
    description: `L'Incubateur des Territoires et ses startups de territoires recrute`
  },
  components: {
    JobCard,
    PageTitle
  },
  computed: {
    jobs() {
      return this.$page.jobs.edges.filter(e => this.$date().isBefore(e.node.poste_ferme))
    }
  }
}
</script>

<style lang="scss">
.recrutement {
  .job-cards {
    @apply max-w-screen-md mx-auto px-4;
  }

  .button {
    @apply block px-4 py-2 mt-4 border-2 border-green text-green font-bold rounded-full text-center transition ease-linear duration-100;
  
    &:hover {
      @apply bg-green text-white;
    }
  }
}
</style>
