<template>
  <Layout>
    <FrontSplash />

    <Annonce class="annonce" />

    <section class="publics">
      <div class="public">
        <h1 class="title">Vous êtes une collectivité territoriale ?</h1>

        <div class="action">
          <g-link to="/offre/collectivites" class="button">
            Découvrez notre offre de service →
          </g-link>
        </div>
      </div> 

      <div class="public">
        <h1 class="title">Vous êtes acteurs publics ou partenaires des collectivités ?</h1>
        
        <p class="mb-4">L'Incubateur des Territoires peut fournir un appui opérationnel aux acteurs publics et autres partenaires des collectivités qui souhaitent développer un service public numérique avec les territoires.</p>
        <g-link to="/offre/partenaires" class="button">
          Découvrez nos prérequis →
        </g-link>
      </div>
    </section>
  </Layout>
</template>

<script>
import FrontSplash from '~/components/FrontSplash.vue'
import Annonce from '~/components/Annonce.vue'

export default {
  metaInfo() {
    return {
      title: `Incubateur des Territoires`,
      titleTemplate: '%s',
      meta: [
        // Twitter
        {key:'twitter:title', property: 'twitter:title', content: `Incubateur des Territoires`},
        {key:'twitter:description', property: 'twitter:description', content: `Ensemble avec les territoires, nous créons des services publics numériques pour résoudre les problèmes des usagers.`},
        {key:'twitter:image', property: 'twitter:image', content: `https://incubateur.anct.gouv.fr/og-image-front.png`},
        // OpenGraph
        {key:'og:title', property: 'og:title', content: `Incubateur des Territoires`},
        {key:'og:site_name', property: 'og:site_name', content: `Incubateur des Territoires`},
        {key:'og:description', property: 'og:description', content: `Ensemble avec les territoires, nous créons des services publics numériques pour résoudre les problèmes des usagers.`},
        {key:'og:image', property: 'og:image', content: `https://incubateur.anct.gouv.fr/og-image-front.png`},
      ]
    }
  },
  
  components: {
    FrontSplash,
    Annonce
  }
}
</script>

<style lang="scss">
.annonce {
  @apply my-12;

  @screen sm {
    @apply mb-24;
  }
}

.home-links a {
  margin-right: 1rem;
}

.publics {
  @apply mx-auto max-w-screen-md my-8 px-4;

  .public {
    @apply my-16;

    .title {
      @apply text-2xl mt-6 mb-4 leading-none font-bold font-marianne;

      @screen sm {
        @apply text-3xl mt-8 mb-6;
      }
    }

    .button {
      @apply block px-4 py-2 my-4 border-2 border-navy text-navy font-bold rounded-full shadow-yellow text-center transition ease-linear duration-100;
    
      @screen sm {
        @apply inline-block my-2;
      }

      &:hover {
        @apply bg-navy text-white;
      }
    }
  }
}
</style>
