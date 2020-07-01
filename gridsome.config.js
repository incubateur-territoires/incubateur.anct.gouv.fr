// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Incubateur des Territoires',
  siteUrl: 'https://incubateur-territoires.github.io',
  pathPrefix: '/incubateur.anct.gouv.fr',
  plugins: [
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
