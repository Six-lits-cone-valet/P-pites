<script setup>
const appState = useAppState();

function handleConnection() {
  appState.value.userLoggedIn = true;
}
</script>

<template>
    <div>
      <h1>Page de connexion</h1>

      <button @click="handleConnection">
        connexion
      </button>
    </div>
  </template>
  
  <style scoped>

  </style>
  