<template>
  <section class="splash">
    <div class="flex mx-auto max-w-screen-lg text-center">
      <div class="text-xl sm:text-2xl md:text-3xl px-2">
        Ensemble avec les territoires, nous créons des service publics numériques pour résoudre les problèmes des usagers.
      </div>
    </div>
    <div class="buttons ">
      <div>
        <g-link to="/offres/">
          Nos offres aux territoires
        </g-link>
      </div>

      <div>
        <g-link to="/services/">
          Nos services incubés
        </g-link>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.splash {
  @apply pt-12 pb-4 px-4 font-marianne text-white bg-navy;

  @screen sm {
    @apply pb-12;
  }

  .buttons {
    @apply mt-12 font-semibold;

    a:first-child {
      @apply mb-4;

      @screen sm {
        @apply mb-0 mr-4;
      }
    }

    @screen sm {
      @apply flex justify-center mb-6;
    }

    a {
      @apply block text-center ;

      @apply py-2 px-4 bg-yellow rounded-lg text-navy border-4 border-yellow text-lg transition ease-linear duration-100;

      &:hover {
        @apply border-4 border-yellow bg-navy text-yellow;
      }
    }
  }
}
</style>
