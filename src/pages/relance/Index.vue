<template>
  <Layout>
    <div>
      <PageTitle>Transformation numérique des collectivités territoriales</PageTitle>

      <div class="px-4">
        <PageContent v-html="$page.pageContent.content" />
      </div>

      </div>
        <div class="mx-auto max-w-screen-md">
          <g-link class="button mt-8" to="https://mon.incubateur.anct.gouv.fr/processes/transformation-numerique">
            Découvrez la consulation →
          </g-link>
        </div>

        <!-- <ul class="mx-auto max-w-screen-md my-8 text-lg">          
          <li>
            <g-link to="https://mon.incubateur.anct.gouv.fr/processes/transformation-numerique/f/3/">Pour partager mes besoins</g-link> en création ou utilisation de services numériques pour qu'elle puisse être accompagnée et financée
          </li>
          <li>
            <g-link to="https://mon.incubateur.anct.gouv.fr/processes/transformation-numerique/f/2/">Pour partager des services numériques</g-link> existants et nécessitant un financement 
          </li>
        </ul> -->
      </div>

      <div class="px-4">
        <div class="mx-auto max-w-screen-md calendrier">
          <h1 class="font-marianne font-black text-3xl">
            Calendrier
          </h1>

          <div class="phase">
            <div
              class="rounded-lg hover:bg-gray-100 cursor-pointer pt-2 pb-2 pr-2 -m-2 flex"
              @click="showEtape1 = !showEtape1"
            >
              <div class="text-gray-500 mt-1 mr-2">
                <svg :class="{ 'transform rotate-90' : showEtape1 }" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M9 5l7 7-7 7"></path></svg>
              </div>
              <div>
                <div class="titre line-through">Étape 1 : Recueil des besoins et des services existants</div>
                <div class="dates">le 25 janvier au 15 mars 2021</div>
              </div>
            </div>
            <div
              class="content"
              v-if="showEtape1"
            >
              <ul class="mb-8 mt-4">
                <li><g-link to="https://mon.incubateur.anct.gouv.fr/processes/transformation-numerique/f/5/">Partagez vos besoins</g-link> en création ou utilisation de services numériques pour qu'elle puisse être accompagnée et financée</li>
                <li>
                  <g-link to="https://mon.incubateur.anct.gouv.fr/processes/transformation-numerique/f/2/">Partagez des services numériques</g-link> qui ont déjà fait leurs preuves pour accompagner et financer leur développement en code ouvert et leur passage à l’échelle du plus grand nombre de collectivités intéressées.
                </li>
                <div class="my-4 p-2 bg-gray-100 flex items-center">
                  <!-- <svg class="w-6 h-6 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> -->
                  <div class="ml-2 italic">
                    Fin mars, l’équipe de l’Incubateur des Territoires fusionne les propositions de besoins similaires et regroupe l'ensemble des propositions dans une liste de projets de services numériques.
                  </div>
                </div>
              </ul>
            </div>
          </div>

          <div class="phase">
            <div
              class="rounded-lg hover:bg-gray-100 cursor-pointer pt-2 pb-2 pr-2 -m-2 flex"
              @click="showEtape2 = !showEtape2"
            >
              <div class="text-gray-500 mt-1 mr-2">
                <svg :class="{ 'transform rotate-90' : showEtape2 }" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M9 5l7 7-7 7"></path></svg>
              </div>
              <div>
                <div class="titre">Étape 2 : Soutien aux projets par les collectivités territoriales</div>
                <div class="dates">du 1er avril au 1er mai 2021</div>
              </div>
            </div>
            <div
              class="content"
              v-if="showEtape2"
            >
              <div class="my-4">
                Les collectivités territoriales et leurs groupements sont invités à manifester leur soutien aux projets qu'ils jugent prioritaires.
              </div>
              <ul class="mb-8 mt-4">
                <li><g-link to="https://mon.incubateur.anct.gouv.fr/processes/transformation-numerique">Manifestez votre soutien sur les propositions qui vous semblent prioritaires</g-link></li>
              </ul>

              <!-- <p class="my-4 px-4 py-2 bg-gray-100 border-l-4 border-navy text-sm"><span class="font-bold">Du 15 mars à début avril</span> : l’équipe de  l’Incubateur des Territoires fusionne les propositions similaires et regroupe l'ensemble des propositions selon des axes thématiques.</p> -->
              <p class="my-4 px-4 py-2 bg-gray-100 border-l-4 border-navy text-sm"><span class="font-bold">Début mai</span> : un comité de pilotage se réunit pour sélectionner les services numériques à financer et ou à développer. Ce comité prendra spécifiquement en compte le nombre de collectivités qui ont exprimé leur intérêt concernant des besoins ou un service. Ce comité est composé des associations de collectivités territoriales, des élus ainsi que des représentants de la DINUM, DITP et ANCT.</p>
            </div>
          </div>

          <div class="phase">
            <div
              class="rounded-lg hover:bg-gray-100 cursor-pointer pt-2 pb-2 pr-2 -m-2 flex"
              @click="showEtape3 = !showEtape3"
            >
              <div class="text-gray-500 mt-1 mr-2">
                <svg :class="{ 'transform rotate-90' : showEtape3 }" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M9 5l7 7-7 7"></path></svg>
              </div>
              <div>
                <div class="titre">Étape 3 : Lancement des groupes de travail</div>
                <div class="dates">début mai au 30 juin 2021</div>
              </div>
            </div>
            <div 
              class="content"
              v-if="showEtape3"
            >
              <div class="my-4">
                Les collectivités manifestent leur intérêt pour participer à la co-construction des services numériques et bénéficier en premier de leur déploiement. Les territoires référents intègrent des groupes de travail coordonnés par l'Incubateur des Territoires. Les groupes de travail, accompagnés par des experts en conception de services, se réuniront au cours de cette étape pour participer à la construction des feuilles de route et des budgets des services numériques.
              </div>
              <!-- <p class="my-4 px-4 py-2 bg-gray-100 border-l-4 border-navy text-sm"><span class="font-bold">Jusqu’au 5 mai 2021</span> : suite au premier comité de sélection, les collectivités territoriales et leurs groupements pourront manifester leur intérêt à devenir « territoire référent », c'est à dire à participer à la construction des services retenus et à bénéficier en premier de leur déploiement.</p> -->
              <ul class="mb-8 mt-4">
                <li><g-link class="disabled">Devenir territoire référent</g-link></li> 
              </ul>
              <!-- <p class="my-4 px-4 py-2 bg-gray-100 border-l-4 border-navy text-sm"><span class="font-bold">15 juin 2021</span> : le comité de sélection se réunira de nouveau pour valider les feuilles de route ainsi que le budget attribué à chaque projet lauréat.</p> -->
            </div>
          </div>

          <div class="phase">
            <div
              class="rounded-lg hover:bg-gray-100 cursor-pointer pt-2 pb-2 pr-2 -m-2 flex"
              @click="showEtape4 = !showEtape4"
            >
              <div class="text-gray-500 mt-1 mr-2">
                <svg :class="{ 'transform rotate-90' : showEtape4 }" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M9 5l7 7-7 7"></path></svg>
              </div>
              <div>
                <div class="titre">
                  Étape 4 : Sélection des services numériques lauréats
                </div>
                <div class="dates">à partir de mi-juillet 2021</div>
              </div>
            </div>
            <div
              class="content"
              v-if="showEtape4"
            >
              <p class="my-4 px-4 py-2 bg-gray-100 border-l-4 border-navy text-sm"><span class="font-bold">5 juillet</span> : le comité de pilotage se réunit à nouveau pour valider les feuilles de route et les budgets afférents à chaque service numérique dans le cadre du plan de relance.</p>
              <ul class="mb-8 mt-4">
                <li><g-link class="disabled">Découvrir la liste des services numériques en cours de développement et leurs territoires référents.</g-link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="max-w-screen-md mx-auto mt-12 p-4 bg-gray-100 rounded-lg">
        <div class="leading-tight mb-2">Vous êtes en <span class="font-bold">zone rurale</span>, de <span class="font-bold">montagne</span>, <span class="font-bold">en quartier prioritaire de la politique de la ville</span>, en coeur de ville ou une <span class="font-bold">“Petite Ville de Demain”</span> ?</div>
        <p><g-link to="/relance/investigations/">Découvrez le programme national d’investigations</g-link>. Ce programme finance un accompagnement spécifique pour ces collectivités ou groupements afin d’identifier leurs besoins via l’investigation de problématiques, la conception et le test de premières solutions.</p>
      </div>

      <!-- <div class="px-4 my-8">
        <p class="mx-auto max-w-screen-md my-4 px-4 py-2 bg-gray-100 border-l-4 border-navy text-lg">
          Pour en savoir plus sur les opportunités de financement et d’accompagnement proposées par l’Incubateur des Territoires : <g-link to="https://app.livestorm.co/incubateur-des-territoires/le-rdv-des-territoires-avec-lincubateur">participez au RDV des Territoires [ Plan de Relance ]</g-link>
        </p>
      </div> -->
    </div>
  </Layout>
