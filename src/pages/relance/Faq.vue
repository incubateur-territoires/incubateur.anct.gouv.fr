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
          @click="faq1 = !faq1"
        >
          <div class="text-gray-500 mt-1 mr-2">
            <svg :class="{ 'transform rotate-90' : faq1 }" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M9 5l7 7-7 7"></path></svg>
          </div>
          <div>
            <div class="titre">
              Quand est le prochain webinaire ?
            </div>
          </div>
        </div>
        <div
          class="content"
          v-if="faq1"
        >
          <p class="mb-4">
            Vous pouvez consulter les dates et horaires de l'ensemble de nos webinaires : <g-link to="https://app.livestorm.co/incubateur-des-territoires/le-rdv-des-territoires-avec-lincubateur?type=detailed"> ici.</g-link>
          </p>
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
              Où peut-on retrouver le support de présentation de ces webinaires ?
            </div>
          </div>
        </div>
        <div
          class="content"
          v-if="faq2"
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
            Oui, vous pouvez retrouver nos webinaires en replay : <g-link to="https://youtu.be/88TTkrL0g2g"> ici.</g-link>
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
          @click="faq4 = !faq4"
        >
          <div class="text-gray-500 mt-1 mr-2">
            <svg :class="{ 'transform rotate-90' : faq4 }" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M9 5l7 7-7 7"></path></svg>
          </div>
          <div>
            <div class="titre">
              Faut-il obligatoirement se créer un compte sur la plateforme pour soutenir ?
            </div>
          </div>
        </div>
        <div
          class="content"
          v-if="faq4"
        >
          <p class="mb-4">Oui, pour soutenir une proposition parmi les 67, il faut se créer un compte sur : <g-link to="https://mon.incubateur.anct.gouv.fr"> la plateforme de consultation.</g-link></p>
         </div>
      </div>

      <div class="phase">
        <div
          class="rounded-lg hover:bg-gray-100 cursor-pointer pt-2 pb-2 pr-2 -m-2 flex"
          @click="faq5 = !faq5"
        >
          <div class="text-gray-500 mt-1 mr-2">
            <svg :class="{ 'transform rotate-90' : faq5 }" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M9 5l7 7-7 7"></path></svg>
          </div>
          <div>
            <div class="titre">
              Les soutiens des collectivités sont tous au même niveau quelle que soit la taille de la collectivité ? (commune/métropole ou département/région ? = 1 vote)
            </div>
          </div>
        </div>
        <div
          class="content"
          v-if="faq5"
        >
          <p class="mb-4">Les soutiens des collectivités sont tous au même niveau quelle que soit la taille des collectivités. Par ailleurs, si techniquement l'ensemble des acteurs peuvent soutenir sur la plateforme les propositions qui les intéressent, l'équipe de l'Incubateur des Territoires ne comptabilisera qu'un unique soutien par collectivité par nouvelle proposition. Le nombre de propositions qu'il est possible de soutenir par collectivité n'est pas limité. </p>
         </div>
      </div>

      <div class="phase">
        <div
          class="rounded-lg hover:bg-gray-100 cursor-pointer pt-2 pb-2 pr-2 -m-2 flex"
          @click="faq6 = !faq6"
        >
          <div class="text-gray-500 mt-1 mr-2">
            <svg :class="{ 'transform rotate-90' : faq6 }" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M9 5l7 7-7 7"></path></svg>
          </div>
          <div>
            <div class="titre">
              Comment fonctionne la phase des soutiens ?
            </div>
          </div>
        </div>
        <div
          class="content"
          v-if="faq6"
        >
          <p class="mb-4">La consultation a permis de collecter, entre le 25 janvier et le 15 mars, 476 propositions : </p>
            <p class="mb-4"><ul>
                <li> de besoins et de services existants ;</li>
                <li> partagées par des acteurs des territoires, des élus, agents et partenaires des collectivités territoriales.</li>
             </ul></p>
          <p class="mb-4"> Parmi ces propositions : 81 ont été réorientées, 4 rejetées car inéligibles et 391 ont été regroupées au sein de 67 nouvelles propositions.</p>
          <p class="mb-4"> Du 1er avril au 1er mai, les collectivités territoriales peuvent manifester leur soutien aux nouvelles propositions qu’elles jugent prioritaires pour les territoires.</p>
          <p class="mb-4"> L'objectif est de soutenir des propositions parmi les 67 regroupements et non pas de soutenir directement un service numérique initialement déposé sur la plateforme.</p>
         </div>
      </div>

      <div class="phase">
        <div
          class="rounded-lg hover:bg-gray-100 cursor-pointer pt-2 pb-2 pr-2 -m-2 flex"
          @click="faq7 = !faq7"
        >
          <div class="text-gray-500 mt-1 mr-2">
            <svg :class="{ 'transform rotate-90' : faq7 }" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M9 5l7 7-7 7"></path></svg>
          </div>
          <div>
            <div class="titre">
              Qui peut soutenir ?
            </div>
          </div>
        </div>
        <div
          class="content"
          v-if="faq7"
        >
          <p class="mb-4">Peuvent soutenir :
            <ul>
                <li> les agents de collectivités territoriales ;</li>
                <li> les élus représentant des collectivités.</li>
            </ul> </p>
          <p class="mb-4">Ne peuvent pas soutenir :
            <ul>
                <li> une association ;</li>
                <li> une entreprise ; </li>
                <li> un groupement de collectivités.</li>
            </ul></p>
          <p class="mb-4"> Les règles de soutien sont les suivantes :
            <ul>
                <li> 1 seul soutien par collectivité territoriale sera comptabilisé par proposition ;</li>
                <li> chaque participant (agents et élus) peut soutenir des propositions selon ses convictions ; </li>
                <li> les soutiens émanant d'acteurs qui ne sont pas des collectivités seront écartés.</li>
            </ul></p>
         </div>
      </div>

      <div class="phase">
        <div
          class="rounded-lg hover:bg-gray-100 cursor-pointer pt-2 pb-2 pr-2 -m-2 flex"
          @click="faq8 = !faq8"
        >
          <div class="text-gray-500 mt-1 mr-2">
            <svg :class="{ 'transform rotate-90' : faq8 }" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M9 5l7 7-7 7"></path></svg>
          </div>
          <div>
            <div class="titre">
              Quelles actions sont attendues de nous par rapport aux autres projets des regroupements dans lesquels nous sommes ?
            </div>
          </div>
        </div>
        <div
          class="content"
          v-if="faq8"
        >
          <p class="mb-4">Si la proposition dans laquelle vous êtes cités est selectionnée par le comité : des groupes de travail seront organisés pour approfondir les besoins des territoires et des auditions auront lieu avec les porteurs de services pour bien cerner les opportunités existantes. Vous n'avez pas d'actions particulières à mener auprès des autres contributions réunies au sein de cette proposition. </p>
         </div>
      </div>

      <div class="phase">
        <div
          class="rounded-lg hover:bg-gray-100 cursor-pointer pt-2 pb-2 pr-2 -m-2 flex"
          @click="faq9 = !faq9"
        >
          <div class="text-gray-500 mt-1 mr-2">
            <svg :class="{ 'transform rotate-90' : faq9 }" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M9 5l7 7-7 7"></path></svg>
          </div>
          <div>
            <div class="titre">
              Une association ou un groupement de collectivités pourra-t-il soutenir des propositions ?
            </div>
          </div>
        </div>
        <div
          class="content"
          v-if="faq9"
        >
        <p class="mb-4">Non, nous ne comptabiliserons que les soutiens émanant de collectivités territoriales.</p>
         </div>
      </div>

      <div class="phase">
        <div
          class="rounded-lg hover:bg-gray-100 cursor-pointer pt-2 pb-2 pr-2 -m-2 flex"
          @click="faq10 = !faq10"
        >
          <div class="text-gray-500 mt-1 mr-2">
            <svg :class="{ 'transform rotate-90' : faq10 }" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M9 5l7 7-7 7"></path></svg>
          </div>
          <div>
            <div class="titre">
              Comment allez vous "vérifier" qu'un soutien émanen bien d'une collectivité ?
            </div>
          </div>
        </div>
        <div
          class="content"
          v-if="faq10"
        >
        <p class="mb-4">La plateforme de consultation sur laquelle sont collectées les soutiens, nous permet d'extraire ces données et de vérifier les soutiens notamment grâce aux noms de domaine des adresses e-mail utilisées. </p>
         </div>
      </div>

      <div class="phase">
        <div
          class="rounded-lg hover:bg-gray-100 cursor-pointer pt-2 pb-2 pr-2 -m-2 flex"
          @click="faq11 = !faq11"
        >
          <div class="text-gray-500 mt-1 mr-2">
            <svg :class="{ 'transform rotate-90' : faq11 }" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M9 5l7 7-7 7"></path></svg>
          </div>
          <div>
            <div class="titre">
              Les anciens soutiens sur les propositions initiales seront-ils comptabilisés ?
            </div>
          </div>
        </div>
        <div
          class="content"
          v-if="faq11"
        >
        <p class="mb-4">Non, la sélection du comité se faisant à l'échelle des 67 propositions, nous ne comptabiliserons que les soutiens destinés à ces 67 propositions.</p>
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
          @click="faq12 = !faq12"
        >
          <div class="text-gray-500 mt-1 mr-2">
            <svg :class="{ 'transform rotate-90' : faq3 }" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M9 5l7 7-7 7"></path></svg>
          </div>
          <div>
            <div class="titre">
              Soutenir un regroupement implique-t-il une fusion des différents projets ?
            </div>
          </div>
        </div>
        <div
          class="content"
          v-if="faq12"
        >
          <p class="mb-4">
            Non, l'objectif de ces regroupements est de faciliter la prise de décision par le 1er comité de sélection. Le second comité de sélection réalisera une sélection à la maille des contributions initiales.
          </p>
         </div>
      </div>

      <div class="phase">
        <div
          class="rounded-lg hover:bg-gray-100 cursor-pointer pt-2 pb-2 pr-2 -m-2 flex"
          @click="faq13 = !faq13"
        >
          <div class="text-gray-500 mt-1 mr-2">
            <svg :class="{ 'transform rotate-90' : faq3 }" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M9 5l7 7-7 7"></path></svg>
          </div>
          <div>
            <div class="titre">
              Il faut donc comprendre qu'il ne reste maintenant que des projets fusionnés ?
            </div>
          </div>
        </div>
        <div
          class="content"
          v-if="faq13"
        >
          <p class="mb-4">
            Non, l'objectif de ces regroupements est seulement de faciliter la prise de décision par le 1er comité de sélection qui va prioriser des propositions à approfondir tant du côté des besoins que des services. Le second comité de sélection réalisera une sélection à la maille des contributions initiales.
          </p>
         </div>
      </div>

      <div class="phase">
        <div
          class="rounded-lg hover:bg-gray-100 cursor-pointer pt-2 pb-2 pr-2 -m-2 flex"
          @click="faq14 = !faq14"
        >
          <div class="text-gray-500 mt-1 mr-2">
            <svg :class="{ 'transform rotate-90' : faq3 }" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M9 5l7 7-7 7"></path></svg>
          </div>
          <div>
            <div class="titre">
              Comment savoir dans quelle catégorie notre proposition a été orientée ?
            </div>
          </div>
        </div>
        <div
          class="content"
          v-if="faq14"
        >
          <p class="mb-4">Vous pouvez effectuer une recherche sur la barre de recherche du site en utilisant le nom du créateur de la proposition en ligne ou encore le nom de la proposition. </p>
          <p class="mb-4">Vous avez dû par ailleurs recevoir un e-mail vous informant de la proposition intégrant votre contribution. </p>
          <p class="mb-4">De plus, vous trouverez sur la plateforme <g-link to="https://mon.incubateur.anct.gouv.fr"> mon.incubateur.anct.gouv.fr.</g-link> le lien vers la nouvelle proposition en réponse à votre proposition initiale.</p>
         </div>
      </div>

      <div class="phase">
        <div
          class="rounded-lg hover:bg-gray-100 cursor-pointer pt-2 pb-2 pr-2 -m-2 flex"
          @click="faq15 = !faq15"
        >
          <div class="text-gray-500 mt-1 mr-2">
            <svg :class="{ 'transform rotate-90' : faq3 }" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M9 5l7 7-7 7"></path></svg>
          </div>
          <div>
            <div class="titre">
              Doit-on soutenir un projet déposé ou un regroupement (fusion) ?
            </div>
          </div>
        </div>
        <div
          class="content"
          v-if="faq15"
        >
          <p class="mb-4">
          Dans le cadre de l'étape 2, jusqu'au 1er mai, les collectivités sont invitées à soutenir les propositions qui leur semblent stratégiques pour leur territoire. L'étape 3, du 3 mai au 30 juin, sera l'occasion d'approfondir séparemment l'étude des besoins et des services existants qui ont été précedemment regroupés.
          </p>
         </div>
      </div>

      <div class="phase">
        <div
          class="rounded-lg hover:bg-gray-100 cursor-pointer pt-2 pb-2 pr-2 -m-2 flex"
          @click="faq16 = !faq16"
        >
          <div class="text-gray-500 mt-1 mr-2">
            <svg :class="{ 'transform rotate-90' : faq3 }" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M9 5l7 7-7 7"></path></svg>
          </div>
          <div>
            <div class="titre">
              Avez vous des exemples de besoins pour l'orientation des propositions classées comme "matériel" ?
            </div>
          </div>
        </div>
        <div
          class="content"
          v-if="faq16"
        >
          <p class="mb-4">
            Nous avons redirigé certaines propositions de matériel vers le programme Société numérique de l'ANCT puisqu'il pilote un axe du plan de relance dédié à l'outillage des acteurs de l'inclusion numérique. Par exemple, nous avons reçu un certain nombre de propositions qui concernaient le financement de tablettes numériques, notamment pour des ateliers de médiation numérique, ou encore de matériel informatique pour les sessions d'accompagnement et de médiation numérique auprès de public.
           </p>
         </div>
      </div>

      <div class="phase">
        <div
          class="rounded-lg hover:bg-gray-100 cursor-pointer pt-2 pb-2 pr-2 -m-2 flex"
          @click="faq17 = !faq17"
        >
          <div class="text-gray-500 mt-1 mr-2">
            <svg :class="{ 'transform rotate-90' : faq3 }" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M9 5l7 7-7 7"></path></svg>
          </div>
          <div>
            <div class="titre">
              Dans le regroupement pour mon projet, il y a plusieurs autres projets très différents, comment faire la jonction ?
            </div>
          </div>
        </div>
        <div
          class="content"
          v-if="faq17"
        >
          <p class="mb-4">
           A ce stade, il n'y a pas de "jonction" ou de fusion à effectuer. l'objectif de ces regroupements est seulement de faciliter la prise de décision par le 1er comité de sélection qui va prioriser des propositions à approfondir tant du côté des besoins que des services. Le second comité de sélection réalisera une sélection à la maille des contributions initiales. Il n'est pas toujours pertinent de faire la jonction entre les contributions initiales. S'il s'agit de besoins émanant de collectivités territoriales, ces derniers pourront être étudiés collectivement lors des groupes de travail de l'étape 3.
          </p>
         </div>
      </div>

      <div class="phase">
        <div
          class="rounded-lg hover:bg-gray-100 cursor-pointer pt-2 pb-2 pr-2 -m-2 flex"
          @click="faq18 = !faq18"
        >
          <div class="text-gray-500 mt-1 mr-2">
            <svg :class="{ 'transform rotate-90' : faq3 }" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M9 5l7 7-7 7"></path></svg>
          </div>
          <div>
            <div class="titre">
              Quelle communication est faite auprès des collectivités pour qu'elles votent ?
            </div>
          </div>
        </div>
        <div
          class="content"
          v-if="faq18"
        >
          <p class="mb-4">
          Nous avons communiqué auprès de l'ensemble des contributeurs ayant participé sur la plateforme, aux collectivités partenaires de l'ANCT ainsi qu'au réseau des services déconcentrés de l'Etat.
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
          @click="faq19 = !faq19"
        >
          <div class="text-gray-500 mt-1 mr-2">
            <svg :class="{ 'transform rotate-90' : faq3 }" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M9 5l7 7-7 7"></path></svg>
          </div>
          <div>
            <div class="titre">
            Est-ce que les collectivités pourront installer les services financés au sein de leur structure sans frais d'acquisition ?
            </div>
          </div>
        </div>
        <div
          class="content"
          v-if="faq19"
        >
          <p class="mb-4">
          Ces services sont développés en code ouvert (open source), donc les collectivités pourront les installer librement sur leurs serveurs. Par ailleurs, dans la mesure du possible, nous allons également financer le déploiement de ces services au sein de nouvelles collectivités.
          </p>
         </div>
      </div>

      <div class="phase">
        <div
          class="rounded-lg hover:bg-gray-100 cursor-pointer pt-2 pb-2 pr-2 -m-2 flex"
          @click="faq20 = !faq20"
        >
          <div class="text-gray-500 mt-1 mr-2">
            <svg :class="{ 'transform rotate-90' : faq3 }" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M9 5l7 7-7 7"></path></svg>
          </div>
          <div>
            <div class="titre">
            Qui va concevoir et développer les nouveaux services ou mises à jour des services existants ? Est-ce que l'incubateur fera appel à des prestataires tiers ?
            </div>
          </div>
        </div>
        <div
          class="content"
          v-if="faq20"
        >
          <p class="mb-4"> Plusieurs scénarios sont possibles pour le développement et le déploiement de ces services numériques : </p>
          <p class="mb-4"><ul>
            <li>un financement du porteur de service et d'éventuels partenaires ; </li>
            <li>un portage au sein de l'Incubateur des Territoires en utilisant les marchés publics dont dispose l'ANCT.</li>
          </ul></p>
         </div>
      </div>

     <div class="phase">
        <div
          class="rounded-lg hover:bg-gray-100 cursor-pointer pt-2 pb-2 pr-2 -m-2 flex"
          @click="faq21 = !faq21"
        >
          <div class="text-gray-500 mt-1 mr-2">
            <svg :class="{ 'transform rotate-90' : faq3 }" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M9 5l7 7-7 7"></path></svg>
          </div>
          <div>
            <div class="titre">
            Les services construits et financés seront-ils adaptés à ma collectivité ?
            </div>
          </div>
        </div>
        <div
          class="content"
          v-if="faq21"
        >
          <p class="mb-4">
          Dans la mesure du possible, ces services seront construits pour être personnalisables en marque blanche (logo, visuels, etc.). Par ailleurs, les groupes de travail permettront de concerter les collectivités sur leurs besoins prioritaires.
          </p>
         </div>
      </div>

      <div class="phase">
        <div
          class="rounded-lg hover:bg-gray-100 cursor-pointer pt-2 pb-2 pr-2 -m-2 flex"
          @click="faq22 = !faq22"
        >
          <div class="text-gray-500 mt-1 mr-2">
            <svg :class="{ 'transform rotate-90' : faq3 }" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M9 5l7 7-7 7"></path></svg>
          </div>
          <div>
            <div class="titre">
            Doit-on fournir un argumentaire complémentaire pour valoriser notre projet ?
            </div>
          </div>
        </div>
        <div
          class="content"
          v-if="faq22"
        >
          <p class="mb-4">
          Non, ce n'est pas nécessaire.
          </p>
         </div>
      </div>

     <div class="phase">
        <div
          class="rounded-lg hover:bg-gray-100 cursor-pointer pt-2 pb-2 pr-2 -m-2 flex"
          @click="faq23 = !faq23"
        >
          <div class="text-gray-500 mt-1 mr-2">
            <svg :class="{ 'transform rotate-90' : faq3 }" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M9 5l7 7-7 7"></path></svg>
          </div>
          <div>
            <div class="titre">
            Si le projet est retenu, serons-nous associés à la création de l'outil ?
            </div>
          </div>
        </div>
        <div
          class="content"
          v-if="faq23"
        >
          <p class="mb-4">
          Si la proposition de valeur est retenue, vous pourrez vous manifester pour devenir "territoire référent" et donc être partie prenante de la construction de la solution.
          </p>
         </div>
      </div>

      <div class="phase">
        <div
          class="rounded-lg hover:bg-gray-100 cursor-pointer pt-2 pb-2 pr-2 -m-2 flex"
          @click="faq24 = !faq24"
        >
          <div class="text-gray-500 mt-1 mr-2">
            <svg :class="{ 'transform rotate-90' : faq3 }" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M9 5l7 7-7 7"></path></svg>
          </div>
          <div>
            <div class="titre">
            Est-ce que les financements iront aux territoires référents ou seront-ils fléchés au cas par cas par l'incubateur aux acteurs qui vont développer le service ?
            </div>
          </div>
        </div>
        <div
          class="content"
          v-if="faq24"
        >
          <p class="mb-4">
            Les financements seront fléchés dans la majorité des cas aux porteurs de ces services.
          </p>
         </div>
      </div>

     <div class="phase">
        <div
          class="rounded-lg hover:bg-gray-100 cursor-pointer pt-2 pb-2 pr-2 -m-2 flex"
          @click="faq25 = !faq25"
        >
          <div class="text-gray-500 mt-1 mr-2">
            <svg :class="{ 'transform rotate-90' : faq3 }" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M9 5l7 7-7 7"></path></svg>
          </div>
          <div>
            <div class="titre">
            Quand peut-on vraiment s'attendre à ce que les fonds soient versés pour démarrer les projets ?
            </div>
          </div>
        </div>
        <div
          class="content"
          v-if="faq25"
        >
          <p class="mb-4">
           La phase de contractualisation avec les porteurs de projets débutera à partir de début juillet. C'est donc à partir de cette date que les premiers fonds pourront être versés.
          </p>
         </div>
      </div>

     <div class="phase">
        <div
          class="rounded-lg hover:bg-gray-100 cursor-pointer pt-2 pb-2 pr-2 -m-2 flex"
          @click="faq26 = !faq26"
        >
          <div class="text-gray-500 mt-1 mr-2">
            <svg :class="{ 'transform rotate-90' : faq3 }" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M9 5l7 7-7 7"></path></svg>
          </div>
          <div>
            <div class="titre">
            Comment seront départagés les services fusionnés au sein d'une même proposition retenue ?
            </div>
          </div>
        </div>
        <div
          class="content"
          v-if="faq26"
        >
          <p class="mb-4">
            Sur les propositions retenues suite au comité de sélection n°1, un travail de chiffrage et d'exploration des services initialement proposés va s'effectuer. L'Incubateur des Territoires organisera pour cela des auditions des porteurs de services sur un ensemble de critères (financement souhaité, objet du financement : fonctionnalités supplémentaires, déploiement sur d'autres territoires, etc.) afin d'éclairer les décisions prises lors du comité de sélection n°2  du 5 juillet (qui sélectionnera les services numériques lauréats).
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
          @click="faq27 = !faq27"
        >
          <div class="text-gray-500 mt-1 mr-2">
            <svg :class="{ 'transform rotate-90' : faq3 }" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M9 5l7 7-7 7"></path></svg>
          </div>
          <div>
            <div class="titre">
              Combien de services seront sélectionnés in fine?
            </div>
          </div>
        </div>
        <div
          class="content"
          v-if="faq27"
        >
          <p class="mb-4">
          Ce n'est pas encore décidé, le comité de sélection définira le nombre de services financés et le montant de leur financement le 5 juillet 2021.
          </p>
         </div>
      </div>

      <div class="phase">
        <div
          class="rounded-lg hover:bg-gray-100 cursor-pointer pt-2 pb-2 pr-2 -m-2 flex"
          @click="faq28 = !faq28"
        >
          <div class="text-gray-500 mt-1 mr-2">
            <svg :class="{ 'transform rotate-90' : faq3 }" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M9 5l7 7-7 7"></path></svg>
          </div>
          <div>
            <div class="titre">
              N'y a t-il pas conflit d'intérêt quand un membre du comité propose des projets ?
            </div>
          </div>
        </div>
        <div
          class="content"
          v-if="faq28"
        >
          <p class="mb-4">
          Le comité de sélection va disposer d'un règlement et sera organisé un déport des personnes conflictées lorsque les services qui les concernent seront évoqués.
          </p>
         </div>
      </div>

      <div class="phase">
        <div
          class="rounded-lg hover:bg-gray-100 cursor-pointer pt-2 pb-2 pr-2 -m-2 flex"
          @click="faq29 = !faq29"
        >
          <div class="text-gray-500 mt-1 mr-2">
            <svg :class="{ 'transform rotate-90' : faq3 }" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M9 5l7 7-7 7"></path></svg>
          </div>
          <div>
            <div class="titre">
              Qui sont les membres du comité de sélection ?
            </div>
          </div>
        </div>
        <div
          class="content"
          v-if="faq29"
        >
          <p class="mb-4">
          Le comité est composé d'associations de collectivités territoriales (AMRF, AMF, ADF, France Urbaine, Interconnectés, FNCCR, DECLIC), d'élus ainsi que des représentants de la DINUM, DITP et ANCT.
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
          @click="faq30 = !faq30"
        >
          <div class="text-gray-500 mt-1 mr-2">
            <svg :class="{ 'transform rotate-90' : faq3 }" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M9 5l7 7-7 7"></path></svg>
          </div>
          <div>
            <div class="titre">
              Quels sont les prérequis pour qu'une collectivité puisse se déclarer comme territoire référent ?
            </div>
          </div>
        </div>
        <div
          class="content"
          v-if="faq30"
        >
          <p class="mb-4">
          Le seul prérequis est d'être une collectivité. Toutes les collectivités intéressées par une proposition sélectionnée par le comité de sélection du 3 mai pourront s'inscrire à des ateliers d'expression et deviendront de fait territoire référent. Une collectivité pourra se positionner sur plusieurs propositions.
          </p>
         </div>
      </div>

      <div class="phase">
        <div
          class="rounded-lg hover:bg-gray-100 cursor-pointer pt-2 pb-2 pr-2 -m-2 flex"
          @click="faq31 = !faq31"
        >
          <div class="text-gray-500 mt-1 mr-2">
            <svg :class="{ 'transform rotate-90' : faq3 }" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M9 5l7 7-7 7"></path></svg>
          </div>
          <div>
            <div class="titre">
              Est-ce qu'il y aura une sélection parmi les collectivités qui se déclareront comme "territoire référent" ?
            </div>
          </div>
        </div>
        <div
          class="content"
          v-if="faq31"
        >
          <p class="mb-4">
          Il n'y aura pas de sélection entre les collectivités qui se manifesteront comme "territoire référent".
          </p>
         </div>
      </div>

      <div class="phase">
        <div
          class="rounded-lg hover:bg-gray-100 cursor-pointer pt-2 pb-2 pr-2 -m-2 flex"
          @click="faq32 = !faq32"
        >
          <div class="text-gray-500 mt-1 mr-2">
            <svg :class="{ 'transform rotate-90' : faq3 }" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M9 5l7 7-7 7"></path></svg>
          </div>
          <div>
            <div class="titre">
              Pourra-t-on participer à n'importe quel groupe de travail ?
            </div>
          </div>
        </div>
        <div
          class="content"
          v-if="faq32"
        >
          <p class="mb-4">
            Oui, si vous êtes une collectivité territoriale ou un groupement de collectivités, vous pourrez tout à fait participer à ces groupes de travail. Tout comme vous pouvez soutenir des propositions qui ne concernent pas le projet déposé initialement.
          </p>
         </div>
      </div>

      <div class="phase">
        <div
          class="rounded-lg hover:bg-gray-100 cursor-pointer pt-2 pb-2 pr-2 -m-2 flex"
          @click="faq33 = !faq33"
        >
          <div class="text-gray-500 mt-1 mr-2">
            <svg :class="{ 'transform rotate-90' : faq3 }" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M9 5l7 7-7 7"></path></svg>
          </div>
          <div>
            <div class="titre">
              Lorsque l'enveloppe du budget est atteinte, financerez-vous d'autres projets dans la liste priorisée ?
            </div>
          </div>
        </div>
        <div
          class="content"
          v-if="faq33"
        >
          <p class="mb-4">
            L'objectif de cette première phase de sélection est bien de prioriser les besoins/services existants lors du comité de sélection n°1. En effet, en fonction de la consommation de l'enveloppe globale avec le financement de ces besoins/services "priorisés", nous pourrons financer d'autres besoins/services ou non. L'ensemble de cette priorisation est validée lors des 2 comités de sélection.
          </p>
         </div>
      </div>

      <div class="phase">
        <div
          class="rounded-lg hover:bg-gray-100 cursor-pointer pt-2 pb-2 pr-2 -m-2 flex"
          @click="faq34 = !faq34"
        >
          <div class="text-gray-500 mt-1 mr-2">
            <svg :class="{ 'transform rotate-90' : faq3 }" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M9 5l7 7-7 7"></path></svg>
          </div>
          <div>
            <div class="titre">
            Après regroupement des contributions, quelle action est attendue de la part des porteurs de services et des collectivités lors de l'étape 2?
            </div>
          </div>
        </div>
        <div
          class="content"
          v-if="faq34"
        >
          <p class="mb-4"> Si vous êtes porteur de service, vous avez reçu un formulaire à remplir pour compléter les informations à partager au comité de sélection du 3 mai concernant votre service. </p>
          <p class="mb-4"> Après le comité de sélection du 3 mai, les propositions sélectionnées feront l'objet de : </p>
          <p class="mb-4"> <ul>
                <li> groupes de travail facilitant l'expression de besoins des collectivités ;</li>
                <li> audition avec chacun des porteurs de services existants pour mieux connaitre leur proposition de valeur.</li>
             </ul></p>
          <p class="mb-4"> Sur la base de ces travaux, l'équipe de l'Incubateur des Territoires partagera une analyse technique au comité de sélection pour qu'il décide le 5 juillet des services à financer et à construire pour le plus grand nombre de collectivités territoriales. </p>
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
    title: "France Relance : Foire aux Questions",
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
      faq5: false,
      faq6: false,
      faq7: false,
      faq8: false,
      faq9: false,
      faq10: false,
      faq11 : false,
      faq12: false,
      faq13: false,
      faq14: false,
      faq15: false,
      faq16: false,
      faq17: false,
      faq18: false,
      faq19: false,
      faq20: false,
      faq21: false,
      faq22: false,
      faq23: false,
      faq24: false,
      faq25: false,
      faq26: false,
      faq27: false,
      faq28: false,
      faq29 : false,
      faq30: false,
      faq31: false,
      faq32: false,
      faq33: false,
      faq34: false
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
