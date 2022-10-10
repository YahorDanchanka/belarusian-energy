<template>
  <q-page class="page">
    <img
      class="region"
      alt="Область Беларуси"
      ref="regionElements"
      v-for="(region, regionIndex) in regions"
      :src="region.imageUrl"
      :style="{ left: region.coords.left, top: region.coords.top }"
      :data-region-index="regionIndex"
    />
  </q-page>
</template>

<script lang="ts" setup>
import { onMounted, reactive, ref } from 'vue'
import { IRegion, Regions } from 'src/types'
import { getRegions } from 'src/content/regions'

const regions = reactive<Regions>(getRegions())
const regionElements = ref([])

function gluePuzzle(draggable: IRegion, droppable: IRegion): void {
  const areNeighbors: boolean = draggable.neighbors.includes(droppable)

  if (areNeighbors) {
    draggable.coords.top = draggable.fixed.top + 'px'
    draggable.coords.left = draggable.fixed.left + 'px'

    droppable.coords.top = droppable.fixed.top + 'px'
    droppable.coords.left = droppable.fixed.left + 'px'
  }
}

onMounted(() => {
  regionElements.value.forEach((ball: HTMLElement, regionIndex: number) => {
    let currentDroppable: HTMLElement | null = null

    ball.onmousedown = function (event) {
      let shiftX = event.clientX - ball.getBoundingClientRect().left
      let shiftY = event.clientY - ball.getBoundingClientRect().top

      ball.style.position = 'absolute'
      ball.style.zIndex = '1000'
      document.body.append(ball)

      moveAt(event.pageX, event.pageY)

      function moveAt(pageX: number, pageY: number) {
        regions[regionIndex].coords.left = pageX - shiftX + 'px'
        regions[regionIndex].coords.top = pageY - shiftY + 'px'
      }

      function onMouseMove(event: MouseEvent) {
        moveAt(event.pageX, event.pageY)

        ball.hidden = true
        let elemBelow = document.elementFromPoint(event.clientX, event.clientY)
        ball.hidden = false

        if (!elemBelow) return

        const droppableBelow = <HTMLElement>elemBelow.closest('.region')

        if (currentDroppable !== droppableBelow) {
          if (currentDroppable) {
            leaveDroppable(currentDroppable)
          }

          currentDroppable = droppableBelow

          if (currentDroppable) {
            enterDroppable(currentDroppable)
          }
        }
      }

      document.addEventListener('mousemove', onMouseMove)

      ball.onmouseup = function () {
        document.removeEventListener('mousemove', onMouseMove)
        ball.onmouseup = null

        if (currentDroppable) {
          const droppableRegionIndex = +currentDroppable.getAttribute('data-region-index')!
          // console.log(ball.style.left, ball.style.top)
          gluePuzzle(regions[regionIndex], regions[droppableRegionIndex])
        }
      }
    }

    function enterDroppable(elem: HTMLElement) {}

    function leaveDroppable(elem: HTMLElement) {}

    ball.ondragstart = function () {
      return false
    }
  })
})
</script>

<style lang="sass" scoped>
.region
  position: absolute
  transition: top 500ms, left 500ms
</style>
