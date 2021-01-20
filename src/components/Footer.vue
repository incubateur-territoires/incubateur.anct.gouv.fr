<template>
  <footer class="flex flex-col md:flex-row md:justify-center border-t-4 border-gray-200 mt-12 p-12 px-4">
    <div class="mb-8">
      <g-link class="flex md:flex-col items-end md:items-start w-64 md:mr-12 md:w-48" to="https://agence-cohesion-territoires.gouv.fr/" target="_blank" title="Incubateru des Territoires">
        <LogoRF class="w-3/5 mr-8 md:mb-8" role="img" title="Logo Républiqe Française" />
        <LogoANCT class="" role="img" title="Logo Agence Nationale de la Cohesion des Territoires" />
      </g-link>
    </div>

    <div class="footer-content">
      <div class="logo mb-8">
        <g-link to="/">
          <Logo />
        </g-link>
      </div>

      <div class="incubateur-links inline-block mb-8 px-4 py-1 space-x-4 bg-gray-200 rounded-full">
        <g-link to="mailto:contactincubateur@anct.gouv.fr">
            <font-awesome :icon="['fas', 'paper-plane']" transform="shrink-2"/> Contact
        </g-link>
        <g-link to="https://twitter.com/IncubateurT">
          <font-awesome :icon="['fab', 'twitter']"/> Twitter
        </g-link>
        <g-link to="https://www.linkedin.com/showcase/anct-incubateur-des-territoires">
          <font-awesome :icon="['fab', 'linkedin']"/> LinkedIn
        </g-link>
        <g-link to="https://www.youtube.com/channel/UC5p_RyLWLYXjvsOZxtnQAdQ">
          <font-awesome :icon="['fab', 'youtube']"/> YouTube
        </g-link>
      </div>

      <div class="description">
        <p>
          L'Incubateur des Territoires est une mission de l'<a href="https://agence-cohesion-territoires.gouv.fr/" target="_blank">Agence Nationale de la Cohesion des Territoires</a>.
          Le <a href="https://github.com/incubateur-territoires/incubateur.anct.gouv.fr" target="_blank">code source</a> de ce site web est disponible en licence libre.
          Le design de ce site est inspiré par le site de nos collègues à <a href="https://design.numerique.gouv.fr/">DesignGouv</a>.
        </p>
      </div>

      <div class="recrutements my-4">
        <g-link to="/recrutements/">
          <span class="mr-2">🚀</span> Nous recrutons ! Voir nos offres d'emploi →
        </g-link>
      </div>

      <div class="incubateur-links flex flex-wrap my-2 space-x-4">
        <g-link to="https://github.com/incubateur-territoires">
          <font-awesome :icon="['fab', 'github']"/> Code
        </g-link>
        <g-link to="https://stats.data.gouv.fr/index.php?module=CoreHome&action=index&idSite=135&period=range&date=previous30&updated=1#?idSite=135&period=range&date=previous30&category=Dashboard_Dashboard&subcategory=1">
          <font-awesome :icon="['far', 'chart-bar']"/> Stats
        </g-link>
        <g-link to="/accessibilite/">Accessibilité</g-link>
        <g-link to="/donnees-personnelles/">Données personnelles</g-link>
        <g-link to="/mentions-legales/">Mentions légales</g-link>
      </div>

      <div class="websites">
        <div>
          Les sites du Numérique de l'ANCT
          <ul>
            <li><g-link to="https://societenumerique.gouv.fr/">Société Numérique</g-link></li>
            <li><g-link to="https://www.amenagement-numerique.gouv.fr/">Aménagement Numérique</g-link></li>
            <li><g-link to="https://numerique-en-communs.fr/">Numérique en Commun</g-link></li>
          </ul>
        </div>
        <div>
          Autres incubateurs et fabriques numériques
          <ul>
            <li><a href="https://beta.gouv.fr" target="_blank">beta.gouv.fr</a></li>
            <li><a href="https://mtes-mct.github.io/numerique/" target="_blank">Fabrique numérique du MTES</a></li>
            <li><a href="https://www.fabrique.social.gouv.fr/" target="_blank">Fabrique numérique des ministères sociaux</a></li>
            <li><a href="https://github.com/fabnumdef" target="_blank">Fabrique numérique Défense Connect</a></li>
            <li><a href="https://github.com/StartupsPoleEmploi/" target="_blank">Fabrique Pôle emploi</a></li>
            <li><a href="https://beta.interieur.gouv.fr/" target="_blank">Lab du Ministère de l’Intérieur</a></li>
          </ul>
        </div>
      </div>

      <div class="public">
        <span>Les sites publics :</span>
        <a href="https://legifrance.gouv.fr" target="_blank">legifrance.gouv.fr</a>
        <a href="https://france.fr" target="_blank">france.fr</a>
        <a href="https://cohesion-territoires.gouv.fr" target="_blank">cohesion-territoires.gouv.fr</a>
        <a href="https://gouvernement.fr" target="_blank">gouvernement.fr</a>
        <a href="https://www.service-public.fr" target="_blank">service-public.fr</a>
      </div>
    </div>
  </footer>
</template>

<script>
import LogoRF from "~/assets/images/logoRF.svg"
import LogoANCT from "~/assets/images/logoANCT.svg"
import Logo from '~/components/Logo.vue'

export default {
  components: {
    LogoRF,
    LogoANCT,
    Logo
  }
}
</script>

<style lang="scss">


footer {
  .public a,
  .description a,
  .websites a,
  .incubateur-links a  {
    @apply text-blue;

    &:hover {
      @apply text-navy;
    }
  }

  .footer-content {
    .description {
      @apply max-w-screen-md;
    }
    
    .websites {
      @apply text-sm border-t-2 border-gray-200 flex flex-wrap pt-6;

      div {
        @apply mb-8 mr-8;
      }
    }
  }

  .recrutements {
    @apply text-green font-semibold -ml-4;

    a {
      @apply border-2 inline-block py-2 px-4 rounded-full border-white;

      &:hover {
        @apply border-green;
      }
    }
  }

  .public {
    font-size: .875em;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    a, span {
      margin-right: 12px;
    }
  }
}
</style>
