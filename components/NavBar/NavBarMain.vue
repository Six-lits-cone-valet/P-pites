<script setup>
let currentUser = ref({});

</script>

<template>
    <nav class="">
        <ul class="h100 flex justifyBetween alignCenter">
            
            <NavBarLogo />

            <NavBarLinks />

            <NavBarLoginButton :currentUser="currentUser" />
        </ul>
    </nav>
</template>

<style scoped>
nav {
    height: 100px;
    font-style: italic;
    font-weight: 600;
}
ul {
    padding: 10px;
}
</style>
