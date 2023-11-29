<script setup lang="ts">
const {signIn, signOut, status, lastRefreshedAt} = useAuth();

</script>
<template>
  <p>Auth Status: {{ status }}</p>
  <p>Last Refreshed: {{ lastRefreshedAt?.toLocaleString() }}</p>
  <button @click="signIn('github')">Sign In</button>
  <button @click="signOut()">Sign Out</button>
</template>
