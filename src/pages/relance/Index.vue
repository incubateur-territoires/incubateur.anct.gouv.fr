<template>
  <Layout>
    <div>
      <PageTitle />
      
      <div class="px-4">
        <PageContent v-html="$page.pageContent.content" />
      </div>

      <div class="mx-auto max-w-screen-md calendrier">
        <div class="phase selected">
          <div class="titre">Phase 1 : recueil des besoins et des solutions</div>
          <div class="dates">fin janvier / mi-mars 2021</div>
          <div class="content" v-if="phase === 1">
            <p class="mt-4">
              Pour en savoir plus : participez au webinaire <g-link>"Co-développer des services numériques publics à fort impact ?"</g-link>
            </p>
            
            <div class="block">
              <h2>Vous êtes une <span class="font-black">collectivité territoriale</span> ou un <span class="font-black">groupement de collectivités</span> ?</h2>
              <p>
                Partagez vos besoins en création ou utilisation de services numériques pour qu'elle puisse être accompagnée et financée
              </p>
              <g-link class="button">
                Partager des besoins
              </g-link>
            </div>

            <div class="block">
              <h2>Vous êtes une <span class="font-black">collectivité</span> ou un <span class="font-black">groupement avec un ou des territoires en zones rurales et montagnes, quartiers prioritaires de la politique de la ville</span>, ou une <g-link class="font-black">“Petite Ville de Demain”</g-link> et vous avez besoin d’un accompagnement pour identifier vos besoins ?</h2>
              <p>
                Candidatez pour participer à un programme national d'investigations. Ce programme finance l'accompagnement de collectivités territoriales et de leur groupement pour investiguer des problématiques, concevoir et tester des premières solutions 
              </p>
              <g-link class="button">
                Candidater au programme national d’investigations
              </g-link>
            </div>

            <div class="block">
              <h2>Vous êtes une collectivité territoriale, un groupement ou un partenaire des collectivités ?</h2>
              <p>
                Partagez des services numériques qui pourraient être accompagnés pour être développés en libre et passer à l'échelle du plus grand nombre de collectivités intéressées.  
              </p>
              <g-link class="button">
                Partager des solutions
              </g-link>
            </div>
          </div>
        </div>

        <div class="phase">
          <div class="titre">Phase 2 : vote pour les propositions</div>
          <div class="dates">mi-mars / mi-avril 2021</div>
          <div class="content">
            <p>
              En amont de cette phase et à l’issue de la précédente, l’équipe de l’Incubateur des Territoires fusionne des propositions similaires et dans la mesure du possible réalise le chiffrage du coût de développement des solutions numériques en réponse aux besoins les plus prégnants. 
            </p>
            
            <h2>Vous êtes une collectivité ou un groupement de collectivités ?</h2>

            <ul>
              <li>
                Votez pour les besoins que vous estimez les plus partagés afin que des solutions soient développées en priorité.<br>
                <g-link class="button">
                  Votez pour des besoins prioritaires
                </g-link>
              </li>
              <li>
                Votez pour des solutions proposées afin que leur développement en libre et/ou leur déploiement soit financé au sein de votre territoire.
                <g-link class="button">
                  Votez pour des solutions prioritaires
                </g-link>
              </li>
            </ul>
          
          </div>
        </div>

        <div class="phase">
          <div class="titre">Phase 3 : expression d’intérêt à devenir “territoire référent” pour les solutions retenues et conventionnement avec d’autres parties prenantes</div>
          <div class="dates">mi-avril / fin mai 2021</div>
          <div class="content">
            <h2>Vous êtes une collectivité ou un groupement de collectivités ?</h2>
            <p>Exprimez votre intérêt pour être associé comme “territoire référent” au développement d’une solution parmi celles les plus plébiscitées. A ce titre, vous serez consulté lors de la phase de conception et vous bénéficierez en premier du déploiement du service.</p>
            <g-link class="button">Télécharger la note d’engagement</g-link>

            <h2>Vous êtes une collectivité territoriale, un groupement ou un partenaire des collectivités dont la solution existante a été retenue pour être développée et passée à l’échelle ?</h2>
            <g-link class="button">Télécharger la convention</g-link>
          </div>
        </div>

        <div class="phase">
          <div class="titre">Phase 4 : lancement des projets lauréats</div>
          <div class="dates">à partir de fin mai 2021</div>
          <div class="content">
            <p>Les solutions sont développées en lien avec les territoires référents. Les territoires référents sont consultés lors de la conception des solutions et bénéficient en priorité du déploiement du service.</p>
            <p>Retrouvez <g-link>ici</g-link> l’ensemble des axes du plan de relance dédiés à la transformation numérique des collectivités territoriales</p>
          </div>
        </div>
      </div>

      <!-- <div class="px-4">
        <PageContent v-html="$page.faq.content" />
      </div> -->

      <!-- <div class="mx-auto max-w-screen-lg p-8 rounded-xl my-16 bg-gray-100">
        <h2 class="text-center font-marianne font-bold text-4xl mb-8">
          Participer avec ma collectivité
        </h2>

        <div class="flex space-x-14">
          <div class="">
            <g-image
              src="~/assets/images/loudspeaker.png"
              alt="loud speaker"
            />
            <h1 class="block text-2xl leading-tight mb-4">
              Enquête nationale des besoins numériques
            </h1>
            <p class="mb-6">
              Dites-nous quels sont les problèmes et besoins de votre collectivité pour passer le cap de la transformation digitale
            </p>
            <g-link to="/relance/besoins" class="button">
              Répondre
            </g-link>
          </div>
          
          <div class="">
            <g-image
              src="~/assets/images/launch.png"
              alt="rocket launch"
            />
            <h1 class="block text-2xl leading-tight mb-4">
              Accélerer un produit numérique existant
            </h1>
            <p class="mb-6">
              Votre collectivité utilise un outil numérique quit mériterait un soutient financier de la part de l'état ?
            </p>
            <g-link to="/relance/solutions" class="button">
              Déposer un dossier
            </g-link>
          </div>
        </div>
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
  faq: pageContent(id: "relance-faq") {
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

p {
  a {
    @apply text-blue underline;
  }
}

h2 {
  @apply font-marianne font-semibold mt-4 mb-2 text-2xl leading-snug text-gray-900;

  a {
    @apply text-blue underline;
  }
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
    @apply my-8 py-4 px-4 rounded-lg bg-gray-100;
  }

  .titre {
    @apply text-3xl font-semibold font-marianne text-navy;
  }

  .dates {
    @apply text-gray-600;
  }

  .callout {

  }
}
</style>
