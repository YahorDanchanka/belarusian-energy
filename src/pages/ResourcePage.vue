<template>
  <q-page>
    <swiper class="slider" direction="vertical">
      <swiper-slide>
        <AppMainSlide class="fit" />
      </swiper-slide>
      <swiper-slide v-for="resource in resources">
        <BaseInfo
          class="fit q-pa-lg"
          :caption="resource.caption"
          :content="resource.content"
          :iconUrl="resource.iconUrl"
          :titleIconUrl="resource.titleIconUrl"
        />
      </swiper-slide>
    </swiper>
  </q-page>
</template>

<script lang="ts" setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import { resources } from 'src/content/resources'
import AppMainSlide from 'components/AppMainSlide.vue'
import BaseInfo from 'components/BaseInfo.vue'
</script>
