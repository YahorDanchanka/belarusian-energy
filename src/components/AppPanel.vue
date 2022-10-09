<template>
  <div class="panel-wrapper">
    <BasePanel
      class="panel-wrapper__panel"
      v-model="mapStore.year"
      :style="{ bottom: !isPanelVisible ? '-300px' : '0px' }"
      :resourceIcons="resourceIcons"
      :stationIcons="stationIcons"
      @hide="toggleVisibility"
      @pagination="onPagination"
    />
    <img
      class="panel-wrapper__control"
      src="~assets/images/hide-button.png"
      alt="Кнопка скрыть"
      @click="toggleVisibility"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { Pagination, PaginationItemValue, StationType } from 'src/types'
import { useMapStore } from 'stores/mapStore'
import BasePanel from 'components/BasePanel.vue'

const mapStore = useMapStore()

const resourceIcons = ref<Pagination>([
  { iconUrl: '/images/pagination/wood.png', value: 0 },
  { iconUrl: '/images/pagination/dirt.png', value: 1 },
  { iconUrl: '/images/pagination/ugol.png', value: 2 },
  { iconUrl: '/images/pagination/neft.png', value: 3 },
  { iconUrl: '/images/pagination/all.png', value: 'all' },
])
const stationIcons = ref<Pagination>([
  { iconUrl: '/images/pagination/uran.png', value: StationType.Nuclear },
  { iconUrl: '/images/pagination/wind.png', value: StationType.Wind },
  { iconUrl: '/images/pagination/water.png', value: StationType.Hydroelectric },
  { iconUrl: '/images/pagination/gas.png', value: StationType.Thermal },
  { iconUrl: '/images/pagination/sun.png', value: StationType.Solar },
  { iconUrl: '/images/pagination/all.png', value: 'all' },
])
const isPanelVisible = ref<boolean>(true)

function toggleVisibility(): void {
  isPanelVisible.value = !isPanelVisible.value
}

function onPagination(type: 'resources' | 'stations', items: PaginationItemValue[]): void {
  if (type === 'stations') {
    /** Добавляем в фильтры все нужные станции, если выбран фильтр "Всё" */
    if (items.includes('all')) {
      mapStore.stationTypes = [
        StationType.Nuclear,
        StationType.Wind,
        StationType.Hydroelectric,
        StationType.Thermal,
        StationType.Solar,
        StationType.StateDistrict,
        StationType.MiniThermal,
      ]

      return
    }

    mapStore.stationTypes = <StationType[]>items.filter((paginationItem) => typeof paginationItem === 'number')

    /** Добавляем ГРЭС, если в фильтрах есть ТЭЦ */
    if (
      mapStore.stationTypes.includes(StationType.Thermal) &&
      !mapStore.stationTypes.includes(StationType.StateDistrict)
    ) {
      mapStore.stationTypes.push(StationType.StateDistrict)
    }

    /** Добавляем МТЭЦ, если в фильтрах есть ТЭЦ */
    if (
      mapStore.stationTypes.includes(StationType.Thermal) &&
      !mapStore.stationTypes.includes(StationType.MiniThermal)
    ) {
      mapStore.stationTypes.push(StationType.MiniThermal)
    }
  }
}
</script>

<style lang="sass" scoped>
@import src/css/mixins

.panel-wrapper
  position: relative
  background-color: red

.panel-wrapper__panel
  transition: bottom 800ms
  position: absolute
  z-index: 402

.panel-wrapper__control
  position: absolute
  width: 25px
  right: 40px
  bottom: 10px
  transform: rotate(180deg)
  cursor: pointer

  +sm-block
    right: 30px

  +xs-block
    right: 13px

:deep(.panel__control .pagination__item)
  +sm-block
    width: 40px
    height: 40px

  +xs-block
    width: 35px
    height: 35px
</style>
