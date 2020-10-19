<template>
  <Layout>
    <div>
      <PageTitle>
        {{ $page.pageContent.title }}
      </PageTitle>

      <div class="px-4">
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
