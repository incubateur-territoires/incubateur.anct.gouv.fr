<template>
  <Layout>
    <PageTitle>
      Mentions légales
    </PageTitle>

    <PageContent>
      <h2>Éditeur</h2>
      <p>
        Ce site est édité par l'équipe de l'Incubateur des Territoires, 
        une mission de l'Agence nationale de la cohesion des territoires.
      </p>
      <h3>Contact</h3>
      <p>
        Agence nationale de la cohésion des territoires<br>
        Mission incubateur de services numériques <br>
        20, avenue de Ségur<br>
        TSA 10717<br>
        75 334 Paris Cedex 07<br>
        <br>
        Téléphone : +33 1 85 58 60 00
      </p>

      <h3>Directeur de publication</h3>
      <p>
        Laurent Rojey, Directeur général délégué du numérique
      </p>

      <h2>Informations techniques</h2>
      <p>
        Ce site est conçu et développé par l'équipe de l'Incubateur des Territories. De nouvelles fonctionnalités sont ajoutées en continue. 
      </p>

      <p>
        Le code source du site est disponible sur <g-link to="https://github.com/incubateur-territoires/incubateur.anct.gouv.fr">Github</g-link>.
      </p>

      <p>
        Nous utilisons des frameworks libres : Vue, Gridsome, TailwindCSS.
      </p>

      <h3>Hébergement</h3>
      <p>
        GitHub, Inc.<br>
        88 Colin P. Kelly Jr. Street<br>
        San Francisco, CA 94107<br>
        États-Unis d'Amérique<br>
      </p>

      <h2>Licence</h2>
      <p>
        L'Incubateur des Territoires a choisi de placer par défaut ses documents sous <g-link to="https://www.etalab.gouv.fr/licence-ouverte-open-licence">Licence Ouverte / Open Licence 2.0</g-link>. Cela signifie que, sauf mention contraire, vous êtes libres de réutiliser toute information publique mise à disposition sur ce site, gratuitement et sans restriction d’usage, à la seule condition de citer la source de l’information (L'Incubateur des Territoires) et la date de dernière mise à jour de l’information réutilisée (par exemple avec un lien hypertexte).
      </p>
      <h3>A quoi sert une licence ?</h3>

      <p>
        La licence de réutilisation vous permet de connaître avec précision les conditions dans lesquels vous êtes autorisés à exploiter les informations mises à disposition sur cette plateforme. Elle vient encadrer juridiquement vos droits et obligations lorsque vous réutilisez ces informations. La licence de réutilisation est un contrat qui lie le ré utilisateur à l'Incubateur des Territoires ou aux autres personnes ayant publié sur le site.
      </p>

      <p>
        À cet égard, dès lors que vous téléchargez tout ou partie des documents administratifs mis à disposition sur ce site, vous vous engagez à respecter les termes de la licence de réutilisation.  Par défaut, c’est-à-dire sauf mention contraire, les jeux de données peuvent être exploités dans les conditions fixées par la <g-link to="https://www.etalab.gouv.fr/licence-ouverte-open-licence">Licence Ouverte / Open Licence 2.0</g-link>, que vous pouvez télécharger <g-link to="https://www.etalab.gouv.fr/wp-content/uploads/2017/04/ETALAB-Licence-Ouverte-v2.0.pdf">ici</g-link>.
      </p>

      <h3>Pourquoi la Licence ouverte 2.0 ?</h3>

      <p><em>(Source : <g-link to="https://www.etalab.gouv.fr/licence-ouverte-open-licence">blog d’Etalab</g-link>)</em></p>

      <p>Dans le cadre de la politique du Gouvernement en faveur de l’ouverture des données publiques (« Open Data »), Etalab a conçu la « Licence Ouverte / Open Licence ». Cette licence, élaborée en concertation avec l’ensemble des acteurs concernés, facilite et encourage la réutilisation des données publiques mises à disposition gratuitement.</p>

      <p>La publication du décret n° 2017-638 prévu par l’article L 323-2 du CRPA fait de la LO 2.0 la licence de référence pour les administrations pour la publication de données publiques, aux côtés de l’ODbL, et permet ainsi son utilisation par l’ensemble des administrations.</p>

      <p>La « Licence Ouverte / Open Licence » présente les caractéristiques suivantes :</p>

      <ul>
        <li>Une grande liberté de réutilisation des informations :</li>
        <li>Une licence ouverte, libre et gratuite, qui apporte la sécurité juridique nécessaire aux producteurs et aux réutilisateurs des données publiques ;</li>
        <li>Une licence qui promeut la réutilisation la plus large en autorisant la reproduction, la redistribution, l’adaptation et l’exploitation commerciale des données</li>
        <li>Une licence qui s’inscrit dans un contexte international en étant compatible avec les standards des licences Open Data éveloppées à l’étranger et notamment celles du gouvernement britannique (Open Government Licence) ainsi que les autres standards internationaux (ODC-BY, CC-BY 2.0).</li>
        <li>Une exigence forte de transparence de la donnée et de qualité des sources en rendant obligatoire la mention de la paternité.</li>
        <li>Une opportunité de mutualisation pour les autres données publiques en mettant en place un standard réutilisable par les collectivités territoriales qui souhaiteraient se lancer dans l’ouverture des données publiques.</li>
      </ul>
    </PageContent>
  </Layout>
</template>

<script>
import PageTitle from '~/components/PageTitle.vue'
import PageContent from '~/components/PageContent.vue'

export default {
  metaInfo: {
    title: 'Mentions légales'
  },
  components: {
    PageTitle,
    PageContent
  }
}
</script>
