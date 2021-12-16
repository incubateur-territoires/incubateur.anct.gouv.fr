<template>
  <div>
    <div class="fr-checkbox-group">
      <input type="checkbox" :id="`checkbox-${uid}`" :checked="checked" :value="value" @change="$emit('change', $event.target.checked)">
      <label class="fr-label" :for="`checkbox-${uid}`">{{ label }}</label>
    </div>
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

    data() {
      return {
        uid: 0
      }
    },

    mounted () {
      this.uid = this._uid
    },

    emits: ['change'],

  }
</script>
