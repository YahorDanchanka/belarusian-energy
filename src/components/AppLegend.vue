<template>
  <BaseLegend :legend="legend" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { Legend } from 'src/types'
import BaseLegend from 'components/BaseLegend.vue'

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
