<template>
  <q-page class="q-pa-lg row items-center justify-center page_test page_background_texture">
    <div class="test">
      <div class="test__image" v-if="correctOption && correctOptionImage">
        <img class="test__image-img" :src="correctOptionImage" :alt="correctOption.caption" />
      </div>
      <div class="test__options">
        <div class="test__col" v-for="option in options">
          <div class="test__option" :class="{ test__option_active: option.isSelect }" @click="selectOption(option)">
            {{ option.caption }}
          </div>
        </div>
      </div>
    </div>
    <AppSuccessfulModal v-model="showSuccessModal" />
    <AppFailureModal v-model="showFailureModal" />
    <BaseCollapse class="map__control page__collapse" v-model="showRules" caption="Правила">
      Определите тип станции по фото
    </BaseCollapse>
    <AppStatBar class="map__control" />
    <PagePagination />
    <GoHomeButton>На главную</GoHomeButton>
  </q-page>
</template>

<script lang="ts" setup>
import { computed, onUnmounted, ref, watch } from 'vue'
import { cloneDeep, sample, shuffle, take, find, minBy, set } from 'lodash'
import { useStatStore } from 'stores/statStore'
import AppFailureModal from 'components/AppFailureModal.vue'
import AppSuccessfulModal from 'components/AppSuccessfulModal.vue'
import BaseCollapse from 'components/BaseCollapse.vue'
import PagePagination from 'components/PagePagination.vue'
import AppStatBar from 'components/AppStatBar.vue'
import GoHomeButton from 'components/GoHomeButton.vue'

interface IOption {
  caption: string
  images: { src: string; usedCount: number }[]
  isSelect: boolean
  isCorrect: boolean
}

const statStore = useStatStore()

const stations: IOption[] = [
  {
    caption: 'ТЭЦ',
    images: [
      { src: './images/stations/thermal/1.jpg', usedCount: 0 },
      { src: './images/stations/thermal/2.jpg', usedCount: 0 },
      { src: './images/stations/thermal/3.jpg', usedCount: 0 },
      { src: './images/stations/thermal/4.jpg', usedCount: 0 },
    ],
    isSelect: false,
    isCorrect: false,
  },
  {
    caption: 'ГЭС',
    images: [
      { src: './images/stations/hydro-power/1.jpg', usedCount: 0 },
      { src: './images/stations/hydro-power/2.jpg', usedCount: 0 },
      { src: './images/stations/hydro-power/3.jfif', usedCount: 0 },
      { src: './images/stations/hydro-power/4.jpg', usedCount: 0 },
    ],
    isSelect: false,
    isCorrect: false,
  },
  {
    caption: 'ВЭС',
    images: [
      { src: './images/stations/wind/1.jpg', usedCount: 0 },
      { src: './images/stations/wind/2.jpg', usedCount: 0 },
      { src: './images/stations/wind/3.jpg', usedCount: 0 },
      { src: './images/stations/wind/4.jpg', usedCount: 0 },
    ],
    isSelect: false,
    isCorrect: false,
  },
  {
    caption: 'АЭС',
    images: [
      { src: './images/stations/nuclear/1.jpg', usedCount: 0 },
      { src: './images/stations/nuclear/2.jpg', usedCount: 0 },
      { src: './images/stations/nuclear/3.jpg', usedCount: 0 },
      { src: './images/stations/nuclear/4.jpg', usedCount: 0 },
    ],
    isSelect: false,
    isCorrect: false,
  },
  {
    caption: 'СЭС',
    images: [
      { src: './images/stations/solar/1.jpg', usedCount: 0 },
      { src: './images/stations/solar/2.jpg', usedCount: 0 },
      { src: './images/stations/solar/3.jpg', usedCount: 0 },
      { src: './images/stations/solar/4.jpg', usedCount: 0 },
    ],
    isSelect: false,
    isCorrect: false,
  },
]

const correctOptionImage = ref<string>()
const options = ref<IOption[]>(getOptions())
const showSuccessModal = ref<boolean>(false)
const showFailureModal = ref<boolean>(false)
const showRules = ref<boolean>(true)

const correctOption = computed<IOption | undefined>(() => find(options.value, 'isCorrect'))
const selectedOption = computed<IOption | undefined>(() => find(options.value, 'isSelect'))

function getOptions(): IOption[] {
  /** Выбираем 4 случайные типы станции */
  const randOptions: IOption[] = take(shuffle(correctOptionImage.value ? options.value : cloneDeep(stations)), 4)
  /** Выбираем случайный тип станции из массива выше, который помечаем правильным */
  const randOption: IOption = sample(randOptions)!

  /** Сбрасываем значения */
  randOptions.forEach((option) => {
    option.isCorrect = false
    option.isSelect = false
  })

  /** Выбираем изображение */
  const image = <{ src: string; usedCount: number }>minBy(randOption.images, 'usedCount')
  correctOptionImage.value = image.src

  /** Устанавливаем счетчики */
  image.usedCount++
  randOption.isCorrect = true

  return randOptions
}

function selectOption(option: IOption): void {
  options.value.forEach((optionItem) => {
    if (optionItem !== option) optionItem.isSelect = false
  })

  option.isSelect = !option.isSelect
}

onUnmounted(() => {
  statStore.correctCount = 0
  statStore.errorCount = 0
})

watch(selectedOption, () => {
  if (selectedOption.value) {
    const showModal = selectedOption.value === correctOption.value ? showSuccessModal : showFailureModal
    showModal.value = true

    /** Подсчёт правильных и неправильных ответов */
    if (selectedOption.value === correctOption.value) {
      statStore.correctCount++
    } else {
      statStore.errorCount++
    }

    setTimeout(() => {
      showModal.value = false
      options.value = getOptions()
    }, 1500)
  }
})
</script>

<style lang="sass" scoped>
@import src/css/mixins

.test__image
  text-align: center
  margin-bottom: 30px

.test__image-img
  max-width: 588px

  +xs-block
    max-width: 100%

.test__options
  display: flex
  flex-wrap: wrap

.test__col
  width: 50%

.test__option
  background: #D9D9D9
  border-radius: 10px
  font-size: 1.5rem
  padding: 13px 16px
  width: 306px
  margin: 0 auto 20px auto
  cursor: pointer
  text-align: center

  +sm-block
    width: 90%

  +xs-block
    font-size: 1.2rem
    padding: 9px 12px

.test__option_active
  outline: 3px solid #000
</style>
