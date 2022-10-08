<template>
  <q-page>
    <swiper class="slider" direction="vertical" @swiper="onSwiper">
      <swiper-slide>
        <AppMainSlide class="fit" />
      </swiper-slide>
      <swiper-slide class="slider__slide_pagination" v-for="future in futureInfo">
        <BaseInfo
          class="fit q-pa-lg"
          :caption="future.caption"
          :content="future.content"
          :iconUrl="future.iconUrl"
          :titleIconUrl="future.titleIconUrl"
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
import { Pagination } from 'src/types'
import { futureInfo } from 'src/content/future'
import AppMainSlide from 'components/AppMainSlide.vue'
import AppPagination from 'components/AppPagination.vue'
import AppFooterSlide from 'components/AppFooterSlide.vue'
import BaseInfo from 'components/BaseInfo.vue'

const swiperInstance = ref<SwiperClass>()
const paginationIcons = ref<Pagination>([
  { iconUrl: '/images/pagination/arrow-up.svg', value: 'prev' },
  { iconUrl: '/images/pagination/arrow-down.svg', value: 'next' },
])

function onSwiper(instance: SwiperClass): void {
  swiperInstance.value = instance
}
</script>
