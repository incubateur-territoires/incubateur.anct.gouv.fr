<template>
  <Layout>
    <div class="job">
      <PageTitle :pretitle="`${$page.job.equipe} recrute :`">
        {{$page.job.role}}
      </PageTitle>

      <div class="px-4">      
        <PageContent v-html="$page.job.content" />

        <div class="buttons">
          <g-link v-if="$page.job.contact" :to="`mailto:${$page.job.contact}?subject=[Candidature] ${$page.job.equipe} - ${$page.job.role}`" class="button postuler">
            Postuler<font-awesome class="ml-2" :icon="['far', 'envelope']"/> 
          </g-link>

          <g-link class="retourner" to="/recrutements/">
            ← Retourner aux offres de recrutement
          </g-link>
        </div>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query ($id: ID!) {
  job(id: $id) {
    equipe
    role
    content
    contact
  }
}
</page-query>

<script>
import PageTitle from '~/components/PageTitle.vue'
import PageContent from '~/components/PageContent.vue'

export default {
  metaInfo: {
    title: `${this.$page.job.equipe} recrute : ${$page.job.role}`,
    description: `L'Incubateur des Territoires et ses startups de territoires recrute`
  },
  components: {
    PageTitle,
    PageContent
  }
}
</script>

<style lang="scss">
.job {
  .buttons {
    @apply my-12 max-w-screen-md mx-auto;
  }

  .retourner {
    @apply inline-block mt-4 px-4 py-2 text-green font-semibold border-white border-2 rounded-full transition ease-linear duration-100;

    @screen sm {
      @apply ml-4 mt-0;
    }

    &:hover {
      @apply border-green;
    }
  }

  .button {
    @apply inline-block px-4 py-2 border-2 border-green bg-green text-white font-bold rounded-full text-center transition ease-linear duration-100;
  
    &:hover {
      @apply bg-white text-green;
    }
  }


}
</style>
