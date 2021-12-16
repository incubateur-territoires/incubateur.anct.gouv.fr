
export const actions = {
  async nuxtServerInit({ commit }) {
    const response = await this.$http.$post('https://directus.incubateur.anct.gouv.fr/graphql?access_token=confidant-ample-slapping-vitamins-freewill-unlivable', {
      query: `
        query {
          services {
            nom
            type
            departements {
              id
            }
            regions {
              id
            }
          }
        }`
      }
    )
    commit('services/init', response.data.services)
  },
}
