<template>
  <div class="my-12 max-w-screen-md mx-auto">
    <iframe class="airtable-embed airtable-dynamic-height" :src="`https://airtable.com/embed/shr5005Oj0lXyygN2?prefill_Poste=${poste}&backgroundColor=yellow`" frameborder="0" onmousewheel="" width="100%" height="1072" style="background: transparent; border: 1px solid #ccc;"></iframe>
  </div>
</template>

<script>
  export default {
    props: {
      poste: String,
    },
    mounted() {
      let recaptchaScript = document.createElement('script')
      recaptchaScript.setAttribute('src', 'https://static.airtable.com/js/embed/embed_snippet_v1.js')
      document.head.appendChild(recaptchaScript)
    },
  }
</script>
