<script setup>
const appState = useAppState();

const props = defineProps({
  currentUser: Object
})

async function deconnectUser() {
  appState.value.userLoggedIn = false;
}

</script>

<template>
  <div class="button">
    <NuxtLink to="/connexion" v-if="!appState.userLoggedIn">
      se connecter
    </NuxtLink>

    <button @click="deconnectUser" v-else>
      déconnexion
    </button>
  </div>

</template>
  
  <style scoped>

  </style>
  