<template>
  <div class="page__pagination pagination">
    <router-link
      class="pagination__item"
      exact-active-class="pagination__item_active"
      :to="{ name: 'find-the-station' }"
    >
      1
    </router-link>
    <div class="pagination__item-decor">
      <div class="pagination__item-decor__text">Определить станцию</div>
    </div>
    <router-link
      class="pagination__item"
      exact-active-class="pagination__item_active"
      :to="{ name: 'collect-belarus' }"
    >
      2
    </router-link>
    <div class="pagination__item-decor">
      <div class="pagination__item-decor__text">Сложить карту</div>
    </div>
    <router-link
      class="pagination__item"
      exact-active-class="pagination__item_active"
      :to="{ name: 'guess-the-station' }"
    >
      3
    </router-link>
    <div class="pagination__item-decor">
      <div class="pagination__item-decor__text">Угадать тип</div>
    </div>
  </div>
</template>

<style lang="sass" scoped>
@import src/css/mixins

.pagination__item:hover + .pagination__item-decor
  display: block

  +sm-block
    display: none

.pagination__item-decor
  position: absolute
  background: url(~assets/images/comment.svg) no-repeat center center / contain
  text-align: center
  padding: 40px
  right: 0
  display: none
  transform: translate(0, -50px)

.pagination__item-decor__text
  position: relative
  top: 20px
  font-size: 1.2rem

.pagination__item:last-of-type
  margin-bottom: 0
</style>
