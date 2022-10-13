<template>
  <div class="stat-bar">
    <img src="/images/icons/success.png" alt="Успех" />
    {{ statStore.correctCount }}/{{ statStore.errorCount }}
    <img src="/images/icons/failure.png" alt="Успех" />
  </div>
</template>

<script lang="ts" setup>
import { useStatStore } from 'stores/statStore'

const statStore = useStatStore()
</script>

<style lang="sass" scoped>
@import src/css/mixins

.stat-bar
  display: flex
  flex-wrap: wrap
  align-items: center
  font-size: 2.5rem
  color: white
  position: absolute
  left: 50px
  top: 25%

  +xs-block
    left: 0
    width: 100%
    justify-content: center
    text-align: center
    font-size: 1.5rem

img
  width: 50px

  +xs-block
    width: 30px

  &:first-child
    margin-right: 15px

  &:last-child
    margin-left: 15px
</style>
