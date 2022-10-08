<template>
  <q-page>
    <swiper class="slider" direction="vertical" @swiper="onSwiper">
      <swiper-slide>
        <AppMainSlide class="fit" />
      </swiper-slide>
      <swiper-slide class="slider__slide_pagination" v-for="station in stationInfo">
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
import { stationInfo } from 'src/content/stations'
import { Pagination } from 'src/types'
import AppMainSlide from 'components/AppMainSlide.vue'
import BaseInfo from 'components/BaseInfo.vue'
import AppPagination from 'components/AppPagination.vue'
import AppFooterSlide from 'components/AppFooterSlide.vue'

const swiperInstance = ref<SwiperClass>()
const paginationIcons = ref<Pagination>([
  { iconUrl: '/images/pagination/uran.png', value: 0 },
  { iconUrl: '/images/pagination/wind.png', value: 1 },
  { iconUrl: '/images/pagination/water.png', value: 2 },
  { iconUrl: '/images/pagination/gas.png', value: 3 },
  { iconUrl: '/images/pagination/sun.png', value: 4 },
])

function onSwiper(instance: SwiperClass): void {
  swiperInstance.value = instance
}
</script>
