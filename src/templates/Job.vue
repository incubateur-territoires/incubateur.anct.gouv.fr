<template>
  <Layout>
    <div class="job">
      <div class="splash">
        <h2>{{$page.job.equipe}} recrute :</h2>
        <h1 v-html="$page.job.role" />
      </div>

      <div class="content">      
        <div class="content" v-html="$page.job.content" />
      
        <div class="buttons">
          <g-link v-if="$page.job.contact" :to="`mailto:${$page.job.contact}?subject=[Candidature] ${$page.job.equipe} - ${$page.job.role}`" class="button postuler">
            Postuler<font-awesome class="ml-2" :icon="['far', 'envelope']"/> 
          </g-link>

          <g-link class="retourner" to="/recrutement/">
            ← Retourner aux offres de recrutement
          </g-link>
        </div>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query ($id: ID!) {
  job(id: $id) {
    equipe
    role
    content
    contact
  }
}
</page-query>

<style lang="scss">
.job {
  .splash {
    @apply py-12 mb-12 font-marianne text-white bg-navy;

    h1 {
      @apply text-4xl font-black mx-auto max-w-screen-md leading-tight;
    }

    h2 {
      @apply text-2xl mx-auto max-w-screen-md mb-4;
    }
  }

  .content {
    @apply mx-auto max-w-screen-md;

    h1,
    h2,
    h3,
    h4 {
      @apply font-marianne font-black;  
    }

    h1 { @apply text-5xl my-12; }
    h2 { @apply text-3xl mt-6 mb-4; }
    h3 { @apply my-4 }

    p { @apply mb-4 }

    ul { @apply list-disc mb-4 }
    li { @apply ml-6 }
  }

  .buttons {
    @apply my-12
  }

  .retourner {
    @apply inline-block px-4 py-2 ml-4 text-green font-semibold border-white border-2 rounded-full transition ease-linear duration-100;

    &:hover {
      @apply border-green;
    }
  }

  .button {
    @apply inline-block px-4 py-2 border-2 border-green bg-green text-white font-bold rounded-full text-center transition ease-linear duration-100;
  
    &:hover {
      @apply bg-white text-green;
    }
  }


}
</style>
