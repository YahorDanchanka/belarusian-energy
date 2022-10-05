<template>
  <q-page>
    <swiper class="slider" direction="vertical">
      <swiper-slide>
        <AppMainSlide class="fit" />
      </swiper-slide>
      <swiper-slide>
        <BaseInfo class="fit q-pa-lg" iconUrl="/images/resources/trees.png" titleIconUrl="/images/resources/boards.png">
          Дерево — многолетнее растение с одревесневающим прямостоячим главным стеблем – стволом. Энергия на базе
          древесины также является важным резервным топливом при возникновении чрезвычайных ситуаций.<br />
          В настоящее время общая площадь лесного фонда Республики Беларусь составляет 9,8 млн га. Общий запас древесины
          оценивается в 1,7 млрд м3, а ежегодный средний прирост составляет 32 млн м3.<br />
          В хозяйственный оборот ежегодно вовлекается большой объем древесных ресурсов. В 2021 г. площадь рубок леса
          составила 494,1 тыс. га и было заготовлено 27,4 млн м3 ликвидной древесины.
        </BaseInfo>
      </swiper-slide>
    </swiper>
  </q-page>
</template>

<script lang="ts" setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import AppMainSlide from 'components/AppMainSlide.vue'
import BaseInfo from 'components/BaseInfo.vue'
</script>
