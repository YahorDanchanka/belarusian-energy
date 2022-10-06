<template>
  <q-page>
    <swiper class="slider" direction="vertical" @swiper="onSwiper">
      <swiper-slide>
        <AppMainSlide class="fit" />
      </swiper-slide>
      <swiper-slide class="slider__slide_pagination" v-for="resource in resources">
        <BaseInfo
          class="fit q-pa-lg"
          :caption="resource.caption"
          :content="resource.content"
          :iconUrl="resource.iconUrl"
          :titleIconUrl="resource.titleIconUrl"
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
import { resources } from 'src/content/resources'
import AppMainSlide from 'components/AppMainSlide.vue'
import BaseInfo from 'components/BaseInfo.vue'
import AppPagination from 'components/AppPagination.vue'
import AppFooterSlide from 'components/AppFooterSlide.vue'

const swiperInstance = ref<SwiperClass>()
const paginationIcons = ref<string[]>([
  '/images/pagination/wood.png',
  '/images/pagination/dirt.png',
  '/images/pagination/ugol.png',
  '/images/pagination/neft.png',
  '/images/pagination/gas.png',
  '/images/pagination/water.png',
  '/images/pagination/wind.png',
  '/images/pagination/uran.png',
  '/images/pagination/sun.png',
])

function onSwiper(instance: SwiperClass): void {
  swiperInstance.value = instance
}
</script>
