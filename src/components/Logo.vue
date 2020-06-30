<template>
  <div class="logo">
    <Logo class="inline-block w-16 mr-6" role="img" title="Logo Incubateur des Territoires" />
    <div class="inline-block align-middle">
      <span class="font-bold">Incubateur</span>
      <span class="font-thin">des</span>
      <span class="font-bold">Territoires</span>
    </div>
  </div>
</template>

<script>
import Logo from "~/assets/images/logoIncubateur.svg"

export default {
  components: {
    Logo
  }
}
</script>

<style>
.logo {
  font-size: 2rem;
  font-family: "Marianne";
}

.logo span:not(:first-child) {
  @apply ml-1
}
</style>
