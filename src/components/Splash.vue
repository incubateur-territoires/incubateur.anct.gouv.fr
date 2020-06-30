<template>
  <section class="splash py-12 mb-12">
    <div class="flex mx-auto max-w-screen-lg text-center">
      <div class="text-3xl">
        Ensemble avec les territoires, nous créeons des service publics numériques pour résoudre les problèmes des usagers.
      </div>
    </div>
    <div class="buttons flex justify-center mt-12 mb-6 font-semibold">
      <div class="flex">
        <g-link
          to="/offres/"
        >
          Nos offres aux territoires
        </g-link>
      </div>

      <div class="flex">
        <g-link
          class="ml-8"
          to="/services/"
        >
          Nos services incubés
        </g-link>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.splash {
  font-family: "Marianne";
  color: white;
  background-color: #273475;

  .buttons {
    a {
      @apply py-2 px-4 bg-yellow rounded-lg text-navy border-4 border-yellow text-lg transition ease-linear duration-100;

      &:hover {
        @apply border-4 border-yellow bg-navy text-yellow;
      }
    }
  }
}
</style>
