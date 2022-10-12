<template>
  <q-page class="page">
    <img
      class="region"
      alt="Область Беларуси"
      v-for="(region, regionIndex) in regions"
      :src="region.imageUrl"
      :class="{ region_disabled: region.id === RegionType.Minsk }"
      :style="{ left: `${region.coords.left}px`, top: `${region.coords.top}px` }"
      :data-region-index="regionIndex"
      :key="region.id"
    />
    <AppSuccessfulModal v-model="showModal" />
  </q-page>
</template>

<script lang="ts" setup>
import { computed, onMounted, ref } from 'vue'
import interact from 'interactjs'
import { InteractEvent } from '@interactjs/types'
import { Regions, Region as RegionType } from 'src/types'
import { getRegions } from 'src/content/regions'
import AppSuccessfulModal from 'components/AppSuccessfulModal.vue'

const regions = ref<Regions>(getRegions())
const showModal = ref<boolean>(false)

/** Регионы расставлены правильно, если разница между текущими координатами и правильными координатами <= 10 */
const isFinish = computed(() =>
  regions.value.every(
    (region) =>
      Math.abs(region.coords.top - region.fixed.top) <= 10 && Math.abs(region.coords.left - region.fixed.left) <= 10
  )
)

onMounted(() => {
  interact('.region').draggable({
    ignoreFrom: '.region_disabled',
    listeners: {
      move(event: InteractEvent) {
        const target: HTMLElement = <HTMLElement>event.target
        const regionIndex: number = +target.getAttribute('data-region-index')!

        const x: number = regions.value[regionIndex].coords.left + event.dx
        const y: number = regions.value[regionIndex].coords.top + event.dy

        regions.value[regionIndex].coords.left = x
        regions.value[regionIndex].coords.top = y

        target.setAttribute('data-x', x.toString())
        target.setAttribute('data-y', y.toString())
      },
    },
    onend() {
      if (isFinish.value) {
        showModal.value = true

        setTimeout(() => {
          showModal.value = false
          regions.value = getRegions()
          document.querySelectorAll('.region').forEach((region) => region.classList.add('region_animated'))

          setTimeout(() => {
            document.querySelectorAll('.region').forEach((region) => region.classList.remove('region_animated'))
          }, 500)
        }, 2500)

        return
      }
    },
  })
})
</script>

<style lang="sass" scoped>
.region
  position: absolute
  user-select: none
  touch-action: none

.region_animated
  transition: top 500ms, left 500ms
</style>
