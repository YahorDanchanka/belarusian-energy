<template>
  <vue-final-modal
    classes="modal-container"
    content-class="modal-content"
    :modelValue="modelValue"
    :clickToClose="false"
    :escToClose="false"
    @update:modelValue="(newValue) => $emit('update:modelValue', newValue)"
  >
    <img class="modal__icon" src="~assets/images/icons/success.png" alt="Иконка галочки" />
    Правильно!
  </vue-final-modal>
</template>

<script lang="ts" setup>
import { VueFinalModal } from 'vue-final-modal'

defineEmits(['update:modelValue'])
defineProps<{ modelValue: boolean }>()
</script>

<style lang="sass" scoped>
:deep(.modal-container)
  display: flex
  justify-content: center
  align-items: center

:deep(.modal-content)
  display: flex
  flex-wrap: wrap
  align-items: center
  padding: 1rem
  border: 1px solid #e2e8f0
  border-radius: 0.25rem
  background: #fff
  font-size: 1.5rem

.modal__icon
  width: 40px
  margin-right: 15px
</style>
