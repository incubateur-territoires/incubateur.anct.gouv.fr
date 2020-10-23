<template>
  <div class="container">
    <Header 
      :showMobileNav="showMobileNav"
      @toggle-mobile-nav="toggleMobileNav"
    />
    <NavBar
      :hideMobileNav="!showMobileNav"
    />
    <slot />
    <Footer />
  </div>
</template>

<script>
import Header from '~/components/Header.vue'
import NavBar from '~/components/NavBar.vue'
import Footer from '~/components/Footer.vue'

export default {
  components: {
    Header,
    NavBar,
    Footer
  },
  data() {
    return {
      showMobileNav: false
    }
  },
  methods: {
    toggleMobileNav() {
      this.showMobileNav = !this.showMobileNav
    }
  }
}
</script>

<style lang="scss">
.container {
  @apply max-w-full;

  .svg-inline--fa {
    display: inline-block;
    font-size: inherit;
    height: 1em;
    overflow: visible;
    vertical-align: -0.125em;
  }
}

body {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
}

@font-face {
  font-family: "Marianne";
  font-weight: 300;
  src: url("../assets/fonts/Marianne/Marianne-Light.ttf") format("ttf"),
        url("../assets/fonts/Marianne/Marianne-Light.woff") format("woff"),
        url("../assets/fonts/Marianne/Marianne-Light.woff2") format("woff2");
  font-display: fallback;
}

@font-face {
  font-family: "Marianne";
  font-weight: 400;
  src: url("../assets/fonts/Marianne/Marianne-Regular.ttf") format("ttf"),
        url("../assets/fonts/Marianne/Marianne-Regular.woff") format("woff"),
        url("../assets/fonts/Marianne/Marianne-Regular.woff2") format("woff2");
  font-display: fallback;
}

@font-face {
  font-family: "Marianne";
  font-weight: 700;
  src: url("../assets/fonts/Marianne/Marianne-Bold.ttf") format("ttf"),
        url("../assets/fonts/Marianne/Marianne-Bold.woff") format("woff"),
        url("../assets/fonts/Marianne/Marianne-Bold.woff2") format("woff2");
  font-display: fallback;
}

@font-face {
  font-family: "Marianne";
  font-weight: 800;
  src: url("../assets/fonts/Marianne/Marianne-ExtraBold.ttf") format("ttf"),
        url("../assets/fonts/Marianne/Marianne-ExtraBold.woff") format("woff"),
        url("../assets/fonts/Marianne/Marianne-ExtraBold.woff2") format("woff2");
  font-display: fallback;
}
</style>
