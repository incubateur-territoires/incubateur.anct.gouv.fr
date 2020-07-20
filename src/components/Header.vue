<template>
  <header class="mx-auto max-w-screen-xl font-marianne md:flex md:justify-between md:pr-4">
    <div class="flex justify-between items-center px-4 my-4">
      <div>
        <g-link class="flex" to="/">
          <LogoRF class="h-12 md:h-24 mr-8" role="img" title="Logo Républiqe Française" />
          <Logo />
        </g-link>
      </div>
      <div class="md:hidden">
        <button @click="isOpen = !isOpen" type="button" class="burger" >
          <font-awesome v-if="!isOpen" :icon="['fas', 'bars']" />
          <font-awesome v-if="isOpen" :icon="['fas', 'times']" />
        </button>
      </div>
    </div>
    <nav :class="isOpen ? 'block' : 'hidden'" class="nav md:block md:flex md:items-center">
      <g-link to="/a-propos/">À propos</g-link>
      <!-- <g-link to="/offres/">Nos offres</g-link> -->
      <g-link to="/services/">Services numeriques</g-link>
      <g-link to="/recrutements">Recrutements</g-link>
    </nav>
  </header>
</template>

<script>
import Logo from "~/components/Logo.vue"
import LogoRF from "~/assets/images/logoRF.svg"

export default {
  components: {
    Logo,
    LogoRF
  },
  data() {
    return {
      isOpen: false
    }
  }
}
</script>

<style lang="scss">
.header {
  @screen sm {
    @apply px-4 my-8;
  }

  @screen lg {
    @apply justify-between;
  }
}

.burger {
 @apply text-xl rounded-full w-8 h-8 flex items-center justify-center;

 &:hover {
   @apply text-blue;
 }
}

nav {
  @apply text-base pb-2;

  @screen md {
    @apply text-sm pb-0;
  }

  @screen lg {
    @apply text-base;
  }
  
  a {
    @apply block px-2 mx-2 my-1 py-1 transition ease-linear duration-100 rounded-lg;

    @screen md {
      @apply mx-1;
    }

    &:hover,
    &:active {
      @apply bg-blue text-white;
    }
  }
}
</style>
