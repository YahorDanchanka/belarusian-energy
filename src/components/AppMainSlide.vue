<template>
  <div class="main-slide">
    <img src="~assets/images/dark-belarus-map.png" alt="Темная карта Беларуси" class="main-slide__belarus" />
    <BaseHeader class="main-slide__header" :menu="menu" />
    <div class="main-slide__content">
      <h1>Беларусь</h1>
      <p class="main-slide__description">myvide är fas dode vihås.myvide är fas dode vihås.myvide är fas dode vihås.</p>
    </div>
    <div style="overflow: hidden">
      <div class="main-slide__buttons">
        <BaseButton class="main-slide__button" imageUrl="/images/icons/puzzle.png" :to="{ name: 'resources' }">
          Ресурсы
        </BaseButton>
        <BaseButton class="main-slide__button" to="/404" imageUrl="/images/icons/man.png">Люди</BaseButton>
        <BaseButton class="main-slide__button" imageUrl="/images/icons/nuclear.png" :to="{ name: 'stations' }">
          Станции
        </BaseButton>
        <BaseButton class="main-slide__button" to="/404" imageUrl="/images/icons/future.png">Будущее</BaseButton>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { Menu } from 'src/types'
import BaseHeader from 'components/BaseHeader.vue'
import BaseButton from 'components/BaseButton.vue'

const menu = ref<Menu>([
  { caption: 'Карта', to: { name: 'map' } },
  { caption: 'Тесты', to: '/404' },
])
</script>

<style lang="sass" scoped>
@import src/css/mixins

.main-slide
  display: flex
  flex-direction: column
  justify-content: space-between
  background: #1E1E1E url(~assets/images/main-background.png) no-repeat center center / cover
  padding: 15px
  position: relative

.main-slide__belarus
  position: absolute
  width: 597px
  height: 499px
  top: 50%
  right: 5%
  margin-top: -249.5px

  +md-block
    display: none

.main-slide__header
  max-width: 1110px
  margin: 0 auto
  width: 100%

.main-slide__content
  color: #D9D9D9
  font-style: italic
  font-size: 2.5rem
  font-weight: 500
  line-height: 3.0625rem

  +sm-block
    font-size: 2rem
    line-height: 2.8rem

  +xs-block
    font-size: 1.5rem
    line-height: 2.4rem

.main-slide__description
  width: 520px

  +xs-block
    width: 100%

$buttonXIndent: 53px
$buttonYIndent: 15px

.main-slide__buttons
  display: flex
  flex-wrap: wrap
  margin: 0 (-$buttonXIndent / 2) (-$buttonYIndent) (-$buttonXIndent / 2)

  +sm-block
    $buttonXIndent: 15px
    margin: 0 (-$buttonXIndent / 2) (-$buttonYIndent) (-$buttonXIndent / 2)

  +sm-block
    $buttonXIndent: 15px
    $buttonYIndent: 10px
    margin: 0 (-$buttonXIndent / 2) (-$buttonYIndent) (-$buttonXIndent / 2)

.main-slide__button
  width: calc(100% / 4 - #{$buttonXIndent})
  margin: 0 $buttonXIndent / 2 $buttonYIndent $buttonXIndent / 2

  +sm-block
    $buttonXIndent: 15px
    width: calc(100% / 2 - #{$buttonXIndent})
    margin: 0 $buttonXIndent / 2 $buttonYIndent $buttonXIndent / 2

  +xs-block
    $buttonXIndent: 15px
    $buttonYIndent: 10px
    width: calc(100% - #{$buttonXIndent})
    margin: 0 $buttonXIndent / 2 $buttonYIndent $buttonXIndent / 2
</style>
