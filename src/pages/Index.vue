<template>
  <Layout>
    <FrontSplash />

    <div class="under-splash">
      <g-link to="/recrutement/">
        <span class="mr-2">🚀</span> Nous recrutons ! Voir nos offres d'emploi →
      </g-link>
    </div>

    <Annonce class="annonce" />

    <section class="publics">
      <div class="public">
        <h1 class="title">Vous êtes un agent public territorial</h1>
        
        <div class="action">
          <p>Vous voulez déployer un de nos services numériques existante sur votre territoire ?</p>
          
          <g-link class="button" to="/services/">
            Contacter l'équipe du service →
          </g-link>
        </div>

        <div class="action">
          <g-link class="button">
            S'incrire au prochain appel à intrapreneur →
          </g-link>
        </div>

        <div class="action">
          <g-link class="button" to="https://aides-territoires.beta.gouv.fr/">
            Découvrir les aides financiers sur Aides Territoires <font-awesome class="ml-2" :icon="['fas', 'external-link-alt']"/>
          </g-link>
        </div>
      </div>

      <div class="public">
        <h1 class="title">Vous êtes un élu territorial</h1>

        <p class="font-bold"><span class="mr-2">🙋‍♀️</span> Encourager vos agents à postuler pour le programme d'intrapreneuriat</p>
          
        <g-link class="button">
          Inscrivez-vous dans la prochaine Académie des Élus →
        </g-link>
      </div>

      <div class="public">
        <h1 class="title">Vous portez un projet numérique à destination des territoires (asso, privé)</h1>
        
        Renseignez-vous sur nos startups et les services numériques qu'ils offrent.
        <g-link class="button">
          Contactez-les si vous avez des collaborations à offrir →
        </g-link>
        
        <p class="mt-8 text-gray-700 text-sm bg-gray-100 p-4 rounded-lg">Malheursement, nous n’offrons pas d'aides financiers aux projets associatifs. Par contre, nos startups pourraient être intéressées a collaboré avec vous ! N'hésitez pas à les contacter.</p>
      </div>  
      
      <div class="public">
        <h1 class="title">Vous êtes un agent de l'ANCT</h1>
        
        <p>Vous avez un projet dont vous pensez l'Incubatuer pourrait porter ? </p>

        <g-link to="/contact/" class="button">
          N'hestitez pas à nous contacter →
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
