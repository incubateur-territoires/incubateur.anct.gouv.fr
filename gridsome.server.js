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
    const results = await axios.get('https://beta.gouv.fr/api/v2.1/startups.json')
    const fichesBeta = results.data.data

    // Generate investigations from fiches Beta
    const investigations = actions.addCollection({
      typeName: 'Investigation'
    })

    for (const fiche of fichesBeta) {
      if (
        fiche.relationships.incubator.data.id === 'anct' &&
        (fiche.attributes.phases.slice(-1)[0].name === 'alumni' || fiche.attributes.phases.slice(-1)[0].name === 'investigation')
      ) {
        
        const statusMap = {
          "alumni": "partenariat passé",
          "investigation": "en investigation"
        }

        investigations.addNode({
          id: fiche.id,
          name: fiche.attributes.name,
          pitch: fiche.attributes.pitch,
          beta_url: `https://beta.gouv.fr/startups/${fiche.id}.html`,
          service_url: fiche.attributes.link || "",
          repo_url: fiche.attributes.repository || "",
          stats_url: fiche.attributes.stats_url || "",
          contact: fiche.attributes.contact,
          status: statusMap[fiche.attributes.phases.slice(-1)[0].name],
        })
      }
    }


    // Hydrate services with fiches Beta
    const servicesCollection = actions.getCollection('Service')
    const services = servicesCollection.data()

    console.log(services)
    console.log(fichesBeta)

    for (const service of services) {
      // Find fiche Beta if it exists
      const ficheBeta = fichesBeta.find((f) => f.id === service.beta_id)
      if (!ficheBeta) { continue; }

      const fiche = ficheBeta.attributes

      // Undocumented method
      // https://github.com/gridsome/gridsome/blob/master/gridsome/lib/store/Collection.js
      servicesCollection.updateNode({
        $uid: service.$uid,
        id: service.id,
        beta_id: service.beta_id,
        service_type: service.service_type,
        name: service.name || fiche.name,
        contact: service.contact || fiche.contact,
        pitch: service.pitch || fiche.pitch,
        beta_url: `https://beta.gouv.fr/startups/${service.beta_id}.html`,
        service_url: service.service_url || fiche.link,
        repo_url: service.repo_url || fiche.repository,
        stats_url: service.stats_url || fiche.stats_url,
        communes: service.communes,
        epcis: service.epcis,
        departements: service.departements,
        regions: service.regions
      })
    }
  })

  // api.createPages(({ createPage }) => {
  //   // Use the Pages API here: https://gridsome.org/docs/pages-api/
  // })
}
