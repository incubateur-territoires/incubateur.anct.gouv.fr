<template>
  <Layout>
    <div>
      <PageTitle>
        Offres aux acteurs publics et partenaires de collectivités
      </PageTitle>
      
      <PageContent>
        <h2>Nos offres aux collectivités territoriales</h2>
        <p></p>

        <h2>Nos offres aux startups de territoires</h2>
      </PageContent>
    </div>
  </Layout>
</template>

<script>
import PageTitle from '~/components/PageTitle.vue'
import PageContent from '~/components/PageContent.vue'

export default {
  metaInfo: {
    title: 'Offres'
  },
  components: {
    PageTitle,
    PageContent
  }
}
</script>
