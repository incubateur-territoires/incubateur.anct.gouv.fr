<template>
  <Layout>
    <div class="actualite">
      <PageTitle>
        {{$page.actualite.title}}
      </PageTitle>

      <div class="px-4">
        <PageContent v-html="$page.actualite.content" />
      </div>
    </div>
  </Layout>
</template>

<page-query>
query ($id: ID!) {
  actualite(id: $id) {
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
      title: this.$page.actualite.title
    }
  },
  components: {
    PageTitle,
    PageContent
  }
}
</script>
