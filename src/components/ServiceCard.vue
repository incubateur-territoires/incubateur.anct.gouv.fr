<template>
  <div class="service-card-container">    
    <div class="service-card">
      <g-link
        :to="service_url || beta_url"
        @mouseover="hover = true"
        @mouseleave="hover = false"
        class="flex items-center space-x-2"
      >
        <div class="title" v-html="name" />
        <svg v-if="hover" class="text-navy h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
      </g-link>
      <div class="text-gray-900 mt-4" v-html="pitch" />
      <!-- <div class="status" v-html="status" /> -->
      <div class="icon-links mt-4 text-sm transition ease-linear duration-100 space-x-4">
        <g-link v-if="contact" :to="mailto"><font-awesome :icon="['far', 'envelope']"/> Contacter l'équipe</g-link>
        <g-link v-if="repo_url" :to="repo_url"><font-awesome :icon="['fab', 'github']"/> Code</g-link>
        <g-link v-if="stats_url" :to="stats_url"><font-awesome :icon="['far', 'chart-bar']"/> Stats</g-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    pitch: String,
    contact: String,
    repo_url: String,
    stats_url: String,
    service_url: String,
    beta_url: String
  },
  data: function () {
    return {
      hover: false
    }
  },
  computed: {
    mailto: function () {
      return `mailto:${this.contact}`
    }
  }
}
</script>

<style lang="scss">
.service-card-container {
  @apply max-w-screen-md mx-auto mb-8;
}

.service-card {
  @apply relative bg-gray-200 rounded-lg p-4;

  .title {
    @apply font-marianne text-2xl font-bold text-navy leading-none;
  }

  .status {
    @apply absolute bg-gray-400 top-0 right-0 mt-2 mr-2 px-2 py-1 text-xs text-gray-800 rounded-lg font-medium;
  }

  .icon-links {
    a:hover {
      @apply text-navy;
    }
  }
}
</style>
