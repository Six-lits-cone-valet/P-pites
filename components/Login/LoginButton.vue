<template>
    <button @click="currentUser ? deconnectUser() : $router.push('/connexion')">
      {{ currentUser ? 'Déconnexion' : 'Connexion' }}
    </button>
  </template>
  
  <script>
  export default {
    props: {
      currentUser: {
        type: Object, 
        default: null
      }
    },
    methods: {
      deconnectUser() {
        console.log("Déconnexion de l'utilisateur");
        this.currentUser = null;
      }
    }
  }
  </script>
  
  <style scoped>
  
  </style>
  