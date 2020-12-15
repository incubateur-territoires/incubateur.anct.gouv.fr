<template>
  <Layout>
    <div>
      <PageTitle />
      
      <div class="px-4">
        <PageContent v-html="$page.pageContent.content" />
      </div>

      <h2 class="text-center font-marianne font-bold text-4xl mt-16 mb-8">
        Participer avec ma collectivité
      </h2>

      <div class="mx-auto max-w-screen-md flex space-x-14">
        <div class="">
          <g-image
            src="~/assets/images/loudspeaker.png"
            alt="loud speaker"
          />
          <h1 class="block text-2xl leading-tight mb-4">
            Enquête nationale des besoins numériques
          </h1>
          <p class="mb-6">
            Dites-nous quels sont les problèmes et besoins de votre collectivité pour passer le cap de la transformation digitale
          </p>
          <g-link to="/relance/besoins" class="button">
            Répondre
          </g-link>
        </div>
        
        <div class="">
          <g-image
            src="~/assets/images/launch.png"
            alt="rocket launch"
          />
          <h1 class="block text-2xl leading-tight mb-4">
            Accélerer un produit numérique existant
          </h1>
          <p class="mb-6">
            Votre collectivité utilise un outil numérique quit mériterait un soutient financier de la part de l'état ?
          </p>
          <g-link to="/relance/solutions" class="button">
            Déposer un dossier
          </g-link>
        </div>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query page {
  pageContent(id: "relance") {
    title
    content
  }
}
</page-query>

<script>
import PageContent from '~/components/PageContent.vue'
import PageTitle from '~/components/relance/PageTitle.vue'

export default {
  metaInfo() {
    return {
      title: `France Relance: Transformation numérique des collectivités territoriales`,
      meta: [
        // Twitter
        {key:'twitter:title', property: 'twitter:title', content: `Offres aux acteurs publics et partenaires de collectivités`},
        {key:'twitter:description', property: 'twitter:description', content: `Accompagnement de projets sur mesure`},
        {key:'twitter:image', property: 'twitter:image', content: `https://incubateur.anct.gouv.fr/og-image-offre-partenaires.png`},
        // OpenGraph
        {key:'og:title', property: 'og:title', content: `Offres aux acteurs publics et partenaires de collectivités`},
        {key:'og:site_name', property: 'og:site_name', content: `Incubateur des Territoires`},
        {key:'og:description', property: 'og:description', content: `Accompagnement de projets sur mesure`},
        {key:'og:image', property: 'og:image', content: `https://incubateur.anct.gouv.fr/og-image-offre-partenaires.png`},
      ]
    }
  },
  components: {
    PageContent,
    PageTitle
  }
}
</script>

<style lang="scss" scoped>


.button {
  @apply block px-4 py-2 mt-4 border-2 border-green-relance  bg-green-relance text-white font-bold rounded-full text-center transition ease-linear duration-100;

  &:hover {
    @apply text-green-relance bg-white;
  }
}
</style>
