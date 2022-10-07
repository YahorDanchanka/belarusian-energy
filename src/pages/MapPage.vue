<template>
  <div class="map">
    <div ref="mapElem" class="fit"></div>
    <AppPanel />
    <AppLegend class="map__control map__control_legend" />
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import L from 'leaflet'
import 'leaflet-providers'
import 'leaflet/dist/leaflet.css'
import AppPanel from 'components/AppPanel.vue'
import AppLegend from 'components/AppLegend.vue'

let map: L.Map | undefined
const mapElem = ref<HTMLElement>(null)

onMounted(() => {
  map = L.map(mapElem.value, { zoomControl: false, minZoom: 6 }).setView([53.61, 28.042], 6)

  if (+process.env.HAS_ACCESS_TOKEN!) {
    L.tileLayer.provider('Jawg.Dark', { accessToken: process.env.MAP_ACCESS_TOKEN }).addTo(map)
  } else {
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map)
  }

  map.removeControl(map.attributionControl)
})
</script>

<style lang="sass" scoped>
@import src/css/mixins

.map
  position: relative
  height: 100vh
  overflow: hidden

.map__control
  position: absolute
  z-index: 99999

.map__control_legend
  width: 380px
  top: 30px
  right: 30px

  +xs-block
    width: 310px
    right: 50%
    margin-right: -155px
</style>
