<template>
  <Layout>
    <FrontSplash />

    <div class="under-splash">
      <g-link to="/recrutements/">
        <span class="mr-2">🚀</span> Nous recrutons ! Voir nos offres d'emploi →
      </g-link>
    </div>

    <Annonce class="annonce" />

    <section class="publics">
      <div class="public">
        <h1 class="title">Vous êtes un agent public territorial</h1>

        <div class="action">
          <g-link to="https://blog.beta.gouv.fr/dinsic/2020/06/22/investigations/" class="button">
            Postuler à l'appel d'intrapreneur de beta.gouv.fr <font-awesome class="ml-2" :icon="['fas', 'external-link-alt']"/>
          </g-link>
        </div>

        <!-- <div class="action">
          <g-link to="https://aides-territoires.beta.gouv.fr/" class="button">
            Découvrir les aides financiers sur Aides Territoires <font-awesome class="ml-2" :icon="['fas', 'external-link-alt']"/>
          </g-link>
        </div> -->
      </div>

    <!-- 
      <div class="public">
        <h1 class="title">Vous êtes un élu territorial</h1>

        <p class="font-bold"><span class="mr-2">🙋‍♀️</span> Encourager vos agents à postuler pour le programme d'intrapreneuriat</p>
          
        <g-link class="button">
          Inscrivez-vous dans la prochaine Académie des Élus →
        </g-link>
      </div> 
    -->

      <div class="public">
        <h1 class="title">Vous portez un projet numérique à destination des territoires (asso, privé)</h1>
        
        <p class="mb-4">Malheureusement, nous n’offrons pas d'aides financière directe aux projets associatifs ou entrepreneuriaux. N'hésitez pas à contacter les équipes de nos Startups de Territoire si vous identifiez des pistes de collaboration.</p>
        <g-link to="/services/" class="button">
          Découvrez nos startups →
        </g-link>
      </div>  
      
      <div class="public">
        <h1 class="title">Vous êtes un agent de l'ANCT</h1>
        
        <p class="mb-4">Vous avez un projet dont vous pensez l'Incubateur pourrait porter ? </p>

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

.under-splash {
  @apply max-w-screen-md mx-auto mt-6 px-4 text-green font-semibold text-center;

  a {
    @apply border-2 inline-block py-2 px-4 rounded-full border-white;

    &:hover {
      @apply border-green;
    }
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
