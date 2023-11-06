<script setup lang="ts">
const {data} = await useFetch('/api/user');
</script>
<template>
  <div :class="{'signed-in': data?.user}">
    <h1>This is a project to test the speed of Nuxt in various environments.</h1>
  </div>
</template>
