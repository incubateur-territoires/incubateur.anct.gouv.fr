<template>
  <Layout >
    <div class="basic-page">
      <slot />
    </div>
  </Layout>
</template>

<style lang="scss">
.basic-page {
  @apply mx-auto max-w-screen-md;

  h1,
  h2,
  h3,
  h4 {
    @apply font-marianne font-black;  
  }

  h1 { @apply text-5xl mb-12; }
  h2 { @apply text-3xl mb-8; }

  p { @apply mb-4 }
}
</style>
