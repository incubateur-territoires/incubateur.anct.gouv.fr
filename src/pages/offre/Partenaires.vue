<template>
  <Layout>
    <div>
      <PageTitle>
        {{ $page.pageContent.title }}
      </PageTitle>
      
      <PageContent v-html="$page.pageContent.content" />
    </div>
  </Layout>
</template>

<page-query>
query page {
  pageContent(id: "offres-partenaires") {
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
    title: 'Offres aux acteurs publics et partenaires de collectivités'
  },
  components: {
    PageTitle,
    PageContent
  }
}
</script>
