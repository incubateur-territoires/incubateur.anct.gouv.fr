// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const axios = require('axios')

module.exports = function (api) {  
  // Use the Data Store API here: https://gridsome.org/docs/data-store-api/
  
  // Startup overrides
  api.loadSource(async actions => {
    const results = await axios.get('https://beta.gouv.fr/api/v2/startups.json')
    const startups = results.data.data

    const startupOverrides = actions.getCollection('Service')

    const collection = actions.addCollection({
      typeName: 'Startups'
    })

    for (const startup of startups) {
      if (startup.relationships.incubator.data.id === 'anct') {
        const override = startupOverrides.getNodeById(startup.id) || {}
        
        const statusMap = {
          "alumni": "partenariat passé",
          "construction": "en construction",
          "investigation": "en investigation"
        }

        collection.addNode({
          id: startup.id,
          name: startup.attributes.name,
          pitch: startup.attributes.pitch,
          beta_url: `https://beta.gouv.fr/startups/${startup.id}.html`,
          service_url: startup.attributes.link,
          repo_url: startup.attributes.repository,
          stats_url: startup.attributes.stats_url,
          contact: override.contact || startup.attributes.contact,
          status: statusMap[startup.attributes.phases.slice(-1)[0].name],
          startup_etat: !!override.startup_etat
        })
      }
    }

    const startupIds = startups.map(s => s.id)
    const overrideIds = startupOverrides.data().map(d => d.id)

    overrideIds.filter(s => !startupIds.includes(s)).forEach(id => {
      const startup = startupOverrides.getNodeById(id)
      collection.addNode({
        id: startup.id,
        name: startup.name,
        pitch: startup.pitch,
        beta_url: `https://beta.gouv.fr/startups/${startup.id}.html`,
        service_url: startup.service_url,
        repo_url: startup.repo_url,
        stats_url: startup.stats_url,
        contact: startup.contact,
        status: startup.status,
        startup_etat: !!startup.startup_etat
      })
    });
  })

  api.createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/
  })
}
