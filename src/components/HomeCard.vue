<script setup lang="ts">
 defineProps({
   imgsrc: String,
 }) 
</script>

<style scoped>
</style>

<template>
  <div class="w-2/3 self-center grid place-items-center py-5 bg-highlight">
    <img :src="imgsrc" height="25" width="25"/>
    <slot />
  </div>
</template>
