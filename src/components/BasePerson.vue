<template>
  <div class="person">
    <h2 class="person__name">{{ person.name }}</h2>
    <div class="person__position">{{ person.position }}</div>
    <div class="person__cols">
      <div class="person__image">
        <img class="person__image-img" :src="person.imageUrl" :alt="person.name" />
      </div>
      <p class="person__content" v-html="person.content"></p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { IPerson } from 'src/content/people'

defineProps<{ person: IPerson }>()
</script>

<style lang="sass" scoped>
@import src/css/mixins

.person
  display: flex
  flex-direction: column
  justify-content: center
  color: #D9D9D9
  font-size: 1.875rem
  line-height: 2.3125rem

  +sm-block
    font-size: 1.3rem
    line-height: 1.8rem

  +xs-block
    font-size: 0.9rem
    line-height: 1.3rem

.person__name
  text-align: center
  margin: 0
  font-size: 4.0625rem
  line-height: 4.9375rem
  text-shadow: rgb(0, 0, 0) 3px 0 0, rgb(0, 0, 0) 2.83487px 0.981584px 0, rgb(0, 0, 0) 2.35766px 1.85511px 0, rgb(0, 0, 0) 1.62091px 2.52441px 0, rgb(0, 0, 0) 0.705713px 2.91581px 0, rgb(0, 0, 0) -0.287171px 2.98622px 0, rgb(0, 0, 0) -1.24844px 2.72789px 0, rgb(0, 0, 0) -2.07227px 2.16926px 0, rgb(0, 0, 0) -2.66798px 1.37182px 0, rgb(0, 0, 0) -2.96998px 0.42336px 0, rgb(0, 0, 0) -2.94502px -0.571704px 0, rgb(0, 0, 0) -2.59586px -1.50383px 0, rgb(0, 0, 0) -1.96093px -2.27041px 0, rgb(0, 0, 0) -1.11013px -2.78704px 0, rgb(0, 0, 0) -0.137119px -2.99686px 0, rgb(0, 0, 0) 0.850987px -2.87677px 0, rgb(0, 0, 0) 1.74541px -2.43999px 0, rgb(0, 0, 0) 2.44769px -1.73459px 0, rgb(0, 0, 0) 2.88051px -0.838247px 0
  margin-bottom: 20px

  +sm-block
    font-size: 2.2rem
    line-height: 2.5rem

  +xs-block
    font-size: 1.3rem
    line-height: 2rem
    margin-bottom: 15px

.person__position
  margin-bottom: 20px

  +xs-block
    margin-bottom: 15px

.person__cols
  display: flex
  flex-wrap: wrap
  align-items: center

.person__image
  width: 300px
  margin-right: 15px

  +sm-block
    width: 40%
    margin: 0 auto

  +xs-block
    width: 60%

.person__content
  width: calc(100% - 315px)
  text-align: justify

  +sm-block
    width: 100%


.person__content
  font-weight: 500
  font-style: italic
</style>
