<template>
  <Layout>
    <PageTitle>
      Accessibilité
    </PageTitle>

    <PageContent>
      <h2>Identité du déclarant</h2>
      <p>
        Agence Nationale de la Cohésion des Territoires<br>
        Mission incubateur de services numériques <br>
        20, avenue de Ségur<br>
        TSA 10717<br>
        75 334 Paris Cedex 07
      </p>

      <h2>Déclaration de conformité - RGAA 4.0</h2>
      <p>
        <em>Vérification de conformité en cours</em>
      </p>

      <h2>Droit à compensation</h2>
      <p>
        Dans l’attente d’une mise en conformité totale, vous pouvez obtenir une version accessible des documents ou des informations qui y seraient contenues en envoyant un courriel à <g-link to="mailto:contactincubateur@anct.gouv.fr">contactincubateur@anct.gouv.fr</g-link> en indiquant le nom du document concerné et/ou les informations que vous souhaiteriez obtenir. Les informations demandées vous seront transmises dans les plus bref délais.
      </p>

      <h2>Amélioration et contact</h2>
      <p>
        Vous pouvez nous aider à améliorer l’accessibilité du site en nous signalant les problèmes éventuels que vous rencontrez. Pour ce faire, envoyez-nous un courriel à <g-link to="mailto:contactincubateur@anct.gouv.fr">contactincubateur@anct.gouv.fr</g-link>.
      </p>

      <h2>Défenseur des droits</h2>
      <p>Si vous constatez un défaut d'accessibilité vous empêchant d'accéder à un contenu ou une fonctionnalité du site, que vous nous le signalez et que vous ne parvenez pas à obtenir une réponse rapide de notre part, vous êtes en droit de faire parvenir vos doléances ou une demande de saisine au Défenseur des droits. Plusieurs moyens sont à votre disposition : </p>
      <ul>
        <li>un <g-link to="https://www.defenseurdesdroits.fr/nous-contacter">formulaire de contact</g-link></li>
        <li>la <g-link to="https://www.defenseurdesdroits.fr/fr/saisir/delegues">liste des délégués de votre région</g-link> avec leurs informations de contact directs</li>
        <li>un numéro de téléphone : le 09 69 39 00 00 du lundi au vendredi de 8h00 à 20h00 (coût d'un appel local)</li>
        <li>une adresse postale dans l'<g-link to="https://lannuaire.service-public.fr/autorites-independantes/autorite-administrative-independante_195381">annuaire de l'administration</g-link></li>
      </ul>
    </PageContent>
  </Layout>
</template>

<script>
import PageTitle from '~/components/PageTitle.vue'
import PageContent from '~/components/PageContent.vue'

export default {
  metaInfo: {
    title: 'Accessibilité'
  },
  components: {
    PageTitle,
    PageContent
  }
}
</script>
