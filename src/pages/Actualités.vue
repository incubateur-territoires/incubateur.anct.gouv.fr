<template>
  <Layout>
    <div class="offres">
      <PageTitle>
        Actualités
      </PageTitle>

      <div class="px-4">
        <PageContent v-html="$page.pageContent.content" />
      </div>
    </div>
  </Layout>
</template>

<page-query>
query page {
  pageContent(path: "/pages/a-propos/") {
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
    title: 'À propos'
  },
  components: {
    PageTitle,
    PageContent
  }
}
</script>
