<template>
  <footer class="flex justify-center border-t-4 border-gray-200 mt-8">
    <div class="my-8 w-32">
      <g-link to="https://anct.gouv.fr" target="_blank" title="Incubateru des Territoires">
        <LogoRF class="rf mt-1 mb-8" role="img" title="Logo Républiqe Française" />
        <LogoANCT class="anct" role="img" title="Logo Agence Nationale de la Cohesion des Territoires" />
      </g-link>
    </div>

    <div class="my-8 ml-12  footer-content">
      <div class="max-w-screen-sm description">
        <g-link to="/">
          <Logo class="mb-4 text-2xl" />
        </g-link>
        <p>
          L'Incubateur des Territoires est une mission de l'<a href="https://anct.gouv.fr" target="_blank">Agence Nationale de la Cohesion des Territoires</a>.<br>
          Le <a href="https://github.com/incubateur-territoires/incubateur.anct.gouv.fr" target="_blank">code source</a> de ce site web est disponible en licence libre.
        </p>
      </div>

      <div class="websites">
        <div>
          Incubateur
          <ul>
            <li><a href="https://twitter.com/design_gouv" target="_blank">
              Twitter <font-awesome :icon="['fab', 'twitter']"/>
              </a></li>
            <li><a href="mailto:contact@" target="_blank">
                Contact <font-awesome :icon="['fas', 'paper-plane']" transform="shrink-2"/>
                </a></li>
            <li><g-link to="/recrutement/">Recrutement</g-link></li>
            <li><g-link to="/misc/accessibilite/">Accessibilité</g-link></li>
            <li><g-link to="/misc/donnees-personnelles/">Données personnelles</g-link></li>
            <li><g-link to="/misc/mentions-legales/">Mentions légales</g-link></li>
          </ul>
        </div>
        <div>
          Autres services
          <ul>
            <li><a href="https://observatoire.numerique.gouv.fr" target="_blank">L'observatoire du numérique</a></li>
            <li><a href="https://demarches-simplifiees.fr" target="_blank">Demarches simplifiées</a></li>
            <li><a href="https://franceconnect.gouv.fr" target="_blank">FranceConnect</a></li>
            <li><a href="https://voxusagers.gouv.fr" target="_blank">Voxusagers</a></li>
          </ul>
        </div>
        <div>
          Autres univers
          <ul>
            <li><a href="https://etalab.gouv.fr" target="_blank">etalab.gouv.fr</a></li>
            <li><a href="https://beta.gouv.fr" target="_blank">beta.gouv.fr</a></li>
            <li><a href="https://data.gouv.fr" target="_blank">data.gouv.fr</a></li>
            <li><a href="https://api.gouv.fr" target="_blank">api.gouv.fr</a></li>
            <li><a href="https://design.numerique.gouv.fr" target="_blank">design.numerique.gouv.fr</a></li>
          </ul>
        </div>
      </div>

      <div class="public">
        <span>Les sites publics :</span>
        <a href="https://elysee.fr" target="_blank">Elysee.fr</a>
        <a href="https://gouvernement.fr" target="_blank">gouvernement.fr</a>
        <a href="https://www.service-public.fr" target="_blank">service-public.fr</a>
        <a href="https://legifrance.gouv.fr" target="_blank">legifrance.gouv.fr</a>
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
li a,
p a {
  @apply text-blue
}

footer {
  .footer-content {
    .websites {
      margin: 32px 0 8px 0;
      display: flex;
      flex-flow: row wrap;
      justify-content: space-between;

      div {
        margin-right: 48px;
        margin-bottom: 16px;
      }

      ul {
        padding: 0;

        li {
          list-style-type: none;
        }
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
