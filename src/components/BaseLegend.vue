<template>
  <div class="legend">
    <BaseLegendCategory v-for="category in legend" :category="category" />
  </div>
</template>

<script lang="ts" setup>
import { Legend } from 'src/types'
import BaseLegendCategory from 'components/BaseLegendCategory.vue'

defineProps<{ legend: Legend }>()
</script>

<style lang="sass" scoped>
@import src/css/mixins

.legend
  background: #D9D9D9
  font-size: 1.25rem
  line-height: 1.5rem
  color: #2F2F2E
  padding: 11px 17px
  border-radius: 5px

  +sm-block
    font-size: 1.1rem
</style>
