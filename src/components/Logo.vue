<template>
  <div class="logo">
    <Logo class="logo-icon" role="img" title="Logo Incubateur des Territoires" />
    <div class="logo-text">
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

<style lang="scss">
.logo {
  @apply flex items-center;
}

.logo-icon {
  @apply inline-block w-6 mr-2;

  @screen lg {
    @apply w-16 mr-6;
  }
}

.logo-text {
  @apply inline-block align-middle font-marianne;
  
  font-size: 1rem;

  @screen xs {
    font-size: 1.25rem;
  }

  @screen sm {
    font-size: 1.5rem;
  }

  @screen lg {
    font-size: 2rem;
  }
}

.logo span:not(:first-child) {
  @apply ml-1
}
</style>