</template>

<page-query>
query page {
  pageContent(id: "relance") {
    title
    content
  }
}
</page-query>

<script>
import PageContent from '~/components/PageContent.vue'
import PageTitle from '~/components/relance/PageTitle.vue'

export default {
  metaInfo() {
    return {
      title: `France Relance: Transformation numérique des collectivités territoriales`,
      meta: [
        // Twitter
        {key:'twitter:title', property: 'twitter:title', content: `France Relance : Tranformation numérique des collectivitiés territoriales`},
        {key:'twitter:description', property: 'twitter:description', content: `l’État consacre une enveloppe de 30 millions d’euros pour aider les collectivités territoriales à résoudre les principaux problèmes qu’elles rencontrent en matière d’outillage numérique.`},
        {key:'twitter:image', property: 'twitter:image', content: `https://incubateur.anct.gouv.fr/og-france-relance.png`},
        // OpenGraph
        {key:'og:title', property: 'og:title', content: `France Relance : Tranformation numérique des collectivitiés territoriales`},
        {key:'og:site_name', property: 'og:site_name', content: `Incubateur des Territoires`},
        {key:'og:description', property: 'og:description', content: `l’État consacre une enveloppe de 30 millions d’euros pour aider les collectivités territoriales à résoudre les principaux problèmes qu’elles rencontrent en matière d’outillage numérique.`},
        {key:'og:image', property: 'og:image', content: `https://incubateur.anct.gouv.fr/og-france-relance.png`},
      ]
    }
  },
  components: {
    PageContent,
    PageTitle
  },
  data() {
    return {
      showEtape1: false,
      showEtape2: false,
      showEtape3: false,
      showEtape4: false
    }
  }
}
</script>

<style lang="scss" scoped>

li {
  @apply ml-4 list-disc;

  &.second {
    @apply ml-6 mt-1 list-none bg-gray-100 p-3;
  }
}

p, h2, ul {
  a {
    @apply text-green-relance border-b-2 border-green-relance;

    &.disabled {
      @apply text-gray-400 border-gray-400 cursor-not-allowed;
    }
    &.disabled::after {
      content: " [À VENIR]"
    }
  }
}

h2 {
  @apply mt-4 mb-2 text-xl leading-snug text-gray-900;
}

.button {
  @apply inline-block px-4 py-2 border-2 border-green bg-white text-green font-bold rounded-full text-center transition ease-linear duration-100;

  &:hover {
    @apply bg-green text-white;
  }
}

.calendrier {
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
}
</style>
