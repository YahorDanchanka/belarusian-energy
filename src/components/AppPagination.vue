<template>
  <BasePagination
    class="pagination"
    ref="paginationComponent"
    :style="paginationStyles"
    :icons="icons"
    @change="setSlide"
  />
</template>

<script lang="ts" setup>
import { computed, onMounted, ref } from 'vue'
import { Swiper as SwiperClass } from 'swiper/types'
import BasePagination from 'components/BasePagination.vue'

const props = defineProps<{ icons: string[]; swiperInstance: SwiperClass }>()

const paginationComponent = ref<{ paginationElem: HTMLElement } | null>(null)
const verticalIndent = ref<number>(0)

const isPaginationVisible = computed<boolean>(
  () =>
    !!props.swiperInstance &&
    props.swiperInstance.activeIndex > 0 &&
    props.swiperInstance.activeIndex !== props.swiperInstance.slides.length - 1
)
const paginationStyles = computed<object>(() => {
  const styles: { [key: string]: string } = {
    'margin-top': `${verticalIndent.value}px`,
  }

  if (!isPaginationVisible.value) {
    styles['right'] = '10000px'
  }

  return styles
})

function setSlide(index: number): void {
  props.swiperInstance.slideTo(index + 1)
}

onMounted(() => {
  if (paginationComponent.value) {
    const height = paginationComponent.value.paginationElem.offsetHeight
    verticalIndent.value = -(height / 2)
  }
})
</script>

<style lang="sass" scoped>
@import src/css/mixins

.pagination
  position: fixed
  z-index: 9999
  top: 50%
  right: 30px

  +sm-block
    right: 15px

  +xs-block
    display: none
</style>
