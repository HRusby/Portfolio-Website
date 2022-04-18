<style scoped></style>

<script lang="ts" setup>
import { marked } from "marked";
import DOMPurify from "dompurify";
import { computed, onBeforeMount, onMounted, reactive } from "vue";
defineProps({
  markdown: String,
});

const state: { md: string | null } = reactive({
  md: null,
});

async function markdownToHtml() {
  state.md = await fetch("./MarkdownFiles/test.md")
    .then((response) => response.text())
    .then((resp) => DOMPurify.sanitize(marked.parse(resp)))
    .then((resp) => (resp === null ? "" : resp));
}

onBeforeMount(() => {
  markdownToHtml();
});
</script>

<template>
  <div v-html="state.md" />
</template>
