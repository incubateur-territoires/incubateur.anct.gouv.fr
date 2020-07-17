<template>
  <div class="logo">
    <Logo class="logo-icon" role="img" title="Logo Incubateur des Territoires" />
    <div class="logo-text">
      <div class="inline-block leading-none mr-1">
        <span class="font-bold">Incubateur</span>
      </div>
      <div class="inline-block leading-none">
        <span class="font-thin mr-1">des</span>
        <span class="font-bold">Territoires</span>
      </div>
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
  @apply flex flex-shrink items-center;
}

.logo-icon {
  @apply inline-block w-8 mr-2;

  @screen lg {
    @apply w-16 mr-6;
  }
}

.logo-text {
  @apply flex-1 font-marianne;
  
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
</style>
