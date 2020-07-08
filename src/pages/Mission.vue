<template>
  <Layout>
    <div class="offres">
      <div class="splash">
        <h1>Mission de l'Incubateur</h1>
      </div>

      <div class="content">
        <h2>Impliquer les agents publics [changer la culture]</h2>
        

        <h2>Construire de nouveaux services publics numériques de territoires [service]</h2>

        <h2>Favoriser les mutualisations [pérennisation & impact]</h2>
      </div>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Mission'
  }
}
</script>

<style lang="scss">
.offres {
  .splash {
    @apply py-8 mb-12 font-marianne text-white bg-navy;

    h1 {
      @apply text-5xl font-black mx-auto max-w-screen-md;
    }
  }

  .content {
    @apply mx-auto max-w-screen-md;

    h1,
    h2,
    h3,
    h4 {
      @apply font-marianne font-black;  
    }

    h1 { @apply text-5xl mb-12; }
    h2 { @apply text-3xl mb-8; }

    p { @apply mb-4 }
  }
}
</style>
