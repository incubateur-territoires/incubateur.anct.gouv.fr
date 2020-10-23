<template>
  <header class="mx-auto my-4 lg:mt-8 lg:mb-0 px-4 max-w-screen-md font-marianne md:flex md:flex-col">
    <div class="flex justify-between items-center">
      <div class="relative">
        <LogoRF class="hidden absolute lg:block lg:h-24 lg:-left-32 xl:-left-40" role="img" title="Logo Républiqe Française" />
        <g-link to="/"><Logo /></g-link>
      </div>
      <div class="md:hidden">
        <button @click="$emit('toggle-mobile-nav')" type="button" class="burger" >
          <font-awesome v-if="!showMobileNav" :icon="['fas', 'bars']" />
          <font-awesome v-if="showMobileNav" :icon="['fas', 'times']" />
        </button>
      </div>
    </div>
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
  },
  props: {
    showMobileNav: Boolean
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
</style>
