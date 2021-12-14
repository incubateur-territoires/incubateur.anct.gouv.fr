<template>
  <div class="fr-checkbox-group">
    <input type="checkbox" :id="uid" :value="value" :checked="checked" @change="$emit('change', $event.target.checked)">
    <label class="fr-label" :for="uid">{{ label }}</label>
  </div>
</template>

<script>
  export default {
    props: {
      label: String,
      value: String,
      checked: {
        type: Boolean,
        default: false,
      },
    },
    emits: ['change'],

    data() {
      return {
        uid: Math.round(Math.random() * 99999)
      }
    },

  }
</script>
