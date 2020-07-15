<template>
  <div class="page-title">
    <h2 v-if="$props.pretitle" v-html="$props.pretitle" />
    <h1><slot /></h1>
  </div>
</template>

<script>
export default {
  props: {
    'pretitle': String
  }
}
</script>

<style lang="scss">
.page-title {
  @apply px-4 py-4 mb-8 font-marianne text-white bg-navy;

  h1 {
    @apply text-2xl font-black mx-auto max-w-screen-md leading-tight;
  }

  h2 {
    @apply text-lg mb-2 mx-auto max-w-screen-md ;
  }

  @screen sm {
    @apply py-6 mb-10;
    
    h1 {
      @apply text-4xl;
    }

    h2 {
      @apply text-xl mb-4;
    }
  }

  @screen md {
    @apply py-8 mb-12;
    
    h1 {
      @apply text-5xl;
    }

    h2 {
      @apply text-2xl;
    }
  }
}
</style>
