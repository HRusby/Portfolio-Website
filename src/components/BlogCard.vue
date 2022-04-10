<style scoped>
  
</style>
<script setup lang="ts">
  defineProps({
    title: String,
    blurb: String
  })
</script>

<template>
  <div class="bg-slate-500 min-h-xl shadow-md shadow-gray-600">
    <h1 class="font-extrabold text-xl">{{title}}</h1>
    <p>{{blurb}}</p>
  </div>
</template>
