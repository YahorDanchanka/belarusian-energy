import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import { stations as stationData } from 'src/content/stations'
import { resources as resourceData } from 'src/content/resources'
import { IResource, ResourceType, Stations, StationType } from 'src/types'

export const useMapStore = defineStore('map', () => {
  const stations = ref<Stations>(stationData)
  const year = ref<number>(1921)
  const stationTypes = ref<StationType[]>([])
  const resources = ref<IResource[]>(resourceData)
  const resourceTypes = ref<ResourceType[]>([])
  const isFirstVisit = ref<boolean>(true)

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

  const filteredResources = computed<IResource[]>(() =>
    resources.value.filter(
      (resource) => (resource.year ? resource.year <= year.value : true) && resourceTypes.value.includes(resource.type)
    )
  )

  return { stations, year, stationTypes, resources, resourceTypes, filteredStations, filteredResources, isFirstVisit }
})
