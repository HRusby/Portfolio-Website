<style scoped>
</style>

<script lang="ts" setup>
  import {marked} from 'marked';
  import DOMPurify from 'dompurify';
  import { computed, onBeforeMount, onMounted, reactive } from 'vue';
  defineProps({
    markdown: String,
  })

  const state = reactive({
    md: null,
  })
  
  async function markdownToHtml(){
    state.md= await fetch('./MarkdownFiles/test.md')
          .then(response => response.text())
          .then(resp => marked.parse(resp))
  } 

  onBeforeMount(() => { 
    markdownToHtml()
  })
</script>

<template>
  <div v-html="state.md"/>
    
</template>
