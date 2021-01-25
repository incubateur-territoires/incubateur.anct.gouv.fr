<template>
  <Layout>
    <div>
      <PageTitle>
        {{ $page.pageContent.title }}
      </PageTitle>

      <div class="px-4">
        <div class="p-4 rounded-lg bg-gray-200 max-w-screen-md mx-auto">
          Les collectivités peuvent à tout moment solliciter l'Incubateur des Territoires pour :
          <div class="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 mt-4 font-marianne font-semibold text-lg text-white">
            <a href="#chercher-et-tester-une-solution-face-à-un-problème" class="flex-1 bg-navy p-4 rounded-lg hover:bg-blue">Chercher et tester une solution face à un problème</a>
            <a href="#développer-un-service-public-numérique" class="flex-1 bg-navy p-4 rounded-lg hover:bg-blue">Développer un service public numérique</a>
            <a href="#bénéficier-de-services-publics-numériques-qui-ont-fait-leurs-preuves" class="flex-1 bg-navy p-4 rounded-lg hover:bg-blue">Bénéficier de services publics numériques qui ont fait leurs preuves</a>
          </div>

          <div class="mt-8">
            Une fois par semaine, l’Incubateur des Territoires propose aux collectivités et aux groupements de collectivités de découvrir les opportunités de financement et d’accompagnement qu’il peut proposer pour la création et le déploiement de services publics numériques.
            <iframe class="mt-4" height="150" width="100%" frameborder="0" src="https://app.livestorm.co/incubateur-des-territoires/upcoming?limit=1" title="Incubateur des Territoires events | Livestorm"></iframe>
          </div>
        </div>

        <div class="max-w-screen-md mx-auto my-8">
          <a href="/pdf/Plaquette_Incubateur_nov2020.pdf" target="_blank" class="cta shadow-yellow">
            <font-awesome class="ml-2" :icon="['far', 'file-pdf']"/> Télécharger la plaquette de l'incubateur 
          </a>
        </div>

        <PageContent v-html="$page.pageContent.content" />
      </div>
    </div>
  </Layout>
</template>

<page-query>
query page {
  pageContent(id: "offres-collectivites") {
    title
    content
  }
}
</page-query>

<style lang="scss" scoped>
  a.cta {
    @apply block px-4 py-2 my-4 border-2 border-navy text-navy font-bold rounded-full text-center transition ease-linear duration-100;

    @screen sm {
      @apply inline-block my-2;
    }

    &:hover {
      @apply bg-navy text-white;
    }
  }
</style>

<script>
import PageTitle from '~/components/PageTitle.vue'
import PageContent from '~/components/PageContent.vue'

export default {
  metaInfo() {
    return {
      title: `Offre aux collectivités territoriales`,
      meta: [
        // Twitter
        {key:'twitter:title', property: 'twitter:title', content: `Offre aux collectivités territoriales`},
        {key:'twitter:description', property: 'twitter:description', content: `Les collectivités peuvent à tout moment solliciter l'Incubateur des Territoires`},
        {key:'twitter:image', property: 'twitter:image', content: `https://incubateur.anct.gouv.fr/og-image-offre-collectivites.png`},
        // OpenGraph
        {key:'og:title', property: 'og:title', content: `Offre aux collectivités territoriales`},
        {key:'og:site_name', property: 'og:site_name', content: `Incubateur des Territoires`},
        {key:'og:description', property: 'og:description', content: `Les collectivités peuvent à tout moment solliciter l'Incubateur des Territoires`},
        {key:'og:image', property: 'og:image', content: `https://incubateur.anct.gouv.fr/og-image-offre-collectivites.png`},
      ]
    }
  },
  components: {
    PageTitle,
    PageContent
  }
}
</script>

<style lang="scss" scoped>
  a.cta {
    @apply block px-4 py-2 my-4 border-2 border-navy text-navy font-bold rounded-full text-center transition ease-linear duration-100;

    @screen sm {
      @apply inline-block my-2;
    }

    &:hover {
      @apply bg-navy text-white;
    }
  }
</style>
