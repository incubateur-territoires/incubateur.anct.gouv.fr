<template>
  <Layout>
    <div class="offres">
      <PageTitle>{{ $page.pageContent.title }}</PageTitle>
    </div>

    <center>
      <iframe
        id="typeform-full"
        width="100%"
        height="400"
        frameborder="0"
        allow="camera; microphone; autoplay; encrypted-media;"
        src="https://form.typeform.com/to/izzdgVxU"
      ></iframe>
    </center>
  </Layout>
</template>
<page-query>
query page {
  pageContent(path: "/pages/contact-territoires/") {
    title
    content
  }
}
</page-query>


<style lang="scss">
.buttons {
  @apply mt-12 font-semibold;

  a:first-child {
    @apply mb-4;

    @screen sm {
      @apply mb-0 mr-4;
    }
  }

  @screen sm {
    @apply flex justify-center mb-6;
  }

  a {
    @apply block text-center;

    @apply py-2 px-4 bg-yellow rounded-lg text-navy border-4 border-yellow text-lg transition ease-linear duration-100;

    &:hover {
      @apply border-4 border-yellow bg-navy text-yellow;
    }
  }
}
</style>


<script>
import PageTitle from "~/components/PageTitle.vue";
import PageContent from "~/components/PageContent.vue";

export default {
  metaInfo: {
    title: "Contact territoires",
  },
  components: {
    PageTitle,
    PageContent,
  },
};
</script>
