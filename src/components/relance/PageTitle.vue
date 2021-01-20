<template>
  <div class="page-title-relance">
    <div class="mx-auto max-w-screen-lg flex items-center">
      <g-image
        alt="logo france relance"
        src="~/assets/images/france-relance-vert.png"
        class="h-32 w-32 sm:h-48 sm:w-48"
      />
      <h1 class="ml-8"><slot /></h1>
    </div>
    <!-- <div class="mx-auto max-w-screen-lg flex flex-col lg:flex-row lg:space-x-1 mt-8">
      <g-link to="/relance/" class="nav-button">
        À propos de la relance
      </g-link>
      <g-link to="/relance/investigations/" class="nav-button">
        Programme national d'investigations
      </g-link>
      <g-link to="https://mon.incubateur.anct.gouv.fr" class="nav-button">
        Répondre à l'enquête ↗︎
      </g-link>
      <g-link to="/relance/besoins/liste" class="nav-button">
        Besoins identifiés
      </g-link>
      <g-link to="/relance/solutions/" class="nav-button">
        Proposer une solution
      </g-link>
      <g-link to="/relance/solutions/liste" class="nav-button">
        Solutions proposées
      </g-link>
    </div> -->
  </div>
</template>

<style lang="scss" scoped>
.nav-button {
  @apply p-1;
  
  @screen lg {
    @apply px-4 py-2 rounded-full border-2 border-transparent;

    &:hover {
      @apply border-white;
    }
  }
}

.page-title-relance {
  @apply px-4 py-4 mb-8 font-marianne text-white bg-green-relance;

  h1 {
    @apply text-2xl font-black leading-tight;
  }

  h2 {
    @apply text-lg mb-2 mx-auto max-w-screen-md ;
  }

  @screen sm {
    @apply py-6 mb-10;
    
    h1 {
      @apply text-4xl;
    }

    h2 {
      @apply text-xl mb-4;
    }
  }

  @screen md {
    @apply py-8 mb-12;
    
    h1 {
      @apply text-5xl;
    }

    h2 {
      @apply text-2xl;
    }
  }
}
</style>
