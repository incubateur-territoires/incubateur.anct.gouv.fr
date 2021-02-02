<template>
  <Layout>
    <div>
      <PageTitle>Programme national d'investigations</PageTitle>

      <div class="mb-4 mx-auto max-w-screen-md text-2xl font-marianne">
        Vous êtes en <span class="font-bold">zone rurale</span>, de <span class="font-bold">montagne</span>, <span class="font-bold">en quartier prioritaire de la politique de la ville</span>, en coeur de ville ou une <span class="font-bold">“Petite Ville de Demain”</span> ?
      </div>
      
      <div class="mx-auto max-w-screen-md">
        <PageContent v-html="$page.pageContent.content" />
      </div>

      <div class="mx-auto max-w-screen-md">  
        <p class="my-4 px-4 py-2 bg-gray-100 border-l-4 border-navy text-sm">
          Les collectivités et leurs groupements intéressés par ce programme peuvent candidater d’ici le <strong>15 mars 2021</strong>.  L’équipe de l’Incubateur des Territoires est disponible pour échanger avec vous à ce sujet.
        </p>

        <g-link class="button my-4" to="https://airtable.com/shrLx1W28BkkjE9xf">
          Etre recontacté au sujet du programme national d’investigations →
        </g-link>
      </div>
    </div>

    <div class="mx-auto max-w-screen-md faq mt-8">
      <h1 class="font-marianne font-black text-3xl">
        Qu’est-ce que le programme national d’investigations ?
      </h1>

      <p class="my-4">
        À travers le programme national d'investigations, l’Incubateur des Territoires propose aux collectivités territoriales et à leurs groupements (syndicats mixtes, associations de collectivités, etc.) d'explorer des problématiques de politique publique qu’elles rencontrent au quotidien. Il s’agit ensuite de concevoir des premières solutions et de tester l'appétence des utilisateurs cibles pour celles-ci, qu'il s'agisse d'habitants, d'entreprises, d'associations ou d'agents publics. 
      </p>

      <div class="phase">
        <div
          class="rounded-lg hover:bg-gray-100 cursor-pointer pt-2 pb-2 pr-2 -m-2 flex"
          @click="faq1 = !faq1"
        >
          <div class="text-gray-500 mt-1 mr-2">
            <svg :class="{ 'transform rotate-90' : faq1 }" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M9 5l7 7-7 7"></path></svg>
          </div>
          <div>
            <div class="titre">
              Pourquoi lancer un programme d’investigations dans ma collectivité ? 
            </div>
          </div>
        </div>
        <div
          class="content"
          v-if="faq1"
        >
          <ul>
            <li><strong>Pour résoudre une problématique</strong> rencontrée au sein de ma collectivité grâce à des solutions conçues à partir des besoins des utilisateurs et enrichir mon offre de services publics ;</li>
            <li><strong>Pour former mon administration</strong> aux méthodes et outils du numérique, du design et de l’entrepreneuriat (mesure d’impact, prototypage, itération, etc.) ;</li>
            <li><strong>Pour bénéficier des retours d’expérience</strong> d’autres collectivités ou groupements de collectivités qui me ressemblent ;</li>
            <li><strong>Pour explorer, avec une autre collectivité</strong> ou un autre groupement de collectivités, une problématique identique et des solutions communes ;</li>
          </ul>
        </div>
      </div>

      <div class="phase">
        <div
          class="rounded-lg hover:bg-gray-100 cursor-pointer pt-2 pb-2 pr-2 -m-2 flex"
          @click="faq2 = !faq2"
        >
          <div class="text-gray-500 mt-1 mr-2">
            <svg :class="{ 'transform rotate-90' : faq2 }" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M9 5l7 7-7 7"></path></svg>
          </div>
          <div>
            <div class="titre">
              Quelle est la méthode proposée pour ce programme d’investigation ? 
            </div>
          </div>
        </div>
        <div
          class="content etapes"
          v-if="faq2"
        >
          <h2>Étape 1 : Préparation</h2>
          <h3>1 mois</h3>
          <ul>
            <li><strong>Ma Direction Générale des Services lance un Appel à candidatures</strong> auprès des agents de la collectivité territoriale pour participer au programme ;</li>
            <li><strong>Le référent de ma collectivité et le référent de l’Incubateur des Territoires présentent le programme</strong> ;</li>
            <li><strong>Ma collectivité identifie des agents volontaires et disponibles</strong> (à raison de deux jours par semaine pendant trois mois) pour monter en compétence en matière de conception de service public et de transformation numérique ; </li>
            <li><strong>Les agents volontaires, au contact des usagers, identifient les problématiques</strong> récurrentes rencontrées au sein de ma collectivité.</li>
          </ul>

          <h2>Étape 2 : Sélection des investigations</h2>
          <h3>2 semaines</h3>
          <ul>
            <li><strong>Ma collectivité sélectionne des problématiques prioritaires</strong> avec l’aide de l’Incubateur des Territoires ;</li>
            <li><strong>Ma collectivité constitue des équipes d’investigation</strong> composées d’un ou plusieurs agents publics pour chaque problématique prioritaire. Si pertinent, des “équipes intercollectivités” sont créées sur proposition de l’Incubateur des Territoires aux collectivités qui souhaitent investiguer une problématique identique. A défaut, des équipes pourront être exclusivement composées des agents de mon administration;</li>
          </ul>

          <h2>Étape 3 : Lancement des investigations</h2>
          <h3>1 journée</h3>
          <ul>
            <li><strong>Le référent de ma collectivité lance, avec le référent de l’incubateur des Territoires, le programme lors d’une journée de formation</strong> des agents mobilisés au sein de mon administration - un, deux ou trois par problématiques étudiées. Cette journée pourra être mutualisée avec le lancement du programme dans d’autres collectivités.</li>
          </ul>

          <h2>Étape 4 : Investigations en cours</h2>
          <h3>3 mois</h3>
          <ul>
            <li><strong>Un coach en entrepreneuriat numérique et un designer</strong> de l’Incubateur des Territoires accompagnent les agents de ma collectivité pour concevoir et tester une solution numérique ou non ;</li>
            <li><strong>Le référent de ma collectivité participe aux deux points d’étapes clés avec les autres collectivités</strong> ou groupements de collectivités pour partager des idées, expériences et réseaux respectifs ;</li>
            <li><strong>Les équipes d’investigation mènent des entretiens</strong> avec les parties prenantes (méthodologie issue du design) et identifient des problèmes concrets face auxquels il est possible de développer des solutions ;</li>
            <li><strong>Les équipes accompagnées par le coach et le designer conçoivent et établissent les prototypes</strong> des premières solutions pour chacune des problématiques traitées ;</li>
            <li><strong>Les équipes testent et améliorent les prototypes</strong>, puis valident ou non l’appétence des usagers pour le service.</li>
          </ul>

          <h2>Étape 5 : Comité de décision suite aux investigations</h2>
          <h3>2 heures</h3>
          <ul>
            <li><strong>Les équipes d’investigation documentent</strong> les différents enseignements tirées des investigations ;</li>
            <li><strong>Le référent de ma collectivité organise un comité</strong> pour que les équipes partagent les enseignements issus des investigations à la Direction Générale des Services et aux représentants de l’Incubateur des Territoires. Le <strong>comité décide en fonction des résultats</strong> de l'investigation : l’arrêt du projet, le développement de solutions en autonomie ou avec d’autres collectivités, le lancement d’un service public numérique avec l’Incubateur des Territoires.</li>
          </ul>
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
              Que finance l’incubateur des territoires ? 
            </div>
          </div>
        </div>
        <div
          class="content"
          v-if="faq3"
        >
          <p class="mb-4">L’accompagnement financé par l’Incubateur des Territoires comprend : </p>
          <ul>
            <li><strong>Un référent</strong> disponible pour la collectivité qui travaille en lien avec le référent de la collectivité ou du groupement de collectivités pour déployer le programme d’investigation en son sein ;</li>
            <li><strong>Un coach en entrepreneuriat numérique</strong> pour former aux méthodes et outils de l’investigation de chaque équipe à raison de dix jours par équipe, auquel s’ajoute du temps de préparation et de participation aux points collectifs clés ;</li>
            <li><strong>Un designer</strong>, notamment pour donner forme aux idées des agents mobilisés, à raison de six jours par équipe, auquel s’ajoute du temps de préparation et de participation à des points collectifs clés. ;</li>
          </ul>
        </div>
      </div>

      <div class="phase">
        <div
          class="rounded-lg hover:bg-gray-100 cursor-pointer pt-2 pb-2 pr-2 -m-2 flex"
          @click="faq4 = !faq4"
        >
          <div class="text-gray-500 mt-1 mr-2">
            <svg :class="{ 'transform rotate-90' : faq4 }" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M9 5l7 7-7 7"></path></svg>
          </div>
          <div>
            <div class="titre">
              En tant que collectivité ou groupement de collectivité, quels sont mes engagements ?  
            </div>
          </div>
        </div>
        <div
          class="content"
          v-if="faq4"
        >
          <p class="mb-4">Ma collectivité ou mon groupement de collectivités s’engage à :</p>
          <ul>
            <li><strong>Nommer un référent opérationnel</strong> pour organiser et déployer le programme avec l’Incubateur des Territoires;</li>
            <li><strong>Garantir que les agents mobilisés puissent s’investir dans leur investigation</strong> deux jours par semaine pendant trois mois (ce temps peut être partagé entre plusieurs agents) ;</li>
            <li><strong>Garantir que les agents mobilisés aient toute la latitude et l’autonomie pour identifier une problématique principale et concevoir une première solution</strong> en fonction des enseignements qu’ils tirent de leur investigation au contact des usagers ;</li>
            <li><strong>Garantir que les agents mobilisés aient toute la latitude et l’autonomie pour déployer des prototypes</strong> à petite échelle et mesurer l’appétence des publics cibles pour ces solutions ;</li>
            <li><strong>Autoriser et prendre en charge le déplacement de ses équipes</strong> à l’occasion d’au moins un rassemblement avec d’autres collectivités ou groupements de collectivités ;</li>
            <li><strong>Accueillir chacune des équipes lors d’un comité final</strong> pour qu’elles partagent leurs enseignements à la Direction Générale des Services et à l’Incubateur des Territoires ;</li>
            <li><strong>Autoriser la documentation par les équipes et la diffusion des enseignements</strong> notamment sur le site de l’Incubateur des Territoires.</li>
          </ul>
        </div>
      </div>

      <g-link class="button retourner mt-8" to="/relance/">
        ← Découvrir d'autres actions de l'Incubateur en lien avec le plan de relance
      </g-link>
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
