<template>
  <q-page>
    <swiper class="slider" direction="vertical" @swiper="onSwiper">
      <swiper-slide>
        <AppMainSlide class="fit" />
      </swiper-slide>
      <swiper-slide class="slider__slide_pagination" v-for="person in people">
        <BasePerson class="fit q-pa-lg" :person="person" />
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
import { people } from 'src/content/people'
import AppMainSlide from 'components/AppMainSlide.vue'
import AppPagination from 'components/AppPagination.vue'
import AppFooterSlide from 'components/AppFooterSlide.vue'
import BasePerson from 'components/BasePerson.vue'

const swiperInstance = ref<SwiperClass>()
const paginationIcons = ref<Pagination>([
  { iconUrl: '/images/pagination/arrow-up.svg', value: 'prev' },
  { iconUrl: '/images/pagination/arrow-down.svg', value: 'next' },
])

function onSwiper(instance: SwiperClass): void {
  swiperInstance.value = instance
}
</script>
