<script setup lang="ts">
 defineProps({
   imgsrc: String,
 }) 
</script>

<template>
  <div>
    <img :src="imgsrc" height="25" width="25"/>
    <slot />
  </div>
</template>
