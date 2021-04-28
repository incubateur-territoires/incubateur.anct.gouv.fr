<template>
  <div class="font-marianne text-xl flex mb-8 gap-8">
    <div class="flex flex-col">
      <div>
        <input
          type="checkbox"
          id="en_preparation"
          value="en_preparation"
          v-model="statusFilters"
          @click="$emit('statusFilterClicked', 'en_preparation')"
        >
        <label for="en_preparation">
          En préparation <span class="ml-2">{{ enPreparationCount }}</span>
        </label>
      </div>

      <div>
        <input
          type="checkbox"
          id="en_cours"
          value="en_cours"
          v-model="statusFilters"
          @click="$emit('statusFilterClicked', 'en_cours')"
        >
        <label for="en_cours">
          En cours <span class="ml-2">{{ enCoursCount }}</span>
        </label>
      </div>

      <div>
        <input
          type="checkbox"
          id="termine"
          value="termine"
          v-model="statusFilters"
          @click="$emit('statusFilterClicked', 'termine')"
        >
        <label for="termine">
          Terminé <span class="ml-2">{{ termineCount }}</span>
        </label>
      </div>
    </div>

    <div class="flex flex-col">
      <div>
        <input 
          type="checkbox"
          id="communes"
          value="communes"
          v-model="collectivitesFilters"
          @click="$emit('collectiviteFilterClicked', 'communes')"
        >
        <label for="communes">Communes <span class="ml-2">{{ communesCount }}</span></label>
      </div>

      <div>
        <input
          type="checkbox"
          id="epcis"
          value="epcis"
          v-model="collectivitesFilters"
          @click="$emit('collectiviteFilterClicked', 'epcis')"
        >
        <label for="epcis">EPCIs <span class="ml-2">{{ epcisCount }}</span></label>
      </div>

      <div>
        <input 
          type="checkbox"
          id="departements"
          value="departements"
          v-model="collectivitesFilters"
          @click="$emit('collectiviteFilterClicked', 'departements')"
        >
        <label for="departements">Départements <span class="ml-2">{{ departementsCount }}</span></label>
      </div>

      <div>
        <input 
          type="checkbox"
          id="regions"
          value="regions"
          v-model="collectivitesFilters"
          @click="$emit('collectiviteFilterClicked', 'regions')"
        >
        <label for="regions">Régions <span class="ml-2">{{ regionsCount }}</span></label>
      </div>
    </div>

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
    communesCount: Number,
    epcisCount: Number,
    departementsCount: Number,
    regionsCount: Number,

    collectivitesFilters: Array,
    statusFilters: Array
  }
}
</script>

<style lang="scss" scoped>
input {
 @apply inline-flex;
}

label {
  @apply font-semibold text-black cursor-pointer ml-2 inline-flex;

  span {
    @apply text-green;
  }
}
</style>
