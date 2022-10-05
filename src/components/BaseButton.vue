<template>
  <router-link class="button" exactActiveClass="button_active" :to="to">
    <div class="button__image">
      <img :src="imageUrl" alt="Иконка" />
    </div>
    <div class="button__caption">
      <slot />
    </div>
  </router-link>
</template>

<script lang="ts" setup>
import { RouteLocationRaw } from 'vue-router'

defineProps<{ to: RouteLocationRaw; imageUrl: string }>()
</script>

<style lang="sass" scoped>
@import src/css/mixins

.button
  display: flex
  flex-wrap: wrap
  align-items: center
  text-align: center
  background: #D9D9D9
  border-radius: 10px
  text-decoration: none
  padding: 4px 16px
  color: #2F2F2E

.button_active
  background-color: #2F2F2E
  color: #D9D9D9

:deep(.button__image img)
  height: 70px

  +md-block
    height: 40px

  +xs-block
    height: 30px

.button__caption
  width: calc(100% - 70px)
  font-size: 2.5rem

  +md-block
    width: calc(100% - 40px)
    padding-left: 5px
    font-size: 1.8rem

  +xs-block
    font-size: 1.5rem
</style>
