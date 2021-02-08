# incubateur.anct.gouv.fr

Bienvenue sur le code source du site officiel de l'[Incubateur des Territoires](https://incubateur.anct.gouv.fr) !

## Installation

Ce site est construit sur la base du framework [Gridsome](https://gridsome.org).
Les étapes suivantes vous permettront de l'exécuter en local.

> Hypothèses : Vous disposez déjà d'une installation de [Git](https://git-scm.com) et de [Node.js/npm](https://nodejs.org/fr/).

### 1. Récupérer le code source en local

Télécharger le code source ainsi que sa configuration Git avec la commande suivante :

```shell
git clone git@github.com:incubateur-territoires/incubateur.anct.gouv.fr.git
```
### 2. Installer Gridsome

Si vous ne disposez pas encore de Gridsome, exécuter la commande suivante dans un terminal :

```shell
npm install --global @gridsome/cli
```

Ceci vous installe l'interface en ligne de commande (ILC ou CLI) Gridsome.
Vous pouvez désormais en voir une documentation dans le terminal avec :

```shell
gridsome --help
```

### 3. Voir le site en local

Entrer dans le répertoire du code source récupéré, installer ses dépendances et l'exécuter avec :

```shell
cd incubateur.anct.gouv.fr
npm install
gridsome develop
```

Ces commandes doivent s'achever sans erreur.

🎉 Bravo ! Retrouvez le site depuis votre navigateur l'adresse suivante : `http://localhost:8080`

Bons développements 🙌
