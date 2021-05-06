<template>
  <div class="investigation-card-container">    
      <g-link
        :to="`/investigation/${id}`"
      >
        <div class="investigation-card">
          <div>
            <div :class=status class="status">{{ this.stringHelpers.humanizedInvestigationStatus(this.status) }}</div>
            <div class="pitch" v-html="pitch" />
          </div>
          <div class="flex flex-row flex-1 justify-between mt-4">
            <ul class="collectivites">
              <li v-for="nom, idx in collectivites" :key=idx>{{nom}}</li>
            </ul>
            <div class="title" v-if="name" v-html="name" />
          </div>
        </div>
      </g-link>
  </div>
</template>

<script>
export default {
  props: {
    id: Number,
    name: String,
    pitch: String,
    status: String,
    collectivites: Array,
  }
}
</script>

<style lang="scss" scoped>
.investigation-card-container {
  @apply max-w-screen-md mx-auto mb-8;
}

.investigation-card {
  @apply relative bg-gray-100 rounded-md p-4 border-2 border-transparent;

  &:hover {
    @apply border-blue;
  }

  .pitch {
    @apply text-lg text-gray-900;
  }

  .status {
    @apply float-right mb-2 ml-2 text-xs uppercase font-medium text-white py-1 px-2 rounded-md;

    &.en_preparation {
      @apply bg-blue;
    }

    &.en_cours {
      @apply bg-green;
    }

    &.termine {
      @apply bg-yellow-600;
    }
  }

  .title {
    @apply font-marianne text-lg text-navy leading-none;
  }

  .collectivites {
    @apply font-marianne text-lg font-bold text-gray-800;
  }
}
</style>
