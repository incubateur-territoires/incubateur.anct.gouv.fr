<template>
  <Layout>
    <Splash />

    <Annonce />

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
import Splash from '~/components/Splash.vue'
import Annonce from '~/components/Annonce.vue'

export default {
  components: {
    Splash,
    Annonce
  }
}
</script>

<style lang="scss">
.home-links a {
  margin-right: 1rem;
}

.publics {
  @apply mx-auto max-w-screen-md my-8;

  .public {
    @apply my-16;

    .action {
      @apply max-w-lg;
    }

    .title {
      @apply text-3xl mt-8 mb-6 leading-none font-bold font-marianne;
    }

    .button {
      @apply inline-block px-4 py-2 mt-4 border-2 border-navy text-navy font-bold rounded-full shadow-yellow text-center transition ease-linear duration-100;
    
      &:hover {
        @apply bg-navy text-white;
      }
    }
  }
}
</style>
