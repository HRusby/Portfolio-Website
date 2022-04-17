<script setup lang="ts">
  import BlogCard from '../components/BlogCard.vue'

  const BlogPosts = import.meta.glob('../../public/MarkdownFiles/*.md')
  let postNames:String[] = []
  for (const path in BlogPosts) {
    postNames.push(BlogPosts[path].name)
  }
</script>


<template>
  <div class="grid grid-cols-5 gap-4 w-4/5 mx-auto">
    <BlogCard v-for="post in postNames" :title="post" />
  </div>
</template>
