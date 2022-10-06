<template>
  <footer class="footer">
    <div class="footer__content">
      <slot />
    </div>
    <BaseSocial class="footer__social" :links="links" />
  </footer>
</template>

<script lang="ts" setup>
import { Social } from 'src/types'
import BaseSocial from 'components/BaseSocial.vue'

defineProps<{ links: Social }>()
</script>

<style lang="sass" scoped>
@import src/css/mixins

.footer
  display: flex
  flex-wrap: wrap
  align-items: center
  background: #1E1E1E
  color: white
  padding: 6px 21px

.footer__content
  font-size: 2.0625rem
  line-height: 2.5rem
  width: 65%
  margin-right: 15px

  +sm-block
    width: 100%
    margin-right: 0
    text-align: center
    font-size: 1.8rem

  +xs-block
    font-size: 1.2rem
    line-height: 2rem

.footer__social
  width: calc(35% - 15px)
  justify-content: flex-end

  +sm-block
    width: 100%
    justify-content: center
    margin: 15px 0
</style>
