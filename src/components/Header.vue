<template>
  <header class="flex justify-between mx-auto my-8 max-w-screen-md">
    <div class="text-3xl">
      <g-link to="/">
        <Logo />
      </g-link>
    </div>
    <nav class="flex justify-between my-auto">
      <g-link class="" to="/offres/">Offres</g-link>
      <g-link class="" to="/partenaires/">Partenaires</g-link>
      <g-link class="" to="/contact/">Contact</g-link>
    </nav>
  </header>
</template>

<script>
import Logo from "~/components/Logo.vue"

export default {
  components: {
    Logo
  }
}
</script>

<style>
header {
  font-family: "Marianne";
}
</style>
