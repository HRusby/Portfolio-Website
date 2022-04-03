<style>
  html {
    background-color: #0D1117; /* Github Dark Bg */
    color: white;
    height: 4vh;
  }
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

