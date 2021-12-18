export const state = () => ({
  list: [],
  facets_groups: {
    thematiques: [],
    decoupages_administratifs: [],
  },
  facets: {
    thematiques: [],
    decoupages_administratifs: [],
  },
})

export const actions = {
  async init({ state, commit }) {
    const response = await this.$http.$post('https://directus.incubateur.anct.gouv.fr/graphql?access_token=confidant-ample-slapping-vitamins-freewill-unlivable', {
        query: `
          query {
            catalogue {
              nom
              description
              thematique {
                id
                thematique
              }
            }
            decoupage_administratif {
              id
              nom
            }
            thematiques {
              id
              thematique
            }
          }`
        }
      )
      commit('init', {
        services: response.data.catalogue,
        decoupages_administratifs: response.data.decoupage_administratif,
        thematiques: response.data.thematiques
      })
  },

  async fetch({ state, commit }) {
    const filters = []
    if(state.facets.thematiques.length) {
      filters.push(`thematique: { id: { _in: ${JSON.stringify(state.facets.thematiques.map(v => Number(v)))}}}`)
    }

    const response = await this.$http.$post('https://directus.incubateur.anct.gouv.fr/graphql?access_token=confidant-ample-slapping-vitamins-freewill-unlivable', {
      query: `
        query {
          catalogue(filter: { ${filters.join(', ')} }) {
            nom
            description
            thematique {
              id
              thematique
            }
          }
        }`
      }
    )
    commit('update', response.data.catalogue || [])

  },

  async filter({ state, commit, dispatch }, facet) {
    commit('addFilter', facet)
    await dispatch('fetch')
    commit('update', state.list)
  },

}

export const mutations = {
  init(state, facets_groups) {
    state.list = facets_groups.services
    state.facets_groups = facets_groups
  },

  update(state, services) {
    state.list = services
  },

  addFilter(state, { name, value, active }) {
    active
      ? state.facets[name].push(value)
      : state.facets[name] = state.facets[name].filter(k => k !== value)
  },
}
