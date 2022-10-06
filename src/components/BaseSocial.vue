<template>
  <div class="social">
    <a class="social__link" target="_blank" v-for="link in links" :href="link.href">
      <img alt="Социальная сеть" :src="link.icon" />
    </a>
  </div>
</template>

<script lang="ts" setup>
import { Social } from 'src/types'

defineProps<{ links: Social }>()
</script>

<style lang="sass" scoped>
.social
  display: flex
  flex-wrap: wrap

.social__link
  width: 50px
  margin-right: 16px

  &:last-child
    margin-right: 0
</style>
