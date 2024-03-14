<template>
    <nav>
        <ul class="flex justifyBetween alignCenter">
            <NavBarLogo />
            
            <NavBarLinks />

            <LoginButton :currentUser="currentUser" />
        </ul>
    </nav>
</template>

<script>
import LoginButton from '@/components/Login/LoginButton.vue'; 

export default {
  components: {
    LoginButton
  },
  data() {
    return {
      currentUser: null 
    }
  }
}
</script>

<style scoped>
ul {
    background-color: rgb(245, 245, 245);
    padding: 10px;
}
</style>