<template>
  <div class="collapse" :class="{ collapse_hidden: !modelValue }">
    <div class="collapse__header">
      {{ caption }}
    </div>
    <div class="collapse__content">
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
defineEmits(['update:modelValue'])
defineProps<{ modelValue: boolean; caption: string }>()
</script>

<style lang="sass" scoped>
.collapse
  background: rgba(217, 217, 217, 0.8)
  border-radius: 5px
  padding: 5px

.collapse_hidden .collapse__content
  display: none

.collapse__header
  display: flex
  flex-wrap: wrap
  align-items: center
  justify-content: space-between
  font-size: 1.875rem
  font-weight: 700
  line-height: 2.3125rem
  opacity: 1
  background-color: #D9D9D9
  border-radius: 8px
  padding: 8px 14px

.collapse__action-img
  width: 35px
  cursor: pointer

.collapse__content
  padding: 5px 10px 0 10px
</style>
