import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useStatStore = defineStore('stat', () => {
  const correctCount = ref<number>(0)
  const errorCount = ref<number>(0)

  return { correctCount, errorCount }
})
