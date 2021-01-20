<template>
  <Layout>
    <div>
      <PageTitle>Programme national d'investigations</PageTitle>

      <div class="px-4 py-2 bg-gray-100 mx-auto max-w-screen-md text-lg rounded-lg">
        L'Incubateur des Territoires finance et accompagne des programmes d’investigations au sein des collectivités qui consistent à cerner des problématiques ainsi qu’à concevoir et tester des premières solutions. Afin de générer des synergies entre les différentes collectivités qui explorent des problématiques similaires et d’identifier des solutions à mutualiser et à financer dans le cadre du plan de relance, l’Incubateur des Territoires lance un programme national d’investigations.
      </div>
      
      <div class="mx-auto max-w-screen-md">
        <h1>Qu’est-ce que le programme national d’investigations ? </h1>
        <p>À travers le programme national d'investigations, l’Incubateur des Territoires propose aux collectivités territoriales d'explorer des problématiques de politique publique avec pour objectifs de cerner des problèmes concrets puis de concevoir des premières solutions et de tester l'appétence pour celles-ci des publics cibles, qu'il s'agisse d'habitants, d'entreprises, d'associations ou encore d'agents publics. Le programme est conçu pour créer une dynamique à la fois au sein des collectivités partenaires et à l’échelle du réseau qu’elles constitueront.</p>
        <p>L’appel à candidatures est ouvert aux collectivités et à leurs groupements jusqu’au lundi 15 mars minuit. Il est possible de candidater par email à l’adresse contactincubateur@anct.gouv.fr.</p>
        <ul>
          <li><a href="#faq">Foire à questions</a></li>
        </ul>
      </div>
    </div>

    <!-- <div class="my-12 max-w-screen-md mx-auto">
      <iframe class="airtable-embed airtable-dynamic-height" :src="`https://airtable.com/embed/shrZeUN3zch8pSM9b?backgroundColor=cyan`" frameborder="0" onmousewheel="" width="100%" height="533" style="background: transparent; border: 1px solid #ccc;"></iframe>
    </div> -->

    <div class="px-4" id="faq">      
      <PageContent v-html="$page.pageContent.content" />
    </div>


  </Layout>
</template>

<page-query>
query page {
  pageContent(id: "investigations-national") {
    content
  }
}
</page-query>

<script>
import PageTitle from "~/components/relance/PageTitle.vue";
import PageContent from "~/components/PageContent.vue";

export default {
  metaInfo: {
    title: "Programme national d'investigations",
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

<style lang="scss" scoped>
p, h2, ul {
  a {
    @apply text-green-relance border-b-2 border-green-relance;
  }
}
</style>
