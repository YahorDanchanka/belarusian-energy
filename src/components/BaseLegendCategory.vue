<template>
  <div class="legend__category">
    <header class="legend__header" :style="{ 'margin-bottom': isVisible ? '12px' : '0' }">
      <h3 class="legend__title">{{ category.name }}</h3>
      <div class="legend__action">
        <img
          class="legend__action-img"
          src="~assets/images/expand.png"
          alt="Иконка открытия"
          @click="toggleVisibility"
        />
      </div>
    </header>
    <ul class="legend__list" v-if="isVisible">
      <li class="legend__item" v-for="item in category.items">
        <div class="legend__marker" :style="{ 'background-color': item.color }"></div>
        {{ item.caption }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { ILegendCategory } from 'src/types'

defineProps<{ category: ILegendCategory }>()

const isVisible = ref<boolean>(false)

function toggleVisibility(): void {
  isVisible.value = !isVisible.value
}
</script>

<style lang="sass" scoped>
@import src/css/mixins

.legend__category
  margin-bottom: 15px

  &:last-child
    margin-bottom: 0

.legend__header
  display: flex
  flex-wrap: wrap
  align-items: center
  justify-content: space-between
  margin-bottom: 15px

.legend__title
  font-size: 1.875rem
  line-height: 2.3125rem
  font-weight: 700
  margin: 0

  +sm-block
    font-size: 1.5rem

.legend__action-img
  width: 45px
  cursor: pointer

  +sm-block
    width: 30px

.legend__list
  width: 100%
  list-style: none
  padding: 0
  margin: 0

.legend__item
  display: flex
  align-items: center
  margin-bottom: 10px

  &:last-child
    margin-bottom: 0

.legend__marker
  width: 24px
  height: 24px
  border-radius: 50%
  margin-right: 15px

  +sm-block
    width: 20px
    height: 20px
</style>
