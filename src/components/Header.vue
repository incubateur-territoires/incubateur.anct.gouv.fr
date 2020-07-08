<template>
  <header class="mx-auto max-w-screen-lg font-marianne md:flex md:justify-between md:pr-4">
    <div class="flex justify-between items-center px-4 my-4">
      <div class="header-logo">
        <g-link to="/">
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
      <g-link to="/mission/">Mission</g-link>
      <g-link to="/services/">Services incubés</g-link>
      <g-link to="/recrutement">Recrutement</g-link>
    </nav>
  </header>
</template>

<script>
import Logo from "~/components/Logo.vue"

export default {
  components: {
    Logo
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
  @apply text-lg pb-2;

  @screen md {
    @apply text-base pb-0;
  }

  @screen lg {
    @apply text-lg;
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
