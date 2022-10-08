<template>
  <div class="pagination" ref="paginationElem">
    <div
      class="pagination__item"
      v-for="icon in icons"
      :class="{ pagination__item_active: selected.includes(icon.value) }"
      @click="update(icon.value)"
    >
      <img class="pagination__item-img" :src="icon.iconUrl" alt="Иконка" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { Pagination, PaginationItemValue } from 'src/types'
import { knock } from 'src/helpers'

const emit = defineEmits(['change'])
const props = defineProps<{ icons: Pagination; multiple?: boolean }>()

const paginationElem = ref<HTMLElement>(null)
const selected = ref<PaginationItemValue[]>([])

defineExpose({ paginationElem })

function update(value: PaginationItemValue): void {
  if (!props.multiple) {
    selected.value = []
  }

  selected.value = knock(selected.value, value)

  if (props.multiple) {
    emit('change', selected.value)
  } else {
    emit('change', selected.value[0])
  }
}
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
  user-select: none
  text-align: center

  &:last-child
    margin-bottom: 0

.pagination__item-img
  height: 36px

.pagination__item_active
  border: 3px solid #FFD900
</style>
