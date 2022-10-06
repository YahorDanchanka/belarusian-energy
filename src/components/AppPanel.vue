<template>
  <div class="panel-wrapper">
    <BasePanel
      class="panel-wrapper__panel"
      :style="{ bottom: !isPanelVisible ? '-300px' : '0px' }"
      :resourceIcons="resourceIcons"
      :stationIcons="stationIcons"
      @hide="toggleVisibility"
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
import BasePanel from 'components/BasePanel.vue'

const resourceIcons = ref<string[]>([
  '/images/pagination/wood.png',
  '/images/pagination/dirt.png',
  '/images/pagination/ugol.png',
  '/images/pagination/neft.png',
  '/images/pagination/all.png',
])
const stationIcons = ref<string[]>([
  '/images/pagination/uran.png',
  '/images/pagination/wind.png',
  '/images/pagination/water.png',
  '/images/pagination/gas.png',
  '/images/pagination/sun.png',
  '/images/pagination/all.png',
])
const isPanelVisible = ref<boolean>(true)

function toggleVisibility(): void {
  isPanelVisible.value = !isPanelVisible.value
}
</script>

<style lang="sass" scoped>
.panel-wrapper
  position: absolute
  bottom: 10px
  left: 50%
  margin-left: -350px
  z-index: 999
  width: 700px

.panel-wrapper__panel
  transition: bottom 800ms
  position: relative
  z-index: 1000

.panel-wrapper__control
  position: absolute
  width: 25px
  right: 13px
  bottom: 10px
  transform: rotate(180deg)
  cursor: pointer
</style>
