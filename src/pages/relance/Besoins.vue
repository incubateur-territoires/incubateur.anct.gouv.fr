<template>
  <Layout>
    <div>
      <PageTitle />

      <div class="px-4">
        <div class="mx-auto max-w-screen-md">
          <iframe class="airtable-embed airtable-dynamic-height" src="https://airtable.com/embed/shr1ATOVu75SVi1AP?backgroundColor=blue" frameborder="0" onmousewheel="" width="100%" height="533" style="background: transparent;"></iframe>
        </div>
      </div>
    </div>
  </Layout>
</template>


<script>
import PageTitle from '~/components/relance/PageTitle.vue'
import PageContent from '~/components/PageContent.vue'

export default {
  metaInfo: {
    title: 'France Relance: Enquête nationale des besoins numériques'
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
