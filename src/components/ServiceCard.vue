<template>
  <div class="service-card-container">
    <g-link :to="service.link">
      <div class="service-card">
        <div class="title" v-html="service.title" />
        <div class="mission" v-html="service.mission" />
        <div class="icon-links">
          <!-- <div class="status" v-html="service.status" /> -->
          <g-link v-if="service.contact" :to="mailto"><font-awesome :icon="['far', 'envelope']"/></g-link>
          <g-link v-if="service.repository" :to="service.repository"><font-awesome :icon="['fab', 'github']"/></g-link>
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

  .title {
    @apply font-marianne text-2xl font-bold;
  }

  .mission {
    @apply text-gray-800;
  }

  .status {
    @apply inline-block bg-gray-400 -mb-1 -ml-1 px-2 py-1 text-xs text-gray-900 rounded-lg font-medium;
  }

  .icon-links {
    @apply absolute bottom-0 right-0 px-2 py-1 text-lg;

    a:not(:first-child) {
      @apply ml-2;
    }

    a:hover {
      @apply text-indigo-500;
    }
  }
}
</style>
