<template>
  <nav class="nav">
    <router-link class="nav__link" v-for="menuItem in menu" :to="menuItem.to">{{ menuItem.caption }}</router-link>
  </nav>
</template>

<script lang="ts" setup>
import { Menu } from 'src/types'

defineProps<{ menu: Menu }>()
</script>

<style lang="sass" scoped>
@import src/css/mixins

.nav
  font-size: 2.5rem
  font-style: italic
  line-height: 3.0625rem
  font-weight: 500
  color: #D9D9D9
  text-shadow: rgb(0, 0, 0) 2px 0 0, rgb(0, 0, 0) 1.75517px 0.958851px 0, rgb(0, 0, 0) 1.0806px 1.68294px 0, rgb(0, 0, 0) 0.141474px 1.99499px 0, rgb(0, 0, 0) -0.832294px 1.81859px 0, rgb(0, 0, 0) -1.60229px 1.19694px 0, rgb(0, 0, 0) -1.97998px 0.28224px 0, rgb(0, 0, 0) -1.87291px -0.701566px 0, rgb(0, 0, 0) -1.30729px -1.5136px 0, rgb(0, 0, 0) -0.421592px -1.95506px 0, rgb(0, 0, 0) 0.567324px -1.91785px 0, rgb(0, 0, 0) 1.41734px -1.41108px 0, rgb(0, 0, 0) 1.92034px -0.558831px 0

  +xs-block
    font-size: 2rem

.nav__link
  margin-right: 45px
  text-decoration: none

  &:hover
    border-bottom: 3px solid

  +xs-block
    &:last-child
      margin-right: 0
</style>
