<template>
  <div class="page-content">
    <slot />
  </div>
</template>

<style lang="scss">
.page-content {
  @apply mx-auto max-w-screen-md;

  a.cta {
    @apply block px-4 py-2 my-4 border-2 border-navy text-navy font-bold rounded-full text-center transition ease-linear duration-100;

    @screen sm {
      @apply inline-block my-2;
    }

    &:hover {
      @apply bg-navy text-white;
    }
  }

  a {
    @apply text-blue border-b border-blue;

    &:hover {
      @apply text-navy;
    }
  }

  .callout {
    @apply p-4 rounded-lg bg-gray-200;
  }

  blockquote {
    @apply pl-4 border-l-4 border-blue;
  }

  h1,
  h2,
  h3,
  h4 {
    @apply font-marianne font-black;  
  }

  h1 { @apply text-3xl mt-8 mb-4 leading-tight; }
  h2 { @apply my-4; }

  p { 
    @apply mb-4;

    &:last-child {
      @apply mb-0;
    }
  }

  ul { @apply list-disc mb-4 }
  li { @apply ml-6 }
}
</style>
