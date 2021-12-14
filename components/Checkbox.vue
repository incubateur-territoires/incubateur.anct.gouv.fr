<template>
  <div class="fr-checkbox-group">
    <input type="checkbox" :id="uid" :value="value">
    <label class="fr-label" :for="uid">{{ label }}</label>
  </div>
</template>

<script>
  export default {
    props: ['label', 'value'],
    data() {
      return {
        uid: Math.round(Math.random() * 99999)
      }
    }
  }
</script>
