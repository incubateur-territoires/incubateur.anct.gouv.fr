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
