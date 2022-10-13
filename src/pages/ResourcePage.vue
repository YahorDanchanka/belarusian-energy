<template>
  <q-page>
    <swiper class="slider" direction="vertical" :modules="[Mousewheel]" :mousewheel="true" @swiper="onSwiper">
      <swiper-slide>
        <AppMainSlide class="fit" />
      </swiper-slide>
      <swiper-slide class="slider__slide_pagination" v-for="resource in resourceInfo">
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
        <AppPagination v-if="swiperInstance" :icons="paginationIcons" :swiperInstance="swiperInstance" />
      </template>
    </swiper>
  </q-page>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { Mousewheel } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Swiper as SwiperClass } from 'swiper/types'
import 'swiper/css'
import { resourceInfo } from 'src/content/resources'
import { Pagination } from 'src/types'
import AppMainSlide from 'components/AppMainSlide.vue'
import BaseInfo from 'components/BaseInfo.vue'
import AppPagination from 'components/AppPagination.vue'
import AppFooterSlide from 'components/AppFooterSlide.vue'

const swiperInstance = ref<SwiperClass>()
const paginationIcons = ref<Pagination>([
  { iconUrl: '/images/pagination/wood.png', value: 0 },
  { iconUrl: '/images/pagination/dirt.png', value: 1 },
  { iconUrl: '/images/pagination/ugol.png', value: 2 },
  { iconUrl: '/images/pagination/neft.png', value: 3 },
  { iconUrl: '/images/pagination/gas.png', value: 4 },
  { iconUrl: '/images/pagination/water.png', value: 5 },
  { iconUrl: '/images/pagination/wind.png', value: 6 },
  { iconUrl: '/images/pagination/uran.png', value: 7 },
  { iconUrl: '/images/pagination/sun.png', value: 8 },
])

function onSwiper(instance: SwiperClass): void {
  swiperInstance.value = instance
}
</script>
