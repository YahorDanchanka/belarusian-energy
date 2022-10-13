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

defineExpose({ paginationElem, updateState })

function update(value: PaginationItemValue): void {
  updateState(value)

  if (props.multiple) {
    emit('change', selected.value)
  } else {
    emit('change', selected.value[0])
  }
}

function updateState(value: PaginationItemValue): void {
  if (!props.multiple) {
    selected.value = []
  }

  selected.value = knock(selected.value, value)
}
</script>
