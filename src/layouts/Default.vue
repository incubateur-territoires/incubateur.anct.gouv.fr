<template>
  <div class="container">
    <Header />    
    <slot />
    <Footer />
  </div>
</template>

<script>
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'

export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="scss">
body {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
}

@font-face {
  font-family: "Marianne";
  font-weight: 300;
  src: url("../assets/fonts/Marianne/Marianne-Light.ttf") format("ttf"),
        url("../assets/fonts/Marianne/Marianne-Light.woff") format("woff2"),
        url("../assets/fonts/Marianne/Marianne-Light.woff2") format("woff");
  font-display: fallback;
}

@font-face {
  font-family: "Marianne";
  font-weight: 400;
  src: url("../assets/fonts/Marianne/Marianne-Regular.ttf") format("ttf"),
        url("../assets/fonts/Marianne/Marianne-Regular.woff") format("woff2"),
        url("../assets/fonts/Marianne/Marianne-Regular.woff2") format("woff");
  font-display: fallback;
}

@font-face {
  font-family: "Marianne";
  font-weight: 700;
  src: url("../assets/fonts/Marianne/Marianne-Bold.ttf") format("ttf"),
        url("../assets/fonts/Marianne/Marianne-Bold.woff") format("woff2"),
        url("../assets/fonts/Marianne/Marianne-Bold.woff2") format("woff");
  font-display: fallback;
}

@font-face {
  font-family: "Marianne";
  font-weight: 800;
  src: url("../assets/fonts/Marianne/Marianne-ExtraBold.ttf") format("ttf"),
        url("../assets/fonts/Marianne/Marianne-ExtraBold.woff") format("woff2"),
        url("../assets/fonts/Marianne/Marianne-ExtraBold.woff2") format("woff");
  font-display: fallback;
}
</style>
