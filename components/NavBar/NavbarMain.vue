<template>
    <nav>
        <ul class="flex justifyBetween alignCenter">
            <NavBarLogo />
            
            <NavBarLinks />

            <LoginButton :currentUser="currentUser" />
        </ul>
    </nav>
</template>

<script setup>
import LoginButton from '@/components/Login/LoginButton.vue'; 
let currentUser = null;
</script>

<style scoped>
ul {
    background-color: rgb(245, 245, 245);
    padding: 10px;
}
</style>