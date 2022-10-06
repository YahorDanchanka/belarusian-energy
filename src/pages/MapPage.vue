<template>
  <div class="map">
    <div ref="mapElem" class="fit"></div>
    <AppPanel />
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import L from 'leaflet'
import 'leaflet-providers'
import 'leaflet/dist/leaflet.css'
import AppPanel from 'components/AppPanel.vue'

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
.map
  position: relative
  height: 100vh
  overflow: hidden
</style>
