export const state = () => ({
  list: [],
  filters: {
    types: [],
    populations: [],
  },
})

export const mutations = {
  init(state, services) {
    state.list = services
  },

  filter(state, name, value, active) {
    active
      ? state.filters[name].push(value)
      : state.filters[name] = state.filters[name].filter(k => k !== value)
  },
}
