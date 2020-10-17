<template>
  <Layout>
    <FrontSplash />

    <Annonce class="annonce" />

    <section class="publics">
      <div class="public">
        <h1 class="title">Vous êtes un agent public territorial</h1>

        <div class="action">
          <g-link to="https://blog.beta.gouv.fr/dinsic/2020/06/22/investigations/" class="button">
            Postulez à l’appel à intrapreneurs de Beta.gouv.fr<font-awesome class="ml-2" :icon="['fas', 'external-link-alt']"/>
          </g-link>
        </div>
      </div> 

      <div class="public">
        <h1 class="title">Vous portez un projet numérique à destination des territoires (asso, privé)</h1>
        
        <p class="mb-4">Malheureusement, nous n'offrons pas d'aide financière directe aux projets associatifs ou entrepreneuriaux. N'hésitez pas à contacter les équipes de nos Startups de Territoire si vous identifiez des pistes de collaboration.</p>
        <g-link to="/services/" class="button">
          Découvrez nos startups →
        </g-link>
      </div>  
      
      <div class="public">
        <h1 class="title">Vous êtes un agent de l'ANCT</h1>
        
        <p class="mb-4">Vous avez un projet qui pourrait être porté par l'Incubateur ? </p>

        <g-link to="/offre-anct/" class="button">
          Découvrez comment l'Incubateur peut vous aider →
        </g-link>
      </div>
    </section>
  </Layout>
</template>

<script>
import FrontSplash from '~/components/FrontSplash.vue'
import Annonce from '~/components/Annonce.vue'

export default {
  metaInfo: {
    titleTemplate: '%s'
  },
  components: {
    FrontSplash,
    Annonce
  }
}
</script>

<style lang="scss">
.annonce {
  @apply mb-12;

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
