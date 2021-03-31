<template>
  <div id="map"></div>
</template>

<script>
import { Map, GeolocateControl } from 'maplibre-gl'

const mapTilerKey = "get_your_own_OpIi9ZULNHzrESv6T2vL"
// at https://cloud.maptiler.com/account/keys/


export default {
  mounted: function () {
    const map = new Map({
      container: "map",
      style: `https://api.maptiler.com/maps/hybrid/style.json?key=${mapTilerKey}`,
      center: [1, 15],
      zoom: 3
    })
  }
}
</script>

<style lang="scss" scoped>
#map {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
}
</style>
