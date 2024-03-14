<template>
    <router-link :to="currentUser ? '/deconnexion' : '/connexion'">
      <button @click="currentUser ? deconnectUser() : null">
        {{ currentUser ? 'Déconnexion' : 'Connexion' }}
      </button>
    </router-link>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const props = {
    currentUser: {
      type: Object,
      default: null
    }
  };
  
  const deconnectUser = () => {
    console.log("Déconnexion de l'utilisateur");
    currentUser.value = null;
  };
  </script>
  
  <style scoped>
  </style>
  