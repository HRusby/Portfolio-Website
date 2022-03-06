<script setup lang="ts">
  import HomeCard from '../components/HomeCard.vue'
  import logo from '@/assets/logo.svg'
</script>

<template>
  <main>
    <HomeCard :imgsrc="logo">Me</HomeCard>
    <HomeCard :imgsrc="logo">Blog</HomeCard>
  </main>
</template>
