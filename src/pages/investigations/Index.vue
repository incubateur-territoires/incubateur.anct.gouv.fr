<template>
  <Layout>
    <div class="offres">
      <PageTitle>
        Investigations
      </PageTitle>

      <div class="px-4">
        <PageContent v-html="$page.pageContent.content" />

        <InvestigationsList
          class="mt-8"
          :allInvestigations=true
        />
      </div>
    </div>  
  </Layout>
</template>

<page-query>
query {
  pageContent(id: "programme-investigation") {
    title
    content
  }
}
</page-query>

<script>
import PageTitle from '~/components/PageTitle.vue'
import PageContent from '~/components/PageContent.vue'
import InvestigationsList from '~/components/investigations/InvestigationsList.vue'

export default {
  metaInfo: {
    title: `Programme d'Investigation`
  },
  components: {
    PageTitle,
    PageContent,
    InvestigationsList
  }
}
</script>
