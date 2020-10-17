// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Incubateur des Territoires',
  siteUrl: 'https://incubateur.anct.gouv.fr',
  siteDescription: `Une mission de l'Agence nationale de la cohesion des territoires`,
  icon: './src/assets/images/logoIncubateur.svg',
  templates: {
    Job: [
      {
        path: '/recrutements/:equipe-:role',
      }
    ]
  },
  plugins: [
    {
      use: 'gridsome-plugin-matomo',
      options: {
        host: '//stats.data.gouv.fr',
        siteId: 135
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'services/*.md',
        typeName: 'Service',
        remark: {
          // remark options
        }
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'jobs/*.md',
        typeName: 'Job',
        remark: {
          // remark options
        }
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'pages/*.md',
        typeName: 'PageContent',
        remark: {
          // remark options
        }
      }
    },
    {
      use: '@gridsome/source-strapi',
      options: {
        apiURL: `https://incubateur-strapi.herokuapp.com/`,
        queryLimit: 1000, // Defaults to 100
        contentTypes: [`fiche-de-poste`, `actualite`],
        singleTypes: [`offres-aux-collectivites`],
        plural: true, // pluralizes names of Content Types in API
        // Possibility to login with a Strapi user, when content types are not publicly available (optional).
        loginData: {
          identifier: 'gridsome',
          password: 'mYkAVJcf!gUWN2sE62Uk_yvg@kFRvwgK',
        },
      }
    },
    {
      use: 'gridsome-plugin-tailwindcss',
      /**
      * These are the default options. You don't need to set any options to get
      * going. Seriously, you don't need to declare tailwind.config.js.

      options: {
        tailwindConfig: './tailwind.config.js',
        purgeConfig: {},
        presetEnvConfig: {},
        shouldPurge: true,
        shouldImport: true,
        shouldTimeTravel: true
      }
      */
    }
  ],
  transformers: {
    remark: {
      // global remark options
    }
  },
  chainWebpack: config => {
    const svgRule = config.module.rule('svg')
    svgRule.uses.clear()
    svgRule
      .use('vue-svg-loader')
      .loader('vue-svg-loader')
  },
}
