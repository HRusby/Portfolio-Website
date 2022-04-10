<script setup lang="ts">
  import HomeCard from '../components/HomeCard.vue'
  import logo from '@/assets/logo.svg'
</script>

<template>
  <main class="flex">
    <HomeCard :imgsrc="logo">
      <h1>Test</h1>
      <p>Some more Content</p>
    </HomeCard>
  </main>
</template>
