<template>
  <div class="info">
    <div class="text-center">
      <h2 class="info__title">
        Дерево
        <img alt="Иконка" class="info__title-img" :src="titleIconUrl" />
      </h2>
    </div>
    <div class="info__row">
      <div class="info__icon">
        <img alt="Иконка" :src="iconUrl" />
      </div>
      <div class="info__content">
        <slot />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps<{ iconUrl: string; titleIconUrl: string }>()
</script>

<style lang="sass" scoped>
@import src/css/mixins

.info
  display: flex
  //flex-wrap: wrap
  flex-direction: column
  justify-content: center
  color: #D9D9D9

.info__title
  position: relative
  display: inline-block
  margin: 0 0 30px 0
  font-size: 6.25rem
  line-height: 7.625rem
  text-shadow: rgb(0, 0, 0) 4px 0 0, rgb(0, 0, 0) 3.87565px 0.989616px 0, rgb(0, 0, 0) 3.51033px 1.9177px 0, rgb(0, 0, 0) 2.92676px 2.72656px 0, rgb(0, 0, 0) 2.16121px 3.36588px 0, rgb(0, 0, 0) 1.26129px 3.79594px 0, rgb(0, 0, 0) 0.282949px 3.98998px 0, rgb(0, 0, 0) -0.712984px 3.93594px 0, rgb(0, 0, 0) -1.66459px 3.63719px 0, rgb(0, 0, 0) -2.51269px 3.11229px 0, rgb(0, 0, 0) -3.20457px 2.39389px 0, rgb(0, 0, 0) -3.69721px 1.52664px 0, rgb(0, 0, 0) -3.95997px 0.56448px 0, rgb(0, 0, 0) -3.97652px -0.432781px 0, rgb(0, 0, 0) -3.74583px -1.40313px 0, rgb(0, 0, 0) -3.28224px -2.28625px 0, rgb(0, 0, 0) -2.61457px -3.02721px 0, rgb(0, 0, 0) -1.78435px -3.57996px 0, rgb(0, 0, 0) -0.843183px -3.91012px 0, rgb(0, 0, 0) 0.150409px -3.99717px 0, rgb(0, 0, 0) 1.13465px -3.8357px 0, rgb(0, 0, 0) 2.04834px -3.43574px 0, rgb(0, 0, 0) 2.83468px -2.82216px 0, rgb(0, 0, 0) 3.44477px -2.03312px 0, rgb(0, 0, 0) 3.84068px -1.11766px 0, rgb(0, 0, 0) 3.9978px -0.132717px 0

  +md-block
    font-size: 5rem

  +sm-block
    font-size: 4rem
    line-height: 3rem

  +xs-block
    font-size: 2rem
    margin-bottom: 15px

.info__title-img
  position: absolute
  width: 153px
  left: -70px
  z-index: -1

  +md-block
    width: 120px
    left: -50px
    top: 15px

  +sm-block
    width: 90px
    top: -15px
    left: -33px

  +xs-block
    width: 60px
    top: -5px
    left: -25px

.info__row
  display: flex
  flex-wrap: wrap
  align-items: center

.info__icon
  width: 280px
  margin-right: 30px

  +md-block
    width: 20%

  +xs-block
    display: none

.info__content
  width: calc(100% - 310px)
  font-size: 1.875rem
  line-height: 2.3125rem
  font-weight: 500
  font-style: italic
  text-align: justify

  +md-block
    width: calc(80% - 30px)
    font-size: 1.5rem
    line-height: 2.1rem

  +sm-block
    font-size: 1.2rem
    line-height: 1.8rem

  +xs-block
    font-size: 1rem
    width: 100%
    line-height: 1.5rem
</style>
