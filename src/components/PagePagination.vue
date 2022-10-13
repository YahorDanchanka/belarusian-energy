<template>
  <div class="page__pagination pagination">
    <router-link
      class="pagination__item"
      exact-active-class="pagination__item_active"
      :to="{ name: 'find-the-station' }"
    >
      1
    </router-link>
    <router-link
      class="pagination__item"
      exact-active-class="pagination__item_active"
      :to="{ name: 'collect-belarus' }"
    >
      2
    </router-link>
    <router-link
      class="pagination__item"
      exact-active-class="pagination__item_active"
      :to="{ name: 'guess-the-station' }"
    >
      3
    </router-link>
  </div>
</template>
