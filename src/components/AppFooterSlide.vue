<template>
  <div class="footer-slide">
    <div class="footer-slide__map">
      <img class="footer-slide__map-img" src="~assets/images/belarus-map.png" alt="Карта Беларуси" />
    </div>
    <div class="footer-slide__button">
      <router-link :to="{ name: 'map' }">
        <img class="footer-slide__button-img" src="~assets/images/map-button.png" alt="Кнопка перехода на карту" />
      </router-link>
    </div>
    <BaseFooter class="footer-slide__footer" :links="links">
      Учереждение образования “Гомельский государственный аграрно-экономический колледж”
    </BaseFooter>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { Social } from 'src/types'
import BaseFooter from 'components/BaseFooter.vue'

const links = ref<Social>([
  { icon: './images/icons/telegram.png', href: 'https://t.me/ggaekinf' },
  { icon: './images/icons/vk.png', href: 'https://vk.com/ggaek' },
  { icon: './images/icons/instagram.png', href: 'https://www.instagram.com/ggaek_gomel/' },
  { icon: './images/icons/web-link.png', href: 'http://ggaek.by/' },
])
</script>

<style lang="sass" scoped>
@import src/css/mixins

.footer-slide
  display: flex
  flex-wrap: wrap
  align-items: center

.footer-slide__map
  width: 50%
  text-align: center

  +xs-block
    width: 100%

.footer-slide__map-img
  width: 90%

.footer-slide__button
  width: 50%
  text-align: center

  +xs-block
    width: 100%

.footer-slide__button-img
  max-width: 614px

  +md-block
    max-width: 90%

.footer-slide__footer
  width: 100%
  align-self: flex-end
</style>
