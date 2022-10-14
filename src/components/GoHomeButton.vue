<template>
  <router-link class="map__control map__control_button" :to="{ name: 'resources' }">
    <slot />
  </router-link>
</template>

<style lang="sass" scoped>
.map__control_button
  bottom: auto
  top: 15px
  right: 15px
</style>
