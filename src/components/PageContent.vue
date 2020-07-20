<template>
  <div class="page-content">
    <slot />
  </div>
</template>

<style lang="scss">
.page-content {
  @apply mx-auto max-w-screen-md;

a  {
    @apply text-blue border-b border-blue;

    &:hover {
      @apply text-navy;
    }
  }

  h1,
  h2,
  h3,
  h4 {
    @apply font-marianne font-black;  
  }

  h1 { @apply text-5xl my-12; }
  h2 { @apply text-3xl mt-6 mb-4 leading-tight; }
  h3 { @apply my-4 }

  p { @apply mb-4 }

  ul { @apply list-disc mb-4 }
  li { @apply ml-6 }
}
</style>
