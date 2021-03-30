<template>
  <div class="font-marianne text-xl flex gap-x-8 mb-8">
    <!-- <li class="inline-flex">Investigations à venir <span></span></li> -->
    <a
      :class="{ selected: statusFilter === 'en_cours' }"
      @click="$emit('clicked', 'en_cours')"
    >Investigations en cours <span class="ml-2">{{ enCoursCount }}</span></a>
    <a
      :class="{ selected: statusFilter === 'termine' }"
      @click="$emit('clicked', 'termine')"
    >Investigations passés <span class="ml-2">{{ termineCount }}</span></a>
  </div>
</template>

<script>
export default {
  props: {
    enCoursCount: Number,
    termineCount: Number,
    statusFilter: String
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
