<template>
  <Layout>
    <div class="job">
      <PageTitle :pretitle="`${$page.job.equipe} recrute :`">
        {{$page.job.role}}
      </PageTitle>

      <div class="px-4">      
        <div v-if="pourvu" class="notice-pourvu">
          ❗️ Ce poste a été pourvu. <g-link to="/recrutements/">Veuillez consulter nos offres actuelles</g-link>.
        </div>
        <div v-if="ferme" class="notice-pourvu">
          ⚠️ Ce poste n'accepte plus de candidatures. <g-link to="/recrutements/">Veuillez consulter nos offres actuelles</g-link>.
        </div>
        
        <PageContent v-html="$page.job.content" />

        <div v-if="pourvu" class="notice-pourvu">
          ❗️ Ce poste a été pourvu. <g-link to="/recrutements/">Veuillez consulter nos offres actuelles</g-link>.
        </div>
        <div v-if="ferme" class="notice-pourvu">
          ⚠️ Ce poste n'accepte plus de candidatures. <g-link to="/recrutements/">Veuillez consulter nos offres actuelles</g-link>.
        </div>

        <CandidaterForm v-if="showCandidaterForm" :poste="`${$page.job.role} - ${$page.job.equipe}`" />

        <div class="buttons">
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
    poste_ferme
    poste_pourvu
  }
}
</page-query>

<script>
import PageTitle from '~/components/PageTitle.vue'
import PageContent from '~/components/PageContent.vue'
import CandidaterForm from '~/components/CandidaterForm.vue'

export default {
  metaInfo() {
    return {
      title: `${this.$page.job.role}, ${this.$page.job.equipe}`,
      meta: [
        // Twitter Card
        {key:'twitter:title', property: 'twitter:title', content: `L'Incubateur des Territoires`},
        {key:'twitter:description', property: 'twitter:description', content: `${this.$page.job.equipe} recrute : ${this.$page.job.role}`},
        // Facebook OpenGraph
        {key:'og:title', property: 'og:title', content: `L'Incubateur des Territoires`},
        {key:'og:site_name', property: 'og:site_name', content: `L'Incubateur des Territoires`},
        {key:'og:description', property: 'og:description', content: `${this.$page.job.equipe} recrute : ${this.$page.job.role}`}
      ]
    }
  },
  components: {
    PageTitle,
    PageContent,
    CandidaterForm
  },
  computed: {
    pourvu: function () {
      return !!this.$page.job.poste_pourvu
    },
    ferme: function () {
      return this.$date().isAfter(this.$date(this.$page.job.poste_ferme)) && !this.pourvu
    },
    showCandidaterForm () {
      if (this.pourvu) { return false; }
      if (this.ferme) { return false; }
      return true;
    }
  }
}
</script>

<style lang="scss">
.job {
  .notice-pourvu {
    @apply my-12 max-w-screen-md mx-auto p-4 rounded-lg bg-yellow;

    a {
      @apply text-navy font-semibold;
    }
  }
  
  .buttons {
    @apply my-12 max-w-screen-md mx-auto;
  }

  .retourner {
    @apply inline-block mt-4 px-4 py-2 text-green font-semibold border-white border-2 rounded-full transition ease-linear duration-100;

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
