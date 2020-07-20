<template>
  <Layout>
    <PageTitle>
      Données personnelles
    </PageTitle>

    <PageContent>
      <h2>Cookies et respect de votre vie privée</h2>
      <p>
        Ce site ne prélève aucune donnée à caractère personnel.
      </p>

      <p>
        <g-link to="https://stats.data.gouv.fr/index.php?module=CoreHome&action=index&idSite=135&period=range&date=previous30&updated=1#?idSite=135&period=range&date=previous30&category=Dashboard_Dashboard&subcategory=1">L’outil de mesure d’audience que nous utilisons</g-link>, Matomo, est paramétré de façon à ce que les informations recueillies soient anonymisées. Le petit fichier texte (« cookie ») déposé sur votre ordinateur lorsque vous le consultez nous permet simplement de connaître le nombre de visites et les pages les plus consultées, et ainsi d’améliorer nos contenus et votre expérience, sans pour autant permettre de vous identifier personnellement.
      </p>

      <p>
        Nous sommes ainsi en conformité avec la <g-link to="https://www.cnil.fr/fr/solutions-pour-les-cookies-de-mesure-daudience">réglementation « Cookies » de la CNIL</g-link> et exemptés d’autorisation préalable. C’est pour cela que vous n’avez pas eu besoin de cliquer sur un bloc pour accepter le dépôt de cookies !
      </p>
    </PageContent>
  </Layout>
</template>

<script>
import PageTitle from '~/components/PageTitle.vue'
import PageContent from '~/components/PageContent.vue'

export default {
  metaInfo: {
    title: 'Données personnelles'
  },
  components: {
    PageTitle,
    PageContent
  }
}
</script>
