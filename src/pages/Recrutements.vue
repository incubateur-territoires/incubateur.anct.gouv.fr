<template>
  <Layout>
    <div class="recrutement">
      <PageTitle>
        Recrutements
      </PageTitle>

      <div class="job-cards">
        <JobCard v-for="{ node } in $page.jobs.edges" :key="node.id" :job="node" />
        <g-link to="https://beta.gouv.fr/recrutement/" class="button">
          Consulter toutes les offres de la communauté Beta.gouv.fr <font-awesome class="ml-2" :icon="['fas', 'external-link-alt']"/>
        </g-link>
      </div>
    </div>
  </Layout>
</template>

<page-query>
  query Jobs {
    jobs: allJob (sortBy: "post_ouvert", filter: { status: { nin: ["draft", "closed"] } }) {
      edges {
        node {
          id
          path
          role
          equipe
          post_ouvert
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
