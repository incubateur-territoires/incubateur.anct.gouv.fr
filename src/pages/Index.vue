<template>
  <Layout>
    <Splash />

    <section class="mx-auto max-w-screen-md my-8">
      <div>
        <h1 class="text-3xl">Nos offres</h1>
        <h2></h2>
      </div>
    </section>
  </Layout>
</template>

<script>
import Splash from '~/components/Splash.vue'

export default {
  components: {
    Splash
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}


</style>
