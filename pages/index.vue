<template>
  <div>
    <section>
      <div class="fr-container fr-py-6w">
        <div class="fr-col-lg-8">
          <h1>Nous construisons des services numériques avec et pour les territoires</h1>
          <p>L’incubateur des territoires met à disposition une offre de services numériques mutualisés répondant aux besoins prioritaires des collectivités territoriales et respectant des normes d’accessibilité, de sécurité et d’open source.</p>
        </div>
    </div>
    </section>

    <section id="chiffres">
      <div class="fr-container fr-py-6w">
        <h2>En quelques chiffres</h2>
        <div class="fr-grid-row fr-grid-row--gutters fr-container--fluid content fr-mt-4w">
          <div class="fr-col-6 fr-col-md-4 fr-col-lg-4">
              <h3>400</h3>
              <p>Collectivités accompagnées</p>
          </div>
          <div class="fr-col-6 fr-col-md-4 fr-col-lg-4">
              <h3>60</h3>
              <p>Services numériques disponibles</p>
          </div>
          <div class="fr-col-6 fr-col-md-4 fr-col-lg-4">
              <h3>10</h3>
              <p>Services en construction</p>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="fr-container fr-py-6w">
        <h2>Besoin d'aide ?</h2>
        <p>
          <a href="https://forum.incubateur.anct.gouv.fr" title="consulter le Forum des Territoires">
            Besoin de solliciter de l’aide ou un retour d’expérience auprès d’autres collectivités ?
          </a>
        </p>
        <p>
          Le forum est un outil de communication et d’échanges entre agents et élus des collectivités territoriales.</a>
        </p>
        <a class="fr-btn fr-mt-4w" href="https://forum.incubateur.anct.gouv.fr" title="consulter le Forum des Territoires">
          Poser une question
        </a>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    layout: 'raw'
  }
</script>

<style>
  section:nth-of-type(even) {
    background-color: var(--background-alt-blue-france);
  }

  #chiffres .content {
    text-align: center;
  }
</style>
