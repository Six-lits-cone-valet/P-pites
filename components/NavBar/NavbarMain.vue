<script setup>
let currentUser = ref(null);


</script>

<template>
    <nav>
        <ul class="flex justifyBetween alignCenter">
            <NavBarLogo />

            <NavBarLinks />

            <LoginButton :currentUser="currentUser" />
        </ul>
    </nav>
</template>

<style scoped>
ul {
    background-color: rgb(245, 245, 245);
    padding: 10px;
}
</style>