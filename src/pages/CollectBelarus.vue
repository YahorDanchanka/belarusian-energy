<template>
  <q-page class="page">
    <img
      class="region"
      alt="Область Беларуси"
      ref="regionElements"
      v-for="(region, regionIndex) in regions"
      :src="region.imageUrl"
      :style="{ left: `${region.coords.left}px`, top: `${region.coords.top}px` }"
      :data-region-index="regionIndex"
      :key="region.id"
    />
    <AppSuccessfulModal v-model="showModal" />
  </q-page>
</template>

<script lang="ts" setup>
import { computed, onMounted, onUnmounted, ref, watch } from 'vue'
import { isEqual } from 'lodash'
import { IRegion, Regions } from 'src/types'
import { getRegions } from 'src/content/regions'
import AppSuccessfulModal from 'components/AppSuccessfulModal.vue'

const regions = ref<Regions>(getRegions())
const regionElements = ref([])
const showModal = ref<boolean>(false)

const isFinish = computed(() => regions.value.every((region) => isEqual(region.coords, region.fixed)))

function gluePuzzle(draggableIndex: number, droppableIndex: number): void {
  const draggable: IRegion = regions.value[draggableIndex]
  const droppable: IRegion = regions.value[droppableIndex]
  const areNeighbors: boolean = draggable.neighbors.includes(droppable)

  if (areNeighbors) {
    draggable.coords.top = draggable.fixed.top
    draggable.coords.left = draggable.fixed.left

    droppable.coords.top = droppable.fixed.top
    droppable.coords.left = droppable.fixed.left
  }
}

onMounted(() => {
  regionElements.value.forEach((regionElem: HTMLElement, regionIndex: number) => {
    let currentDroppable: HTMLElement | null = null

    regionElem.onmousedown = function (event) {
      let shiftX = event.clientX - regionElem.getBoundingClientRect().left
      let shiftY = event.clientY - regionElem.getBoundingClientRect().top

      regionElem.style.position = 'absolute'
      regionElem.style.zIndex = '1'
      document.body.append(regionElem)

      moveAt(event.pageX, event.pageY)

      function moveAt(pageX: number, pageY: number) {
        regions.value[regionIndex].coords.left = pageX - shiftX
        regions.value[regionIndex].coords.top = pageY - shiftY
      }

      function onMouseMove(event: MouseEvent) {
        moveAt(event.pageX, event.pageY)

        regionElem.hidden = true
        let elemBelow = document.elementFromPoint(event.clientX, event.clientY)
        regionElem.hidden = false

        if (!elemBelow) return

        const droppableBelow = <HTMLElement>elemBelow.closest('.region')

        if (currentDroppable !== droppableBelow) {
          currentDroppable = droppableBelow
        }
      }

      document.addEventListener('mousemove', onMouseMove)

      regionElem.onmouseup = function () {
        document.removeEventListener('mousemove', onMouseMove)
        regionElem.onmouseup = null

        if (currentDroppable) {
          const droppableRegionIndex = +currentDroppable.getAttribute('data-region-index')!
          gluePuzzle(regionIndex, droppableRegionIndex)
        }
      }
    }

    regionElem.ondragstart = function () {
      return false
    }
  })
})

onUnmounted(() => {
  document.querySelectorAll('.region').forEach((region) => region.remove())
})

watch(isFinish, () => {
  if (isFinish.value) {
    showModal.value = true

    setTimeout(() => {
      showModal.value = false
      regions.value = getRegions()
      regionElements.value = []
    }, 2500)
  }
})
</script>

<style lang="sass" scoped>
.region
  position: absolute
  transition: top 500ms, left 500ms
</style>
