<template>
  <Layout>
    <div>
      <PageTitle />
      
      <div class="px-4 py-2 bg-gray-100 mx-auto max-w-screen-md text-lg rounded-lg">
        Vous êtes une <span class="font-bold">collectivité territoriale</span> ou un <span class="font-bold">groupement de collectivités</span> ? : construisons ensemble des solutions numériques qui répondent à vos besoins
      </div>

      <div class="px-4">
        <PageContent v-html="$page.pageContent.content" />
      </div>

      <div class="mx-auto max-w-screen-md calendrier">
        <h1 class="font-marianne font-black text-3xl">
          Calendrier
        </h1>

        <div class="phase">
          <div class="titre">1. Recueil des besoins et des solutions</div>
          <div class="dates">fin janvier / mi-mars 2021</div>
          <div class="content" v-if="phase === 1">
            <p class="my-4 px-4 py-2 bg-gray-100 border-l-4 border-navy text-sm">
              Pour en savoir plus : participez au <g-link to="https://app.livestorm.co/incubateur-des-territoires/le-rdv-des-territoires-avec-lincubateur">RDV des Territoires</g-link>
            </p>

            <ul class="mb-8">
              <li><g-link>Partagez vos besoins</g-link> en création ou utilisation de services numériques pour qu'elle puisse être accompagnée et financée</li>
              <div class="my-4 p-4 bg-gray-100">
                <div class="leading-tight mb-2">Vous êtes en <span class="font-bold">zones rurales</span> et <span class="font-bold">montagnes</span>, <span class="font-bold">quartiers prioritaires de la politique de la ville</span>, ou une <span class="font-bold">“Petite Ville de Demain”</span> ?</div>
                <p><g-link>Candidatez pour participer à un programme national d'investigations</g-link>. Ce programme finance l'accompagnement de collectivités territoriales et de leur groupement pour investiguer des problématiques, concevoir et tester des premières solutions</p>
              </div>
              
              <li>
                <g-link>Partagez des services numériques</g-link> qui pourraient être accompagnés pour être développés en libre et passer à l'échelle du plus grand nombre de collectivités intéressées.
              </li>
              <div class="my-4 p-2 bg-gray-100 flex items-center">
                <!-- <svg class="w-6 h-6 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> -->
                <div class="ml-2">
                  Vous êtes un <span class="font-bold">partenaire des collectivités</span> ? 
                  <p class="mt-2">Nous vous invitons également à <g-link>partager vos services numériques existantes</g-link> pour les collectivés.</p>
                </div>
              </div>
            </ul>
          </div>
        </div>

        <div class="phase">
          <div class="titre">2. Vote pour les propositions</div>
          <div class="dates">mi-mars / mi-avril 2021</div>
          <div class="content">
            <p class="my-4 px-4 py-2 bg-gray-100 border-l-4 border-navy text-sm">
              En amont de cette phase et à l’issue de la précédente, l’équipe de l’Incubateur des Territoires fusionne des propositions similaires et dans la mesure du possible réalise le chiffrage du coût de développement des solutions numériques en réponse aux besoins les plus prégnants. 
            </p>

            <ul>
              <li>
                <g-link>Votez pour les besoins proposées</g-link> que vous estimez les plus partagés afin que des solutions soient développées en priorité.<br>
              </li>
              <li>
                <g-link>Votez pour des solutions proposées</g-link> afin que leur développement en libre et/ou leur déploiement soit financé au sein de votre territoire.
              </li>
            </ul>
          </div>
        </div>

        <div class="phase">
          <div class="titre">3. Expression d’intérêt à devenir “territoire référent” pour les solutions retenues et conventionnement avec d’autres parties prenantes</div>
          <div class="dates">mi-avril / fin mai 2021</div>
          <div class="content">
            <p class="my-4 px-4 py-2 bg-gray-100 border-l-4 border-navy text-sm">Exprimez votre intérêt pour être associé comme “territoire référent” au développement d’une solution parmi celles les plus plébiscitées. A ce titre, vous serez consulté lors de la phase de conception et vous bénéficierez en premier du déploiement du service.</p>
            <ul>
              <li><g-link>Télécharger la note d’engagement</g-link> pour devenir un territoire référent.</li> 
              <li>Votre solution existante a été retenue pour être développée et passée à l’échelle ? <g-link>Télécharger la convention</g-link></li>
            </ul>  
          </div>
        </div>

        <div class="phase">
          <div class="titre">4. Lancement des projets lauréats</div>
          <div class="dates">à partir de fin mai 2021</div>
          <div class="content">
            <p class="my-4 px-4 py-2 bg-gray-100 border-l-4 border-navy text-sm">Les solutions sont développées en lien avec les territoires référents. Les territoires référents sont consultés lors de la conception des solutions et bénéficient en priorité du déploiement du service.</p>
            <ul>
              <li><g-link>Retrouvez l’ensemble des axes du plan de relance dédiés à la transformation numérique des collectivités territoriales</g-link></li>
            </ul>
          </div>
        </div>
      </div>
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
        {key:'twitter:title', property: 'twitter:title', content: `Tranformation numérique des collectivitiés territoriales`},
        {key:'twitter:description', property: 'twitter:description', content: `France Relance`},
        {key:'twitter:image', property: 'twitter:image', content: `https://incubateur.anct.gouv.fr/og-france-relance.png`},
        // OpenGraph
        {key:'og:title', property: 'og:title', content: `Tranformation numérique des collectivitiés territoriales`},
        {key:'og:site_name', property: 'og:site_name', content: `Incubateur des Territoires`},
        {key:'og:description', property: 'og:description', content: `France Relance`},
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
      phase: 1
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
  }
}

h2 {
  @apply mt-4 mb-2 text-xl leading-snug text-gray-900;
}

.button {
  @apply inline-block px-3 py-1 mt-4 border-2 border-green-relance bg-green-relance text-white font-semibold rounded-full text-center transition ease-linear duration-100;

  &:hover {
    @apply text-green-relance bg-white;
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

  .callout {

  }
}
</style>
