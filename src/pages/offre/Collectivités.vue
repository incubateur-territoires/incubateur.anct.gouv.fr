<template>
  <Layout>
    <div>
      <PageTitle>
        {{ $page.pageContent.title }}
      </PageTitle>

      <div class="px-4">
        <div class="p-4 rounded-lg bg-gray-200 max-w-screen-md mx-auto">
          Les collectivités peuvent à tout moment solliciter l'Incubateur des Territoires pour :
          <div class="flex-row sm:flex mt-4 grid-cols-3 font-marianne font-semibold text-lg text-white">
            <a href="#chercher-et-tester-une-solution-face-à-un-problème" class="flex-1 bg-navy mr-2 p-4 rounded-lg hover:bg-blue">Chercher et tester une solution face à un problème</a>
            <a href="#développer-un-service-public-numérique" class="flex-1 bg-navy mx-2 p-4 rounded-lg hover:bg-blue">Développer un service public numérique</a>
            <a href="#bénéficier-de-services-publics-numériques-qui-ont-fait-leurs-preuves" class="flex-1 bg-navy ml-2 p-4 rounded-lg hover:bg-blue">Bénéficier de services publics numériques qui ont fait leurs preuves</a>
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
  metaInfo: {
    title: `Offre aux collectivités territoriales`
  },
  components: {
    PageTitle,
    PageContent
  }
}
</script>
