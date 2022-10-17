<template>
  <div class="main-slide">
    <div class="main-slide__decor-text">Прошлое и будущее страны - единство поколений</div>
    <img src="~assets/images/dark-belarus-map.png" alt="Темная карта Беларуси" class="main-slide__belarus" />
    <BaseHeader class="main-slide__header" :menu="menu" />
    <div class="main-slide__content">
      <h1>Беларусь</h1>
      <p class="main-slide__description">шагает в светлое будущее!</p>
    </div>
    <div style="overflow: hidden">
      <div class="main-slide__buttons">
        <BaseButton class="main-slide__button" imageUrl="./images/icons/puzzle.png" :to="{ name: 'resources' }">
          Ресурсы
        </BaseButton>
        <BaseButton class="main-slide__button" imageUrl="./images/icons/man.png" :to="{ name: 'people' }">
          Люди
        </BaseButton>
        <BaseButton class="main-slide__button" imageUrl="./images/icons/nuclear.png" :to="{ name: 'stations' }">
          Станции
        </BaseButton>
        <BaseButton class="main-slide__button" imageUrl="./images/icons/future.png" :to="{ name: 'future' }">
          Будущее
        </BaseButton>
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
  { caption: 'Тесты', to: { name: 'find-the-station' } },
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
    width: 440px
    height: 368.388px
    margin-top: -184.194px

  @media (max-width: 1100px)
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
  width: 582px
  font-size: 3.75rem
  line-height: 4.5625rem
  text-shadow: rgb(0, 0, 0) 2px 0 0, rgb(0, 0, 0) 1.75517px 0.958851px 0, rgb(0, 0, 0) 1.0806px 1.68294px 0, rgb(0, 0, 0) 0.141474px 1.99499px 0, rgb(0, 0, 0) -0.832294px 1.81859px 0, rgb(0, 0, 0) -1.60229px 1.19694px 0, rgb(0, 0, 0) -1.97998px 0.28224px 0, rgb(0, 0, 0) -1.87291px -0.701566px 0, rgb(0, 0, 0) -1.30729px -1.5136px 0, rgb(0, 0, 0) -0.421592px -1.95506px 0, rgb(0, 0, 0) 0.567324px -1.91785px 0, rgb(0, 0, 0) 1.41734px -1.41108px 0, rgb(0, 0, 0) 1.92034px -0.558831px 0
  font-weight: 700

  +xs-block
    width: 100%
    font-size: 2.2rem
    line-height: 3rem

.main-slide__decor-text
  position: absolute
  bottom: 110px
  font-size: 2.5rem
  line-height: 3.0625rem
  color: #FFFFFF
  text-shadow: rgb(0, 0, 0) 2px 0 0, rgb(0, 0, 0) 1.75517px 0.958851px 0, rgb(0, 0, 0) 1.0806px 1.68294px 0, rgb(0, 0, 0) 0.141474px 1.99499px 0, rgb(0, 0, 0) -0.832294px 1.81859px 0, rgb(0, 0, 0) -1.60229px 1.19694px 0, rgb(0, 0, 0) -1.97998px 0.28224px 0, rgb(0, 0, 0) -1.87291px -0.701566px 0, rgb(0, 0, 0) -1.30729px -1.5136px 0, rgb(0, 0, 0) -0.421592px -1.95506px 0, rgb(0, 0, 0) 0.567324px -1.91785px 0, rgb(0, 0, 0) 1.41734px -1.41108px 0, rgb(0, 0, 0) 1.92034px -0.558831px 0
  width: 630px
  font-style: italic
  font-weight: 500
  display: block

  @media (max-height: 650px)
    display: none

  @media (max-height: 710px)
    bottom: 80px

  +sm-block
    width: 100%
    bottom: 150px

  +sm-block
    display: none

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
