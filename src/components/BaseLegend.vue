<template>
  <div class="legend">
    <BaseLegendCategory v-for="category in legend" :category="category" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { Legend } from 'src/types'
import BaseLegendCategory from 'components/BaseLegendCategory.vue'

const legend = ref<Legend>([
  {
    name: 'Станции',
    items: [
      { color: '#00eaff', caption: 'Гидроэлектростанция' },
      { color: '#8439b4', caption: 'Теплоэлектростанция' },
      { color: '#299f58', caption: 'Ветроэлектростанция' },
      { color: '#e74c3c', caption: 'Атомная электростанция' },
      { color: '#ffde00', caption: 'Солнечная электростанция' },
    ],
  },
  {
    name: 'Ресурсы',
    items: [
      { color: '#ffffff', caption: 'Дерево' },
      { color: '#ff00e7', caption: 'Торф' },
      { color: '#b4ff00', caption: 'Уголь' },
      { color: '#ff8e00', caption: 'Нефть' },
    ],
  },
])
</script>

<style lang="sass" scoped>
@import src/css/mixins

.legend
  background: #D9D9D9
  font-size: 1.25rem
  line-height: 1.5rem
  color: #2F2F2E
  padding: 11px 17px
  border-radius: 5px

  +sm-block
    font-size: 1.1rem
</style>
