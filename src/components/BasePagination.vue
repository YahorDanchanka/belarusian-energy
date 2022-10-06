<template>
  <div class="pagination" ref="paginationElem">
    <div class="pagination__item" v-for="(icon, iconIndex) in icons" @click="$emit('change', iconIndex)">
      <img :src="icon" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

defineEmits(['change'])
defineProps<{ icons: string[] }>()

const paginationElem = ref<HTMLElement>(null)

defineExpose({ paginationElem })
</script>

<style lang="sass" scoped>
.pagination
  display: inline-block
  background: #2D2D2C
  padding: 8px 4px
  border-radius: 110px

.pagination_horizontal
  display: inline-flex
  flex-wrap: wrap
  padding: 4px 8px

  .pagination__item
    margin-bottom: 0
    margin-right: 7px

    &:last-child
      margin-right: 0

.pagination__item
  width: 50px
  height: 50px
  background: #D9D9D9
  border-radius: 50%
  padding: 7px
  margin-bottom: 7px
  cursor: pointer

  &:last-child
    margin-bottom: 0
</style>
