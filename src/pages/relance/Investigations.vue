<template>
  <Layout>
    <div>
      <PageTitle>Programme national d'investigations</PageTitle>

      <div class="mb-4 mx-auto max-w-screen-md text-2xl font-marianne">
        Vous êtes en <span class="font-bold">zone rurale</span>, de <span class="font-bold">montagne</span>, <span class="font-bold">en quartier prioritaire de la politique de la ville</span>, en coeur de ville ou une <span class="font-bold">“Petite Ville de Demain”</span> ?
      </div>
      
      <div class="mx-auto max-w-screen-md">
        <p class="mb-4">L'Incubateur des Territoires de l’Agence Nationale de la Cohésion des Territoires (ANCT) construit, avec les collectivités territoriales et leurs partenaires, des services publics numériques. Un service public numérique est développé en logiciel libre, son impact est mesuré en permanence pour ajuster sa proposition de valeur en fonction des besoins réellement exprimés par ses utilisateurs (agents publics, élus locaux, habitants, entreprises, associations...). Les services numériques peuvent répondre à une multitude de problématiques rencontrées par les collectivités territoriales. A titre d’exemple, ils concernent aujourd’hui tant la lutte contre le gaspillage alimentaire dans les cantines que la prise en charge du mal logement, ou encore le covoiturage en espace rural ou de montagne.</p>
        <p class="mb-4">Dans ce cadre, l'Incubateur des Territoires finance et accompagne des programmes d’investigations. Ils consistent à détecter des problématiques rencontrées par les collectivités territoriales ainsi qu’à concevoir et tester rapidement des premières pistes de service qui sauraient y répondre efficacement. Afin de générer des synergies entre les différentes collectivités qui rencontrent des problématiques similaires et d’identifier des services à financer dans le cadre du Plan de relance, l’Incubateur des Territoires lance un programme national d’investigations.</p>
        
        <p class="my-4 px-4 py-2 bg-gray-100 border-l-4 border-navy text-sm">
          Les collectivités et leurs groupements intéressés par ce programme peuvent candidater d’ici le <strong>15 mars 2021</strong>.  L’équipe de l’Incubateur des Territoires est disponible pour échanger avec vous à ce sujet.
        </p>

        <g-link class="button my-4" to="https://mon.incubateur.anct.gouv.fr/processes/transformation-numerique">
          Être recontacté →
        </g-link>
        
        <!-- <ul>
          <li><a href="#faq">Foire à questions</a></li>
        </ul> -->
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

.button {
  @apply inline-block px-4 py-2 border-2 border-green bg-white text-green font-bold rounded-full text-center transition ease-linear duration-100;

  &:hover {
    @apply bg-green text-white;
  }
}
</style>
