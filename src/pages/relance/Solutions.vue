<template>
  <Layout>
    <div>
      <PageTitle />

      <div class="px-4">
        <PageContent class="mb-8" v-html="$page.pageContent.content" />

        <div class="mx-auto max-w-screen-md">
          <iframe class="airtable-embed airtable-dynamic-height" src="https://airtable.com/embed/shr9AQHh0nfXlgnis?backgroundColor=blue" frameborder="0" onmousewheel="" width="100%" height="508" style="background: transparent; border: 1px solid #ccc;"></iframe>
        </div>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query page {
  pageContent(id: "formulaire-solutions") {
    title
    content
  }
}
</page-query>

<script>
import PageTitle from '~/components/relance/PageTitle.vue'
import PageContent from '~/components/PageContent.vue'

export default {
  metaInfo() {
    return {
      title: `France Relance: Transformation numérique des collectivités territoriales`,
      meta: [
        // Twitter
        {key:'twitter:title', property: 'twitter:title', content: `Tranformation numérique des collectivitiés territoriales`},
        {key:'twitter:description', property: 'twitter:description', content: `France Relance`},
        {key:'twitter:image', property: 'twitter:image', content: `https://incubateur.anct.gouv.fr/og-france-relance.png`},
        // OpenGraph
        {key:'og:title', property: 'og:title', content: `Tranformation numérique des collectivitiés territoriales`},
        {key:'og:site_name', property: 'og:site_name', content: `Incubateur des Territoires`},
        {key:'og:description', property: 'og:description', content: `France Relance`},
        {key:'og:image', property: 'og:image', content: `https://incubateur.anct.gouv.fr/og-france-relance.png`},
      ]
    }
  },
  components: {
    PageTitle,
    PageContent
  },
  mounted() {
    let recaptchaScript = document.createElement('script')
    recaptchaScript.setAttribute('src', 'https://static.airtable.com/js/embed/embed_snippet_v1.js')
    document.head.appendChild(recaptchaScript)
  },
}
</script>
