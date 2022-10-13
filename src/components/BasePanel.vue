<template>
  <div class="panel">
    <div class="panel__action">
      <img class="panel__action-img" src="~assets/images/hide-button.png" alt="Кнопка скрыть" @click="$emit('hide')" />
    </div>
    <q-slider
      class="panel__slider"
      color="white"
      label-color="white"
      label-text-color="black"
      thumb-size="50px"
      thumb-color="dark"
      track-size="12px"
      :modelValue="modelValue"
      :min="1921"
      :max="2022"
      label
      @update:modelValue="(newValue) => $emit('update:modelValue', newValue)"
    />
    <div class="panel__controls">
      <BasePagination
        class="panel__control pagination_horizontal"
        :icons="resourceIcons"
        multiple
        @change="(value) => onPaginationChange('resources', value)"
      />
      <div class="panel__divider"></div>
      <BasePagination
        class="panel__control pagination_horizontal"
        :icons="stationIcons"
        multiple
        @change="(value) => onPaginationChange('stations', value)"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Pagination, PaginationItemValue } from 'src/types'
import BasePagination from 'components/BasePagination.vue'

const emit = defineEmits(['hide', 'update:modelValue', 'pagination'])
defineProps<{ resourceIcons: Pagination; stationIcons: Pagination; modelValue: number }>()

function onPaginationChange(type: 'resources' | 'stations', items: PaginationItemValue[]) {
  emit('pagination', type, items)
}
</script>

<style lang="sass" scoped>
@import src/css/mixins

.panel
  background: #1E1B1B
  border-radius: 20px
  padding: 10px 13px 40px 13px
  text-align: center

.panel__action-img
  width: 25px
  cursor: pointer

.panel__action
  text-align: right

.panel__slider
  width: 80%
  margin-bottom: 40px

/** Create a circle */
:deep(.q-slider__thumb)
  &::after
    $size: 20px
    content: ''
    width: $size
    height: $size
    position: absolute
    border-radius: 50%
    background-color: #fff
    left: 50%
    top: 50%
    margin-top: -$size / 2
    margin-left: -$size / 2

/** Change label font size */
:deep(.q-slider__text)
  font-size: 1.125rem

.panel__controls
  display: flex
  flex-wrap: wrap
  align-items: center
  justify-content: space-between

  +xs-block
    justify-content: center

.panel__divider
  width: 2px
  height: 43px
  background-color: #fff

  +xs-block
    display: none

.panel__control
  +xs-block
    margin-bottom: 15px

    &:last-child
        margin-bottom: 0
</style>
