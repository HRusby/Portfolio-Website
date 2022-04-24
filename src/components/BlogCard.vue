<style scoped>
  
</style>
<script setup lang="ts">
  import type { PropType } from 'vue'
  import type { PostData } from '../blogposts'
  defineProps({
    post: { type: Object as PropType<PostData>, required: true },
  })
</script>

<template>
  <div class="bg-slate-500 min-h-xl shadow-md shadow-gray-600">
    <h1 class="font-extrabold text-xl">{{post.name}}</h1>
    <p>{{post.blurb}}</p>
  </div>
</template>
