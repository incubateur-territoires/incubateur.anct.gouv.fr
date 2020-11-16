<template>
  <Layout>
    <div class="offres">
      <PageTitle>
        {{ $page.pageContent.title }}
      </PageTitle>

      <div class="px-4">
        <PageContent v-html="$page.pageContent.content" />

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

          <!-- <h2 class="font-marianne text-3xl mb-4 mt-6 font-semibold">
            Startups d'État
          </h2> -->

          <!-- <ServiceCard 
            name="Ambassadeurs Numériques France Service"
            pitch="Transformer le code législatif en code logiciel"
            contact="contact@openfisca.org"
          /> -->
        </div>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query page {
  pageContent(id: "collaborations") {
    title
    content
  }
}
</page-query>

<script>
import PageTitle from '~/components/PageTitle.vue'
import PageContent from '~/components/PageContent.vue'
import ServiceCard from '~/components/ServiceCard.vue'

export default {
  metaInfo: {
    title: 'Collaborations'
  },
  components: {
    PageTitle,
    PageContent,
    ServiceCard
  }
}
</script>
