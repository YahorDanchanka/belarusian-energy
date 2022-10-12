<template>
  <q-page class="q-pa-lg row items-center justify-center">
    <div class="test">
      <div class="test__image" v-if="correctOption">
        <img class="test__image-img" :src="correctOption.image" :alt="correctOption.caption" />
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
  </q-page>
</template>

<script lang="ts" setup>
import { computed, ref, watch } from 'vue'
import { cloneDeep, sample, shuffle, some, take, find } from 'lodash'
import AppFailureModal from 'components/AppFailureModal.vue'
import AppSuccessfulModal from 'components/AppSuccessfulModal.vue'

interface IOption {
  caption: string
  image: string
  isSelect: boolean
  isCorrect: boolean
}

const stations = [
  { caption: 'ТЭЦ', image: '/images/stations/nuclear.png', isSelect: false, isCorrect: false },
  { caption: 'ГЭС', image: '/images/stations/nuclear.png', isSelect: false, isCorrect: false },
  { caption: 'ВЭС', image: '/images/stations/nuclear.png', isSelect: false, isCorrect: false },
  { caption: 'ГРЭС', image: '/images/stations/nuclear.png', isSelect: false, isCorrect: false },
  { caption: 'МТЭЦ', image: '/images/stations/nuclear.png', isSelect: false, isCorrect: false },
  { caption: 'АЭС', image: '/images/stations/nuclear.png', isSelect: false, isCorrect: false },
  { caption: 'СЭС', image: '/images/stations/nuclear.png', isSelect: false, isCorrect: false },
]

const options = ref<IOption[]>(getOptions())
const showSuccessModal = ref<boolean>(false)
const showFailureModal = ref<boolean>(false)

const correctOption = computed<IOption | undefined>(() => find(options.value, 'isCorrect'))
const selectedOption = computed<IOption | undefined>(() => find(options.value, 'isSelect'))

function getOptions(): IOption[] {
  /** Выбираем 4 случайные типы станции */
  const randOptions: IOption[] = take(shuffle(cloneDeep(stations)), 4)
  /** Выбираем случайный тип станции из массива выше, который помечаем правильным */
  const randOption: IOption = sample(randOptions)!

  randOption.isCorrect = true
  return randOptions
}

function selectOption(option: IOption): void {
  options.value.forEach((optionItem) => {
    if (optionItem !== option) optionItem.isSelect = false
  })

  option.isSelect = !option.isSelect
}

watch(selectedOption, () => {
  if (selectedOption.value) {
    const showModal = selectedOption.value === correctOption.value ? showSuccessModal : showFailureModal
    showModal.value = true

    setTimeout(() => {
      showModal.value = false
      options.value = getOptions()
    }, 2500)
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
