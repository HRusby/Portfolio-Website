<style>
</style>
<script setup lang="ts">
  import { RouterView } from 'vue-router'
  import SharedHeader from "./components/SharedHeader.vue"
  import './assets/base.css'
</script>

<template>
  <SharedHeader />
  <RouterView />
</template>
