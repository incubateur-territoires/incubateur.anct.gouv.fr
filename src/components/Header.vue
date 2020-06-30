<template>
  <header class="flex justify-between mx-auto my-8 max-w-screen-lg">
    <div class="text-3xl">
      <g-link to="/">
        <Logo />
      </g-link>
    </div>
    <nav class="nav">
      <g-link to="/presentation/">Presentation</g-link>
      <g-link to="/offres/">Offres</g-link>
      <g-link to="/services/">Services incubés</g-link>
      <g-link to="/contact/">Contact</g-link>
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

<style lang="scss">
header {
  font-family: "Marianne";
}

nav {
  @apply flex my-auto text-lg;
  
  a {
    @apply px-2 py-1 transition ease-linear duration-100 rounded-lg;

    &:hover {
      @apply bg-blue text-white;
    }
  }

  a:not(:last-child) {
    @apply mr-2;
  }

  a:last-child {
    @apply -mr-2;
  }
}
</style>
