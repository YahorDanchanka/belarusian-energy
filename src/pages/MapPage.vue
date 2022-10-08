<template>
  <div class="map">
    <div ref="mapElem" class="fit"></div>
    <AppPanel class="map__control map__control_panel" />
    <AppLegend class="map__control map__control_legend" />
  </div>
</template>

<script lang="ts" setup>
import { onMounted, reactive, ref, watch } from 'vue'
import L from 'leaflet'
import { createIcon, getColorByStationType } from 'src/content/stations'
import { IStation } from 'src/types'
import { useMapStore } from 'stores/mapStore'
import 'leaflet-providers'
import 'leaflet/dist/leaflet.css'
import AppPanel from 'components/AppPanel.vue'
import AppLegend from 'components/AppLegend.vue'

const mapStore = useMapStore()

let map: L.Map | undefined
const mapElem = ref<HTMLElement>(null)
const markerGroup = reactive<L.LayerGroup>(L.layerGroup())

/** Добавляет маркер в группу маркеров, используя объект station */
function addMarkerByStation(station: IStation): void {
  if (station.coords) {
    markerGroup.addLayer(L.marker(station.coords, { icon: createIcon(getColorByStationType(station.type)) }))
  }
}

/** Показывает маркеры на карте */
function showMarkers(): void {
  if (!map) return

  markerGroup.clearLayers()
  mapStore.filteredStations.forEach((station) => addMarkerByStation(station))
  markerGroup.addTo(map)
}

onMounted(() => {
  map = L.map(mapElem.value, { zoomControl: false, minZoom: 6 }).setView([53.61, 28.042], 6)

  if (+process.env.HAS_ACCESS_TOKEN!) {
    L.tileLayer.provider('Jawg.Dark', { accessToken: process.env.MAP_ACCESS_TOKEN }).addTo(map)
  } else {
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map)
  }

  map.removeControl(map.attributionControl)
  showMarkers()
})

watch(
  () => mapStore.year,
  () => {
    showMarkers()
  }
)
</script>

<style lang="sass" scoped>
@import src/css/mixins

.map
  position: relative
  height: 100vh
  overflow: hidden

.map__control
  position: absolute
  z-index: 401

.map__control_panel
  position: absolute
  bottom: 10px
  left: 50%
  margin-left: -350px
  width: 700px

  +sm-block
    width: 580px
    margin-left: -290px

  +xs-block
    width: 310px
    margin-left: -155px

.map__control_legend
  width: 380px
  top: 30px
  right: 30px

  +xs-block
    width: 310px
    right: 50%
    margin-right: -155px
</style>
