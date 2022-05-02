<script setup lang="ts">
  import HomeCard from '../components/HomeCard.vue'
  import BlogPost from '../components/BlogPost.vue'
  import logo from '@/assets/logo.svg'
</script>

<template>
  <main class="flex justify-center">
    <HomeCard :imgsrc="logo">
      <h1>Test</h1>
      <p>Some more Content</p>
    </HomeCard>
    <BlogPost />
  </main>
</template>
