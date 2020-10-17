<template>
  <Layout>
    <div>
      <PageTitle>
        Offres aux collectivités territoriales
      </PageTitle>

      <div class="px-4">
        <PageContent>
          <markdown-it-vue-light :content="$page.offres.edges[0].node.contenu[0].texte" />
        </PageContent>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query page {
	offres: allStrapiOffresAuxCollectivites {
    edges {
      node {
        contenu {
          texte
          citation
        }
      }
    }
  }
}
</page-query>

<script>
import PageTitle from '~/components/PageTitle.vue'
import PageContent from '~/components/PageContent.vue'
import MarkdownItVueLight from 'markdown-it-vue/dist/markdown-it-vue-light.umd.min.js'

const MarkdownIt = require('markdown-it')

export default {
  metaInfo: {
    title: 'À propos'
  },
  components: {
    PageTitle,
    PageContent,
    MarkdownItVueLight
  }
}
</script>
