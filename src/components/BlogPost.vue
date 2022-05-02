<style scoped></style>

<script lang="ts" setup>
import { marked } from "marked";
import DOMPurify from "dompurify";
import { computed, onBeforeMount, onMounted, onUpdated, reactive } from "vue";
const props = defineProps({
  markdown: String,
  name: String
});

const state: { md: string | null } = reactive({
  md: null,
});

async function markdownToHtml() {
  state.md = await fetch("/MarkdownFiles/"+props.name+".md")
    .then((response) => response.text())
    .then((resp) => DOMPurify.sanitize(marked.parse(resp)))
    .then((resp) => (resp === null ? "" : resp))
    .then((resp) => state.md = resp)
}
onBeforeMount(() => {
  markdownToHtml();
  console.log(props.name)
});
</script>

<template>
  <div v-html="state.md" />
  <div>{{props.name}}</div>
</template>
