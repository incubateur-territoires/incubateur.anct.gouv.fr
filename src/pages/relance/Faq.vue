<template>
  <Layout>
    <div>
      <PageTitle>Foire aux questions</PageTitle>

    <div class="mx-auto max-w-screen-md faq mt-8">
      <h1 class="font-marianne font-black text-3xl">
        Webinaires
      </h1>

     <div class="phase">
        <div
          class="rounded-lg hover:bg-gray-100 cursor-pointer pt-2 pb-2 pr-2 -m-2 flex"
          @click="faq3 = !faq3"
        >
          <div class="text-gray-500 mt-1 mr-2">
            <svg :class="{ 'transform rotate-90' : faq3 }" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M9 5l7 7-7 7"></path></svg>
          </div>
          <div>
            <div class="titre">
              Quand est le prochain webinaire ?
            </div>
          </div>
        </div>
        <div
          class="content"
          v-if="faq3"
        >
          <p class="mb-4">Vous pouvez consulter les dates et horaires de l'ensemble de nos webinaires via ce lien : https://app.livestorm.co/incubateur-des-territoires/le-rdv-des-territoires-avec-lincubateur?type=detailed </p>
          </div>
      </div>
      


    </div>
  </Layout>
</template>

<page-query>
query page {
  pageContent(id: "investigations-national") {
    content
  }
}
</page-query>

<script>
import PageTitle from "~/components/relance/PageTitle.vue";
import PageContent from "~/components/PageContent.vue";

export default {
  metaInfo: {
    title: "France Relance : Programme national d'investigations",
  },
  components: {
    PageTitle,
    PageContent,
  },
  data() {
    return {
      faq1: false,
      faq2: false,
      faq3: false,
      faq4: false,
      faq5: false
    }
  }
};
</script>

<style lang="scss" scoped>
p, h2, ul {
  a {
    @apply text-green-relance border-b-2 border-green-relance;
  }
}

li {
  @apply ml-4 list-disc;

  &.second {
    @apply ml-6 mt-1 list-none bg-gray-100 p-3;
  }
}

.button {
  @apply inline-block px-4 py-2 border-2 border-green bg-white text-green font-bold rounded-full text-center transition ease-linear duration-100;

  &.retourner {
    @apply border-transparent;

    &:hover {
      @apply border-green bg-transparent text-green;
    }
  }

  &:hover {
    @apply bg-green text-white;
  }
}

.faq {
  @apply mt-8;

  .block {
    @apply my-8;
  }
  
  .phase {
    @apply my-8;
    // p-4 -mx-4 rounded-lg bg-gray-100;
  }

  .titre {
    @apply text-2xl font-semibold font-marianne text-navy;
  }

  .dates {
    @apply text-gray-600;
  }

  .etapes {
    h2 {
      @apply text-xl font-marianne;
    }
    h3 {
      @apply text-sm text-gray-600;
    }
    ul {
      @apply my-4;
    }
  }

  .content {
    @apply mt-4
  }
}
</style>
