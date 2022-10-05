<template>
  <header class="header">
    <div class="header__logo">
      <img src="~assets/images/logo.png" alt="Логотип ГГАЭК" />
    </div>
    <BaseNav class="header__nav" :menu="menu" />
  </header>
</template>

<script lang="ts" setup>
import BaseNav from 'components/BaseNav.vue'
import { Menu } from 'src/types'

defineProps<{ menu: Menu }>()
</script>

<style lang="sass" scoped>
@import src/css/mixins

.header
  display: flex
  flex-wrap: wrap
  align-items: center
  justify-content: space-between
  border-bottom: 1px solid rgba(217, 217, 217, 0.68)

.header__logo
  width: 83px

  +xs-block
    width: 100%
    text-align: center

    img
      width: 83px

.header__nav
  +xs-block
    width: 100%
    text-align: center
</style>
