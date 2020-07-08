<template>
  <footer class="flex flex-col md:flex-row md:justify-center border-t-4 border-gray-200 mt-12 p-12 px-4">
    <div class="mb-8">
      <g-link class="flex md:flex-col items-end md:items-start w-64 md:mr-8 md:w-48" to="https://agence-cohesion-territoires.gouv.fr/" target="_blank" title="Incubateru des Territoires">
        <LogoRF class="w-3/5 mr-8 md:mb-8" role="img" title="Logo Républiqe Française" />
        <LogoANCT class="" role="img" title="Logo Agence Nationale de la Cohesion des Territoires" />
      </g-link>
    </div>

    <div class="footer-content">
      <div class="max-w-screen-sm description">
        <g-link to="/">
          <Logo class="mb-4 text-2xl" />
        </g-link>
        <p>
          L'Incubateur des Territoires est une mission de l'<a href="https://agence-cohesion-territoires.gouv.fr/" target="_blank">Agence Nationale de la Cohesion des Territoires</a>.
          Le <a href="https://github.com/incubateur-territoires/incubateur.anct.gouv.fr" target="_blank">code source</a> de ce site web est disponible en licence libre.
          Le design de ce site est inspiré par le site de nos collègues à <a href="https://design.numerique.gouv.fr/">DesignGouv</a>.
        </p>
      </div>

      <div class="websites">
        <div>
          Incubateur
          <ul>
            <li><a href="mailto:incubateur@anct.gouv.fr" target="_blank">
                <font-awesome :icon="['fas', 'paper-plane']" transform="shrink-2"/> Contact
                </a></li>
            <li><a href="https://github.com/incubateur-territoires" target="_blank">
              <font-awesome :icon="['fab', 'github']"/> GitHub
              </a></li>
            <li><g-link to="/recrutement/">Recrutement</g-link></li>
            <li><g-link to="/misc/accessibilite/">Accessibilité</g-link></li>
            <li><g-link to="/misc/donnees-personnelles/">Données personnelles</g-link></li>
            <li><g-link to="/misc/mentions-legales/">Mentions légales</g-link></li>
          </ul>
        </div>
        <div>
          Autres services de l'ANCT
          <ul>
            <li><a href="http://www.onpv.fr/" target="_blank">Observatoire national de la politique de la ville</a></li>
            <li><a href="https://www.carrefourdesinnovationssociales.fr/" target="_blank">Carrefours des innovations sociales</a></li>
            <li><a href="https://www.observatoire-des-territoires.gouv.fr/" target="_blank">Observatoire des Territoires</a></li>
            <li><a href="https://sig.ville.gouv.fr/" target="_blank">SIG Ville</a></li>
            <li><a href="https://urbact.eu/" target="_blank">Urbact</a></li>
          </ul>
        </div>
        <div>
          Autres univers
          <ul>
            <li><a href="https://design.numerique.gouv.fr" target="_blank">design.numerique.gouv.fr</a></li>
            <li><a href="https://etalab.gouv.fr" target="_blank">etalab.gouv.fr</a></li>
            <li><a href="https://beta.gouv.fr" target="_blank">beta.gouv.fr</a></li>
            <li><a href="https://data.gouv.fr" target="_blank">data.gouv.fr</a></li>
            <li><a href="https://api.gouv.fr" target="_blank">api.gouv.fr</a></li>
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
.public a,
li a,
p a {
  @apply text-blue;

  &:hover {
    @apply text-navy;
  }
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
