<script setup lang="ts">
const {signIn, signOut, status} = useAuth();

</script>
<template>
  <p>Auth Status: {{ status }}</p>
  <button @click="signIn('github')">Sign In</button>
  <button @click="signOut()">Sign Out</button>
</template>
