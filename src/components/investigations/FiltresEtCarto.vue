<template>
  <div class="font-marianne text-xl flex gap-x-8 mb-8">
    <!-- <li class="inline-flex">En preparation <span></span></li> -->
    <a
      :class="{ selected: statusFilters.includes('en_preparation') }"
      @click="$emit('clicked', 'en_preparation')"
    >En préparation <span class="ml-2">{{ enPreparationCount }}</span></a>
    <a
      :class="{ selected: statusFilters.includes('en_cours') }"
      @click="$emit('clicked', 'en_cours')"
    >En cours <span class="ml-2">{{ enCoursCount }}</span></a>
    <a
      :class="{ selected: statusFilters.includes('termine') }"
      @click="$emit('clicked', 'termine')"
    >Passés <span class="ml-2">{{ termineCount }}</span></a>

    <!-- <Carto /> -->
  </div>
</template>

<script>
import Carto from '~/components/investigations/Carto.vue'

export default {
  components: {
    Carto
  },
  props: {
    enPreparationCount: Number,
    enCoursCount: Number,
    termineCount: Number,
    statusFilters: Array
  }
}
</script>

<style lang="scss" scoped>
a {
  @apply inline-flex font-semibold text-gray-400 cursor-pointer border-b-4 border-transparent;

  &:hover {
    @apply border-green;  
  }
}

.selected {
  @apply text-black;

  span {
    @apply text-green;
  }
}
</style>
