<template>
  <vue-final-modal v-slot="{ close }" v-bind="$attrs" classes="modal" content-class="modal__window">
    <header class="modal__header">
      <div class="modal__title">
        {{ $attrs.station.name }} (г. {{ $attrs.station.year ? $attrs.station.year : 'неизвестно' }})
      </div>
      <q-icon class="modal__close" name="close" size="sm" @click="close" />
    </header>
    <div class="modal__content">
      <template v-if="$attrs.station.images && $attrs.station.images.length > 0">
        <swiper class="swiper" :slides-per-view="1">
          <swiper-slide class="swiper__slide" v-for="imageSrc in $attrs.station.images">
            <img :src="imageSrc" />
          </swiper-slide>
        </swiper>
      </template>
      <div v-if="$attrs.station.content" v-html="$attrs.station.content"></div>
    </div>
  </vue-final-modal>
</template>

<script lang="ts" setup>
import { VueFinalModal } from 'vue-final-modal'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
</script>

<style lang="sass" scoped>
:deep(.modal)
  display: flex
  flex-wrap: wrap
  align-items: center
  justify-content: center

:deep(.modal__window)
  background-color: white
  border-radius: 8px
  padding: 16px
  width: 90%
  max-width: 800px
  max-height: 90%
  overflow: auto

.modal__header
  display: flex
  flex-wrap: wrap
  justify-content: space-between
  align-items: center
  margin-bottom: 8px

.modal__title
  font-size: 1.5rem

.modal__close
  cursor: pointer

.modal__content
  font-weight: 500

.modal__content p:last-child
  margin-bottom: 0

.swiper__slide
  text-align: center
</style>
