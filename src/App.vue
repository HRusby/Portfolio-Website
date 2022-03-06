<script setup lang="ts">
  import { RouterView } from 'vue-router'
  import SharedHeader from "./components/SharedHeader.vue"
  import './assets/base.css'
</script>

<template>
  <header>
    <SharedHeader />
  </header>
  <RouterView />
</template>

