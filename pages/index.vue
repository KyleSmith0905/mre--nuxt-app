<script setup lang="ts">
const {data} = await useFetch('/api/user');
</script>
<template>
  <div :class="{'signed-in': data?.user}">
    <NuxtWelcome />
  </div>
</template>
