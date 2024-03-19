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
    height: 60px;
}
ul {
    padding: 10px;
}
</style>
