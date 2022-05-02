<script setup lang="ts"></script>
<style>
  .navBarRouterLink:hover {
    font-weight: 700;
  }
</style>
<template>
  <header class="sticky top-0 w-screen justify-between px-4 py-4 bg-highlight inline-block shadow-xl">
    <RouterLink to="/" class="text-2xl font-medium float-left">
      <h3 style="display:inline">Harry<span style="color:red">.</span>Rusby</h3>
    </RouterLink>
    <nav class="space-x-8 inline-block float-right">
      <RouterLink class="navBarRouterLink" to="/">Home</RouterLink>
      <RouterLink class="navBarRouterLink" to="/about">About</RouterLink>
      <RouterLink class="navBarRouterLink" to="/blog">Blog</RouterLink>
    </nav>
  </header>
</template>
