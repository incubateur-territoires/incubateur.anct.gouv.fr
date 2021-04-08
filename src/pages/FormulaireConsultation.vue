<template>
  <Layout>
    <div class="contact">
      <PageTitle>Consultation nationale France Relance</PageTitle>
    </div>

    <div class="my-12 max-w-screen-md mx-auto">
      <iframe class="airtable-embed airtable-dynamic-height" src="https://airtable.com/embed/shrfUfZTzwyllSjgg?backgroundColor=pink" frameborder="0" onmousewheel="" width="100%" height="533" style="background: transparent; border: 1px solid #ccc;"></iframe>
    </div>
  </Layout>
</template>

<script>
import PageTitle from "~/components/PageTitle.vue";
import PageContent from "~/components/PageContent.vue";

export default {
  metaInfo: {
    title: "Contact",
  },
  components: {
    PageTitle,
    PageContent,
  },
  mounted() {
    let recaptchaScript = document.createElement('script')
    recaptchaScript.setAttribute('src', 'https://static.airtable.com/js/embed/embed_snippet_v1.js')
    document.head.appendChild(recaptchaScript)
  },
};
</script>
