<script setup lang="ts">
import { RouterView } from 'vue-router'
import SharedHeader from "./components/SharedHeader.vue"
</script>

<template>
  <header>
    <SharedHeader />
  </header>

  <RouterView />
</template>

