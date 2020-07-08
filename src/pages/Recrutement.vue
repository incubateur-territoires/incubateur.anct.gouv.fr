<template>
  <Layout>
    <div class="recrutement">
      <div class="splash">
        <h1>Recrutement</h1>
      </div>

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
  query Jobs ($page: Int) {
    jobs: allJob (page: $page) {
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

export default {
  metaInfo: {
    title: 'Recrutement'
  },
  components: {
    JobCard
  }
}
</script>

<style lang="scss">
.recrutement {
  .splash {
    @apply py-8 mb-12 font-marianne text-white bg-navy;

    h1 {
      @apply text-5xl font-black mx-auto max-w-screen-md;
    }
  }

  .job-cards {
    @apply max-w-screen-md mx-auto;
  }

  .button {
    @apply block px-4 py-2 mt-4 border-2 border-green text-green font-bold rounded-full text-center transition ease-linear duration-100;
  
    &:hover {
      @apply bg-green text-white;
    }
  }
}
</style>
