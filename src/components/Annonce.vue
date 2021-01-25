<template>
  <section class="annonce">
    <h1 class="title">{{$static.element.title}}</h1>
    <div class="pt-8 px-8 pb-10 border-4 rounded-lg border-green sm:text-lg" v-html="$static.element.content" />
    <div class="outlinks">
      <g-link
        :to="$static.element.url_du_lien"
        class="outlink"
      >
        {{$static.element.texte_du_lien}} →
      </g-link>
    </div>
  </section>
</template>

<static-query>
query element {
  element(path: "/content/elements/front-page-featured") {
    title
    content
    texte_du_lien
    url_du_lien
  }
}
</static-query>

<style lang="scss">
.annonce {
  @apply mx-auto max-w-screen-md px-4;
  
  li {
    @apply list-disc ml-2 mb-4;
    
    a {
      @apply text-green border-green border-b-2;
    }
  }



  p {
    @apply mb-4
  }

  .title {
    position: relative;
    bottom: -1rem;
    left: 2rem;
    background-color: white;
    display: inline-block;    
    font-family: "Marianne";
    font-weight: 800;
    padding: 0 .5rem;
    z-index: 10;
    max-width: calc(100% - 2rem);

    font-size: 1.25rem;

    @screen xs {
      font-size: 1.5rem;
    }

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

    @screen xs {
      @apply text-sm;
      padding: .5rem 1rem;
    }

    @screen sm {
      @apply text-base;
      padding: .5rem 1rem;
    }

    svg {
      display: none;

      @screen xs {
        display: inline-block;
      }
    }

    &:hover {
      @apply bg-white text-green;
    }

    &:not(:last-child) {
      @apply mr-4;
    }
  }
}
</style>
