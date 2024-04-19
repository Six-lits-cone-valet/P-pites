<script setup>
const appState = useAppState();

function handleClick() {
    appState.value.showMenu = !appState.value.showMenu;
    appState.value.showConnectionForm = false;
}
</script>

<template>
    <li>
        <NuxtLink to="/" class="flex column alignCenter" @click="handleClick">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <!-- Pizza slice (triangle) -->
                <polygon points="25,5 45,45 5,45" fill="orange" />

                <!-- Star cutout in pizza slice -->
                <polygon points="25,15 30,30 45,30 35,40 40,55 25,45 10,55 15,40 5,30 20,30" fill="white" />

                <!-- Pizza toppings (circles) -->
                <circle cx="20" cy="35" r="2" fill="red" />
                <circle cx="30" cy="35" r="2" fill="red" />
                <circle cx="25" cy="25" r="2" fill="red" />
            </svg>

            <span class="anton-regular">
                Pépites
            </span>
        </NuxtLink>
    </li>
</template>

<style scoped>

svg {
    /* dimensions temporaires, à revoir */
    width: 42px;
    height: 42px;
}
</style>