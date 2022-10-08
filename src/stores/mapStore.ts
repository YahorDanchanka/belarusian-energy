import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import { stations as stationData } from 'src/content/stations'
import { Stations, StationType } from 'src/types'

export const useMapStore = defineStore('map', () => {
  const stations = ref<Stations>(stationData)
  const year = ref<number>(1921)
  const stationTypes = ref<StationType[]>([])

  /**
   * Отфильтрованные станции
   *  1. По году (все станции, которые существуют в year году)
   *     Если год основания станции неизестен, то станция показывается в любом случае
   *  2. По типу
   */
  const filteredStations = computed<Stations>(() =>
    stations.value.filter(
      (station) => (station.year ? station.year <= year.value : true) && stationTypes.value.includes(station.type)
    )
  )

  return { stations, year, stationTypes, filteredStations }
})
