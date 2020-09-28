<template>
  <div
    class="service-card-container"
    @mouseover="hover = true"
    @mouseleave="hover = false"
  >
    <g-link :to="service.service_url || service.beta_url">
      <div class="service-card">
        <div class="title" v-html="service.name" /><font-awesome v-if="hover" class="icon" height="1.5rem" width="1.5rem" :icon="['fas', 'external-link-alt']"/>
        <div class="mission" v-html="service.pitch" />
        <div class="status" v-html="service.status" />
        <div class="icon-links">
          <g-link v-if="service.contact" :to="mailto"><font-awesome :icon="['far', 'envelope']"/></g-link>
          <g-link v-if="service.repo_url" :to="service.repo_url"><font-awesome :icon="['fab', 'github']"/></g-link>
          <g-link v-if="service.stats_url" :to="service.stats_url"><font-awesome :icon="['far', 'chart-bar']"/></g-link>
        </div>
      </div>
    </g-link>
  </div>
</template>

<script>
export default {
  props: {
    service: Object,
  },
  data: function () {
    return {
      hover: false
    }
  },
  computed: {
    mailto: function () {
      return `mailto:${this.service.contact}`
    }
  }
}
</script>

<style lang="scss">
.service-card-container {
  @apply max-w-screen-md mx-auto mb-8;
}

.service-card {
  @apply relative bg-gray-200 rounded-lg px-4 pt-2 pb-10 border-4 border-gray-200;

  &:hover {
    @apply border-4 border-navy;
  }

  .icon {
    @apply inline-block text-navy ml-2 align-baseline;
  }

  .title {
    @apply font-marianne text-2xl font-bold text-navy inline-block;
  }

  .mission {
    @apply text-gray-800;
  }

  .status {
    @apply absolute bg-gray-400 top-0 right-0 mt-1 mr-1 px-2 py-1 text-xs text-gray-800 rounded-lg font-medium;
  }

  .icon-links {
    @apply absolute bottom-0 right-0 px-2 py-1 text-lg transition ease-linear duration-100;

    a:not(:first-child) {
      @apply ml-2;
    }

    a:hover {
      @apply text-indigo-500;
    }
  }
}
</style>
