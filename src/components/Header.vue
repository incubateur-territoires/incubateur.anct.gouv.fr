<template>
  <header class="mx-auto mt-8 px-4 max-w-screen-md font-marianne md:flex md:flex-col">
    <div class="flex justify-between items-center">
      <div>
        <g-link class="relative" to="/">
          <LogoRF class="absolute -ml-48 h-12 md:h-24" role="img" title="Logo Républiqe Française" />
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
</style>
