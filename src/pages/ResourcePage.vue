<template>
  <q-page>
    <swiper class="slider" direction="vertical">
      <swiper-slide>
        <AppMainSlide class="fit" />
      </swiper-slide>
    </swiper>
  </q-page>
</template>

<script lang="ts" setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import AppMainSlide from 'components/AppMainSlide.vue'
</script>
