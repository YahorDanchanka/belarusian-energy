<template>
  <q-page>
    <swiper class="slider" direction="vertical" @swiper="onSwiper">
      <swiper-slide>
        <AppMainSlide class="fit" />
      </swiper-slide>
      <swiper-slide class="slider__slide_pagination" v-for="station in stations">
        <BaseInfo
          class="fit q-pa-lg"
          :caption="station.caption"
          :content="station.content"
          :iconUrl="station.iconUrl"
          :titleIconUrl="station.titleIconUrl"
        />
      </swiper-slide>
      <swiper-slide>
        <AppFooterSlide class="fit" />
      </swiper-slide>
      <template v-slot:container-start>
        <AppPagination :icons="paginationIcons" :swiperInstance="swiperInstance" />
      </template>
    </swiper>
  </q-page>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Swiper as SwiperClass } from 'swiper/types'
import 'swiper/css'
import { stations } from 'src/content/stations'
import AppMainSlide from 'components/AppMainSlide.vue'
import BaseInfo from 'components/BaseInfo.vue'
import AppPagination from 'components/AppPagination.vue'
import AppFooterSlide from 'components/AppFooterSlide.vue'

const swiperInstance = ref<SwiperClass>()
const paginationIcons = ref<string[]>([
  '/images/pagination/uran.png',
  '/images/pagination/wind.png',
  '/images/pagination/water.png',
  '/images/pagination/gas.png',
  '/images/pagination/sun.png',
])

function onSwiper(instance: SwiperClass): void {
  swiperInstance.value = instance
}
</script>
