<template>
  <div>
    <CallOut />
  </div>
</template>

<script>
  export default {
    created() {
      this.$store.dispatch('services/init')
    },

    computed: {
      services() {
        return this.$store.state.services.list
      },
      facets_groups() {
        return this.$store.state.services.facets_groups
      },
    },

    methods: {
      filter(name, value, active) {
        this.$store.dispatch('services/filter', { name, value, active })
        //this.$store.dispatch('services/fetch')
      }
    }
  }
</script>
