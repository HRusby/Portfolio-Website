<script setup lang="ts">
  import BlogCard from "../components/BlogCard.vue";
  import {default as posts} from '../blogposts.vue';

  console.log(posts[0])
  const BlogPosts = import.meta.glob("../../public/MarkdownFiles/*.md");
  let postNames: string[] = [];
  for (const path in BlogPosts) {
    let name = BlogPosts[path].name;
    let postName = name.substring(name.indexOf("MarkdownFiles/") + 14);
    postNames.push(postName);
  }
</script>

<template>
  <div class="grid grid-cols-5 gap-4 w-4/5 mx-auto">
    <BlogCard v-for="post in postNames" :title="post" />
  </div>
</template>
