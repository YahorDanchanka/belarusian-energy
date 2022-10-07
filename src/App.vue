<template>
  <router-view />
</template>

<script setup lang="ts">
import { stations } from 'src/content/stations'

console.log(stations.length)
</script>
