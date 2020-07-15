<template>
  <Layout>
    <div class="offres">
      <PageTitle>
        Mission de l'Incubateur
      </PageTitle>

      <div class="px-4">
        <PageContent>
          <h2>Impliquer les agents publics [changer la culture]</h2>

          <h2>Construire de nouveaux services publics numériques de territoires [service]</h2>

          <h2>Favoriser les mutualisations [pérennisation & impact]</h2>
        </PageContent>
      </div>
    </div>
  </Layout>
</template>

<script>
import PageTitle from '~/components/PageTitle.vue'
import PageContent from '~/components/PageContent.vue'

export default {
  metaInfo: {
    title: 'Mission'
  },
  components: {
    PageTitle,
    PageContent
  }
}
</script>

<style lang="scss">

</style>
