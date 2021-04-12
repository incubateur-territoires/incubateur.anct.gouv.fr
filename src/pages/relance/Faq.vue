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
          <p class="mb-4">
            Vous pouvez consulter les dates et horaires de l'ensemble de nos webinaires <g-link to="https://app.livestorm.co/incubateur-des-territoires/le-rdv-des-territoires-avec-lincubateur?type=detailed"> via ce lien.</g-link>
          </p>
         </div>
      </div>

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
              Où retrouve-t-on le support de ces webinaires ?
            </div>
          </div>
        </div>
        <div
          class="content"
          v-if="faq3"
        >
          <p class="mb-4">
            Vous retrouverez le support de présentation : <g-link to="https://incubateur.anct.gouv.fr/pdf/Presentation%20rdv%20des%20terrtioires%20etape%202.pdf"> ici.</g-link>
          </p>
         </div>
      </div>

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
              Peut-on revoir les webinaires en replay ?
            </div>
          </div>
        </div>
        <div
          class="content"
          v-if="faq3"
        >
          <p class="mb-4">
            Oui, vous pouvez retrouver nos webinaires en replay sur notre chaîne youtube : <g-link to="https://youtu.be/88TTkrL0g2g"> ici.</g-link>
          </p>
         </div>
      </div>

     </div>


    <div class="mx-auto max-w-screen-md faq mt-8">
      <h1 class="font-marianne font-black text-3xl">
        Phase de soutien
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
              Faut-il obligatoirement se créer un compte sur la plateforme pour soutenir ?
            </div>
          </div>
        </div>
        <div
          class="content"
          v-if="faq3"
        >
          <p class="mb-4">Pour soutenir une proposition parmi les 67, oui, il faut se créer un compte.</p>
         </div>
      </div>

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
              Les soutiens des collectivités sont tous au même niveau quelle que soit la taille de la collectivité ? (commune/métropole ou département/région ? = 1 vote)
            </div>
          </div>
        </div>
        <div
          class="content"
          v-if="faq3"
        >
          <p class="mb-4">Les soutiens des collectivités sont tous au même niveau quelque soit la taille des collectivités. Par ailleurs, si techniquement l'ensemble des acteurs peuvent soutenir sur la plateforme les propositions qui les intéressent, l'équipe de l'Incubateur des Territoires ne comptabilisera par nouvelle proposition qu'un unique soutien par collectivité. Le nombre de propositions qu'il est possible de soutenir par collectivité n'est pas limité. </p>
         </div>
      </div>

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
              Faut-il obligatoirement se créer un compte sur la plateforme pour soutenir ?
            </div>
          </div>
        </div>
        <div
          class="content"
          v-if="faq3"
        >
          <p class="mb-4">Pour soutenir une proposition parmi les 67, oui, il faut se créer un compte.</p>
         </div>
      </div>

     </div>


    <div class="mx-auto max-w-screen-md faq mt-8">
      <h1 class="font-marianne font-black text-3xl">
       Regroupement et orientation des propositions initiales
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
          <p class="mb-4">
            Vous pouvez consulter les dates et horaires de l'ensemble de nos webinaires<g-link to="https://app.livestorm.co/incubateur-des-territoires/le-rdv-des-territoires-avec-lincubateur?type=detailed">via ce lien</g-link>
          </p>
         </div>
      </div>

     </div>



    <div class="mx-auto max-w-screen-md faq mt-8">
      <h1 class="font-marianne font-black text-3xl">
       Services numériques financés ou construits
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
          <p class="mb-4">
            Vous pouvez consulter les dates et horaires de l'ensemble de nos webinaires<g-link to="https://app.livestorm.co/incubateur-des-territoires/le-rdv-des-territoires-avec-lincubateur?type=detailed">via ce lien</g-link>
          </p>
         </div>
      </div>

     </div>



    <div class="mx-auto max-w-screen-md faq mt-8">
      <h1 class="font-marianne font-black text-3xl">
       Comités de sélection
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
          <p class="mb-4">
            Vous pouvez consulter les dates et horaires de l'ensemble de nos webinaires<g-link to="https://app.livestorm.co/incubateur-des-territoires/le-rdv-des-territoires-avec-lincubateur?type=detailed">via ce lien</g-link>
          </p>
         </div>
      </div>

     </div>



    <div class="mx-auto max-w-screen-md faq mt-8">
      <h1 class="font-marianne font-black text-3xl">
       Territoires référents & groupes de travail
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
          <p class="mb-4">
            Vous pouvez consulter les dates et horaires de l'ensemble de nos webinaires<g-link to="https://app.livestorm.co/incubateur-des-territoires/le-rdv-des-territoires-avec-lincubateur?type=detailed">via ce lien</g-link>
          </p>
         </div>
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
