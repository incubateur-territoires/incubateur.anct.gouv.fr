<template>
  <section class="annonce">
    <h1 class="title">Appel à intrapreneurs</h1>
    <p class="text-center sm:text-lg">
      En collaboration avec <g-link to="https://beta.gouv.fr">beta.gouv.fr</g-link>, <strong>l'Incubateur des Territoires cherche de nouveaux collaborateurs au sein des collectivités.</strong>
      <br><br>
      Avez-vous une idée de problème que vous souhaiteriez investiguer <strong>avec l’aide d'experts numériques</strong> (coach, designer, spécialiste de l’expérience utilisateur) ?
      <br><br>
      Postuler en envoyant un mail décrivant ce problème et un·e membre de l’équipe reviendra vers vous pour en discuter.
      <strong>L'Incubateur offres de prendre en charge la phase d’investigation</strong> pour les collectivités.
    </p>
    <div class="outlinks">
      <g-link
        to="mailto:investigations@beta.gouv.fr"
        class="outlink"
      >
        Postuler <font-awesome class="ml-2" :icon="['far', 'envelope']"/>
      </g-link>
      <g-link
        to="https://blog.beta.gouv.fr/dinsic/2020/06/22/investigations/"
        class="outlink"
      >
        En savoir plus <font-awesome class="ml-2" :icon="['fas', 'external-link-alt']"/>
      </g-link>
    </div>
  </section>
</template>

<style lang="scss">
.annonce {
  @apply mx-auto max-w-screen-sm px-4;
  
  .title {
    position: relative;
    bottom: -1rem;
    left: 2rem;
    background-color: white;
    display: inline-block;
    font-size: 1.5rem;
    font-family: "Marianne";
    font-weight: 800;
    padding: 0 .5rem;

    @screen sm {
      font-size: 2rem;
    }
  }

  .outlinks {
    position: relative;
    top: -1rem;
    right: 2rem;  
    margin-left: auto;
    float: right;
  }

  .outlink {
    @apply text-sm border-green rounded-full bg-green text-white font-semibold transition ease-linear duration-100;
    padding: .25rem .5rem;
    border-width: 4px;

    @screen sm {
      @apply text-base;
      padding: .5rem 1rem;
    }

    &:hover {
      @apply bg-white text-green;
    }

    &:not(:last-child) {
      @apply mr-4;
    }
  }

  p {
    @apply pt-8 px-8 pb-10 border-4 border-green; 
    border-radius: 2rem;
  }
}
</style>
