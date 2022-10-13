<template>
  <q-page class="page_test">
    <div class="map">
      <div ref="mapElem" class="fit"></div>
      <div class="map__control map__control_draggable-cards">
        <div class="map__control_draggable-cards__row" v-for="station in chunk(stations, 2)">
          <div class="map__control_draggable-cards__draggable-card" :data-station-id="station[0].id">
            {{ station[0].name }}
          </div>
          <div class="map__control_draggable-cards__draggable-card" :data-station-id="station[1].id">
            {{ station[1].name }}
          </div>
        </div>
      </div>
    </div>
    <AppSuccessfulModal v-model="showModal" />
    <BaseCollapse class="map__control page__collapse" v-model="showRules" caption="Правила">
      Переместите название станции к соответствующей метке
    </BaseCollapse>
    <PagePagination class="map__control" />
  </q-page>
</template>

<script lang="ts" setup>
import { computed, onMounted, ref } from 'vue'
import { useQuasar } from 'quasar'
import L, { LatLngExpression } from 'leaflet'
import { filter, random, sample, chunk, find } from 'lodash'
import interact from 'interactjs'
import { InteractEvent } from '@interactjs/types'
import { IStation, Region } from 'src/types'
import { useMapStore } from 'stores/mapStore'
import 'leaflet-providers'
import 'leaflet/dist/leaflet.css'
import { createIcon, getColorByStationType } from 'src/content/stations'
import { dragMoveListener } from 'src/helpers'
import AppSuccessfulModal from 'components/AppSuccessfulModal.vue'
import BaseCollapse from 'components/BaseCollapse.vue'
import PagePagination from 'components/PagePagination.vue'
import AppStatBar from 'components/AppStatBar.vue'

interface ILocalStation extends IStation {
  isDroppableSuccess: boolean
}

const $q = useQuasar()
const mapStore = useMapStore()

let map: L.Map | undefined
const layerGroup: L.LayerGroup = L.layerGroup()
const mapElem = ref<HTMLElement>(null)
const stations = ref<ILocalStation[]>(getStations())
const showModal = ref<boolean>(false)
const showRules = ref<boolean>(true)

const isFinish = computed(() => stations.value.every((station) => station.isDroppableSuccess))

/** Возвращает 4 уникальные по области станции */
function getStations(): ILocalStation[] {
  const result: ILocalStation[] = []
  const usedRegions: Region[] = []

  for (let i = 0; i < 4; i++) {
    let randRegion: Region | undefined

    do {
      randRegion = random(Region.Brest, Region.Vitebsk)
    } while (usedRegions.includes(randRegion))

    usedRegions.push(randRegion)
    const station: ILocalStation = <ILocalStation>sample(filter(mapStore.stations, ['region', usedRegions[i]]))!

    station.isDroppableSuccess = false
    result.push(station)
  }

  return result
}

function showMarkers(): void {
  layerGroup.clearLayers()

  stations.value.forEach((station) => {
    if (!station.coords) return

    const marker = L.marker(station.coords, { icon: createIcon(getColorByStationType(station.type)) }).addTo(map!)
    const popup = L.popup({
      offset: L.point(0, 80),
      closeButton: false,
      autoClose: false,
      closeOnEscapeKey: false,
      closeOnClick: false,
    })
      .setLatLng(<LatLngExpression>station.coords)
      .addTo(map!)

    layerGroup.addLayer(marker)
    layerGroup.addLayer(popup)
    layerGroup.addTo(map!)

    popup.getElement()?.setAttribute('data-station-id', station.id)
  })
}

onMounted(() => {
  map = L.map(mapElem.value, {
    zoomControl: false,
    dragging: !!$q.platform.is.mobile,
    minZoom: !!$q.platform.is.mobile ? 6 : 7,
    maxZoom: 7,
    maxBounds: L.latLngBounds(
      L.latLng(56.16645553553367, 23.148533649131213),
      L.latLng(51.216634055031754, 32.79452974288121)
    ),
  }).setView([53.61, 28.042], !!$q.platform.is.mobile ? 6 : 7)
  map.removeControl(map.attributionControl)

  if (+process.env.HAS_ACCESS_TOKEN!) {
    L.tileLayer.provider('Jawg.Dark', { accessToken: process.env.MAP_ACCESS_TOKEN }).addTo(map)
  } else {
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map)
  }

  showMarkers()

  interact('.leaflet-popup').dropzone({
    accept: '.map__control_draggable-cards__draggable-card',
    ondrop(event: InteractEvent) {
      if (!event.relatedTarget) return

      const draggableStation = <ILocalStation | undefined>(
        find(stations.value, ['id', event.relatedTarget.getAttribute('data-station-id')])
      )

      const droppableStation = <ILocalStation | undefined>(
        find(stations.value, ['id', event.currentTarget.getAttribute('data-station-id')])
      )

      if (draggableStation && droppableStation && draggableStation.id === droppableStation.id) {
        droppableStation.isDroppableSuccess = true
      }

      if (isFinish.value) {
        showModal.value = true

        setTimeout(() => {
          showModal.value = false
          stations.value = getStations()
          showMarkers()
          document.querySelectorAll('.map__control_draggable-cards__draggable-card').forEach((card: HTMLElement) => {
            card.style.transform = 'translate(0, 0)'
            card.removeAttribute('data-x')
            card.removeAttribute('data-y')
          })
        }, 2500)
      }
    },
    ondragleave(event: InteractEvent) {
      if (!event.relatedTarget) return

      const draggableStation = <ILocalStation | undefined>(
        find(stations.value, ['id', event.relatedTarget.getAttribute('data-station-id')])
      )

      const droppableStation = <ILocalStation | undefined>(
        find(stations.value, ['id', event.currentTarget.getAttribute('data-station-id')])
      )

      if (draggableStation && droppableStation && draggableStation.id === droppableStation.id) {
        droppableStation.isDroppableSuccess = false
      }
    },
  })

  interact('.map__control_draggable-cards__draggable-card').draggable({
    listeners: {
      move: dragMoveListener,
    },
  })
})
</script>

<style lang="sass" scoped>
@import src/css/mixins

.map__control_draggable-cards
  display: flex
  flex-wrap: wrap
  justify-content: space-between
  bottom: 0
  width: 100%
  text-align: center
  padding: 0 125px

  +sm-block
    padding: 0 30px

  +xs-block
    padding: 0 10px

.map__control_draggable-cards__row
  +xs-block
    width: 100%

.map__control_draggable-cards__draggable-card
  display: flex
  justify-content: center
  align-items: center
  background: #D9D9D9
  border-radius: 10px
  margin-bottom: 20px
  font-size: 1.2rem
  line-height: 1rem
  user-select: none
  touch-action: none
  width: 191px
  height: 53px

  +xs-block
    padding: 3px 6px
    font-size: 1rem
    margin-bottom: 10px
    margin-left: auto
    margin-right: auto

:deep(.leaflet-popup-tip)
  display: none

:deep(.leaflet-popup-content-wrapper)
  background-color: transparent
  box-shadow: none
  border: 3px solid #000

:deep(.leaflet-popup-content)
  width: 191px
  height: 53px
  margin: 0

.map__control_draggable-cards__draggable-card
  touch-action: none
  user-select: none
  transform: translate(0px, 0px)
</style>
